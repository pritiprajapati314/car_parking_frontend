import * as React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { connect} from 'react-redux';

import {loginUser} from '../redux/auth/AuthActions';

const ProtectedRoute = ({auth, userToken,component: Component, ...restOfProps}) => {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    const token = localStorage.getItem('token');


    return (
        <Route  
            {...restOfProps}
            render={(props) => 
                isUserLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
            }
        />
    );
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userCreds) => dispatch(loginUser(userCreds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);