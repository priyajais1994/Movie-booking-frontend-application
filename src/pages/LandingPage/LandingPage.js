import { CSpinner } from "@coreui/react";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/movie.api";
import Carousel from "../../component/Carousel/Carousel";
import Navbar from "../../component/commons/Navbar/Navbar";
import Moviecard from "../../component/Moviecard/Moviecard";
import MovieList from "../../component/MovieList/MovieList";



function LandingPage(){

    const [ movieData, setMovieData] = useState(null);

    const fetchmovies= async()=>{

        try{
            // make API CALL 
            const movies = await getAllMovies();
            console.log(movies);
            setMovieData(movies.data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchmovies();

    }, [])

    

    return <div>
            <Navbar/>
            <Carousel/>

            <div className="text-center">
                

                {
                    (movieData === null ? <CSpinner color="primary" variant="grow"/> : <MovieList movieData={movieData}/>)
                }
            </div>
        </div>
    

}

export default LandingPage;