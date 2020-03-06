
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';


// USER-RELATED ACTIONS
export const getUser = (id) => dispatch => {
	return axiosWithAuth()
	.get(`https://obscure-scrubland-65975.herokuapp.com/api/login/${id}`)
	.then(response => {
		console.log('getUser response data', response.data)
		dispatch({ type: 'GET_USER_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'GET_USER_LOSE', payload: error}))
}
{
// export const addUser = newUser => dispatch => {

// 	return axiosWithAuth()
//	.post(`https://obscure-scrubland-65975.herokuapp.com/api/users`, newUser)

// 	.then(response => {
// 		console.log(response.data)
// 		dispatch({ type: 'ADD_USER_WIN', payload: response.data})})
// 	.catch(error => dispatch({ type: 'ADD_USER_LOSE', payload: error})

	// )


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
}

export const addBuggy = newBuggy => dispatch => {
	return axiosWithAuth()
	.post(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/`, newBuggy)
    .then(response => {
		dispatch({ type: 'ADD_BUGGY_WIN', payload: response.data})
		console.log('addBuggy response data', response.data)})
    .catch(error => dispatch({ type: 'ADD_BUGGY_LOSE', payload: error}))
}

export  const editBuggy = (bugid, data) => dispatch => {
	return axiosWithAuth()
	.put(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${bugid}`, data)
	.then( response => {
		dispatch({ type: 'EDIT_BUGGY_WIN', payload: response.data})
		console.log('editBuggy response.data', response.data)})
	.catch(error => dispatch({ type: 'EDIT_BUGGY_LOSE', payload: error}))
} 

export const takeBuggy = ( bugid, userid) => dispatch => {
	return axiosWithAuth()
	.post(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${bugid}/pickup`, userid)
	.then(response => {
		dispatch({ type: 'TAKE_BUGGY_WIN', payload: response.data})
		console.log('takeBuggy response.data', response.data)})
    .catch(error => dispatch({ type: 'TAKE_BUGGY_LOSE', payload: error}))
}

export const deleteBuggy = id => dispatch => {
	axiosWithAuth()
	.delete(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${id}`)
	.then(response => {
		console.log('deleteBuggy response data', response.data)
		dispatch({ type: 'DELETE_BUGGY_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'DELETE_BUGGY_LOSE', payload: error})
	)
}
