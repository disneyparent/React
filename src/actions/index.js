
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
// export const requestError= () => dispatch => {
//     return 
// }


// USER-RELATED ACTIONS
// export const getUser = () => dispatch => {
// 	return axios.get(`https://obscure-scrubland-65975.herokuapp.com/api/users`)
// 	.then(response => {
// 		console.log(response.data)
// 		dispatch({ type: 'GET_USER_WIN', payload: response.data})})
// 	.catch(error => dispatch({ type: 'GET_USER_LOSE', payload: error}))
// }

// export const addUser = newUser => dispatch => {
// 	return axiosWithAuth()
//	.post(`https://obscure-scrubland-65975.herokuapp.com/api/users`, newUser)
// 	.then(response => {
// 		console.log(response.data)
// 		dispatch({ type: 'ADD_USER_WIN', payload: response.data})})
// 	.catch(error => dispatch({ type: 'ADD_USER_LOSE', payload: error})
// 	)
// }

// export const deleteUser = (id) => dispatch => {
// 	 axiosWithAuth()
//	.delete(`https://obscure-scrubland-65975.herokuapp.com/api/users/${id}`)
// 	.then(response =>  {
// 		console.log(response.data)
// 		dispatch({ type: 'DELETE_USER_WIN', payload: response.data})})
// 	.catch(error => dispatch({ type: 'DELETE_USER_LOSE', payload: error})
// 	)
// }

//BUGGY ACTIONS
// export const getBuggy = () => dispatch => {
//     axios.get('https://obscure-scrubland-65975.herokuapp.com/api/buggies')
//     .then(response => {
//         console.log(response.data)
//         dispatch({ type: 'GET_BUGGY_WIN', payload: response.data})})
//         .catch(error => dispatch({ type: 'GET_BUGGY_LOSE', payload: error}))
// }

export const addBuggy = newBuggy => dispatch => {
	return axiosWithAuth()
	.post(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/`, newBuggy)
    .then(response => {
		console.log(response.data)
        dispatch({ type: 'ADD_BUGGY_WIN', payload: response.data})})
    .catch(error => dispatch({ type: 'ADD_BUGGY_LOSE', payload: error}))
}

export const editBuggy = (buggy, updatedBuggy) => dispatch => {
	return axiosWithAuth()
	.put(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${buggy.id}`, updatedBuggy)
	.then( response => {
		console.log(response.data)
		dispatch({ type: 'EDIT_BUGGY_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'EDIT_BUGGY_LOSE', payload: error}))
} 

export const deleteBuggy = buggy => dispatch => {
	axiosWithAuth()
	.delete(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${buggy.id}`)
	.then(response => {
		console.log(response.data)
		dispatch({ type: 'DELETE_BUGGY_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'DELETE_BUGGY_LOSE', payload: error})
	)
}
