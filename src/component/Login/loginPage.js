import React from 'react'
import {useState} from 'react'
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect} from 'react-redux';

// import {connect} from 'react-redux';
//import addToken from '../../state';
//import dateFormat from 'dateformat';
//import Box from '@mui/material/Box';

import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import {loginUser} from '../../redux/auth/AuthActions';
import style from './loginPage.module.css'

//let response = '';

const theme = createTheme();

const LoginPage = ({auth, loginUser}) => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({...userLogin, [name] : value})
    }

    //const Dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const record = ({...userLogin});
        // await axios.post('http://localhost:3000/user/login', record).then(res => response = res);
        // if(response.data.token.length){
        //     Dispatch(user_login(response.data));
        //     //props.history.push("/");
        // }
        loginUser(userLogin);
        //if()
    }
    

    return (

        <div id = {style.hero}>
            <div className={style.container}>
            <ThemeProvider  theme={theme}>
                <CssBaseline />
                <Container  component="main" maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 4 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="center">
                            Login
                        </Typography>


                        {auth.isUserLoggedIn ?
                            <Redirect to="/" />
                        : <React.Fragment>
                            <Grid container spacing={3}>
                                <Grid item xs={12} >
                                    <TextField 
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={userLogin.email}
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid> 
                                <Grid item xs={12} >
                                    <TextField 
                                        required
                                        id="password"
                                        name="password"
                                        label="Password"
                                        value={userLogin.password}
                                        onChange={handleChange}
                                        type="password"
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Link href="/login" variant="body2">
                                        Forgot Password
                                    </Link>
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                        fullWidth
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        LOGIN

                                        { auth.fetchingToken ?
                                            <CircularProgress sx={{ color: 'grey.50' }}/>
                                            :
                                            <></>
                                        }
                                    </Button>
                                </Grid>
                            </Grid>


                        
                            <Link href="/login" variant="body2">
                                Already have an account? Sign In Here
                            </Link>

                        </React.Fragment>
                        
                        }

                        
                    </Paper>
                </Container>
            </ThemeProvider>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userCreds) => dispatch(loginUser(userCreds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
