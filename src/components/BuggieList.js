import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
        

function BuggieList() {
    const[buggies, setBuggies] = useState([]);
    useEffect(() =>{
        axiosWithAuth().get('https://obscure-scrubland-65975.herokuapp.com/api/buggies')
            .then((response) =>{
                console.log(response)    
        })
    }, []);

    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default BuggieList
