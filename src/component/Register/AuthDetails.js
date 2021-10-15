import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

let AuthDetails = ()=>{

    return (
        <React.Fragment>
            <Typography variant="h6" align="center" gutterBottom>
                Login Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField 
                        required
                        id="username"
                        label="Username"
                        variant="standard"
                        fullWidth
                        helperText="username cannot contain spaces or special characters"
                    />
                </Grid> 
                <Grid item xs={12} >
                    <TextField 
                        required
                        id="email"
                        label="Email"
                        variant="standard"
                        fullWidth
                    />
                </Grid> 
                <Grid item xs={12} >
                    <TextField 
                        required
                        id="password"
                        label="Password"
                        type="password"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField 
                        required
                        id="confirm-password"
                        label="Confirm Password"
                        type="password"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AuthDetails;