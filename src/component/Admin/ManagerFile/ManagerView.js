import React from 'react'
import Requests from './Requests';
import { Grid } from '@material-ui/core';

const ManagerView = () => {
    return (
       <>
       
        <Grid container item lg={12} sm={10} xs={14}>
        <Requests/>
            </Grid> 
       
        </>
    )
}

export default ManagerView


