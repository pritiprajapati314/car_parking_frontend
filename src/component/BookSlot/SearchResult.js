import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import axios from 'axios'
import React, { Component } from 'react';
import SlotsDisplay from './SlotsDisplay';
import {data} from './BookSlot';

const SearchResult = () => {
    //const [requests,setRequests] = useState([]);
 
    
    return (
             data.pass.map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <SlotsDisplay req={req}/>
           </Grid>)
      
    )
}

export default SearchResult
