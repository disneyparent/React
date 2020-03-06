import React, { useState, useEffect } from "react";
import axios from "axios";
import disney_castle from "../imgs/disney_castle.png";

function DisneyLogin(props) {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    // Checks element, grabs information like name and checks if any of the values are different then updates
    const handleChange = e =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    //Sign Up
    const submitRegister = e =>{
        axios.post('https://obscure-scrubland-65975.herokuapp.com/api/auth/register', user)
        .then((response) => {
            console.log('Register', response)
            submitLogin()
        })
        .catch(error => {
            console.log('Errors found: ', error)
        })
    }

    //Login
    const submitLogin = e =>{
        axios.post('https://obscure-scrubland-65975.herokuapp.com/api/auth/login', user)
        .then((response) => {
            console.log('submitLogin response', {response})
            localStorage.setItem('token', response.data.token)
            props.history.push('/welcome')
        })
        .catch(error => {
            console.log('submitLogin errors: ', error)
        })
    }

    const formStyle = {
        margin: '0 auto', 
        backgroundColor: 'gold', 
        //width: '20%', 
        padding: '1%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        borderRadius: '10px',
    }

    const buttonStyle = {
        width: '55%',
        borderRadius: '10px',
        padding: '2%',
        margin: '2%'

    }

    const imgStyle= {
        display: 'grid',
        minHeight: '100vh',
        alignItems: 'center',
        backgroundImage: `url(${disney_castle})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%'
    }

    return (
        // Create the form
        <div style={imgStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                {/* Create the username */}
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={e => handleChange(e)}
                    required
                />

                {/* Create the password */}
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={e => handleChange(e)}
                    required
                />

                {/* Button is disabled if submitting is true, so user won't try clicking button over and over again */}
                <button style={buttonStyle} onClick={e => submitLogin(e)}>Login</button>
                <button style={buttonStyle} onClick={e => submitRegister(e)}>Sign Up</button>
            </form>
        </div>
        

    )

}

export default DisneyLogin