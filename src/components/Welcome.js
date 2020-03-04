
import React, { useState } from 'react';
import axios from 'axios';
//import { deleteUser, addBuggy, getBuggy } from '../actions';


const Welcome = (props) => {

    // const [sharing, setSharing] = useState(false);
    // const [borrowing, setBorrowing] = useState(false);
    // const [buggyToAdd, setBuggyToAdd] = useState(initialColor);
    // const [buggyToTake, setBuggyToTake] = useState();

    
//////for users without buggies
// function borrowBuggy(){
//     setBorrowing(true); //open borrow form, submit
//     getBuggy(); //show available buggies based on size
// }

// function selectBuggy() {
//     setBuggyToTake(buggy); // chosen buggy set to state
//     setBuggyToTaken(buggyToTake); // post buggy and use id to taken-buggies
// }

// //////for users with buggies
// function shareBuggy(){
//     setSharing(true); //open sharing form, submit
//     setBuggyToAdd(newBuggy); //set new buggy to state
//     addBuggy(buggyToAdd); // post new buggy to buggies
// }

// function deleteBuggy(){
//     deleteBuggy(); // report buggy out of commission
// }

// //////for all users
// function deleteMe(){
//     deleteUser();
// }

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
        <div>
            <form>
                <h2>I Need to Borrow a Stroller</h2>
                <input type="radio"
                    name="borrow"
                    value="borrow-single-select"
                    checked={borrowSelectedOption.borrow === "borrow-single-select"}
                    onChange={(e) => setBorrowSelectedOption({...borrowSelectedOption, [e.target.name]: e.target.value})}                    
                />
                <label>Single Cart</label>

                <input type ="radio" 
                    name="borrow"
                    value="borrow-double-select"
                    checked={borrowSelectedOption.borrow === "borrow-double-select"}
                    onChange={(e) => setBorrowSelectedOption({...borrowSelectedOption, [e.target.name]: e.target.value})} 
                />
                <label>Double Cart</label>

                <button name="borrow" onClick={e => buggyBorrow(e)}>Submit</button>
            </form>

            <form>
                <h2>I Want to Share My Stroller</h2>
                <input type="radio"
                    name="share"
                    value="share-single-select"
                    checked={shareSelectedOption.share === "share-single-select"}
                    onChange={(e) => setShareSelectedOption({...shareSelectedOption, [e.target.name]: e.target.value})} 
                />
                <label>Single Cart</label>

                <input type ="radio" 
                    name="share"
                    value="share-double-select"
                    checked={shareSelectedOption.share === "share-double-select"}
                    onChange={(e) => setShareSelectedOption({...shareSelectedOption, [e.target.name]: e.target.value})} 
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
            </form>

        </div>
    )
}

export default Welcome