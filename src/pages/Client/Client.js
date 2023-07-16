

import Navbar from "../../component/commons/Navbar/Navbar";
import {  useEffect, useState } from "react";
import { getAllTheatres } from "../../api/theatre.api";
import { getAllMovies } from "../../api/movie.api";
// import { getAllBookings } from "../../api/booking.api";
import CWidget from "../../component/CWidget/CWidget";
import { keys } from "../../utils/constants";
import TheatresTable from "../../component/Tables/TheatresTable/TheatreTable";
import MoviesTable from "../../component/Tables/MoviesTable/MoviesTable";
// import BookingsTable from "../../component/Tables/BookingsTable/BookingsTable";

function Client() {
  const [theatresList, setTheatresList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  // const [bookingsList, setBookingsList] = useState([]);
  const [counterInfo, setCounterInfo] = useState({
    theatres: 0,
    movies: 0,
   // bookings: 0
  });

  

  const [showTheatreTable, setShowTheatreTable] = useState(false);
  const [showMovieTable, setShowMovieTable] = useState(false);
 // const [showBookingTable, setShowBookingTable] = useState(false);

        const show = {};
         show[keys.THEATRE] = showTheatreTable;
         show[keys.MOVIE] = showMovieTable;
         //show[keys.BOOKING] = showBookingTable;
         

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
       /* const fetchbookings= async()=>{
            const bookingsList = await getAllBookings();
            setBookingsList(bookingsList.data);
            counterInfo.bookings = bookingsList.data.length;
             setCounterInfo({...counterInfo});
        }*/

  const init = async () => {
    await Promise.all([fetchtheatres(), fetchmovies()]);
  };

  useEffect(() => {
    init();
  }, []);

  const onWidgetClick=(id)=>{
        
    setShowTheatreTable(false);
    setShowMovieTable(false);
   // setShowBookingTable(false);
    

    if(id === keys.THEATRE)
    {
        setShowTheatreTable(true);
    }
    else if(id === keys.MOVIE)
    {
        setShowMovieTable(true);
    }
   /* else if(id === keys.BOOKING)
    {
        setShowBookingTable(true);
    }*/
    
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

         {/* <div className="col">
            <CWidget id = {keys.BOOKING} show = {show} onWidgetClick={onWidgetClick } value={counterInfo.bookings} icon="bi-card-list" text="Number of Bookings" title="Bookings" onClick={onWidgetClick} />
         </div>*/}

        </div>

        {showTheatreTable && <TheatresTable theatresList={theatresList}/>}
        
        
        {showMovieTable && <MoviesTable moviesList={moviesList}/>}
        
        
       {/* {showBookingTable && <BookingsTable bookingsList={bookingsList}/>}*/}
        
        
      </div>
    </>
  );
}

export default Client;
