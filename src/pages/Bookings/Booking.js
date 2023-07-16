import { CSpinner } from "@coreui/react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { createnewbooking } from "../../api/booking.api";
import { getMoviebyId } from "../../api/movie.api";
import { getTheatrebyId } from "../../api/theatre.api";
import Cinema from "../../component/Cinema/Cinema";
import Navbar from "../../component/commons/Navbar/Navbar";
import Payments from "../../component/Payments/Payments";
import "./Bookings.css";

function Booking()
{
    const {movieId, theatreId} = useParams();
    console.log(movieId);
    console.log(theatreId);

    const [theatreDetails, setTheatreDetails] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showPaymentsModal, setShowPaymentsModal] = useState(false);
    const [bookingDetails, setBookingDetails] =  useState(null);

    const getTheatredetails = async()=>{
        // make an API CALL
        const theatreDetails = await getTheatrebyId(theatreId);
         console.log(theatreDetails);
        setTheatreDetails(theatreDetails.data);
    }

    const getmoviedetails = async()=>
    {
        // make API CALL
       const movieDetails= await getMoviebyId(movieId);
       console.log(movieDetails);
       setMovieDetails(movieDetails.data);
    }

    const init = async()=>{
        await Promise.all([getTheatredetails(), getmoviedetails()]);
        setIsLoading(false);
    }

    useEffect(()=>{
        init();
    
        }, [])

        const proceedPayment =()=>{

            setShowPaymentsModal(true);

        }

        const closeModal = ()=>{
            setShowPaymentsModal(false);
            setBookingDetails(null);
        }

        const confirmBooking = async()=>{

            const timingSelect = document.getElementById('Timing');
            const timing = timingSelect.options[timingSelect.selectedIndex].value;

            const data = {
                theatreId : theatreId,
                movieId : movieId,
                userId : localStorage.getItem('id'),
                noOfSeats : selectedSeats.length,
                totalCost : selectedSeats.length* movieDetails.price,
                timing: timing
            }
            // make API call
            const booking = await createnewbooking(data);
            console.log(booking);

            // initialize payment
            // const payment = await makepayment();

            const paymentSuccess= true;

            if(paymentSuccess)
            {
                booking.data.status = "SUCCESS";
            }
            else{
                booking.data.status = "FAILED";
            }

            setBookingDetails(booking.data);
        }


   return <div>
       <Navbar/>

       <div  className="text-center bg-black fullView">

       {isLoading && <div > <CSpinner/> </div>}

       {
           !isLoading && 

           <div className="">

             <h2 className="fw-bold text-light"> {movieDetails.name} </h2> 

             <ShowCase/>

             <Cinema movieDetails={movieDetails} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />

                  <select id='Timing' className='form-select text-center fw-bold mb-3' >
                        <option disabled selected hidden> select the timing</option>
                        <option value={"MORNING - 7:30 AM"}> MORNING - 7:30 AM</option>
                        <option value={"MORNING - 11:30 AM"}> MORNING -11:30 AM</option>
                        <option value={"AFTERNOON - 1:30 PM"}> AFTERNOON - 1:30 PM</option>
                        <option value={"EVENING - 4:30 PM"}> EVENING - 4:30 PM</option>
                        <option value={"NIGHT - 6:30 PM"}> NIGHT - 6:30 PM</option>
                    </select>


                 <p className="info">
                    You have selected <span className="count">{selectedSeats.length}</span>{' '}
                    seats for the price of{' '}
                    <span className="total">
                    {selectedSeats.length * movieDetails.price} Rupees
                        </span>
                    </p>

                    <Button onClick={proceedPayment} variant="success" size="lg">
                        Proceed to payment
                    </Button>

          </div>

       }

       </div>

       { !isLoading &&

       <Payments  show = {showPaymentsModal} setShow={setShowPaymentsModal} movieDetails={movieDetails} theatreDetails={theatreDetails} selectedSeats={selectedSeats} confirmBooking={confirmBooking} bookingDetails={bookingDetails} closeModal={closeModal} />
       }
       

   </div>
}

function ShowCase() {
    return (
      <ul className="ShowCase">
        <li>
          <span className="seat" /> <small> Not occupied </small>
        </li>
        <li>
          <span className="seat selected" /> <small>Selected</small>
        </li>
        <li>
          <span className="seat occupied" /> <small>Occupied</small>
        </li>
      </ul>
    )
  }
export default Booking;