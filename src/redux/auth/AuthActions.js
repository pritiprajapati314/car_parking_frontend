import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./AuthTypes"


export const loginUser = (userCred) => {
    return (dispatch) => {
        dispatch(loginRequest())
        axios
            .post('http://localhost:8080/user/login', userCred)
            .then(response => {
                const token =response.data.token
                dispatch(loginSuccess(token));
            })
            .catch(error => {
                dispatch(loginFailure(error));
            })
    }
}


export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}