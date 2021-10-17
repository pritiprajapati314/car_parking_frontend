import React from 'react'

import Navbar from '../component/FrontPage/Navbar';
import Register from '../component/Register/register'


function userPage() {
    return (
        <div>
            <Navbar/>
            
            <Register></Register>
        </div>
    )
}

export default userPage;
