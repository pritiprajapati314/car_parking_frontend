import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from '../images/requests.jpg'
import Header from './Header'
// import { styled } from '@material-ui/material/styles';
// import Card from '@material-ui/material/Card';
// import CardHeader from '@material-ui/material/CardHeader';
// import CardMedia from '@material-ui/material/CardMedia';
// import CardContent from '@material-ui/material/CardContent';
// import { mergeClasses } from '@material-ui/styles'

const usestyles = makeStyles({
   container:{
     height:280,
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
     width:'80%'

   },
   text:{
       
   }

})
const Request = ({req}) => {
    const classes = usestyles();
    return (
        <div>
          {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }/>
              <CardMedia
        component="img"
        height="194"
        image="./p5.jpg"
        alt="Manager"
      />

           <CardContent>
        
        <Typography> Name:{req.firstName} {req.lastName}</Typography>
             <Typography> City: {req.city}</Typography>
             <Typography> Area:{req.area}</Typography>
       
      </CardContent> */}
       <Header/>
            <Box className={classes.container}>
             <img className={classes.image} src = {Image} />
             <Typography> Name:{req.firstName} {req.lastName}</Typography>
             <Typography> City: {req.city}</Typography>
             <Typography> Area:{req.area}</Typography>
            </Box>
            
        </div>
    )
}

export default Request
