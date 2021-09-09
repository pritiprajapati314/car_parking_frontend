
import './Information.css';
const Information = () => {
    return (

     <div>
         
         <section class="heading2">
         <div className = "background-image">
    <div className="topic">
        <p className="info"> Online Parking Slot Booking</p>
        <p className="info3">   &nbsp; Search and book parking lots near you</p>
    </div>
    <section class="middle">
        {/* <form action="" className="form-horizontal my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="City" aria-label="Search"/>
            <input className="form-control mr-sm-2" type="search" placeholder="Location" aria-label="Search"/>
            <input className="form-control mr-sm-2" type="search" placeholder="Time" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <form class="form-inline" action="">
 
  <input type="search"  placeholder="City" name="city"/>
  
  <input type="search"  placeholder="Location" name="location"/>
  <input type="search"  placeholder="Time" name="time"/>
  
  <button type="submit">Submit</button>
</form>
 </section>
    </div>
</section>

    
<section className="information">
    <div className="child-info">
    <h2 id="info-heading">Why book with us?</h2>
    <p id="information1">The online parking slot booking system offers a plethora 
        of advantages. It avoids the hassle and allows prebooking of parking slots near you.With the monitored parking system you
        no longer have to worry about the safety of your car.

    </p>
    <h6 id="info-heading2">
       <b> Find the nearest parking areas </b>
       <p id="information1">Find your nearest parking area with less effort.Just enter your location and time in the search box and we will display the nearest 
           parking slots available.Select the area of your choice and book using our secure payment.

       </p>
    </h6>
    <h6 id="info-heading2">
        <b>Secure Payments</b>
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
        
        </p>
    </h6>
    <h6 id="info-heading2">
        <b>Easy Cancellation</b>
        <p id="information1">Cancel your booking any time before the alloted time and get refund or park credits which
            can be used later
        </p>
    </h6>
    <h6 id="info-heading2">
        <b>Transaction history</b>
        <p id="information1">View your transaction history of the previous year, week or Month
            and keep a track of the money you spend.
        </p>
    </h6>

</div>
</section>

</div>
        
    )
}


export default Information;
