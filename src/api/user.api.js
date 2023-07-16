import axios from "axios";
import { TOKEN } from '../utils/constants';

const BASE_URL = "http://localhost:8000";


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
    }
}
// create new user
export async function createnewUser(User)
{
    console.log(User);
    return axios.post(`${BASE_URL}/mba/api/v1/auth/signup`, User); 
}