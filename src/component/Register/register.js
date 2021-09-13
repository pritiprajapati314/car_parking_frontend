import React from 'react'
import './style2.css'

function register() {
    return (
        <div className="hero">
            <div className="container">
            <div className = "form-box">
            <div className="title">Registration Form</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" className="icon"  placeholder="&#xf508; Enter your Name" required />
                                        
                        </div>
                        <div className="input-box">
                            <span className="details">Vehicle Number</span>
                            <input type="text"  className="icon" placeholder="&#xf63c; MP-04-HA-XXXX" required />
                                        
                        </div>
                        <div className="input-box">
                            <span className="details">Email Id</span>
                            <input type="email"  className="icon" placeholder="&#xf199; Enter your Email Address" required />
                                        
                        </div>
                        <div className="input-box">
                            <span className="details">Contact Number</span>
                            <input type="text"  className="icon" placeholder="&#xf879; 97XXXXXXX9" pattern="[0-9]{10}" required />
                                        
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" className="icon"  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" className="icon"  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                    </div>
                    <div className="gender-details">
                            Gender:
                        
                            Male <input type="radio" name="gender" id="male" />
                            Female <input type="radio" name="gender" id="female" />
                            Others<input type="radio" name="gender" id="other" />
                    </div>
                    <div className="button">
                    <input type="submit" value="Register" />
                    </div>
                    <hr />
                    <h4>Already Registered?</h4>
                    <a href="User_login.html"><div className="submit-btn">Login</div></a>
                </form>
            </div>
                
        </div>
    </div>
        
    )
}

export default register
