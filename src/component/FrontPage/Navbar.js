import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import {useSelector} from 'react-redux';

import './Navbar.css'


function Navbar() {
    
    //just for testing
    const newToken = useSelector(state => state);

    
    console.log(newToken);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                       TITLE <i className = "fas fa-car"></i>
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ?  'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/adminLogin' className = 'nav-links' onClick = {closeMobileMenu}>
                                Admin
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/services' className = 'nav-links' onClick = {closeMobileMenu}>
                                services
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/login' className = 'nav-links' onClick = {closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/sign-up' className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div> 
            </nav>
        </>
    )
}

export default Navbar
