import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from './manImage.png'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red,grey } from '@mui/material/colors';
import {  CardActionArea, CardActions } from '@mui/material';
import { fontSize } from '@mui/system';
const usestyles = makeStyles({
   container:{
     height:340,
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
const Request = ({req}) => {
    const classes = usestyles();
    return (
        <div>
           <Card sx={{ maxWidth: 300,bgcolor: grey[100]}} className = {classes.container}>
           <CardActionArea>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        title = {req.firstName} 
        />
         <img className={classes.image} src = {Image} />
           <CardContent>
        
        <Typography  style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Name:{req.firstName} {req.lastName}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > City: {req.city}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Area:{req.area}</Typography>
       
      </CardContent>
      </CardActionArea>
      </Card>
      
            {/* <Box className={classes.container}>
             <img className={classes.image} src = {Image} />
             <Typography> Name:{req.firstName} {req.lastName}</Typography>
             <Typography> City: {req.city}</Typography>
             <Typography> Area:{req.area}</Typography>
            </Box> */}
            
        </div>
    )
}

export default Request
//npm install @mui/material @emotion/react @emotion/styled