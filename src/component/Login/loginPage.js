import React from 'react'
import style from './loginPage.module.css'

function loginPage() {
    return (
        <div id = {style.hero}>
            <div className= {style.container} >
                <div className = {style.card}>
                    <div className = {style.innerbox}>
                        <div className = {style.cardfront}>
                            <h2>Login</h2>
                            <form>
                                <input type="email" className={style.inputbox} placeholder="&#xf199; Email Id" required />
                                <input type="password" className= {style.inputbox} placeholder="&#xf09c; Password" required />
                            
                                <button type="submit" className = {style.subbtn} >Submit</button>
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

export default loginPage
