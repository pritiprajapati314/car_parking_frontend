
import React from 'react'
import {Box,makeStyles,Grid, Typography}  from '@material-ui/core'
import {Edit,Delete,CheckCircle} from '@material-ui/icons'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from '../images/av_m.jpg' 
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
            
               <Typography> First Name </Typography>
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
