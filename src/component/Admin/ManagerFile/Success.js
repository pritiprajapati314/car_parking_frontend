import React, { Component } from 'react';

import  AppBar  from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from '@material-ui/core/Toolbar'
import { Grid, Paper, Avatar, FormControlLabel, Typography, Checkbox, Link, IconButton } from '@material-ui/core'
export class Success extends Component {
    render() {
        const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "70px auto" }
        return (
            <ThemeProvider>
               
                <AppBar>
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
             Form Submitted Successfully!
            </Typography>
            
          </ToolBar>
        </AppBar>
    <React.Fragment>
    <Paper elevation={0} style={paperStyle}>
        <h1>Thank You for your Submission!</h1><br/><br/>
        <p>Our Admin will soon update you with further instructions...</p>
         </Paper>      
        </React.Fragment>
                </ThemeProvider>
        );
    }
}

export default Success