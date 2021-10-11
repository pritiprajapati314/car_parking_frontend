import React from 'react'
import style from './Request.module.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Success from './Success';

function ManagerRequest() {
    return (
        <Router>
        <div className={style.hero}>
            <div className={style.container}>
            <div className = {style.formbox}>
            <div className={style.title}><h2>Manager Request Form!</h2><h6>Join and experience the most convenient way to park!</h6></div>
                <form action="#">
                    <div className={style.userdetails}>
                        <div className={style.inputbox}>
                            <span className={style.details}>Full Name</span>
                            <input type="text" className={style.icon}  placeholder="&#xf508; Enter your Name" required />
                                        
                        </div>
                        {/* <div className={style.inputbox}>
                            <span className={style.details}>Vehicle Number</span>
                            <input type="text"  className={style.icon} placeholder="&#xf63c; MP-04-HA-XXXX" required />
                                        
                        </div> */}
                        <div className={style.inputbox}>
                            <span className={style.details}>Email Id</span>
                            <input type="email"  className={style.icon} placeholder="&#xf199; Enter your Email Address" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Contact Number</span>
                            <input type="text"  className={style.icon} placeholder="&#xf879; 97XXXXXXX9" pattern="[0-9]{10}" required />          
                        </div>
                        {/* <div className={style.inputbox}>
                            <span className={style.details}>Password</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Confirm Password</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div> */}
                        {/* <div className={style.inputbox}>
                            <span className={style.details}>liscence no</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div> */}
                        <div className={style.inputbox}>
                            <span className={style.details}>Alternative Number</span>
                            <input type="number" className={style.icon}  placeholder="&#xf879; 97XXXXXXX9" required />                 
                        </div>
                        {/* <div className={style.inputbox}>
                            <span className={style.details}>dob</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>blood group</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div> */}
                        <div className={style.inputbox}>
                            <span className={style.details}>Residential Address</span>
                            <input type="text" className={style.icon}  placeholder="&#xf084; Enter your Address" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Parking lot Address</span>
                            <input type="text" className={style.icon}  placeholder="&#xf084;Parking Lot/Take Incharge Of" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Pin Code</span>
                            <input type="number" className={style.icon}  placeholder="&#xf084; 6-digit Pin-Code" required />                 
                        </div>
                        {/* <div className={style.inputbox}>
                            <span className={style.details}>district</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div> */}
                        <div className={style.inputbox}>
                            <span className={style.details}>City</span>
                            <input type="text" className={style.icon}  placeholder="&#xf084; Enter your City" required />                 
                        </div>
                    </div>
                    <div className={style.genderdetails}>
                            Gender :
                                
                            <span>MALE <input type="radio" name="gender" id="male" /></span>
                            <span>FEMALE <input type="radio" name="gender" id="female" /></span>
                            <span>OTHERS<input type="radio" name="gender" id="other" /></span>
                    </div>
                    <div className={style.button}>
                   <Link to="Success.js"><input type="submit" value="Submit"  /></Link> 
                   {/* Add link to success page here */}
                    </div>
                    <hr />
                    <h4>Already Our Member?</h4>
                    <Link to="login.js"><div className={style.submitbtn}>Login</div></Link>
                    {/* Add link to manager-login page here */}
                </form>
            </div>
                
        </div>
    </div>
    </Router>   
    )
}

export default ManagerRequest;