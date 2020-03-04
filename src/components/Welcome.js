import React, { useState } from 'react';
import axios from 'axios';
import { deleteUser, addBuggy, editBuggy, deleteBuggy } from '../actions';

const initialState = {
    buggy: {
        location: '',
        is_double: false,
        is_taken: false
    }
}

const Welcome = (props) => {

 //KH //if using hidden forms instead of components:
    const [sharing, setSharing] = useState(false);
    const [borrowing, setBorrowing] = useState(false);

    const [buggyToAdd, setBuggyToAdd] = useState(initialState);
    const [buggyToTake, setBuggyToTake] = useState(initialState);

    
//KH //////for users without buggies
function borrowBuggy(){
    setBorrowing(true); //open borrow form
}

// function selectBuggy(buggy) {
//     setBuggyToTake(buggy); // chosen buggy set to state
//     editBuggy(buggyToTake); // post buggy and use id to taken-buggies
//     deleteBuggy(buggy); // delete chosen buggy id from buggies
// }



//KH //////for users with buggies
function shareBuggy(){
    setSharing(true); //open sharing form
}


function releaseBuggy(buggy){
    setBuggyToAdd(buggy); //buggy object set to state
    addBuggy(buggyToAdd); //post new buggy to buggies
}



//KH //////for all users
function deleteMe(){
    deleteUser();
}

    const buggyBorrow = e =>{
        props.history.push('/buggielist')
    }

    const [borrowSelectedOption, setBorrowSelectedOption] = useState({
        borrow: 'borrow-single-select',
    })

    const [shareSelectedOption, setShareSelectedOption] = useState({
        share: 'share-single-select'
    })
    
    return(
        <div> <button onClick={() => borrowBuggy()}>I Need to Borrow a Stroller</button>
        { borrowing && (
            <form>
               
                <input type="radio"
                    name="borrow"
                    value="borrow-single-select"
                    checked={borrowSelectedOption.borrow === "borrow-single-select"}
                    onChange={(e) => setBorrowSelectedOption({ ...borrowSelectedOption, [e.target.name]: e.target.value })}
                />
                <label>Single Cart</label>

                <input type="radio"
                    name="borrow"
                    value="borrow-double-select"
                    checked={borrowSelectedOption.borrow === "borrow-double-select"}
                    onChange={(e) => setBorrowSelectedOption({ ...borrowSelectedOption, [e.target.name]: e.target.value })}
                />
                <label>Double Cart</label>

                <button name="borrow" onClick={e => buggyBorrow(e)}>Submit</button>
            </form>)}
        {sharing && (    
            <form>
                <button onClick={() => shareBuggy()}>I Want to Share My Stroller</button>
                <input type="radio"
                    name="share"
                    value="share-single-select"
                    checked={shareSelectedOption.share === "share-single-select"}
                    onChange={(e) => setShareSelectedOption({ ...shareSelectedOption, [e.target.name]: e.target.value })}
                />
                <label>Single Cart</label>

                <input type="radio"
                    name="share"
                    value="share-double-select"
                    checked={shareSelectedOption.share === "share-double-select"}
                    onChange={(e) => setShareSelectedOption({ ...shareSelectedOption, [e.target.name]: e.target.value })}
                />
                <label>Double Cart</label>

                <select>
                    <option>Chose a Location</option>
                    <option>Jungle Cruise</option>
                    <option>Big Thunder Mountain</option>
                    <option>Splash Mountain</option>
                    <option>Smuggler's Run</option>
                    <option>Minnie's House</option>
                    <option>It's a Small World</option>
                    <option>Peter Pan's Flight</option>
                    <option>Space Mountain</option>
                </select>

                <button>Submit</button>


                <div className="button-row">
                    <button onClick={() => releaseBuggy()}>Submit</button>
                    <button onClick={() => setSharing(false)}>Cancel</button>
                </div>
            </form>
            )}

                <div className="button-row">
                <button onClick={() => deleteMe()}>Delete Your Account</button>
            </div>


        </div>
    )
}

export default Welcome;