import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from '../images/requests.jpg'
import { mergeClasses } from '@material-ui/styles'

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
            
            <Box className={classes.container}>
             <img className={classes.image} src = {Image} />
             <Typography> Name </Typography>
             <Typography> City</Typography>
             <Typography> Area</Typography>
            </Box>
            
        </div>
    )
}

export default Request
