import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../UserStyles/Navbar2'
import './BookSlot.css';
import {Paper} from '@material-ui/core';
import Searchpage from './Searchpage'
import {Container, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import axios from 'axios'

export const data = {
  pass: 'i am'
};
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  var crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

 class BookSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
        city:'',
        area:'',
        pin : '',
        date : '',
        startTime:'',
        endTime:'',
        redirect: null,
        errors:{
          city:'',
          area:'',
          pin : '',
          date : '',
          startTime:'',
          endTime:'',
        }
    }
}
handleChange = (e)=>{
            
  let errors = this.state.errors;
  switch(e.target.name)
  {
      
  case 'pin':
      errors.pin = e.target.value.length<6?'Pin should be 6 characters':'';
      break;
  case 'city':
      errors.city = e.target.value.length<3?'City name should be greater than 3 chracters':'';
      break;
   case 'area':
      errors.area = e.target.value.length<3?'Area name should be greater than 3 chracters':'';
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
      city:this.state.city,
      area:this.state.area,
      pin : this.state.pin,
      startTime:this.state.startTime,
      endTime:this.state.endTime
  }
 
  await axios.post('http://localhost:3000/bookingSearch/search', result)
  .then(res => data.pass = res.data.response);
  console.log("pass", data.pass);
  this.setState({
    redirect: "/Searchpage"
  })
}
else{
  console.log('Invalid');
  return;
}
}
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const {errors} = this.state;
    const errorstyle = {
        color: "red",
        fontSize: '15px',
        fontFamily: "Arial"
      };
    const paperStyle = { padding: 50, height: '70vh', width: 600, margin: "70px auto" }
    return (
        
        <div>
          <Navbar2/>
          <Paper elevation={20} style={paperStyle}>
         
             
          
          <div className="MainForm">
          

                   
                <form className="BookingSlot">
                  <Row className="rows">
                    <Col className="clms">
                 
                   <label>City : &nbsp;</label></Col>
                   <Col className="clms">
                    <input name="city" id="city"  value = {this.state.city}
                          onChange = {this.handleChange} type="text" >
                   
                    </input>
                    </Col>
                    
                    </Row>
                    <Row className="rows">
                      <Col className="clms">
                    <label>Area: &nbsp;</label></Col>
                    <Col className="clms">
                    <input name="area" id = "area" value = {this.state.area}
                          onChange = {this.handleChange} type="text" >
                   
                    </input>
                    </Col>
                    </Row>
                   <Row className="rows">
                     <Col className="clms">

                    <label>Pin: &nbsp;</label></Col>
                    <Col className="clms">
                    <input name="pin" area = "pin" value = {this.state.pin}
                          onChange = {this.handleChange}type="text" >
                   
                    </input>
                    </Col>
                  </Row>
                  <Row className="rows">
                    <Col className="clms">
                    <label>Date : &nbsp;</label></Col>
                    <Col className="clms">
                    <input type="Date" name="date" id="date" value = {this.state.date}
                          onChange = {this.handleChange}>
                    </input>

                    </Col>
                    </Row>
                    <Row className="rows">
                      <Col className="clms">
                    <label>Start Time : &nbsp;</label></Col>
                    <Col className="clms"><input type="time" name="startTime" id="startTime"  value = {this.state.startTime}
                          onChange = {this.handleChange} >
                    </input></Col>
                   </Row>
                   <Row className="rows">
                     <Col className="clms">
                    <label>End Time: &nbsp;</label></Col>
                    <Col className="clms">
                    <input type="time" name="endTime" id="endTime"  value = {this.state.endTime}
                          onChange = {this.handleChange} >
                    </input>
                    </Col>
                    </Row>
                    <Row>
                    <button className="sub-btn" type="submit" value="submit" onClick={this.handleSubmit}>Submit</button>     
                    </Row>             
                </form>
                </div>
              
                </Paper>
              
                </div>  
    
   
    )
}
 }
 export default BookSlot;
//8dd79c70-0801-11ec-a29f-e381a788c2c0
//8dd79c70-0801-11ec-a29f-e381a788c2c0

