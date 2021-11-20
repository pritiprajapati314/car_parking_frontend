import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from './BookImage.jpg'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red,grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import {  CardActionArea, CardActions } from '@mui/material';
import { Redirect } from 'react-router-dom';
import { RepeatRounded } from '@material-ui/icons';
const usestyles = makeStyles({
    container:{
      height:400,
      width:400,
      margin:10,
      borderRadius:10,
      display:'flex',
      flexDirection:'column',
      '& > *':{
          padding:'0 5px 5px 5px'
      },
      border:'10px #d3ced',
      alignItems:'left',
      
    },
    image:{
      height:150,
      width:'100%'
 
    },
    text:{
     fontfamily: 'Open Sans',
    
     fontweight: 400
    }
 
 })
// const  handleSubmit=props=>
//  {
   
//   props.history.push("/bookingView")
    
   
   
//  }
const SlotsDisplay = ({req}) => {
    const classes = usestyles();
    return (
        <div>
             
           <Card sx={{ maxWidth: 400,bgcolor: grey[100]}} className={classes.container}>
           <CardActionArea>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        title = "Parking Space" 
        />
         <img className={classes.image} src = {Image} />
           <CardContent>
        
        <Typography  style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Id:{req.parkingLotId} </Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > City:{req.city} </Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Area:{req.area}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Price:{req.fees}</Typography>
           
      </CardContent>
      <button type="button" styles={{color:'blue'}}>
         Book Now
     </button>
      </CardActionArea>

     
      </Card>
      
        </div>
    )
}

export default SlotsDisplay
