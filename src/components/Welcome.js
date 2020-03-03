
import React from 'react';
import { deleteUser, addBuggy, getBuggy } from '../actions';


export const Welcome = () => {

    const [sharing, setSharing] = useState(false);
    const [borrowing, setBorrowing] = useState(false);
    const [buggyToAdd, setBuggyToAdd] = useState(initialColor);
    const [buggyToTake, setBuggyToTake] = useState();

    
//////for users without buggies
function borrowBuggy(){
    setBorrowing(true); //open borrow form, submit
    getBuggy(); //show available buggies based on size
}

function selectBuggy() {
    setBuggyToTake(buggy); // chosen buggy set to state
    setBuggyToTaken(buggyToTake); // post buggy and use id to taken-buggies
}

//////for users with buggies
function shareBuggy(){
    setSharing(true); //open sharing form, submit
    setBuggyToAdd(newBuggy); //set new buggy to state
    addBuggy(buggyToAdd); // post new buggy to buggies
}

function deleteBuggy(){
    deleteBuggy(); // report buggy out of commission
}

//////for all users
function deleteMe(){
    deleteUser();
}

    return(
        <div className='card'>
            <h3>{user.name}</h3>
            <button onClick={borrowBuggy}>I need to borrow a stroller.</button>
                { borrowing && ( 
                <form className='hiddenForm'>
                    <input type='checkbox'>single</input>
                    <input type='checkbox'>double</input>
                    <button onCLick={borrowBuggy}>Borrow</button>
                </form>
                )}
            <button onClick={shareBuggy}>I want to leave my stroller.</button>
                { sharing && (
                    <form className='hiddenForm'>
                        <input type='checkbox'>single</input>
                        <input type='checkbox'>double</input>
                        <button onClick={shareBuggy}>Share</button>
                    </form>
                )}
            <button onClick={deleteBuggy}>De-commission borken buggy</button>    
            <button onClick={deleteMe}>Delete My Account</button>
        </div>
    )
}
