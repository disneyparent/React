import React, { useState } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { addBuggy } from '../actions';

const initialState = {
    
        location: '',
        is_double: false,
        is_taken: false
    
}

const Welcome = props => {

 //KH //if using hidden forms instead of components:
    const [sharing, setSharing] = useState(false);
    const [borrowing, setBorrowing] = useState(false);

    const [buggy, setBuggy] = useState(initialState);

    
//KH //////for users without buggies
function borrowBuggy(){
    setBorrowing(true); //open borrow form
}

//MOVED TO BUGGIELIST
// function selectBuggy(buggy) {
//     setBuggyToTake(buggy); // chosen buggy set to state
    // editBuggy(buggyToTake); // post buggy and use id to taken-buggies
    // deleteBuggy(buggy); // delete chosen buggy id from buggies
// }

//KH //////for users with buggies
function shareBuggy(){
    setSharing(true); //open sharing form
}

function handleSubmit(e){
    e.preventDefault();
    console.log(buggy)//buggy object set to state
    props.addBuggy(buggy); //post new buggy to buggies
}



//TK
const buggyBorrow = e =>{
    props.history.push('/buggielist')
}

//TK
const [borrowSelectedOption, setBorrowSelectedOption] = useState({
    borrow: 'borrow-single-select',
})
//USING DIFFERENT FUNCTIONS AND STATE FOR SHARE BUTTON
// const [shareSelectedOption, setShareSelectedOption] = useState({
//     share: 'share-single-select'
// })
//setSelectedOption(selectedOption)

    return(
        <div>
            <button onClick={() => borrowBuggy()}>I Need to Borrow a Stroller</button>
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

    
            <button onClick={() => shareBuggy()}>I Want to Share My Stroller</button>
            { sharing && (
                <form>
                    <label>
                        <input type="radio"
                            name="share"
                            value={buggy.is_double}
                            
                            onClick={() => {
                                setBuggy({...buggy, is_double: false});
                                console.log(buggy)
                            }}    
                        />
                        Single Cart
                    </label>
                    
                    <label>
                        <input type ="radio" 
                            name="share"
                            value={buggy.is_double}
                            
                            onClick={() => {
                                setBuggy({...buggy, is_double: true});
                                console.log(buggy)
                            }}   
                        />
                        Double Cart
                    </label>
                    
                    <select value={buggy.location} onChange={setBuggy({...buggy, })}>
                        <option>Choose a Location</option>
                        <option value="jungleCruise">Jungle Cruise</option>
                        <option value="bigThunder">Big Thunder Mountain</option>
                        <option value="splashMountain">Splash Mountain</option>
                        <option value="smugglersRun">Smuggler's Run</option>
                        <option value="minniesHouse">Minnie's House</option>
                        <option value="smallWorld">It's a Small World</option>
                        <option value="peterPansFlight">Peter Pan's Flight</option>
                        <option value="spaceMountain">Space Mountain</option>
                    </select>
                    
                    <div className="button-row">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={() => setSharing(false)}>Cancel</button>
                    </div>
                </form>
                )}

                {/* 
                <div className="button-row">
                    MOVED TO BUGGIELIST<button onClick={() => deleteIt()}>Report Broken Buggy</button>
                    NOT NEEDED<button onClick={() => deleteMe()}>Delete Your Account</button> */}
            {/* </div> */}
        </div>
    )
}

const mapStateToProps = state => {
	return {
        buggies: state.buggies,
        buggy: state.buggy
	};
};

export default connect(
	mapStateToProps,
	{ addBuggy }
)(Welcome);