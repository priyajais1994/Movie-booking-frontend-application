

import { Cell, Column, HeaderCell, Table, rowData, dataKey } from "rsuite-table";
import useCreateBooking from "../../../hooks/useCreateBooking";
import BookingCreationModal from "../../BookingCreationModal/BookingCreationModal";
import { Button } from "react-bootstrap";
import { updateBookingsById } from "../../../api/booking.api";

 const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {

    return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData._id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
      <Cell {...props} className={editing ? 'table-content-editing' : ''}>
        {editing ? (
          <input
            className="rs-input"
            defaultValue={rowData[dataKey]}
            onChange={event => {
              onChange && onChange(rowData._id, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  };


const BookingsTable = ({bookingsList, setBookingsList})=>{

    const {createBookingModal, CloseCreateBookingModal, OpenCreateBookingModal} = useCreateBooking();

    const handleEditState = async id => {
        console.log(id);
    const nextData = Object.assign([], bookingsList);
    const activeItem = nextData.find(item => item._id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setBookingsList(nextData);
  
    if(activeItem.status===null){
        // make API call
        await updateBookingsById(activeItem._id,activeItem);
        alert(`Booking updated successfully with id ${activeItem._id}`)
    }
  
  };
  
  const handleChange = (id, key, value) => {
    console.log("inside change");
    const nextData = Object.assign([], bookingsList);
    nextData.find(item => item._id === id)[key] = value;
    setBookingsList(nextData);
     };
  
   
   return <div className="P-3">
   <h3 className="m-3"> Bookings </h3>

   <Table autoHeight={true} rowHeight={80} data= {bookingsList}>

       <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>Booking Id</HeaderCell>
                <Cell dataKey="_id" />
                </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> User  Name </HeaderCell>
           <Cell dataKey="userId.name" />
          
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Theatre Name  </HeaderCell>
           <Cell dataKey="theatreId.name" />
           
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Movie name </HeaderCell>
           <Cell dataKey="movieId.name" />
           
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Status </HeaderCell>
           <Cell dataKey="status" />
           
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Seats </HeaderCell>
           <EditableCell dataKey="noOfSeats"  onChange={handleChange}/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Amount </HeaderCell>
           <EditableCell dataKey="totalCost"  onChange={handleChange}/>
       </Column>

       <Column flexGrow={1}>
                <HeaderCell>...</HeaderCell>
                <ActionCell dataKey="_id" onClick={handleEditState} />
             </Column>

      </Table>
      <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New Booking" onClick={OpenCreateBookingModal} />

      <BookingCreationModal  show={createBookingModal} onClose = {CloseCreateBookingModal}/>
       </div>
}
export default BookingsTable;