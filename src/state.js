import redux from 'redux';
import reduxLogger from 'redux-logger'
import React from 'react'




const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();



const LOGIN_USER = "LOGIN_USER";
const ADD_TOKEN = "ADD_TOKEN";


function LoginUser() {
    return {
        type : LOGIN_USER,
        info : "my redux action"
    }
}

export default function login(token){
    AddToken(token);
    store.dispatch(AddToken);
}

function AddToken(token){
    return {
        type : ADD_TOKEN,
        token : token
    }
}

const initialStateLogin = {
    login : false
}

const initialStateToken = {
    token : ''
}

const loginReducer = (state = initialStateLogin, action) => {
    switch(action.type){
        case LOGIN_USER : return{
            ...state,
            login : !state.login
        }
        default: return state
    }
}

const tokenReducer = (state = initialStateToken, action) => {
    switch(action.type){
        case ADD_TOKEN : return {
            ...state,
            token : action.token
        }
        default: return state
    }
}



const rootReducer = combineReducer({
    log : loginReducer,
    tok : tokenReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(LoginUser());
store.dispatch(LoginUser());
store.dispatch(LoginUser());
store.dispatch(AddToken());

unsubscribe();

//module.exports = LoginUser;