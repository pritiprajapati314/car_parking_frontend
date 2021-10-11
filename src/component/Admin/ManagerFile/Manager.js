import React, { Component } from 'react'
import stylem from './manager_register_style.module.css';
import Image from '../images/av_m.jpg';
import axios from 'axios';
class Manager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ownerId: '',
            firstName : '',
            LastName : '', 
            contact : '',
            dateOfBirth : '',
            address : '',
            addressId:'',
            city:'',
            pin : '',
        }
    }
    handleChange = (e)=>{
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })
        }
    
        handleSubmit = async (e)=>{
            e.preventDefault();
    
            const result = {
                ownerId:this.state.ownerId,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                contact : this.state.contact,
                dateOfBirth : this.state.dateOfBirth,
                address : this.state.address,
                addressId:this.state.addressId,
                city:this.state.city,
                pin : this.state.pin,
                
               
            }
            console.log(result);
            let res = await axios.post('http://localhost:3000/adminPanel/manager', result).then(res => console.log(res.data))
            console.log(res);
           
        }
    
    render(){
    return (
        <div>
            <section className={stylem.section}>
        <div className={stylem.container}>
            <div className={stylem.user}>
                <div className={stylem.imgbx}>
                    <img src={Image}/></div>
                <div className={stylem.frmbx}>
                    <form className={stylem.form} onSubmit={this.handleSubmit}>
                        <h2>Welcome to</h2>
                        <h2>Manager Registration!</h2>
                        <div className = {stylem.formInputs}>  
                        <input name ="ownerId" id="ownerId" 
                        type="number"  placeholder=" Manager ID" 
                         value = {this.state.ownerId}
                            onChange = {this.handleChange}
                             pattern="[0-9]{12}" required/>
                             </div>
                        <div className = {stylem.formInputs}> 
                          <input name = "firstName" 
                          id = "firstName" type="text"
                           placeholder="Enter First Name" 
                           value = {this.state.firstName}
                           onChange = {this.handleChange}
                           required/>
                            </div>
                        <div className = {stylem.formInputs}>  
                        <input name = "lastName" id = "lastName" type="text"
                         placeholder="Enter Last Name" 
                         value = {this.state.lastName}
                         onChange = {this.handleChange}
                         required/></div>
                        <div className = {stylem.formInputs}>  
                        <input name = "dateOfBirth" id = "dateOfBirth" type="date"
                         placeholder="Enter DOB "
                         value = {this.state.dateOfBirth}
                         onChange = {this.handleChange}
                          required/>
                          </div>
                        <div className = {stylem.formInputs}> 
                        <input name = "contact" id = "contact" type="number"
                          placeholder="Contact Number" 
                          value = {this.state.contact}
                         onChange = {this.handleChange}
                          pattern="[0-9]{10}" required/> </div>
                        <div className = {stylem.formInputs}> 
                        <textarea name="address" id="address" cols="50" rows="2"
                            placeholder="Address: Incharge of Area "
                            value = {this.state.address}
                         onChange = {this.handleChange}
                            >
                            </textarea>
                            </div>
                       
                        <div className = {stylem.formInputs}>
                            <input name = "addressId" id = "addressId" type="text" 
                            placeholder="Enter Address ID "
                            value = {this.state.addressId}
                         onChange = {this.handleChange}
                             />  </div>
                        <div className = {stylem.formInputs}> 
                        <input name = "city" id = "city" type="text" 
                        placeholder="Enter City " 
                        value = {this.state.city}
                         onChange = {this.handleChange}
                        required/> </div>
                        <div className ={stylem.formInputs}> 
                            <input name="pin" id="pin" type="text" placeholder="Enter Pin " 
                            value = {this.state.pin}
                            onChange = {this.handleChange}
                            required/> 
                       </div>
                       
                       <div className ={stylem.formInputs}>  <input type="submit" value="Save & Next"/></div>
                       
                    </form>

                </div>

            </div>
        </div>
    </section>
        </div>
    )
    }
}
export default Manager
