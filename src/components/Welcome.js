import React, { useState } from "react";
import { connect } from 'react-redux';
import { addBuggy } from '../actions/index';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    
        location: '',
        is_double: null,
        available: true
    
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

function handleChange(e){
    e.preventDefault();
    setBuggy({ [e.target.name]: e.target.value})
}

function handleSubmit(e){
    e.preventDefault();
    console.log(buggy)//buggy object set to state
    setBuggy({...buggy, available: true})
    props.addBuggy(buggy); //post new buggy to buggies
    
    axiosWithAuth()
    .get('https://obscure-scrubland-65975.herokuapp.com/api/buggies')
    .then(response => console.log(response.data))
    .catch(error => console.log('could not load list of owners', error))
}



const buggyBorrow = e =>{
    props.history.push('/buggielist')
}

const [borrowSelectedOption, setBorrowSelectedOption] = useState({
    borrow: 'borrow-single-select',
})

// const [shareSelectedOption, setShareSelectedOption] = useState({
//     share: 'share-single-select'
// })

    
    return(
        <div> 
        {/*/////BORROW STROLLER FORM////*/}             
            <button onClick={() => borrowBuggy()}>I Need to Borrow a Stroller</button> {/*show borrow form*/}
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

                    <button name="borrow" onClick={(e) => buggyBorrow(e)}>Submit</button>
                    <button onClick={() => setBorrowing(false)}>Cancel</button>
                </form>
            )}
                
                
                
        {/*/////SHARE STROLLER FORM////*/}               
            <button onClick={() => shareBuggy()}>I Want to Share My Stroller</button> {/* show sharing form */}
            { sharing && (
                <form>
                    <label>
                        <input type="radio"
                            name ="is_double"
                            value = 'false'
                            // checked={buggy.is_double === false}
                            onClick={() => {
                                setBuggy({...buggy, is_double: false});
                                console.log(buggy)
                            }}    
                        />
                        Single Cart
                    </label>
                    <label>
                        <input type ="radio" 
                            name="is_double"
                            value = 'true'
                            // checked={buggy.is_double === true}
                            onClick={() => {
                                setBuggy({...buggy, is_double: true});
                                console.log(buggy)
                            }}   
                        />
                        Double Cart
                    </label>
                    <label>Choose a Location</label>
                    <select id='locations' name='location' value={buggy.location} onChange={(e) => {handleChange(e); console.log(buggy)}}>
                        <option> - </option>
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