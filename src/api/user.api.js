import axios from "axios";
import { TOKEN } from '../utils/constants';

const BASE_URL = "https://mba-backend-app.onrender.com";

// const BASE_URL = "http://localhost:8000";


export const getAllUsers= async()=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/users`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
        return err;
    }
}
// create new user

export const  createnewUser= async(User)=>{
try{
    
    const res= await axios.post(`${BASE_URL}/mba/api/v1/auth/signup`, User); 
    console.log(res);
    return res;
}

catch(err)
{
    console.log(err);
    return err;
}
}
// update user by userId

export const updateUsersByuserId = async (userId, updatedData)=>{

    try{
 const res= await axios.put(`${BASE_URL}/mba/api/v1/users/${userId}`,updatedData, {headers:{
     'x-access-token':localStorage.getItem(TOKEN)
 }})

 return res;

}
catch(err){
 console.log(err);
}

}