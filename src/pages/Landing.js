import React from 'react';
import '../App.css'
import FrontSection from '../component/FrontPage/FrontSection'
import Footer from '../component/FrontPage/Footer'
import Navbar from '../component/FrontPage/Navbar';

const Landing =  () =>{
    return (
        <React.Fragment>
            <Navbar />
            <FrontSection />
            <Footer />
        </React.Fragment>

    )
}

export default Landing;