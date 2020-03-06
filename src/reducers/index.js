// import { ADD_USER, ADD_USER_WIN, ADD_USER_LOSE, DELETE_USER_WIN, DELETE_USER_LOSE, 
//     ADD_BUGGY, ADD_BUGGY_WIN, ADD_BUGGY_LOSE, DELETE_BUGGY_WIN, DELETE_BUGGY_LOSE } from "../actions";


export const initialState = {
    // user:
    //     {},
    buggy:
        {},
    // users: 
    //     [],
    buggies: [],
    error: {},
    isLoading: false
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {


    // USER-RELATED CASES: 

        case 'GET_USER_START':
            return{...state,isLoading: true}

        case 'GET_USER_WIN':
            return{...state,users: action.payload,isLoading: false}

        case 'GET_USER_LOSE':
            return{...state,isLoading: false}	

        // case 'ADD_USER':
        //     return {...state,users: [ ...state.users, action.payload],isLoading: false}

        // case 'ADD_USER_WIN':
        //     return {...state,users: [ ...state.users, action.payload],isLoading: false, error: {}}

        // case 'ADD_USER_LOSE':
        //     return {...state,users: [ ...state.users, action.payload],isLoading: false, error: {}}

        // case 'DELETE_USER_WIN':
        //     return {...state,users: [ ...state.users.filter( user =>  user.id !== action.payload.id )],
        //         isLoading: false, error: {}}
            
        // case 'DELETE_USER_LOSE':
        //     return {...state,users: [...state.users.filter( user => user.id !== action.payload.id )],
        //         isLoading: false, error: {}}
        
     //BUGGY-RELATED CASES:
     
        // case 'GET_BUGGY':
        //     return{...state,isCatching: true}


        // case 'GET_BUGGY_WIN':
        //     return{...state, buggies: action.payload, isLoading: false, error: {}}

        // case 'GET_BUGGY_LOSE':
        //     return{...state, isLoading: false, error: {}}	
        
        // case 'ADD_BUGGY':
        //     return {...state, isLoading: true, error: {}}

        case 'ADD_BUGGY_WIN':
            return {
                ...state,
                buggies: [ ...state.buggies, action.payload],
                isLoading: false,
                error: {}
        }

        case 'ADD_BUGGY_LOSE':
            return {
                ...state,
                buggies: [ ...state.buggies, action.payload],
                isLoading: false,
                error: { err: 'could not add'}
        }

        case 'EDIT_BUGGY_WIN':
            return {
                ...state,
                buggy: {...state.buggy, available: action.payload},
                buggies: [ ...state.buggies, action.payload],
                isLoading: false,
                error: {}
        }
                
        case 'EDIT_BUGGY_LOSE':
            return {
                ...state,
                buggies: [ ...state.buggies, action.payload],
                isLoading: false,
                error: { err: 'could not edit'}
        }

        case 'DELETE_BUGGY_WIN':
            return {
                ...state,
                buggies: [
                    ...state.buggies.filter( buggy =>
                    buggy.id !== action.payload.id )
                ],
                isLoading: false,
                error: {}
            }        

        case 'DELETE_BUGGY_LOSE':
            return {
                ...state,
                isLoading: false,
                error: {err: 'could not delete'}
            }


        default:
            return state;
    }
};