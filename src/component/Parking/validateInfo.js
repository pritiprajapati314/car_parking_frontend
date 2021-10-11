
export default function validateInfo(values) {
    let errors = {}
    if(!values.owner.trim())
    {
        errors.owner = "username required"
    }
    if(!values.email)
    {
       errors.email = 'Email required'
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    {

        errors.email = "Email address is invalid"
    }

    if(!values.ownerid)
    {
       errors.ownerid = "Owner id is required"
    }
    else if(values.ownerid.length!=12)
    {
        errors.ownerid = "Owner id is invalid"
    }
    if(!values.city)
    {
        errors.city = "City is required"
        
    }
    if(!values.area)
    {
        
        errors.area = "area is required"
    }
    if(!values.pin)
    {
        errors.pin = "pin is required"
        
    }
    if(!values.slots)
    {
        errors.slots = "slots is required"

    }
}
