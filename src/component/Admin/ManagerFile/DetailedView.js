
import React from 'react'
import { useState,useEffect } from 'react'
import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
import {Delete,CheckCircle} from '@material-ui/icons'
import Image from '../images/av_m.jpg' 
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom'

const usestyle = makeStyles({
    image:{
     height:350
    },
    icon:{
       margin:5,
       border:'1px solid #878787',
       padding:5,
       width:60,
       height:60
    },
    heading:{
      textAlign:'center',
      fontSize:'25px',
      margin:'30px 0px 20px 0px'
    }

})

const deleteRequest = (id)=>{
 
  axios.delete(`http://localhost:3000/managerRequest/requests/${id}`).then(
    console.log("req deleted succesffully")
  )
}
const approveRequest = ()=>{
  axios.post("http://localhost:3000/admin/owner-request")
  console.log("req added succesfully")

}
const DetailedView = () => {
    const classes = usestyle();
    const params = useParams();
    const [request,setRequest] =  useState({})
    useEffect(()=>{
      const fetchdata = async ()=>{
        console.log("Fetch data started")
       console.log(Object.values(params))

        let managerrequest =  await axios.get(`http://localhost:3000/managerRequest/requests/${Object.values(params)}`)
        console.log("This is after managerrequest working")
        console.log(managerrequest.data.response);
        setRequest(managerrequest.data.response);
      }
      fetchdata();
    },[])

    
    return (
        <div>
            <Grid container justify = "center">
            <img src = {Image} className={classes.image}/>
            
            </Grid>
            <Grid container justify = "center">
            <Box className = {classes.container}>
            
             <Delete className={classes.icon} color="error" />
             <CheckCircle className={classes.icon} color="primary" />
           
          </Box>
            </Grid>
            <Typography className = {classes.heading}> Manager Request </Typography>
            <Grid container justify = "center">
               
            <Box className = {classes.container}>
            
               <Typography> First Name : {request.firstName}</Typography>
               <Typography> Last Name :  {request.lastName} </Typography>
               <Typography> Email : {request.email}  </Typography>
               <Typography> Date of birth :  {request.dateOfBirth} </Typography>
               <Typography> Aadhar number : {request.aadhar}  </Typography>
               <Typography> Contact : {request.contact} </Typography>
               <Typography> Alternative number : {request.alternative}  </Typography>
               <Typography> Residence address : {request.residence} </Typography>
               <Typography> Parking lot address : {request.address} </Typography>
               <Typography> Pin : {request.pin}</Typography>
               <Typography> City : {request.city}</Typography>
               <Typography> Area : {request.area}</Typography>
               <Typography> Slots :{request.slots}</Typography>
               <Typography> Fees :{request.fees}</Typography>
          </Box>
          
            </Grid>
            <div className="buttoncontainer" styles={ {
        display:'flex',
        justify:'center',
        alignItems:'center',
        height:'200px',
        border:'3px solid green'
}}>
            
            <button id="ApproveButton" onClick = {()=>{
              approveRequest();
            }}> Approve </button>
             <button id="denyButton" onClick={()=>{
               deleteRequest(request._id);
             }}> deny</button>
             </div>
           </div> 
        
    )
}

export default DetailedView

