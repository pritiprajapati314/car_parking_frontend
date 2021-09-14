import React from 'react'
import style from './style2.module.css'

function register() {
    return (
        <div className={style.hero}>
            <div className={style.container}>
            <div className = {style.formbox}>
            <div className={style.title}>Registration Form</div>
                <form action="#">
                    <div className={style.userdetails}>
                        <div className={style.inputbox}>
                            <span className={style.details}>Full Name</span>
                            <input type="text" className={style.icon}  placeholder="&#xf508; Enter your Name" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Vehicle Number</span>
                            <input type="text"  className={style.icon} placeholder="&#xf63c; MP-04-HA-XXXX" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Email Id</span>
                            <input type="email"  className={style.icon} placeholder="&#xf199; Enter your Email Address" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Contact Number</span>
                            <input type="text"  className={style.icon} placeholder="&#xf879; 97XXXXXXX9" pattern="[0-9]{10}" required />          
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Password</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Confirm Password</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>liscence no</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>alternative no</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>dob</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>blood group</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>address</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>pin</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>district</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Enter your Password" required />
                                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>city</span>
                            <input type="password" className={style.icon}  placeholder="&#xf084; Confirm your password" required />                 
                        </div>
                    </div>
                    <div className={style.genderdetails}>
                            Gender :
                                
                            <span>MALE <input type="radio" name="gender" id="male" /></span>
                            <span>FEMALE <input type="radio" name="gender" id="female" /></span>
                            <span>OTHERS<input type="radio" name="gender" id="other" /></span>
                    </div>
                    <div className={style.button}>
                    <input type="submit" value="Register" />
                    </div>
                    <hr />
                    <h4>Already Registered?</h4>
                    <a href="User_login.html"><div className={style.submitbtn}>Login</div></a>
                </form>
            </div>
                
        </div>
    </div>
        
    )
}

export default register
