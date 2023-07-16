
import axios from "axios";
import { TOKEN } from '../utils/constants';

 const BASE_URL = "http://localhost:8000";



// const BASE_URL = "http://localhost:8080";

// define API function

export const getAllMovies= async()=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/movies`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        console.log(err);
    }
}
// define API function for getmoviebyid

export const getMoviebyId= async(id)=>{

    try{
        const res = await axios.get(`${BASE_URL}/mba/api/v1/movies/${id}`, { headers:{
            "x-access-token" : localStorage.getItem(TOKEN)
        }} )

        return res;
    }
    catch(err)
    {
        throw new Error("internal error")
        console.log(err);
    }
}
//  create movie

export async function createnewmovie(movie)
{
    console.log(movie);
    return axios.post(`${BASE_URL}/mba/api/v1/movies`, movie, {

        headers:{
            "x-access-token": localStorage.getItem(TOKEN)
        }
    }); 
}
