import React from 'react'
import {Link} from 'react-router-dom';
import style2 from './ManagerPanel.module.css';
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
import Image13 from './images/vacant.jpg'
import Image14 from './images/booked.jpg'


const ManagerPanel = () => {
    return (
        <div>
             <div className={style2.sideMenu}>
        <div className={style2.brandName}>
            <h2 className = {style2.h2}>Welcome<br/>Manager! &nbsp;</h2>
         
        </div>
        <ul>
            <li><img src={Image2}/>&nbsp;Dashboard</li>
            <li><img src={Image1}/>Lot Layout</li>
            <li><img src={Image1}/>Accounts</li>
            {/* <li><img src={Image1}/>Managers</li> */}
            <li><img src={Image3}/>Customers</li>
            <li><img src={Image1}/>Recent Payments</li>
            {/* <li><img src={Image5}/> <Link to ="/adminPanel/addParking">&nbsp;Add Parking Lots </Link></li> */}
            <li><img src={Image1}/>Change Password</li>
            <li><img src={Image10}/>Settings</li>
        </ul>
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
        <div className={style2.content}>
            <div className={style2.cards}>
                <div className={style2.card}>
                    <div className={style2.box}>
                       <h1 className={style2.h1}>219</h1>
                        <h3 className={style2.h3}>Customers</h3>
                    </div>
                    <div className={style2.iconCase}>
                        <img src={Image3} alt=""/>
                    </div>
                </div>
                <div className={style2.card}>
                    <div className={style2.box}>
                       <h1 className={style2.h1}>20</h1>
                        <h3 className={style2.h3}>Slots Available</h3>
                    </div>
                    <div className={style2.iconCase}>
                        <img src={Image13} alt=""/>
                    </div>
                </div>
                <div className={style2.card}>
                    <div className={style2.box}>
                       <h1 className={style2.h1}>13</h1>
                        <h3 className={style2.h3}>Booked</h3>
                    </div>
                    <div className={style2.iconCase}>
                        <img src={Image5} alt=""/>
                    </div>
                </div>
                <div className={style2.card}>
                    <div className={style2.box}>
                       <h1 className={style2.h1}>18</h1>
                        <h3 className={style2.h3}>Occupied</h3>
                    </div>
                    <div className={style2.iconCase}>
                        <img src={Image14} alt=""/>
                    </div>
                </div>
                
            </div>
           
            <div className={style2.content2}>
                <div className={style2.recentPayments}>
                    <div className={style2.title}>
                        <h2 className={style2.h2}>Recent Payments</h2>
                        <a href="#" className={style2.btn}>View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Slot ID</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>Jeff Bezos</td>
                            <td>A23</td>
                            <td>90/-</td>
                            <td><a href="#" className={style2.btn}>View</a></td>
                        </tr>
                        <tr>
                            <td>Jeff Bezos</td>
                            <td>A90</td>
                            <td>60/-</td>
                            <td><a href="#" className={style2.btn}>View</a></td>
                        </tr>
                        <tr>
                            <td>Jeff Bezos</td>
                            <td>A89</td>
                            <td>60/-</td>
                            <td><a href="#" className={style2.btn}>View</a></td>
                        </tr>

                    </table>
                </div>
                <div className={style2.newCustomers}>
                    <div className={style2.title}>
                        <h2 className={style2.h2}>New Customers</h2>
                        <a href="#" className={style2.btn}>View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td><img src={Image11}/></td>
                            <td>Dennis Ren</td>
                            <td>2mins ago..</td>
                        </tr>
                        <tr>
                            <td><img src={Image11}/></td>
                            <td>Ben Ren</td>
                            <td>30mins ago..</td>
                        </tr>
                        <tr>
                            <td><img src={Image11}/></td>
                            <td>Steve Ren</td>
                            <td>40mins ago..</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default ManagerPanel
