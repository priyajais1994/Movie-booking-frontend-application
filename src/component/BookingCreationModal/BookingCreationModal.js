

import {Modal, Button} from "react-bootstrap";
import { createnewbooking } from "../../api/booking.api";




function BookingCreationModal(props){
    


    const createbooking =(e)=>{
        e.preventDefault();

        const userId = e.target.userId.value;
        const theatreId = e.target.theatreId.value;
        const movieId = e.target.movieId.value;
        const timing = e.target.timing.value;
        const noOfSeats = e.target.noOfSeats.value;
        const totalCost = e.target.totalCost.value;
        

       

        // API call
        const booking  = { userId, theatreId, movieId, timing, noOfSeats, totalCost};
        createnewbooking(booking)
        .then(res=>{
            if(res.status===201)
            {
                window.location.href ="/Admin";
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return(
        <Modal show ={props.show} onHide= {props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title> Create Booking </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={createbooking}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> userId </span>
                        <input type="text" name= "userId" required/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> theatreId </span>
                        <input type="text" name= "theatreId" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> movieId </span>
                        <input type="text" name= "movieId" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> timing </span>
                        <input type="text" name= "timing" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Seats </span>
                        <input type="text" name= "noOfSeats" required />
                    </div>

                   

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Amount </span>
                        <input type="text" name= "totalCost"  />
                    </div>

                  <Button variant="secondary" onClick={props.onClose}> cancel </Button>
                    <Button variant= "primary" type="submit"> create </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default BookingCreationModal;