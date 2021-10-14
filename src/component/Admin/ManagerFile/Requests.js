
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getAllrequests} from '../../../service/api'
import Request from './Request' 
import { Grid } from '@material-ui/core'
const Requests = () => {
    // const [requests,setRequests] = useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //        let data =  await getAllrequests();
    //        console.log(data)
    //     }
    //     fetchData();
    // },[])
    let requests = [1,2,3,4,5,6,7,8,9]

    return (
           requests.map(request=>
            <Grid item lg={3} sm={4} xs={12}>
                {/* <Link style = {{textDecoration:'none'}}to = {'/detailedView'}> */}
            <Request/>
            {/* </Link> */}
        </Grid>
        )
        
    )
}

export default Requests
