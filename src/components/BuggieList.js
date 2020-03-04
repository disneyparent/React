import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';      

function BuggieList() {
    const[buggies, setBuggies] = useState([]);
    useEffect(() =>{
        axiosWithAuth().get('https://obscure-scrubland-65975.herokuapp.com/api/buggies')
            .then((response) =>{
                console.log(response)    
                setBuggies(response.data)
        })
    }, []);

    const ifCheck = (item) =>{
        if(item === 1){
            return "Yes"
        }

        else{
            return "No"
        }
    }

    const sizeCheck = (item) =>{
        if(item === 1){
            return "Double"
        }

        else{
            return "Single"
        }
    }

    const ifLocation = (item) =>{
        if(item === "jungleCruise"){
            return "Jungle Cruise"
        }

        else if(item === "bigThunder"){
            return "Big Thunder"
        }
        
        else if(item === "splashMountain"){
            return "Splash Mountain"
        }
        
        else if(item === "smugglersRun"){
            return "Smuggler's Run"
        }
        
        else if(item === "minniesHouse"){
            return "Minnie's House"
        }
        
        else if(item === "smallWorld"){
            return "It's a Small World"
        }
        
        else if(item === "peterPansFlight"){
            return "Peter Pan's Flight"
        }
        
        else if(item === "spaceMountain"){
            return "Space Mountain"
        }

        else{
            return "Test"
        }
    }

    return (
        <div>
            {buggies.map(buggy =>{
                const {id, available, is_double, location} = buggy
                return(
                    <div key={id}>
                        <div className="available">
                            <h3>Available: {ifCheck(available)}</h3>
                        </div>
                        <div className="double">
                            <h3>Size: {sizeCheck(is_double)}</h3>
                        </div>
                        <div>
                            <h3>Location: {ifLocation(location)}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BuggieList
