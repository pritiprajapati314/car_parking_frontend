import React, { Component } from 'react'
import Navbar2 from '../UserStyles/Navbar2'
import './BookSlot.css';
import {Paper} from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios'
//import Map from '../MapFile/Map';
// class BookSlot extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          Location:'',
    //          Date:'',
    //          StartTime:'',
    //          endTime:''

    //     }
    // }
    // handleLocationChange = (event)=>{
    //     this.setState({
    //         Location:event.target.value
    //     })
    // }

    // handleDateChange = (event)=>{
    //     this.setState({
    //         Date:event.target.value
    //     })
    // }
    // handleStartTimeChange = (event)=>{
    //     this.setState({
    //         StartTime:event.target.value
    //     })
    // }
    // handleendTimeChange = (event)=>{
    //     this.setState({
    //         endTime:event.target.value
    //     })
    // }
//      render() {
//         return (
           
//             <div>
//                <Navbar2/> 
//                {/* <div className="main">
//                <h2> Book Slot </h2>
//                    <div className="MainForm">
                   
//                <form className="BookingSlot">
//                    <label>Location : &nbsp;</label>
//                    <input type="text" value={this.state.Location} onChange={this.handleLocationChange}>

//                    </input>
//                    <br/>
//                    <label>Date : &nbsp;</label>
//                    <input type="Date" value={this.state.Date} onChange={this.handleDateChange}>
//                    </input>
//                    <br/>
//                    <label>Start Time : &nbsp;</label>
//                    <input type="time" value={this.state.StartTime} onChange={this.handleStartTimeChange}>
//                    </input>
//                    <br/>
//                    <label>End Time: &nbsp;</label>
//                    <input type="time" value={this.state.endTime} onChange={this.handleendTimeChange}>
//                    </input>
                   
//                </form>
//                </div>
//                </div>  */}
//                <div style={{margin:'50px'}}>
//                    <h1 style={{alignContent:'center'}}> Book Your Slot </h1>
//                <Map
//      google={this.props.google}
//      center={{lat: 18.5204, lng: 73.8567}}
//      height='300px'
//      zoom={15}
//     />
//     </div>
//             </div>
//         )
//     }
// }


// class BookSlot extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         latitude: '',
//         longitude: '',
//       }
  
//       this.getMyLocation = this.getMyLocation.bind(this)
//     }
    
//     componentDidMount() {
//       this.getMyLocation()
//     }
  
//     getMyLocation() {
//       const location = window.navigator && window.navigator.geolocation
      
//       if (location) {
//         location.getCurrentPosition((position) => {
//           this.setState({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           })
//         }, (error) => {
//           this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
//         })
//       }
  
//     }

//     handleSubmit = async (e)=>{
//         e.preventDefault();

//         const record = {
//             latitude: 21.8131243, 
//             longitude: 80.1837949,
//         }
//         await axios.post('http://localhost:3000/user/bookSlot', record).then()
        
//     }
  
//     render() {
//       const { latitude, longitude } = this.state
      
//       return (
//         <div>
//           <input type="text" value={latitude} />
//           <input type="text" value={longitude} />
//           <button onClick={this.handleSubmit}>submit</button>
//         </div>
//       )
//     }
//   }


// const BookSlot = () => {
//   const [details,setDetails] = useState(null)
//   const getUserGeolocationDetails =async()=>{
//     await axios.get("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0").
//      then(response=>console.log(response.data)).
//      then(data=>setDetails(data))

//   }
//   return (
//     <div>
//       <button className="btn btn-primary" onclick={getUserGeolocationDetails}>Get location</button>
      
//     </div>
//   )
// }



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
 
  let res = await axios.post('http://localhost:3000/bookingSearch/search-parking', result).then(res => console.log(res.data),
  this.props.history.push('/Searchpage'))
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
    const {errors} = this.state;
    const errorstyle = {
        color: "red",
        fontSize: '15px',
        fontFamily: "Arial"
      };
    const paperStyle = { padding: 50, height: '70vh', width: 600, margin: "70px auto" }
    return (
        
        <div className="main">
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

