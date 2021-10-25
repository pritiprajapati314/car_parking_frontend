
import React from 'react'
import { useState,useEffect } from 'react'
import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
import {Delete,CheckCircle} from '@material-ui/icons'
import Image from '../images/av_m.jpg' 
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
const DetailedView = () => {
    const classes = usestyle();
    const params = useParams();
    console.log(JSON.stringify(params))
    const [request,setRequest] =  useState({})
    useEffect(()=>{
      const fetchdata = async ()=>{
        console.log("Fetch data started")
        // console.log(id)

        let managerrequest =  await axios.get(`http://localhost:3000/managerRequest/requests/${params}`)
        console.log("This is after managerrequest working")
        console.log(managerrequest);
        setRequest(managerrequest.data);
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
            {JSON.stringify(params)}
               <Typography> First Name</Typography>
               <Typography> Last Name </Typography>
               <Typography> Email </Typography>
               <Typography> Date of birth</Typography>
               <Typography> Aadhar number </Typography>
               <Typography> Contact </Typography>
               <Typography> Alternative number </Typography>
               <Typography> Residence adress </Typography>
               <Typography> Parking lot address</Typography>
               <Typography> Pin</Typography>
               <Typography> City</Typography>
               <Typography> Area</Typography>
               <Typography> Slots</Typography>
               <Typography> Fees </Typography>
          </Box>
            </Grid>
          
        </div>
    )
}

export default DetailedView
