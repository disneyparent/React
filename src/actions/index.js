
import axios from 'axios';

export const requestError= () => dispatch => {
    return 
}





// USER ACTIONS
export const getUser = () => dispatch => {
	axios.get(`https://obscure-scrubland-65975.herokuapp.com/api/users`)
	.then(response => {
		console.log(response.data)
		dispatch({ type: 'GET_USER_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'GET_USER_LOSE', payload: error}))
}

export const addUser = newUser => dispatch => {

	return axios.post(`https://obscure-scrubland-65975.herokuapp.com/api/users`, newUser)
	.then(response =>
		dispatch({ type: 'ADD_USER', type: 'GET_USER_WIN', payload: response.data}))
	.catch(error => console.log('add user fail', error)
	)
}

export const deleteUser = (id) => dispatch => {
	axiosWithAuth.delete(`https://obscure-scrubland-65975.herokuapp.com/api/users/${id}`)
	.then(response => 
		dispatch({ type: 'DELETE_USER', payload: response.data}))
	.catch(error => console.log('delete user fail', error)
	)
}

//BUGGY ACTIONS
export const getBuggy = () => dispatch => {
    axios.get('https://obscure-scrubland-65975.herokuapp.com/api/buggies')
    .then(response => {
        console.log(response.data)
        dispatch({ type: 'GET_BUGGY_WIN', payload: response.data})})
        .catch(error => { console.log('get buggy fail', error)})
}

export const addBuggy = newBuggy => dispatch => {
    return axios.post(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/`, newBuggy)
    .then(response => {
        dispatch({ type: 'ADD_BUGGY', type: 'ADD_USER_WIN', payload: response.data})})
    .catch(error => console.log('add buggy fail', error))
}

export const editBuggy = buggy => dispatch => {
	return axios.put(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/{buggy.id}`)
	.then( response => {
		console.log(response.data)
		dispatch({ type: 'EDIT_BUGGY', payload: response.data})
	.catch(error => console.log('edit buggy fail', error))
	})
} 

export const deletebuggy = buggy => dispatch => {
	axios.delete(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${buggy.id}`)
	.then(response => 
		dispatch({ type: 'DELETE_BUGGY', payload: response.data}))
	.catch(error => console.log('delete buggy fail', error)
	)
}
