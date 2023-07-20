import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Admin from './pages/Admin/Admin';
import Client from './pages/Client/Client';
import MovieTheatres from './pages/MovieTheatres/MovieTheatres';
import Booking from './pages/Bookings/Booking';
import AuthHOC from './hoc/AuthHoc.js';


function App() {
  return (
    <div >

      <Router>

        <Routes>

          <Route exact path = "/login" element = {<Login/>}/>
          <Route exact path = "/signup" element = {<Login/>}/>
          <Route exact path = "/" element= {<LandingPage/>}/>
          <Route exact path = "/movie/:movieId/details" element={<MovieDetails/>}/>
          <Route exact path = "/Admin" element= {<Admin/>}/>
          <Route exact path = "/Client" element = {<Client/>}/>
          <Route exact path ="/Admin/CreateTheatre" element = {  <Admin/> }/>
          <Route exact path ="/Admin/CreateMovie" element = {  <Admin/> }/>
          <Route exact path ="/Admin/CreateBooking" element = {  <Admin/> }/>
          <Route exact path ="/Admin/CreateUser" element = {  <Admin/> }/>
          <Route exact path = "/buyTickets/:movieId" element={ <AuthHOC> <MovieTheatres/> </AuthHOC>}/>
          <Route exact path = "/buyTickets/:movieId/:theatreId" element={ <AuthHOC> <Booking/> </AuthHOC>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
