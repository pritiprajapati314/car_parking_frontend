import {FETCH_USER_LOGIN} from './actionTypes'; 

const initialState = {
    login : false,
    token : '',
    email : ''
}

const reducer = (state = initialState, action) => {
    //console.log(action.type);
    switch(action.type){
        case FETCH_USER_LOGIN : return {
            ...state,
            login : true,
            token : action.token,
            email : action.email
        }
        default: return state
    }
}

export default reducer;
