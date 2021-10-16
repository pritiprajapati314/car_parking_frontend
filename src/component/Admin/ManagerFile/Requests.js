import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Request from './Request' 
import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react';

export default class Requests extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            response : '', 
            requests:[]
         }
     }

    async componentDidMount(){
        
        await axios.get('http://localhost:3000/managerRequest/requests').then(res => this.requests = res.data)
        console.log("i am getting the result", this.requests);
    }

     
     
    render() {
        // const {requests} = this.state
        
        return (
            
            [this.requests].map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <Request req={req}/>
             
           </Grid>)
          
            

        )
    }
}

