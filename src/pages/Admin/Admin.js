import Navbar from "../../component/commons/Navbar/Navbar";
import {  useEffect, useState } from "react";
import { getAllTheatres } from "../../api/theatre.api";
import { getAllMovies } from "../../api/movie.api";
import { getAllBookings } from "../../api/booking.api";
import { getAllUsers } from "../../api/user.api";
import CardList from "../../component/CardList/CardList";
import { keys } from "../../utils/constants";
import TheatresTable from "../../component/Tables/TheatresTable/TheatreTable";
import MoviesTable from "../../component/Tables/MoviesTable/MoviesTable";
import BookingsTable from "../../component/Tables/BookingsTable/BookingsTable";
import UsersTable from "../../component/Tables/UsersTable/UsersTable";



function Admin()
{
    const [theatresList, setTheatresList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [bookingsList, setBookingsList] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [counterInfo, setCounterInfo] = useState({

        theatres : 0,
        movies: 0,
        bookings : 0,
        users: 0

    });

         const [showTheatreTable, setShowTheatreTable] = useState(false);
         const [showMovieTable, setShowMovieTable] = useState(false);
         const [showBookingTable, setShowBookingTable] = useState(false);
         const [showUserTable, setShowUserTable] = useState(false);

         const show = {};
         show[keys.THEATRE] = showTheatreTable;
         show[keys.MOVIE] = showMovieTable;
         show[keys.BOOKING] = showBookingTable;
         show[keys.USER] = showUserTable;



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
    const fetchbookings= async()=>{
        const bookingsList = await getAllBookings();
        setBookingsList(bookingsList.data);
        counterInfo.bookings = bookingsList.data.length;
         setCounterInfo({...counterInfo});
    }
    const fetchusers = async()=>{
        const usersList = await getAllUsers();
        setUsersList(usersList.data);
        counterInfo.users = usersList.data.length;
         setCounterInfo({...counterInfo});
    }

    const init = async()=> {

         await Promise.all([ fetchtheatres(), fetchmovies(), fetchbookings(), fetchusers()]);
        

    }

    useEffect(()=>{
        init();
     }, [])

         const onWidgetClick=(id)=>{
            
            setShowTheatreTable(false);
            setShowMovieTable(false);
            setShowBookingTable(false);
            setShowUserTable(false);

            if(id === keys.THEATRE)
            {
                setShowTheatreTable(true);
            }
            else if(id === keys.MOVIE)
            {
                setShowMovieTable(true);
            }
            else if(id === keys.BOOKING)
            {
                setShowBookingTable(true);
            }
            else if(id === keys.USER)
            {
                setShowUserTable(true);
            }
       }

         
         


    return <>

    <Navbar/>

    <div className=" bg-light mt-2 container-fluid">

        <h3 className="text-center"> Welcome, {localStorage.getItem('name')} </h3>
        <p className="text-center text-secondary"> take a quick look at your stats below </p>

        
        <CardList show={show} onWidgetClick={onWidgetClick } counterInfo={counterInfo}/>
          
        

        {showTheatreTable && <TheatresTable theatresList={theatresList}/>}
         
        {showMovieTable && <MoviesTable moviesList={moviesList}/>}
       
        
        {showBookingTable && <BookingsTable bookingsList={bookingsList}/>}
        
             
        { showUserTable && <UsersTable usersList={usersList}/>}
        
         </div>

    </>
        
    

}
export default Admin;