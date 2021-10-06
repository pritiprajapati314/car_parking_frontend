import React from 'react'
import useForm from './useForm';
import validate from './validateInfo'
import './form.css';
 const AddParking = ({submitForm}) => {
     const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
    return (
        <div>
            <h1>Add Parking Space</h1>
            <div className = "form-content-right">
                
                <form  className='forms' onSubmit = {handleSubmit}>
                         
                                  
                           <div className="form-inputs">
                            <label htmlFor="email" className="form-label">Email </label>
                               <input type="email" 
                               name="email"
                                className="form-input" 
                                id = "email" 
                                placeholder="Enter email id"
                                value = {values.email} 
                                onChange={handleChange}
                                />
                            </div>
                            
                             <div className="form-inputs">
                            <label htmlFor="owner" className="form-label"> Owner Name </label>
                               <input type="text"
                                name="owner"
                                 className="form-input" 
                                 id="owner"
                                  placeholder="Enter owner name"
                                  value = {values.ownername} 
                                  onChange={handleChange}/> 
                                   
                               
                            </div> 
                           
                           <div className="form-inputs">
                            <label htmlFor="ownerid" className="form-label">Owner Id </label>
                               <input type="number" 
                               name="ownerid" 
                               className="form-input" 
                               id="ownerid" 
                               placeholder="Enter owner id"
                               value = {values.ownerid} 
                               onChange={handleChange}
                               />
                               
                            </div>
                        {/* {errors.ownerid && <p> {errors.ownerid}</p>}  */}
                            <div className="form-inputs">
                            <label htmlFor="city" className="form-label"> City</label>
                               <input type="text"
                                name="city"
                                 className="form-input"
                                  id="city" 
                                  placeholder="Enter city"
                                   value = {values.city} 
                                   onChange={handleChange}/>
                                   
                        
                            </div>
                            <div className="form-inputs">
                            <label htmlFor="area" className="form-label"> Area   </label>
                               <input type="text" 
                               name="area" 
                               className="form-input" 
                               id="area"
                                placeholder="Enter area"
                                value = {values.area} 
                                onChange={handleChange}
                                />
                                   
                            
                         </div>
                         <div className="form-inputs">
                            <label htmlFor="pin" className="form-label"> Pin </label>
                               <input type="text"
                                name="pin" 
                                className="form-input" 
                                id="pin"
                                 placeholder="Enter pin"
                                 value = {values.pin} 
                                 onChange={handleChange}
                                 />      
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="slots" className="form-label"> Slots </label>
                               <input type="text"
                                name="slots" 
                                className="form-input" 
                                id="slots" 
                                placeholder="Enter slots"
                                value = {values.slots}
                                 onChange={handleChange}
                                />      
                        </div>
                        <button className="form-input-btn" type="submit"> Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddParking;