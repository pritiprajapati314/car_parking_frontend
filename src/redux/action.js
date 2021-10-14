import {FETCH_USER_LOGIN} from './actionTypes'; 

export const user_login = (response) => {
    return{
        type : FETCH_USER_LOGIN,
        token : response.token,
        email : response.user.email,
        firstName : response.user.firstName,
        lastName : response.user.lastName,
        address: response.user.address,
        contact: response.user.contact,
        gender: response.user.gender,
        pin: response.user.pin,
        vehicle: 'some work to be done',
    }
}