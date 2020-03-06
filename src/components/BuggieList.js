import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, editBuggy, deleteBuggy } from '../actions/index';
import axiosWithAuth from '../utils/axiosWithAuth';
        

function BuggieList(props) {

/////////////////////////////////////////////////////////////////////////////////////////////////
    const[buggies, setBuggies] = useState([]);
    const [ data, setData ] = useState({id: useParams(), available: false })
    const [ user , setUser ] = useState({ id: useParams()})

    const takeBuggy = (buggy) => {
        props.getUser(user);
        setData({...buggy, available: false});
        props.editBuggy(buggy.id, data)          
    }
///////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() =>{
        axiosWithAuth().get("https://obscure-scrubland-65975.herokuapp.com/api/buggies")
            .then((response) =>{
                console.log(response)
                setBuggies(response.data)    
        })
    }, []);

    
    const ifCheck = (item) =>{
        if(item === false){
            return "No"
        } else {
            return "Yes"
        }
    }

    const sizeCheck = (item) =>{
        if(item === true){
            return "Double"
        } else {
            return "Single"
        }
    }

    const ifLocation = (item) =>{
        if(item === "jungleCruise"){
            return "Jungle Cruise"
        } else if(item === "bigThunder"){
            return "Big Thunder"
        } else if(item === "splashMountain"){
            return "Splash Mountain"
        } else if(item === "smugglersRun"){
            return "Smuggler's Run"
        } else if(item === "minniesHouse"){
            return "Minnies House"
        } else if(item === "smallWorld"){
            return "It's A Small World"
        } else if(item === "peterPansFlight"){
            return "Peter Pan's Flight"
        } else if(item === "spaceMountain"){
            return "Space Mountain"
        } else{
            return "Test"
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <ul>
                {buggies.map(buggy =>{
                    // const {id, available, is_double, location} = buggy;
                    return(
                        <li key={buggy.id}>
                        
                            <h3>Available: {ifCheck(buggy.available)}</h3>  
                        
                            <h3>Size: {sizeCheck(buggy.is_double)}</h3>  
                    
                            <h3>Location: {ifLocation(buggy.location)}</h3>
                            
                            <button onClick={() => {takeBuggy(buggy.id); console.log(buggy)}}>Borrow</button>

                            <button onClick={() => props.deleteBuggy(buggy.id)}>Delete</button>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
	return {
        buggies: state.buggies,
	};
};

export default connect(
	mapStateToProps,
	{ getUser, editBuggy, deleteBuggy }
)(BuggieList);

