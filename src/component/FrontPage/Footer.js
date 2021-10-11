import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className = "footer-comment">
                <p className="footer-comment-heading">
                    some description. thankYou!
                </p>
                <p className='footer-comment-text'>
                    You can post your comment
                </p>
                    <div>
                        <form>
                        <div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your email" 
                                className='footer-input'></input>
                        </div>
                        <div>
                            <textarea
                                className = "input-area" 
                                name="comments" 
                                id="comments" 
                                >
                            say something!
                            </textarea>
                        </div>
                            
                            <Button buttonStyle='btn--outline'>Submit</Button>
                        </form>
                    </div>
                
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Contact Us </h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Contact Us </h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            Carpark_ <i className = "fas fa-car"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Car park @ 2021</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facbook"
                                to = "/"
                                target="_blank"
                                arial-label="facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link instagram"
                                to = "/"
                                target="_blank"
                                arial-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link twitter"
                                to = "/"
                                target="_blank"
                                arial-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="social-icon-link LinkedIn"
                                to = "/"
                                target="_blank"
                                arial-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Footer
