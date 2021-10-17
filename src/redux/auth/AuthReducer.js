import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./AuthTypes"


const initialState = {
    fetchingToken: false,
    isUserLoggedIn: false,
    userToken: '',
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                fetchingToken: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('isUserLoggedIn', 'true');
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                fetchingToken: false,
                isUserLoggedIn: true,
                userToken: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetchingToken: false,
                isUserLoggedIn: false,
                userToken: '',
                error: action.payload
            }
        default: 
            return state        
    }
}

export default authReducer;