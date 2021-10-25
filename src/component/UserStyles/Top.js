import React from 'react'
import './top.css';
import drops from './particles.mp4';
import mainimg from './img2.jpg';

const Top = () => {
    return (
        
            <div>
<div className = "backgroundImage">
    
<section class="heading2">    
<div className="topic">
    {/* <video src={drops} autoPlay/> */}
    <video autoPlay loop muted fluid>
      <source src={drops} type="video/mp4"/></video>
<p className="info"><span>On</span>line Parking <span>Sl</span>ot Booking</p>

<p className="info3">   &nbsp; Search and book parking lots near you</p>
</div>   
{/* <div className="wrapper">
    <div className="static">simple process</div>
    <ul className="dynamic">
        <li><span>Register</span></li>
        <li><span>Login</span></li>
        <li><span>Book Slot</span></li>
        <li><span>Happy You!</span></li>
        </ul>
        </div> */}
</section>
<section class="middle">

{/* <div class="form-inline">
 
    
    <select name="countrya" id="stateSel" size="1">
        <option value="" selected="selected">Please select Country first</option>
    </select>
    
   <select name="district" id="districtSel" size="1">
        <option value="" selected="selected">Please select State first</option>
    </select>
   
<button type="button" class="btn btn-primary">
<i class="fas fa-search"> Search</i>
</button>
<p> or </p>
<button type="button" class="btn btn-primary">
<i class="fas fa-search"> Get Location</i>
</button>
</div>
</section>
</div> */}

</section>
</div>
        </div>
    )
}

export default Top


