
import { CSpinner } from "@coreui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviebyId } from "../../api/movie.api";
import { getTheatresForAMovie } from "../../api/theatre.api";
import Navbar from "../../component/commons/Navbar/Navbar";
import TheatreDetails from "../../component/TheatreDetails/TheatreDetails";


const MovieTheatres = ()=>{

    const {movieId: selectedMovie} = useParams();
    const [theatresDetails, setTheatresDetails] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getTheatres = async()=>{
        // make an API CALL
        const theatresDetails = await getTheatresForAMovie(selectedMovie);
         console.log(theatresDetails);
        setTheatresDetails(theatresDetails.data);
    }

    const getmoviedetails = async()=>
    {
        // make API CALL
       const movieDetails= await getMoviebyId(selectedMovie);
       console.log(movieDetails);
       setMovieDetails(movieDetails.data);
    }

    const init = async()=>{
        await Promise.all([getTheatres(), getmoviedetails()]);
        setIsLoading(false);
    }

    useEffect(()=>{
        init();
    
        }, [])


    return <div>

        <Navbar/>

        {isLoading && <CSpinner/>}

        {

        !isLoading && <div style={{minHeight:"100vh"}} className="bg-black text-center pt-4"> 

          <h2 className="fw-bolder text-white"> {movieDetails.name} </h2>

       <div className="text-white">
      <span> {movieDetails.description} </span>

      <div>
        <span className="badge text-bg-danger rounded-pill m-1 text-white"> {movieDetails.language} </span>
        <span className="badge text-bg-danger rounded-pill m-1 text-white"> {movieDetails.releaseStatus} </span>
    </div>
    <hr/>

    
    <h6 className="text-justify"> directed by {movieDetails.director} </h6>
    <h6 className="text-justify"> Released on {movieDetails.releaseDate} </h6>

    <br/>
        </div>

        <div style={{width:"70vw", margin:"0 auto"}} className="bg-white">

          <TheatreDetails theatresDetails = {theatresDetails} selectedMovie={selectedMovie} />
        </div>

        </div>

        
}
</div>
}


export default MovieTheatres;