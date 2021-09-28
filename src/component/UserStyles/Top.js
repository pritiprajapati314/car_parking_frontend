import React from 'react'
import './top.css';
const Top = () => {
    return (
        
            <div>
<div className = "background-image">
<section class="heading2">    
<div className="topic">
<p className="info"> Online Parking Slot Booking</p>

<p className="info3">   &nbsp; Search and book parking lots near you</p>
</div>   
</section>
<section class="middle">
<div class="input-group">
<div class="form-inline">
<input type="search" placeholder = "city" id="form1" class="form-control" />
<input type="search" placeholder = "location" id="form1" class="form-control" />
<input type="search" placeholder = "time" id="form1" class="form-control" />
</div>
<button type="button" class="btn btn-primary">
<i class="fas fa-search"> Search</i>
</button>
<p> or </p>
<button type="button" class="btn btn-primary">
<i class="fas fa-search"> Get Location</i>
</button>
</div>
</section>
</div>

        </div>
    )
}

export default Top


