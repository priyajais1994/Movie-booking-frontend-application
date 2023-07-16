

import { Cell, Column, HeaderCell, Table } from "rsuite-table";
import useCreateBooking from "../../../hooks/useCreateBooking";
import BookingCreationModal from "../../BookingCreationModal/BookingCreationModal";


const BookingsTable = ({bookingsList})=>{

    const {createBookingModal, CloseCreateBookingModal, OpenCreateBookingModal} = useCreateBooking();
   
   return <div className="P-3">
   <h3 className="m-3"> Bookings </h3>

   <Table autoHeight={true} rowHeight={80} data= {bookingsList}>

       <Column flexGrow={1} sortable  resizable>
           <HeaderCell> Booking ID </HeaderCell>
           <Cell dataKey = "_id"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> User  Name </HeaderCell>
           <Cell dataKey = "userId.name"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Theatre Name  </HeaderCell>
           <Cell dataKey = "theatreId.name"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Movie name </HeaderCell>
           <Cell dataKey = "movieId.name"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Status </HeaderCell>
           <Cell dataKey = "status"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Seats </HeaderCell>
           <Cell dataKey = "noOfSeats"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Amount </HeaderCell>
           <Cell dataKey = "totalCost"/>
       </Column>
      </Table>
      <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New Booking" onClick={OpenCreateBookingModal} />

      <BookingCreationModal  show={createBookingModal} onClose = {CloseCreateBookingModal}/>
       </div>
}
export default BookingsTable;