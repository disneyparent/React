// import { GET_SMURF_START, GET_SMURF_WIN, GET_SMURF_LOSE, ADD_SMURF, DELETE_SMURF } from "../actions";


export const initialState = {
    user:
        {},
    buggy:
        {},
    buggies: [],
    error: {},
    isLoading: false
};

export const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_USER_START':
            return{
                ...state,
                isLoading: true
            }

        case 'GET_USER_WIN':
            return{
                ...state,
                users: action.payload,
                isLoading: false
            }

        case 'GET_USER_LOSE':
            return{
                ...state,
                isLoading: false
            }	

        case 'ADD_USER':
            return {
                ...state,
                users: [ ...state.users, action.payload],
                isLoading: false
            }
        
        case 'GET_BUGGY_WIN':
            return{
                ...state,
                buggies: action.payload,
                isLoading: false
            }

        case 'GET_BUGGY_LOSE':
            return{
                ...state,
                isLoading: false
            }	
        
        case 'ADD_BUGGY':
                return {
                    ...state,
                    buggies: [ ...state.buggies, action.payload],
                    isLoading: false
                }

        case 'DELETE_BUGGY':
            return {
                ...state,
                buggies: [
                    ...state.buggies.filter( buggy =>
                    buggy.id !== action.payload.id )
                ]
            }        

        case 'DELETE_USER':
            return {
                ...state,
                users: [
                    ...state.users.filter( user => 
                    user.id !== action.payload.id )	
                ],
                isLoading: false
            }


        default:
            return state;
    }
};