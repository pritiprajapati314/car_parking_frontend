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