
import useGeolcation from '../MapFile/useGeolcation';
import './Information.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Paper} from '@material-ui/core';
import payment from './payment1.jpg';
import cancel from './cancel.jpg';
import history from './his.jpg';
import parea from './pz.jpg';
import hassle from './search.jpg';
import notify from './sms.jpg';
import reg from './reg.jpg';
import user from './user.jpg';
const Information = () => {
    const location = useGeolcation();
    const paperStyle = { padding:20, height: '40vh', width:200, margin:20}

    return (

    

<section className="information">
<div className="location">
        {/* {location.loaded?JSON.stringify(location):"not found"} */}
        </div>
    <div className="child-info">
        <Row>
        

    <h2 id="info-heading">Why book with us?</h2>
    <p id="information1">The online parking slot booking system offers a plethora 
        of advantages. It avoids the hassle and allows prebooking of parking slots near you.With the monitored parking system you
        no longer have to worry about the safety of your car.<h5>(Hover on each feature to explore more....!)</h5>

    </p>
    {/* </Paper> */}
    </Row>
    <Row>
        <Col md="3" sm="6">
            
          <Paper className="con" elevation={20} style={paperStyle}>
             
        

    <h6 id="info-heading2">
    <div className="card">
       
        <div className="front">
       <b>Parking areas </b>
       <br/><br/>
       <div className="image">
       <img src={parea}/>
           </div></div>
           <div className="back">
           <b>Find Nearest Parking areas </b>
       <div className="image">
       <img src={parea}/>
           </div>
               
       <p id="information1">Find your nearest parking area with less effort.Just enter your location and time in the search box and we will display the nearest 
           parking slots available.Select the area of your choice and book using our secure payment.

       </p></div></div>
    </h6>
    </Paper>
    </Col>
    <Col md="3" sm="6">
    <Paper className="con" elevation={20} style={paperStyle}>
          

   
    <h6 id="info-heading2">
    <div className="card">
       
       <div className="front">
        <b>Secure Payments</b>
        <br/><br/>
        <div className="image">
       <img src={payment}/>
           </div></div>
           <div className="back">
           <b>Secure Payments</b>
        <div className="image">
       <img src={payment}/>
           </div>
        <p id="information1">
            There are a plethora of payment modes that are available on the redBus website and app. Choose a payment mode that meets your needs and complete the bus ticket booking process. Some of these payment modes that are available are:
           <li> Debit Card </li>
          <li> Credit Card</li>  
          <li>Net Banking with banks like: 
            ICICI Bank
            Indian Bank
            Axis Bank
            State Bank of India and many more</li>
           <li> Google Pay</li>
            <li>PhonePe</li>
           <li>UPI (Unified Payment Interface) where you will be asked to enter your VPA (Virtual Payment Address)</li> 
           <li>MobiKwik</li> 
        
        </p></div></div>
    </h6>
 
    </Paper>
    </Col>
    <Col md="3" sm="6">
    <Paper className="con" elevation={20} style={paperStyle}>

    <h6 id="info-heading2">
    <div className="card">
       
       <div className="front">
        <b>Easy Cancellation</b>
        <br/><br/>
        <div className="image">
       <img src={cancel}/>
           </div></div>
           <div className="back">
           <b>Easy Cancellation</b>
        <div className="image">
       <img src={cancel}/>
           </div>
        <p id="information1">Cancel your booking any time before the alloted time and get refund or park credits which
            can be used later
        </p></div></div>
    </h6>
    </Paper>
    </Col>
    <Col md="3" sm="6">
    <Paper className="con"  elevation={20} style={paperStyle}>

    <h6 id="info-heading2">
    <div className="card">
       
       <div className="front">
        <b>Transaction history</b>
        <br/><br/>
        <div className="image">
       <img src={history}/>
           </div></div>
           <div className="back">
           <b>Transaction history</b>
        <div className="image">
       <img src={history}/>
           </div>
        <p id="information1">View your transaction history of the previous year, week or Month
            and keep a track of the money you spend.
        </p></div></div>
    </h6>
    </Paper>
    </Col>
    </Row>
    <Row>
        <Col md="3" sm="6">
            
          <Paper className="con" elevation={20} style={paperStyle}>
             
        

    <h6 id="info-heading2">
    <div className="card">
       
        <div className="front">
       <b>Avail Slots</b>
       <br/><br/>
       <div className="image">
       <img src={hassle}/>
           </div></div>
           <div className="back">
           <b>Visual Countdown of Slots</b>
       <div className="image">
       <img src={hassle}/>
           </div>
               
       <p id="information1">A Visual Layout that enables live countdown of number of slots available,
        hence providing an efficient and hassle free search for space for your vehicle before-hand.

       </p></div></div>
    </h6>
    </Paper>
    </Col>

    <Col md="3" sm="6">
            
          <Paper className="con" elevation={20} style={paperStyle}>
             
        

    <h6 id="info-heading2">
    <div className="card">
       
        <div className="front">
       <b>Instant Notifications</b>
       <br/><br/>
       <div className="image">
       <img src={notify}/>
           </div></div>
           <div className="back">
           <b>Instant Notifications</b>
       <div className="image">
       <img src={notify}/>
           </div>
               
       <p id="information1">Our secure and robust system is made to work and response to emergency situations,
       if faced at any time. It instantly notifies you at your registered credentials and helps you at its best at the moment.

       </p></div></div>
    </h6>
    </Paper>
    </Col>
    <Col md="3" sm="6">
            
          <Paper className="con" elevation={20} style={paperStyle}>
             
        

    <h6 id="info-heading2">
    <div className="card">
       
        <div className="front">
       <b>1-time Registration</b>
       <br/><br/>
       <div className="image">
       <img src={reg}/>
           </div></div>
           <div className="back">
           <b>One-time Registration</b>
       <div className="image">
       <img src={reg}/>
           </div>
               
       <p id="information1">It's a one-time Registration process(to get and know you better XD) and you are done,and help you then after 
       everytime you choose to park with us with just signing in and booking your slot with all our registered parking zones.
       </p></div></div>
    </h6>
    </Paper>
    </Col>
    <Col md="3" sm="6">
            
          <Paper className="con" elevation={20} style={paperStyle}>
             
        

    <h6 id="info-heading2">
    <div className="card">
       
        <div className="front">
       <b>User Satisfaction</b>
       <br/><br/>
       <div className="image">
       <img src={user}/>
           </div></div>
           <div className="back">
           <b>User Satisfaction</b>
       <div className="image">
       <img src={user}/>
           </div>
               
       <p id="information1">With easy and fast services, our system offers a delightful experience
       of parking, where you can book your slot from anywhere in no-time,thus makes you feel comfy and happy!

       </p></div></div>
    </h6>
    </Paper>
    </Col>
    </Row>

</div>
</section>


        
    )
}


export default Information;
