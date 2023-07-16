
import axios from "axios";
import { TOKEN } from '../utils/constants';

 const BASE_URL = "http://localhost:8000";

export const getAllBookings= async()=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/bookings`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
    }
}
// create booking

export const  createnewbooking = async(bookingRequest)=>
{
    try{
    const res = await axios.post(`${BASE_URL}/mba/api/v1/bookings`, bookingRequest, {

        headers:{
            "x-access-token": localStorage.getItem(TOKEN)
        }
    }); 
    return res;
}
catch(err)
{
    console.log(err);
}
}