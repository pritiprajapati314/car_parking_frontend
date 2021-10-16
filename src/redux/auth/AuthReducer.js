import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './AuthType';

const initialState = {
    fetchingRequest: false,
    loggedInStatus: false,
    userToken: '',
    userDetails: '',
    error: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST: return {
            ...state,
            fetchingRequest: true,
        } 
        case LOGIN_SUCCESS: return {
            ...state, 
            fetchingRequest: false,
            loggedInStatus: true,
            userToken: action.payload,
            userDetails: action.user
        } 
        case LOGIN_FAILURE: return {
            ...state,
            fetchingRequest: false,
            loggedInStatus: false,
            error: action.payload
        }
        default: return state
    }
}

export default reducer;