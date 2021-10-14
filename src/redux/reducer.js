import {FETCH_USER_LOGIN} from './actionTypes'; 

const initialState = {
    login : false,
    token : '',
    user : {
        firstName : '',
        lastName : '',
        email : '',
        address: '',
        contact: '',
        gender: '',
        pin: '',
        vehicle: {},
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_LOGIN : return {
            ...state,
            login : true,
            token : action.token,
            user : {
                ...state.user,
                email : action.email,
                firstName : action.firstName,
                lastName : action.lastName,
                address: action.address,
                contact: action.contact,
                gender: action.gender,
                pin: action.pin,
                vehicle: 'some work to be done'
            }
        }
        default: return state
    }
}

export default reducer;
