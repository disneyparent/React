import React, { useState, useEffect } from "react"
import axios from "axios"

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
            // submitLogin()
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

    return (
        // Create the form
        <form onSubmit={handleSubmit}>
            {/* Create the username */}
            <label htmlFor="username">Username</label>
            <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={user.username}
                onChange={e => handleChange(e)}
            />

            {/* Create the password */}
            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={e => handleChange(e)}
            />

            {/* Button is disabled if submitting is true, so user won't try clicking button over and over again */}
            <button onClick={e => submitLogin(e)}>Login</button>
            <button onClick={e => submitRegister(e)}>Sign Up</button>
        </form>
    )

}

export default DisneyLogin