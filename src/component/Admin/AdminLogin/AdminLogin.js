import React from 'react'
import style1 from './Admin_login_style.module.css';
import Navbar from '../../FrontPage/Navbar';
import admin from './ad1.jpg'

const AdminLogin = () => {
   
    return (
        

        <div id={style1.hero}>
            <Navbar/>
            <div className={style1.container}>
                <div className={style1.card}>
                    <div className={style1.box}>
                        <div className={style1.card1}>
                        <img src={admin}/>
                            <h2>WELCOME BACK!</h2>
                            <form>
                                {/* `${styles.normalLink} ${styles.linkButton}` */}
                                <input type="text" className={style1.inputBox} placeholder=" User Id" />


                                <input type="password" className={style1.inputBox} placeholder=" Password" />

                                <button type="submit" className={style1.subBtn} >
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

    )
}

export default AdminLogin
