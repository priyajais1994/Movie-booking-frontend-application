
import axios from "axios";
import { TOKEN } from '../utils/constants';

const BASE_URL = "https://mba-backend-app.onrender.com";

 // const BASE_URL = "http://localhost:8000";

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
// update booking by id

export const updateBookingsById = async (bookingId, updatedData)=>{

    try{
 const res= await axios.put(`${BASE_URL}/mba/api/v1/bookings/${bookingId}`,updatedData, {headers:{
     'x-access-token':localStorage.getItem(TOKEN)
 }})

 return res;

}
catch(err){
 console.log(err);
}

}