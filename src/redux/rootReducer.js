import { combineReducers } from "redux";
import authReducer from './auth/AuthReducer';

const rootReducer = combineReducers({
    authReducer: authReducer
})

export default rootReducer;