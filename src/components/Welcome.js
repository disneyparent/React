import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { connect } from 'react-redux'; 
import { addBuggy } from '../actions';


const Welcome = (props) => {

    //KH check data
        useEffect(() =>{
            axiosWithAuth().get("https://obscure-scrubland-65975.herokuapp.com/api/buggies")
                .then((response) =>
                    console.log(response.data))
       }, []);



    //KH //if using hidden forms instead of components:
        const [ sharingOpen, setSharing ] = useState(false);
        const [ borrowingOpen, setBorrowing ] = useState(false);
    //KH //////for users without buggies
        function borrowOpen(){
            setBorrowing(true); //open borrow form
        }
    //KH //////for users with buggies
        function shareOpen(){
            setSharing(true); //open sharing form
        }


    const [ buggy, setBuggy] = useState({});

//     const handleChanges = event => {
//         setBuggy({ ...buggy, [event.target.name]: event.target.value });
//    }
    
    const shareBuggy = e => {
        e.preventDefault();
        props.addBuggy(buggy);
        // setBuggy({ is_double: buggy.is_double, is_available: buggy.is_available, location: buggy.location})
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

const divStyle = {
    margin: '0 auto', 
    backgroundColor: 'gold', 
    width: '20%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    borderRadius: '10px'
}

const buttonStyle = {
    width: '55%',
    borderRadius: '10px',
    padding: '2%',
    margin: '2%'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const inButtonStyle = {
    width: '75%',
    borderRadius: '10px',
    padding: '15%',
    margin: '2%',
    textAlign: 'center',
    margin: '15%'
}

    
    return(
        <div style={divStyle}> 
        {/*/////BORROW STROLLER FORM////*/}             
            <button style={buttonStyle} onClick={() => borrowOpen()}>I Need to Borrow a Stroller</button> {/*show borrow form*/}
            { borrowingOpen && (
                <form style={formStyle}>
               
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

                    <button style={inButtonStyle} name="borrow" onClick={(e) => buggyBorrow(e)}>Submit</button>
                    <button style={inButtonStyle} onClick={() => setBorrowing(false)}>Cancel</button>
                </form>
            )}
                
                
                
        {/*/////SHARE STROLLER FORM////*/}               
            <button style={buttonStyle} onClick={() => shareOpen()}>I Want to Share My Stroller</button> {/* show sharing form */}
            { sharingOpen && (    
                <form style={formStyle}>
                    <label>
                    <input type="radio"
                        name="share"
                        value="share-single-select"
                        checked={shareSelectedOption.share === "share-single-select"}
                        onChange={(e) => {
                            setShareSelectedOption({ ...shareSelectedOption, [e.target.name]: e.target.value});
                            setBuggy({...buggy, is_double: 0 })
                        }}
                    />
                    Single Cart</label>

                    <label>
                    <input type="radio"
                        name="share"
                        value="share-double-select"
                        checked={shareSelectedOption.share === "share-double-select"}
                        onChange={(e) => {
                            setShareSelectedOption({ ...shareSelectedOption, [e.target.name]: e.target.value });
                            setBuggy({...buggy, is_double: 1})
                        }}
                    />
                    Double Cart</label>


                    <select value={buggy.location} onChange={e => setBuggy({...buggy, location: e.target.value})}>
                        <option>Choose A Location:</option>
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
                        <button style={inButtonStyle} onClick={() => shareBuggy(buggy)}>Submit</button>
                        <button style={inButtonStyle} onClick={() => setSharing(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
	return {
        buggy: state.buggy
	};
};

export default connect(
	mapStateToProps,
	{ addBuggy }
)(Welcome);