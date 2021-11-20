
import React, { Component } from 'react'
import style1 from './Admin_login_style.module.css';
import axios from 'axios'
import { useState } from 'react';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username :'',
            password: '',
        };
    }
        handleInput = (e) => {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })
        }
            
        handleSubmit = async (e) => {
                        e.preventDefault();
                        const user ={
                            username:this.state.username,
                            password:this.state.password
                
                        };
                        console.log(user)
                        try {
                          const res = await axios.post("http://localhost:3000/admin/login", user).then(res => console.log(res.data));
                          
                        
                         
                        } catch (err) {
                          console.log(err)
                        }
                    }
                


        
    render() {
        return (
            <div>
                 <div id={style1.hero}>
             <div className={style1.container}>
                 <div className={style1.card}>
                     <div className={style1.box}>
                         <div className={style1.card1}>
                             <h2>WELCOME BACK!</h2>
                             <form onSubmit={this.handleSubmit}>
                                 {/* `${styles.normalLink} ${styles.linkButton}` */}
                                <input type="text" name="username" id="username" 
                                 value = {AdminLogin.username}
                                 onChange = {this.handleInput} 
                                className={style1.inputBox} placeholder=" User Id" />


                                <input type="password" name = "password"
                                id = "password"  value = {AdminLogin.password}
                                onChange = {this.handleInput} className={style1.inputBox} placeholder=" Password" />

                                <button type="submit" onClick={this.handleSubmit} className={style1.subBtn} >
                                    Log In
                                </button>
                                <input type="checkbox" /><span>Remember me</span>
                                <a href="#"><br /><br />Forgot Password? </a>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

