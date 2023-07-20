

import Navbar from "../../component/commons/Navbar/Navbar";
import {  useEffect, useState } from "react";
import { getAllTheatres } from "../../api/theatre.api";
import { getAllMovies } from "../../api/movie.api";
import CWidget from "../../component/CWidget/CWidget";
import { keys } from "../../utils/constants";
import TheatresTableClient from "../../component/Tables/TheatresTable/TheatresTableClient";
import MoviesTableClient from "../../component/Tables/MoviesTable/MoviesTableClient";


function Client() {
  const [theatresList, setTheatresList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  
  const [counterInfo, setCounterInfo] = useState({
    theatres: 0,
    movies: 0,
   
  });

  

  const [showTheatreTable, setShowTheatreTable] = useState(false);
  const [showMovieTable, setShowMovieTable] = useState(false);
 

        const show = {};
         show[keys.THEATRE] = showTheatreTable;
         show[keys.MOVIE] = showMovieTable;
         
         

         const fetchtheatres= async()=>{
            const theatresList = await getAllTheatres();
            setTheatresList(theatresList.data);
             counterInfo.theatres = theatresList.data.length;
             setCounterInfo({...counterInfo});
        }
        const fetchmovies= async()=>{
            const moviesList = await getAllMovies();
            setMoviesList(moviesList.data);
            counterInfo.movies = moviesList.data.length;
             setCounterInfo({...counterInfo});
        }
       

  const init = async () => {
    await Promise.all([fetchtheatres(), fetchmovies()]);
  };

  useEffect(() => {
    init();
  }, []);

  const onWidgetClick=(id)=>{
        
    setShowTheatreTable(false);
    setShowMovieTable(false);

    

    if(id === keys.THEATRE)
    {
        setShowTheatreTable(true);
    }
    else if(id === keys.MOVIE)
    {
        setShowMovieTable(true);
    }
   
    
  }

  return (
    <>
      <Navbar />

      <div className="bg-light mt-2 container-fluid">
        <h3 className="text-center"> Welcome, {localStorage.getItem('name')} </h3>
        <p className="text-center text-secondary"> take a quick look at your stats below </p>

        <div className="row">

          <div className="col">
  
            <CWidget id ={keys.THEATRE}  show = {show} onWidgetClick={onWidgetClick } value={counterInfo.theatres} icon="bi-building" text="Number of Theatres" title="Theatres" onClick={onWidgetClick} />
          </div>

          <div className="col">
            <CWidget id = {keys.MOVIE} show = {show} onWidgetClick={onWidgetClick } value={counterInfo.movies} icon="bi-film" text="Number of Movies" title="Movies" onClick={onWidgetClick} />
          </div>

        
        </div>

        {showTheatreTable && <TheatresTableClient theatresList={theatresList} setTheatresList={setTheatresList}/>}
        
        
        {showMovieTable && <MoviesTableClient moviesList={moviesList} setMoviesList={setMoviesList} />}
        
        
       
        
        
      </div>
    </>
  );
}

export default Client;
