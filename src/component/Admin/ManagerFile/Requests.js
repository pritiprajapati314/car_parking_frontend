import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Request from './Request' 
import { Grid } from '@material-ui/core'

import axios from 'axios'
import React, { Component } from 'react';
const Requests = () => {
    const [requests,setRequests] = useState([]);
 
    useEffect(()=>{
   const fetchdata = async ()=>{
    let mydata = await axios.get('http://localhost:3000/managerRequest/requests')
    console.log(mydata.data.response)
    setRequests(mydata.data.response);    
   }
   fetchdata();
 },[])
    return (
      
        requests.map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <Link to={`/detailedView/${req._id}`} style = {{textDecoration:'none',color:'inherit'}} >
             <Request req={req}/>
             </Link>
             
           </Grid>)
           
    )
}

export default Requests;