
import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
import {Delete,CheckCircle} from '@material-ui/icons'
import Image from './UserImage.png' 
import axios from 'axios'
import './BookingView.css'
import React, { Component } from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import {data} from './BookSlot';
function BookingView() {

  const [userLogin, setUserLogin] = useState({
    firstName :'',
    lastName : '',
    email : '',
    vehicle:'',

  });
  const [parking,setParking] = useState({
    pin : '',
    city:'',
    area:'',
    slots:'',
    fees:'',
  })
  let reduxstate;
        useSelector(state => reduxstate = state);
        console.log("date accessed is",reduxstate.authReducer.userDetails);
  useEffect(()=>{
    const fetchdata = async ()=>{
        
        setUserLogin(reduxstate.authReducer.userDetails)
       let parkingData = await axios.get("http://localhost:3000/bookingSearch/search");
       console.log(parkingData.data.response);
        setParking(parkingData.data.response);
    }
    console.log(userLogin)
    fetchdata();
  },[])
  

  return (
    <div>  
      <div>
        <Grid container justify = "center">
          <img src = {Image} className='image'/>  
            </Grid>
            <Grid container justify = "center">
            <Box className = 'container'>
            </Box>
            </Grid> 
            <Grid container justify = "center">   
            <Box className = 'container'>
            <Typography> Booking Details  </Typography>
            <Typography> First Name : {userLogin.firstName}</Typography>
            <Typography> Last Name :  {userLogin.lastName}</Typography>
            <Typography> Email : {userLogin.email}  </Typography>
            <Typography> Vehicle number : {userLogin.vehicle} </Typography>
            <Typography> Pin : {parking.pin}</Typography>
            <Typography> City : {parking.city}</Typography>
            <Typography> Area :{parking.area} </Typography>
            <Typography> Slots :{parking.slots}</Typography>
            <Typography> Fees :{parking.fees}</Typography>
            <button id="confirmButtton" styles={{color:'red'}}>Confirm</button>
            <button id="cancelButtton" styles={{color:'red'}}>Cancel </button>
        </Box>
          
        </Grid>
      </div> 
      </div>
  )
}

export default BookingView

