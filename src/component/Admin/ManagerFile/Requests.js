
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Request from './Request' 
import { Grid } from '@material-ui/core'
import axios from 'axios'
// const Requests = () => {
//     // // const [requests,setRequests] = useState([])
//     // // useEffect(()=>{
//     // //     const fetchData = async()=>{
//     // //        let data =  await getAllrequests();
//     // //        console.log(data)
//     // //     }
//     // //     fetchData();
//     // // },[])
//     // let requests = [1,2,3,4,5,6,7,8,9]

//     return (
//            requests.map(request=>
//             <Grid item lg={3} sm={4} xs={12}>
//                 {/* <Link style = {{textDecoration:'none'}}to = {'/detailedView'}> */}
//             <Request/>
//             {/* </Link> */}
//         </Grid>
//         )
        
//     )
// }

// export default Requests
import React, { Component } from 'react'

 class Requests extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              requests:[]
         }
     }
     componentDidMount(){
         axios.get('http://localhost:3000/managerRequest/requests').then(response=>{
             console.log(response)
             this.setState({requests:response.data})
         }).catch(error=>{
             console.log(error)
         })
     }
     
    render() {
        const {requests} = this.state

        return (
            
            
               
                [requests].map(request =>
             <Grid item lg={3} sm={4} xs={12}>
                 {/* <Link style = {{textDecoration:'none'}}to = {'/detailedView'}> */}
             <Request request={request}/>
             {/* </Link> */}
         </Grid> )

        )
    }
}
export default Requests;
