import redux from 'redux';
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunxMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
    loading: false,
    user : [], 
    error : ''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILIURE = 'FETCH_USERS_FAILIURE';

const fetchUserRequest = () => {
    return{
        type : FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUserFailure = error => {
    return{
        type : FETCH_USERS_FAILIURE,
        payload : error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state, 
                user : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILIURE:
            return{
                ...state,
                user : [],
                error : action.payload
            }
        default: return state
    }
}

//action creater

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response is array of user
            const user = response.data;
            dispatch(fetchUserSuccess(user));
        })
        .catch(error => {
            //error.message
            dispatch(fetchUserFailure(error.message));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunxMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers);