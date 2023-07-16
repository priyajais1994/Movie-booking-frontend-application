
import axios from "axios";
import { TOKEN } from '../utils/constants';

 const BASE_URL = "http://localhost:8000";

export const getAllTheatres= async()=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/theatres`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
    }
}
// create new theatre
export async function createnewtheatre(theatre)
{
    console.log(theatre);
    return axios.post(`${BASE_URL}/mba/api/v1/theatres`, theatre, {

        headers:{
            "x-access-token": localStorage.getItem(TOKEN)
        }
    }); 
}
// get theatres for a movie

export const getTheatresForAMovie = async(movieId)=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/movies/${movieId}/theatres`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
    }
}
// get theatre by id
export const getTheatrebyId = async(theatreId)=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/theatres/${theatreId}`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
    }
}


