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
const Request = ({request}) => {
    const classes = usestyles();
    return (
        <div>
            <Box className={classes.container}>
             <img className={classes.image} src = {Image} />
             <Typography> Name {request.firstName}</Typography>
             <Typography> City {request.city}</Typography>
             <Typography> Area {request.area}</Typography>
            </Box>
        </div>
    )
}

export default Request
