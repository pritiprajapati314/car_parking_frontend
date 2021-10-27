
import { useState,useEffect} from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react';
import ManagerList from './ManagerList'
const ManagerLists = () => {
    const [managers,setManagers] = useState([]);
    useEffect(()=>{
   const fetchdata = async ()=>{
    let mydata = await axios.get('http://localhost:3000/admin/view-manager')
    console.log(mydata.data.response)
    setManagers(mydata.data.response);    
   }
   fetchdata();
 },[])
    return (
        // managers.map(req=>{
        //     <Grid item lg={3} sm={4} xs={12}>
        //      <ManagerList/>
        //      </Grid>}
        
        managers.map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <ManagerList req={req}/>  
           </Grid>)
       
        
        
    )
}

export default ManagerLists

