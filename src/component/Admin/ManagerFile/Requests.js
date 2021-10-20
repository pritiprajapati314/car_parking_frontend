import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Request from './Request' 
import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react';

// export default class Requests extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//             response : '', 
//             requests:[]
//          }
//      }

//     async componentDidMount(){
        
//         await axios.get('http://localhost:3000/managerRequest/requests').then(res => this.requests = Object.values(res.data))
//         console.log("i am getting the result", typeof(this.requests));
//     }

     
     
//     render() {
//         // const {requests} = this.state
        
//         return (
            
//             [this.requests].map(req =>
//             <Grid item lg={3} sm={4} xs={12}>
//              <Request req={req}/>
             
//            </Grid>)
          
            

//         )
//     }
// }

const Requests = () => {
    const [requests,setRequests] = useState([]);
    useEffect(()=>{
   const fetchdata = async ()=>{
    let mydata = await axios.get('http://localhost:3000/managerRequest/requests')
    console.log(mydata.data)
    setRequests(Object.values(mydata.data));    
   }
   fetchdata(); },[])
    return (
        [requests].map(req =>
            <Grid item lg={3} sm={4} xs={12}>
             <Request req={req}/>
             
           </Grid>)
    )
}

export default Requests;