import React,{useState} from 'react'
import AddParking from './AddParking'
import FormSuccess from './FormSuccess'
import Image from './Park.jpg'
import './form.css';
const ParkingForm = () => {
    const[issubmitting,SetIsSubmitting] = useState(false)
    function submitForm(issubmitting)
    {
        SetIsSubmitting(true);
    }
    return (
        <>
            <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={Image} alt='parking' />
        </div>
        {!issubmitting ? <AddParking submitForm = {submitForm}/>:<FormSuccess/>}
      </div>
           
        </>
    )
}


export default ParkingForm

