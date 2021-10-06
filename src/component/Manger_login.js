import React from 'react'

import { Grid, Paper, Avatar, FormControlLabel, Typography, Checkbox, Link, IconButton } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CheckBox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';
// import '@fontsource-roboto';
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'



const ManagerLogin = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "70px auto" }
  const avatarStyle = { background: '#148d14' }
  return (
    <ThemeProvider>
      <Grid>
        <AppBar>
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              Welcome Manager!
            </Typography>
          </ToolBar>
        </AppBar>

        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>

            <Avatar style={avatarStyle}><MenuIcon /></Avatar>
            <h2>Login!</h2>
          </Grid>
          <TextField label='ManagerID' variant="outlined" placeholder='Enter your UserID' fullWidth required /><br />
          <br /><TextField label='Password' variant="outlined" placeholder='Enter your Password' type='password' fullWidth required />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button startIcon={<SaveIcon />} onClick={() => alert('Successfully Signing In!')} type='submit' color='primary' variant="contained" fullWidth>Sign In</Button>
          <Typography><Link href="#">
            Forgot Password?
          </Link>
          </Typography>
          <Typography align="center"><br /><br />Not Registered Yet?<br />
            <Link href="#">
              Request Now!

            </Link>
          </Typography>
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}
export default ManagerLogin