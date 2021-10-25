import React from 'react'
import Requests from './Requests';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Navbar from '../../FrontPage/Navbar'
const ManagerView = () => {
    return (
       <>
       
        <Grid container item lg={12} sm={8} xs={12}>
          <Header/>
        <Requests/>
            </Grid> 
       
        </>
    )
}

export default ManagerView


