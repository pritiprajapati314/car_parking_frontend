import React from 'react'
import './loginPage.css'

function loginPage() {
    return (
        <div id = "hero">
            <div className= "container" >
                <div className = "card">
                    <div className = "inner-box">
                        <div className = "card-front">
                            <h2>Login</h2>
                            <form>
                                <input type="email" className="input-box" placeholder="&#xf199; Email Id" required />
                                <input type="password" className="input-box" placeholder="&#xf09c; Password" required />
                            
                                <button type="submit" className ="sub-btn">Submit</button>
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
