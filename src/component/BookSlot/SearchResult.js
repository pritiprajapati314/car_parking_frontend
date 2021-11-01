import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import axios from 'axios'
import React, { Component } from 'react';
import SlotsDisplay from './SlotsDisplay';

const SearchResult = () => {
    const [requests,setRequests] = useState([]);
 
    useEffect(()=>{
   const fetchdata = async ()=>{
    let mydata = await axios.get('http://localhost:3000/bookingSearch/search-results')
    console.log(mydata.data.response)
    setRequests(mydata.data.response);    
   }
   fetchdata();
  },[])
    return (
        
             requests.map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <SlotsDisplay req={req}/>
           </Grid>)
      
    )
}

export default SearchResult
