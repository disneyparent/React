
import axios from 'axios';

export const getUser = () => dispatch => {
	axios.get(``)
	.then(response => {
		console.log(response.data)
		dispatch({ type: 'GET_USER_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'GET_USER_LOSE', payload: error}))
}

export const getBuggy = () => dispatch => {
    axios.get('')
    .then(response => {
        console.log(response.data)
        dispatch({ type: 'GET_BUGGY_WIN', payload: response.data})})
        .catch(error => { console.log('no get buggy', error)})
}

export const fetchError= () => dispatch => {
    return
}

export const addUser = newUser => dispatch => {

	return axios.post(``, newUser)
	.then(response =>
		dispatch({ type: 'ADD_USER', type: 'GET_USER_WIN', payload: response.data}))
	.catch(error => console.log('no add user action', error)
	)
}

export const addBuggy = newBuggy => dispatch => {
    return axios.post(``, newBuggy)
    .then(response => {
        dispatch({ type: 'ADD_BUGGY', type: 'ADD_USER_WIN', payload: response.data})})
    .ccatch(error => console.log('no add buggy action', error))
}



export const deleteUser = (user) => dispatch => {
	
	axios.delete(`/${user.id}`)
	.then(response => 
		dispatch({ type: 'DELETE_USER', payload: response.data}))
	.catch(error => console.log('no delete user action', error)
	)
}