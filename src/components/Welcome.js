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

const Welcome = () => {

 //KH //if using hidden forms instead of components:
    const [sharing, setSharing] = useState(false);
    const [borrowing, setBorrowing] = useState(false);

    const [buggyToAdd, setBuggyToAdd] = useState(initialState);
    const [buggyToTake, setBuggyToTake] = useState();

    
//KH //////for users without buggies
function borrowBuggy(){
    setBorrowing(true); //open borrow form
}

function selectBuggy(buggy) {
    setBuggyToTake(buggy); // chosen buggy set to state
    editBuggy(buggyToTake); // post buggy and use id to taken-buggies
}



//KH //////for users with buggies
function shareBuggy(){
    setSharing(true); //open sharing form
}

function releaseBuggy(buggy){
    setBuggyToAdd(buggy);
    addBuggy(buggyToAdd);
}

function deleteIt(){
    deleteBuggy();
}


//KH //////for all users
function deleteMe(){
    deleteUser();
}

//TK
const buggyBorrow = e =>{
    axios.get('')
    .then((response) =>{
        console.log(response)
    })
}

const [selectedOption, setSelectedOption] = useState({
    borrow: 'borrow-single-select',
    share: 'share-single-select'
})
//setSelectedOption(selectedOption)

    return(
        <div>
            <button onClick={borrowBuggy()}>I Need to Borrow a Stroller</button>
                { borrowing && (
                    <form>
                    
                        <input type="radio"
                            name="borrow"
                            value="borrow-single-select"
                            checked={selectedOption.borrow === "borrow-single-select"}
                            onChange={(e) => setSelectedOption({...selectedOption, [e.target.name]: e.target.value})}                    
                        />
                        
                        <label htmlFor="borrow-single">Single Cart</label>

                        <input type ="radio" 
                            name="borrow"
                            value="borrow-double-select"
                            checked={selectedOption.borrow === "borrow-double-select"}
                            onChange={(e) => setSelectedOption({...selectedOption, [e.target.name]: e.target.value})} 
                        />
                        
                        <label htmlFor="borrow-double">Double Cart</label>
                        
                        <div className="button-row">
                            <button name="borrow" onClick={e => buggyBorrow(e)}>Submit</button>
                            <button onClick={() => setAdding(false)}>cancel</button>
                        </div>

                    </form> 
                )}

        
            <button onClick={shareBuggy()}>I Want to Share My Stroller</button>
                { sharing && (
                    <form>
                        <input type="radio"
                            name="share"
                            value="share-single-select"
                            checked={selectedOption.share === "share-single-select"}
                            onChange={(e) => setSelectedOption({...selectedOption, [e.target.name]: e.target.value})} 
                        />
                        <label htmlFor="single">Single Cart</label>

                        <input type ="radio" 
                            name="share"
                            value="share-double-select"
                            checked={selectedOption.share === "share-double-select"}
                            onChange={(e) => setSelectedOption({...selectedOption, [e.target.name]: e.target.value})} 
                        />
                        <label htmlFor="share">Double Cart</label>
                        
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
                        
                        <div className="button-row">
                            <button onCLick={addBuggy()}>Submit</button>
                            <button onClick={() => setAdding(false)}>cancel</button>
                        </div>
                    </form>
                )}

                <div className="button-row">
                    <button onClick={() => deleteIt()}>Report Broken Buggy</button>
                    <button onClick={() => deleteMe()}>Delete Your Account</button>
            </div>
        </div>
    )
}

export default Welcome;