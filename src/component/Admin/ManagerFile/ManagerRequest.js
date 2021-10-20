import React, { Component } from 'react'
import style from './Request.module.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Success from './Success';
import axios from 'axios';
import { colors } from '@material-ui/core';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

  
class ManagerRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName :'',
            lastName : '',
            email : '',
            dateOfBirth : '',
            aadhar: '',
            contact : '',
            alternative:'',
            residence:'',
            address : '',
            pin : '',
            city:'',
            area:'',
            slots:'',
            fees:'',
            gender:'', 
            errors: {
                firstName: '',
                lastName :'',
                email : '',
                dateOfBirth : '',
                aadhar: '',
                contact : '',
                alternative:'',
                residence:'',
                address : '',
                pin : '',
                city:'',
                area:'',
                slots:'',
                fees:'',
                gender:''
              }
        };
    }
    handleChange = (e)=>{
            
            let errors = this.state.errors;
            switch(e.target.name)
            {
                case 'firstName':
                    errors.firstName = e.target.value.length <3?'first Name should have length greater than 3':'';
                    break;

                case 'lastName':
                    errors.lastName =  e.target.value.length <3?'last Name should have length greater than 3':'';
                    break;
                case 'email': 
                    errors.email =  validEmailRegex.test(e.target.value) ? '': 'Email is not valid!';
                 break;
                case 'dateOfBirth':
                    errors.dateOfBirth = e.target.value.length <8 ?'Enter correct dob':'';
                    break;
                case 'aadhar':
                    errors.aadhar = e.target.value.length<12?'Enter a valid aadhar number':'';
                    break;
                case 'contact':
                    errors.contact = e.target.value.length<10?'Enter a valid phone number':'';
                    break;
             case 'alternative':
                errors.alternative = e.target.value.length<10?'Enter a valid phone number':'';
                     break;
            case 'residence':
                errors.residence = e.target.value.length<5?'Address should be greater than 5 chracters':'';
                    break;
            case 'address':
                 errors.address= e.target.value.length<5?'Address should be greater than 5 chracters':'';
                 break;
            case 'pin':
                errors.pin = e.target.value.length<6?'Pin should be 6 characters':'';
                break;
            case 'city':
                errors.city = e.target.value.length<3?'City name should be greater than 3 chracters':'';
                break;
             case 'area':
                errors.area = e.target.value.length<3?'Area name should be greater than 3 chracters':'';
                break;
            case 'slots':
                errors.slots = e.target.value.length<1?'Please enter the slots':'';
                break;
            case 'fees':
                errors.fees = e.target.value.length<1?'Please enter the fees':'';
                break;

            default:
                break;
            
            }
            
            this.setState({errors,
                ...this.state,
                [e.target.name]: e.target.value
            })
            
        }
    
        handleSubmit = async (e)=>{
            e.preventDefault();
            if(validateForm(this.state.errors)){
                console.log('valid form');
            const result = {
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                email : this.state.email,
                dateOfBirth : this.state.dateOfBirth,
                aadhar: this.state.aadhar,
                contact : this.state.contact,
                alternative:this.state.alternative,
                residence:this.state.residence,
                address : this.state.address,
                pin : this.state.pin,
                city:this.state.city,
                area:this.state.area,
                slots:this.state.slots,
                fees:this.state.fees,
                gender:this.state.gender
                
               
            }
           
            let res = await axios.post('http://localhost:3000/managerRequest/save', result).then(res => console.log(res.data),
            this.props.history.push('managerRequest/Success'))
        }
        else{
            
            console.log('Invalid');
            return;
        }
           
        }
    
  
    render(){
        const {errors} = this.state;
        const errorstyle = {
            color: "red",
            fontSize: '15px',
            fontFamily: "Arial"
          };
        return(
        <div className={style.hero}>
            <div className={style.container}>
            <div className = {style.formbox}>
            <div className={style.title}><h2>Manager Request Form!</h2><h6>Join and experience the most convenient way to park!</h6></div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div className={style.userdetails}>
                        <div className={style.inputbox}>
                            <span className={style.details}>First Name</span>
                            <input name = "firstName" 
                          id = "firstName" type="text" className={style.icon}  placeholder="&#xf508; Enter your first Name"
                          value = {this.state.firstName}
                          onChange = {this.handleChange}
                           required />
                               {errors.firstName.length > 0 && 
                <span style={errorstyle} className='error'>{errors.firstName}</span>}         
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Last Name</span>
                            <input name = "lastName" id = "lastName" type="text" className={style.icon}  placeholder="&#xf508; Enter your last Name"
                              value = {this.state.lastName}
                              onChange = {this.handleChange}
                               required />
                                {errors.lastName.length > 0 && 
                <span style={errorstyle} className='error'>{errors.lastName}</span>}          
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Email Id</span>
                            <input type="email" name="email" value="email" className={style.icon} placeholder="&#xf199; Enter your Email Address"
                             value = {this.state.email}
                             onChange = {this.handleChange}
                             required />
                                  {errors.email.length > 0 && 
                <span style={errorstyle} className='error'>{errors.email}</span>}      
                        </div>
                        <div className = {style.inputbox}> 
                        <span className={style.details}>DOB</span>
                        <input name = "dateOfBirth" id = "dateOfBirth" type="date"
                         placeholder="Enter DOB "
                         value = {this.state.dateOfBirth}
                         onChange = {this.handleChange}
                          required/>
                           {errors.dateOfBirth.length > 0 && 
                <span style={errorstyle} className='error'>{errors.dateOfBirth}</span>}        
                          </div>

                          <div className={style.inputbox}>
                            <span className={style.details}>Aadhar Number</span>
                            <input name="aadhar" id = "aadhar" type="text"  className={style.icon} placeholder="Enter aadhar number" pattern="[0-9]{12}"
                             value = {this.state.aadhar}
                             onChange = {this.handleChange}
                            required />   
                            {errors.aadhar.length > 0 && 
                <span style={errorstyle} className='error'>{errors.aadhar}</span>}               
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Contact Number</span>
                            <input name = "contact" id = "contact" type="number"  className={style.icon} placeholder="&#xf879; 97XXXXXXX9" pattern="[0-9]{10}" 
                            value = {this.state.contact}
                            onChange = {this.handleChange}
                            required /> 
                             {errors.contact.length > 0 && 
                <span style={errorstyle} className='error'>{errors.contact}</span>}                 
                        </div>
                       

                        <div className={style.inputbox}>
                            <span className={style.details}>Alternative Number</span>
                            <input name = "alternative" id="alternative" type="text"  className={style.icon} placeholder="&#xf879; 97XXXXXXX9" pattern="[0-9]{10}" 
                            value = {this.state.alternative}
                            onChange = {this.handleChange}
                            required />
                             {errors.alternative.length > 0 && 
                <span style={errorstyle} className='error'>{errors.alternative}</span>}                  
                        </div>

                        <div className={style.inputbox}>
                            <span className={style.details}>Residential Address</span>
                            <input name="residence" id="residence" type="text" className={style.icon}  placeholder="&#xf084; Enter your Address" required
                            value = {this.state.residence}
                            onChange = {this.handleChange} />
                              {errors.residence.length > 0 && 
                <span style={errorstyle} className='error'>{errors.residence}</span>}                   
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Parking lot Address</span>
                            <input name="address" id="address" type="text" className={style.icon}  placeholder="&#xf084;Parking Lot/Take Incharge Of" 
                            value = {this.state.address}
                            onChange = {this.handleChange}
                            required />
                               {errors.address.length > 0 && 
                <span style={errorstyle} className='error'>{errors.address}</span>}                  
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Pin Code</span>
                            <input name="pin" id="pin" type="number" className={style.icon}  placeholder="&#xf084; 6-digit Pin-Code" required
                             value = {this.state.pin}
                             onChange = {this.handleChange} />  
                              {errors.pin.length > 0 && 
                <span style={errorstyle} className='error'>{errors.pin}</span>}                       
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>City</span>
                            <input name = "city" id="city" type="text" className={style.icon} 
                             placeholder="&#xf084; Enter your City"
                             value = {this.state.city}
                             onChange = {this.handleChange}
                              required /> 
                               {errors.city.length > 0 && 
                <span style={errorstyle} className='error'>{errors.city}</span>}                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Area</span>
                            <input name="area" id="area" type="text" className={style.icon}  placeholder="&#xf084; Enter your Area"
                            value = {this.state.area}
                            onChange = {this.handleChange}
                            required />  
                             {errors.area.length > 0 && 
                <span style={errorstyle} className='error'>{errors.area}</span>}                       
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>No of slots</span>
                            <input name="slots" id="slots" type="number" className={style.icon}  placeholder="Enter number of slots" 
                            value = {this.state.slots}
                            onChange = {this.handleChange}
                            required /> 
                             {errors.slots.length > 0 && 
                <span style={errorstyle} className='error'>{errors.slots}</span>}                        
                        </div>
                        <div className={style.inputbox}>
                            <span className={style.details}>Fees</span>
                            <input name="fees" id="fees" type="number" className={style.icon}  placeholder=" Enter parking fees" 
                            value = {this.state.fees}
                            onChange = {this.handleChange}
                            required />  
                             {errors.fees.length > 0 && 
                <span style={errorstyle} className='error'>{errors.fees}</span>}                       
                        </div>
                    </div>
                    {/* <div className={style.genderdetails}>
                            Gender :
                                
                            <span>MALE <input type="radio" name="gender" id="male" 
                            value = {this.state.gender}
                            onChange = {this.handleChange} /></span>
                            <span>FEMALE <input type="radio" name="gender" id="female" 
                             value = {this.state.gender}
                             onChange = {this.handleChange} 
                            /></span>
                            <span>OTHERS<input type="radio" name="gender" id="other" 
                             value = {this.state.gender}
                             onChange = {this.handleChange} /></span>
                    </div> */}
                    <div className={style.button}>
                     <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                  
                    </div>
                    <hr />
                    <h4>Already Our Member?</h4>
                    <Link  to='/managerRequest/managerLogin'> <div className={style.submitbtn}>Login</div></Link>
                
                </form>
            </div>
                
        </div>
    </div>
      
        )
                    }
}

export default ManagerRequest;