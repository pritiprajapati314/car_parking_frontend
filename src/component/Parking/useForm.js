import {useEffect,useState} from 'react'

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        'owner':'',
        'email':'',
        'ownerid':'',
        'city':'',
        'area':'',
        'pin':'',
        'slots':''

    })
    const [errors,setErrors] = useState({})
    const handleChange = (e)=>{
        const {name,value} = e.target
        setValues(
            {
                ...values,
                [name]:value
            }
        )
        
    };
    const[issubmitting,SetIsSubmitting] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validate(values));
        SetIsSubmitting(true);
    }
    useEffect(()=>{
        if( issubmitting)
        {
          callback();
        }
    },[errors]);
    return {handleChange,values,handleSubmit,errors};
}

export default useForm
