import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./AuthType";


export const loginUser = (userCred) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios
            .post('http://localhost:3000/user/login', userCred)
            .then(response => {
                const {token, user} = response.data;
                dispatch(loginSuccess(token, user));
            })
            .catch(error => {
                dispatch(loginFailure(error));
            })
    }
}

export const loginRequest = () => {
    return{
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (token, user) => {
    return{
        type: LOGIN_SUCCESS,
        payload: token, 
        user: user
    }
}

export const loginFailure = () => {
    return{
        type: LOGIN_FAILURE
    }
}