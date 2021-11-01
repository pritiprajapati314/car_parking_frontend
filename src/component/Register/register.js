import React, { Component } from 'react'
import style from './style2.module.css'
import axios from 'axios'
import dateFormat from 'dateformat';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
/* import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css" */



export default class register extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName : '',
            LastName : '', 
            email : '',
            contact : '',
            dateOfBirth : '',
            address : '',
            pin : '',
            gender: '',
            password: '',
            cPassword: '',
            vehicle: '',
            userId: '',
            redirect: null
        }

    }

    componentDidMount(){
        this.setState({
            /* username: 'test user' */
        })
    }

    handleChange = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e)=>{
        e.preventDefault();

        const record = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            contact : this.state.contact,
            password : this.state.password,
            cPassword : this.state.cPassword,
            address : this.state.address,
            vehicle : this.state.vehicle,
            pin : this.state.pin,
            dateOfBirth : dateFormat(this.state.dateOfBirth),
            gender: this.state.gender,
            email: this.state.email,
            userId: this.state.userId
        }
        console.log("from front-end : ",record);
        await axios.post('http://localhost:3000/user/register', record).then(res => (res.data))
        this.setState({
            redirect: "/login"
        })
        
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className={style.hero}>
                <div className={style.container}>
                <div className = {style.formbox}>
                <div className={style.title}>Registration Form</div>
                    <form action="#" onSubmit={this.handleSubmit}>
                        <div className={style.userdetails}>
                            <div className={style.inputbox}>
                                <span className={style.details}>First Name</span>
                                <input type="text" 
                                className={style.icon}
                                name="firstName" 
                                value = {this.state.firstName}
                                onChange = {this.handleChange}
                                placeholder="&#xf508; Enter your Name" 
                                required />            
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Last Name</span>
                                <input type="text" 
                                className={style.icon}
                                name="lastName" 
                                value = {this.state.lastName}
                                onChange = {this.handleChange}
                                placeholder="&#xf508; Enter your Name" 
                                required />            
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Vehicle Number</span>
                                <input 
                                type="text"
                                name="vehicle"  
                                className={style.icon} 
                                value = {this.state.vehicle}
                                onChange = {this.handleChange}
                                placeholder="&#xf63c; MP-04-HA-XXXX" 
                                required />
                                            
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Email Id</span>
                                <input 
                                type="email"  
                                name="email"
                                className={style.icon}
                                value = {this.state.email}
                                onChange = {this.handleChange}
                                placeholder="&#xf199; Enter your Email Address" 
                                required />         
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Contact Number</span>
                                <input 
                                type="text"  
                                className={style.icon} 
                                name="contact"
                                value = {this.state.contact}
                                onChange = {this.handleChange}
                
                                placeholder="&#xf879; 97XXXXXXX9" 
                                pattern="[0-9]{10}" 
                                required />          
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Password</span>
                                <input 
                                type="password" 
                                className={style.icon}  
                                name="password"
                                value = {this.state.password}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Enter your Password" 
                                required />
                                            
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>Confirm Password</span>
                                <input 
                                type="password" 
                                className={style.icon}
                                name="cPassword"  
                                value = {this.state.cPassword}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Confirm your password" 
                                required />                 
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>dateOfBirth</span>
                                <input 
                                type="date" 
                                className={style.icon}
                                class="dateOfBirth"  
                                value = {this.state.dateOfBirth}
                                name = "dateOfBirth" 
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Enter your Password" 
                                required />     
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>address</span>
                                <input 
                                type="text" 
                                className={style.icon}  
                                name="address"
                                value = {this.state.address}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Enter your Password" 
                                required />
                                            
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>pin</span>
                                <input 
                                type="text" 
                                className={style.icon}
                                name="pin"  
                                value = {this.state.pin}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Confirm your password" 
                                required />                 
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>userID</span>
                                <input 
                                type="text" 
                                className={style.icon}
                                name="userId"  
                                value = {this.state.userId}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Confirm your password" 
                                required />                 
                            </div>
                            <div className={style.inputbox}>
                                <span className={style.details}>pin</span>
                                <input 
                                type="text" 
                                className={style.icon}
                                name="district"  
                                value = {this.state.pin}
                                onChange = {this.handleChange}
                                placeholder="&#xf084; Confirm your password" 
                                required />                 
                            </div>
                        </div>
                        <div className={style.genderdetails}>
                                Gender :
                                    
                                <span>MALE <input type="radio" name="gender" value = "male" onChange = {this.handleChange} id="male" /></span>
                                <span>FEMALE <input type="radio" name="gender" value = "female" onChange = {this.handleChange} id="female" /></span>
                                <span>OTHERS<input type="radio" name="gender" value = "other" onChange = {this.handleChange} id="other" /></span>
                        </div>
                        <div className={style.button}>
                        <input type="submit" value="Register" />
                        </div>
                        <hr />
                        <h4>Already Registered?</h4>
                        <Link to ={'/login'}><div className={style.submitbtn}>Login</div></Link>
                    </form>
                </div>     
            </div>
        </div>
        )
    }
}

