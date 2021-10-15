import React, { Component } from 'react'
import style from './style2.module.css'
import axios from 'axios'
import dateFormat from 'dateformat';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AuthDetails from './AuthDetails';
import PersonalInfo from './PersonalInfo';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Review from './Review';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/* import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css" */

const steps = ['Login Details', 'Personal Information', 'Review & Register'];

const theme = createTheme();

let getCurrentStep = (step) => {
    switch(step){
        case 0:
            return <AuthDetails />
        case 1:
            return <PersonalInfo />
        case 2:
            return <Review />
        default:
            throw new Error('Unknown step');
    }
}


let Register = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep+1);
    };

    const handleBack = () => {
        setActiveStep(activeStep -1);
    }

    return (
        <div className = {style.hero}>
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <Container  component="main" maxWidth="sm" sx={{ mb: 4 }} >
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Sign Up
                    </Typography>

                    <Stepper activeStep={activeStep} alternativeLabel sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order
                            confirmation, and will send you an update when your order has
                            shipped.
                            </Typography>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            {getCurrentStep(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                            </Button>
                            </Box>
                        </React.Fragment>
                        )}
                    
                    <Link href="/login"  >
                        {'Already have an account? Sign In Here'}
                    </Link>
                    </React.Fragment>
                    
                </Paper>
            </Container>
        </ThemeProvider>
        </div>
       
        
       
    )
}


export default Register;




// export default class register extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             firstName : '',
//             LastName : '', 
//             email : '',
//             contact : '',
//             dateOfBirth : '',
//             address : '',
//             pin : '',
//             gender: '',
//             password: '',
//             cPassword: '',
//             vehicle: '',
//             userId: ''
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             /* username: 'test user' */
//         })
//     }

//     handleChange = (e)=>{
//         this.setState({
//             ...this.state,
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = async (e)=>{
//         e.preventDefault();

//         const record = {
//             firstName : this.state.firstName,
//             lastName : this.state.lastName,
//             contact : this.state.contact,
//             password : this.state.password,
//             cPassword : this.state.cPassword,
//             address : this.state.address,
//             vehicle : this.state.vehicle,
//             pin : this.state.pin,
//             dateOfBirth : dateFormat(this.state.dateOfBirth),
//             gender: this.state.gender,
//             email: this.state.email,
//             userId: this.state.userId
//         }
//         console.log("from front-end : ",record);
//         await axios.post('http://localhost:3000/user/register', record).then(res => (res.data))
        
//     }
//     render() {
//         return (
//             <div className={style.hero}>
//                 <div className={style.container}>
//                 <div className = {style.formbox}>
//                 <div className={style.title}>Registration Form</div>
//                     <form action="#" onSubmit={this.handleSubmit}>
//                         <div className={style.userdetails}>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>First Name</span>
//                                 <input type="text" 
//                                 className={style.icon}
//                                 name="firstName" 
//                                 value = {this.state.firstName}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf508; Enter your Name" 
//                                 required />            
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Last Name</span>
//                                 <input type="text" 
//                                 className={style.icon}
//                                 name="lastName" 
//                                 value = {this.state.lastName}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf508; Enter your Name" 
//                                 required />            
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Vehicle Number</span>
//                                 <input 
//                                 type="text"
//                                 name="vehicle"  
//                                 className={style.icon} 
//                                 value = {this.state.vehicle}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf63c; MP-04-HA-XXXX" 
//                                 required />
                                            
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Email Id</span>
//                                 <input 
//                                 type="email"  
//                                 name="email"
//                                 className={style.icon}
//                                 value = {this.state.email}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf199; Enter your Email Address" 
//                                 required />         
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Contact Number</span>
//                                 <input 
//                                 type="text"  
//                                 className={style.icon} 
//                                 name="contact"
//                                 value = {this.state.contact}
//                                 onChange = {this.handleChange}
                
//                                 placeholder="&#xf879; 97XXXXXXX9" 
//                                 pattern="[0-9]{10}" 
//                                 required />          
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Password</span>
//                                 <input 
//                                 type="password" 
//                                 className={style.icon}  
//                                 name="password"
//                                 value = {this.state.password}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Enter your Password" 
//                                 required />
                                            
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>Confirm Password</span>
//                                 <input 
//                                 type="password" 
//                                 className={style.icon}
//                                 name="cPassword"  
//                                 value = {this.state.cPassword}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Confirm your password" 
//                                 required />                 
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>dateOfBirth</span>
//                                 <input 
//                                 type="date" 
//                                 className={style.icon}
//                                 class="dateOfBirth"  
//                                 value = {this.state.dateOfBirth}
//                                 name = "dateOfBirth" 
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Enter your Password" 
//                                 required />     
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>address</span>
//                                 <input 
//                                 type="text" 
//                                 className={style.icon}  
//                                 name="address"
//                                 value = {this.state.address}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Enter your Password" 
//                                 required />
                                            
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>pin</span>
//                                 <input 
//                                 type="text" 
//                                 className={style.icon}
//                                 name="pin"  
//                                 value = {this.state.pin}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Confirm your password" 
//                                 required />                 
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>userID</span>
//                                 <input 
//                                 type="text" 
//                                 className={style.icon}
//                                 name="userId"  
//                                 value = {this.state.userId}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Confirm your password" 
//                                 required />                 
//                             </div>
//                             <div className={style.inputbox}>
//                                 <span className={style.details}>pin</span>
//                                 <input 
//                                 type="text" 
//                                 className={style.icon}
//                                 name="district"  
//                                 value = {this.state.pin}
//                                 onChange = {this.handleChange}
//                                 placeholder="&#xf084; Confirm your password" 
//                                 required />                 
//                             </div>
//                         </div>
//                         <div className={style.genderdetails}>
//                                 Gender :
                                    
//                                 <span>MALE <input type="radio" name="gender" value = "male" onChange = {this.handleChange} id="male" /></span>
//                                 <span>FEMALE <input type="radio" name="gender" value = "female" onChange = {this.handleChange} id="female" /></span>
//                                 <span>OTHERS<input type="radio" name="gender" value = "other" onChange = {this.handleChange} id="other" /></span>
//                         </div>
//                         <div className={style.button}>
//                         <input type="submit" value="Register" />
//                         </div>
//                         <hr />
//                         <h4>Already Registered?</h4>
//                         <a href="User_login.html"><div className={style.submitbtn}>Login</div></a>
//                     </form>
//                 </div>     
//             </div>
//         </div>
//         )
//     }
// }

