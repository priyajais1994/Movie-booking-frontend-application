

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GooglePayButton from "@google-pay/button-react";

function Payments({show, setShow, movieDetails, theatreDetails, selectedSeats, confirmBooking, bookingDetails, closeModal}) {

  const handleClose = closeModal;
  const handleShow = () => setShow(true);

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [buttonHeight, setButtonHeight] = useState(40);

  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "IND",
      countryCode: "IN"
    }
  };

  const handlePaymentData = (paymentData) => {
    // Payment is successful, perform necessary actions here
    console.log("Payment successful:", paymentData);
    setPaymentStatus('success');
    show(true);
  };

  const disableButton = selectedSeats.length <= 0;
  

  

  return (
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER SUMMARY</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <div className='row'>

               <div className='col my-2'>

                   <h5> {movieDetails.name} </h5>
                   <small> {movieDetails.language} </small>
                   <br/>
                   <small className='fw-bold'> {theatreDetails.name} </small>
                   <br/>
                   <small className='text-success'> m-Ticket </small>
               </div>

               <div className='col-5'>
                   <h5> {selectedSeats.length} Tickets </h5>

               </div>

           </div>
      

        <hr/>

        <div className='row'>

            <div className='col'>
               <p> Total </p>
            </div>

            <div className='col-3'>

                <p className='fw-bolder'> Rs {movieDetails.price * selectedSeats.length} </p>

            </div>

        </div>
        {
            bookingDetails &&  paymentStatus === 'success' &&
            <div>
                {
                    bookingDetails.status === "SUCCESS" ? (

                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <img src = {movieDetails.posterUrl} height={100} width = {100}/>
                            <h5>Booking confirmed !</h5>
                            <small>Booking Id </small>
                            <p> {bookingDetails._id} </p>
                     </div>
                    ) :
                         <div className = 'd-flex flex-column justify-content-between align-items-center'>
                        <img src = {movieDetails.posterUrl} height={100} width = {100}/>
                            <h5>Booking Failed !</h5>
                            <small> please retry  </small>
                        </div>
                }
            </div>
        }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>

          {!bookingDetails && !disableButton && (
            <GooglePayButton
              environment="TEST" // Set your desired environment (TEST or PRODUCTION)
              buttonColor={buttonColor}
              buttonType='book'
              buttonSizeMode={buttonSizeMode}
              paymentRequest={paymentRequest}
              onLoadPaymentData={handlePaymentData}
              style={{ width: buttonWidth, height: buttonHeight }}
              onClick={confirmBooking}
            />
)}
           
        </Modal.Footer>
      </Modal>
    
  );
}

export default Payments;