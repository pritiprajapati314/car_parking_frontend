
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react';
import ParkingLot from './ParkingLot'
const ParkingLots = () => {
    const [parkings,setParkings] = useState([]);
    useEffect(()=>{
   const fetchdata = async ()=>{
    let mydata = await axios.get('http://localhost:3000/admin/view-parking')
    console.log(mydata.data.response)
    setParkings(mydata.data.response);    
   }
   fetchdata();
 },[])
    return (
        <div>
          
           <ParkingLot/>
        </div>
    )
}

export default ParkingLots

