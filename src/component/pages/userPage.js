import React from 'react'
import Information from '../UserStyles/Information';
import Footer from '../FrontPage/Footer';

import Top from '../UserStyles/Top';
// import Maps  from '../Maps';
import Navbar2 from '../UserStyles/Navbar2';

function UserPage(){
    return(
    <>
    <Navbar2/>
    <Top/> 
    {/* <Maps/> */}
   <Information/>
   <Footer/>

   
   </>
    );

}
export default UserPage;

