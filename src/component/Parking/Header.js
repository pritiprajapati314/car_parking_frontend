import React from 'react'
import style2 from './admin_panel_style.module.css';
import {Link} from 'react-router-dom';

import Image1 from './images/manager.jpg'
import Image2 from './images/d1.jpg'
import Image3 from './images/co.jpg'
import Image4 from './images/no.jpg'
import Image5 from './images/parea.jpg'
import Image7 from './images/phead2.jpg'
import Image8 from './images/search.jpg'
import Image9 from './images/search1.jpg'
import Image10 from './images/set.jpg'
import Image11 from './images/user1.jpg'
import Image12 from './images/ad.jpg'
const Header = () => {
    return (
       
             <div>
             <div className={style2.sideMenu}>
        <div className={style2.brandName}>
            <h2 className = {style2.h2}>Welcome Admin! &nbsp;</h2>
         
        </div>
        {/* <ul>
            <li><img src={Image2}/>&nbsp;Dashboard</li>
            <li><img src={Image1}/><Link to ="/adminPanel/manager">&nbsp;Manager Registration</Link></li>
            <li><img src={Image1}/>Accounts</li>
            <li><img src={Image1}/><Link to ="/adminPanel/managerRequestView">&nbsp;View Manager Request </Link></li>
            <li><img src={Image3}/>Customers</li>
            <li><img src={Image1}/>Recent Payments</li>
            <li><img src={Image5}/> <Link to ="/adminPanel/addParking">&nbsp; Add Parking Lots </Link></li>
            <li><img src={Image10}/>Settings</li>
        </ul> */}
    </div>
    <div className={style2.container}>
        <div className={style2.header}>
            <div className={style2.nav}>
                <div className={style2.phead}>
                    <bold>Park_It</bold>&nbsp;<img src={Image7}/>
                   
                </div>

                <div className={style2.search}>
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={Image9} alt=""/></button>

                </div>


                

                <div className={style2.user}>
                    <a href="#" className={style2.btn}>Add new</a>
                    <img src={Image4} alt=""/>
                    <div className={style2.imgCase}>
                        <img src={Image12} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Header
