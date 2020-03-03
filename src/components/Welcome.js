
import React from 'react';
//import { deleteUser, addBuggy, getBuggy } from '../actions';


const Welcome = () => {

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

    return(
        <div>
            <form>
                <h2>I Need to Borrow a Stroller</h2>
                <input type="checkbox"
                    name="single"
                    checked="true"
                    //value={}
                    //onChange={e => }
                />
                <label for="single">Single Cart</label>

                <input type ="checkbox" 
                    name="double"
                    //value={}
                    //onChange={e => }
                />
                <label for="double">Double Cart</label>

                <button>Submit</button>
            </form>

            <form>
                <h2>I Want to Share My Stroller</h2>
                <input type="checkbox"
                    name="single"
                    checked="true"
                    //value={}
                    //onChange={e => }
                />
                <label for="single">Single Cart</label>

                <input type ="checkbox" 
                    name="double"
                    //value={}
                    //onChange={e => }
                />
                <label for="double">Double Cart</label>

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
