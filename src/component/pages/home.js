import React from 'react';
import '../../App.css'
import FrontSection from '../FrontPage/FrontSection'
import Footer from '../FrontPage/Footer'
import Navbar from '../FrontPage/Navbar';

function Home (){
    return (
        <>
          <Navbar/>
           <FrontSection/>
           <Footer/> 
        </>
    )
}

export default Home;