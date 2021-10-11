import {FETCH_USER_LOGIN} from './actionTypes'; 

export const user_login = (response) => {
    //console.log("hello world",token)
    return{
        type : FETCH_USER_LOGIN,
        token : response.token,
        email : response.email
    }
}