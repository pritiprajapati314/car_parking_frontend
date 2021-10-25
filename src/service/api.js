import axios from 'axios';
const URL = 'http://localhost:3000/managerRequest'
export const getAllrequests = async()=>{
    try{
       let response =  await axios.get(`${URL}/requests`);
       return response;
    }
    catch(error){
        console.log("error ",error);
    }
}
export const getRequest = async(id) =>{
    try{
        let response = await axios.get(`http://localhost:3000/managerRequest/requests/${id}`)
        return response.data;
    }
    catch(error)
    {
        console.log(error)
    }
}