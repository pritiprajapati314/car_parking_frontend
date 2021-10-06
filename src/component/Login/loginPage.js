import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import style from './loginPage.module.css'
// import { FETCH_USER_LOGIN } from '../../redux/action'
// import {connect} from 'react-redux';
//import addToken from '../../state';

let token = '';

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

    


    const handleSubmit = async (e) => {
        e.preventDefault();

        const record = ({...userLogin});
        await axios.post('http://localhost:3000/user/login', record).then(res => token = res)
        // props.USER_LOGIN()
        console.log(token);
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
                                >Submit</button>

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




export default LoginPage;
