import React from 'react'
import {useState, useEffect} from 'react'
import { withRouter } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import style from './loginPage.module.css'
<<<<<<< HEAD
// import img1 from './img1';
// import { FETCH_USER_LOGIN } from '../../redux/action'
=======
import { user_login } from '../../redux/action'
>>>>>>> bf48ee31cfdefc1f0d42147703c2fccb9218c4c9
// import {connect} from 'react-redux';
//import addToken from '../../state';

let response = '';

const LoginPage = (props) => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({...userLogin, [name] : value})
    }

    const Dispatch = useDispatch();
    const newToken = useSelector(state => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const record = ({...userLogin});
        await axios.post('http://localhost:3000/user/login', record).then(res => response = res);
        console.log("from the backend", response);
        if(response.data.token.length){
            Dispatch(user_login(response.data));
            
            console.log("after the work", newToken);
            props.history.push("/");
        }
        //console.log(token);
    }
    

    return (

        <div id = {style.hero}>
            <div className= {style.container} >
                <div className = {style.card}>
                    <div className = {style.innerbox}>
                        <div className = {style.cardfront}>
                            <h2>Login</h2>
                            <form onSubmit = {handleSubmit}>
                                <input
                                type="email" 
                                className={style.inputbox} 
                                placeholder="&#xf199; Email Id" 
                                name="email"
                                id = "email"
                                value = {userLogin.email}
                                onChange = {handleInput}
                                equired />
                                <input 
                                type="password" 
                                className= {style.inputbox} 
                                placeholder="&#xf09c; Password"
                                name = "password"
                                id = "password"
                                value = {userLogin.password}
                                onChange = {handleInput} 
                                required />
                            
                                <button 
                                type="submit" 
                                className = {style.subbtn} 
                                >Sign In</button>

                                <input type="checkbox"/>
                                <a href="/#">Forgot Password?</a><br/>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}




export default withRouter(LoginPage);
