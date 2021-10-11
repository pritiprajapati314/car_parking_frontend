import React from 'react'
import { Link } from 'react-router-dom'
import Request from './Request' 
import { Grid } from '@material-ui/core'
const Requests = () => {
    let requests = [1,2,3,4,5,6,7,8,9]
    return (
           requests.map(requests=>
            <Grid item lg={3} sm={4} xs={12}>
                {/* <Link style = {{textDecoration:'none'}}to = {'/detailedView'}> */}
            <Request/>
            {/* </Link> */}
        </Grid>
        )
        
    )
}

export default Requests
