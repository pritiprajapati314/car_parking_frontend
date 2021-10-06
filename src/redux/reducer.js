import {FETCH_USER_LOGIN} from './action'

const initialState = {
    login : false,
    token : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_LOGIN : return {
            ...state,
            login : true,
            /* token : token */
        }
        default: return state
    }
}

export default reducer;