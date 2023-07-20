

import { Cell, Column, HeaderCell, Table, rowData, dataKey} from "rsuite-table";
import '../TheatresTable/TheatresTable.css';
import { Button } from "react-bootstrap";
import { updateTheatresById } from "../../../api/theatre.api";


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

const TheatresTableClient = ({theatresList, setTheatresList})=>{

   const handleEditState = async id => {
       console.log(id);
   const nextData = Object.assign([], theatresList);
   const activeItem = nextData.find(item => item._id === id);
   activeItem.status = activeItem.status ? null : 'EDIT';
   setTheatresList(nextData);

   if(activeItem.status===null){
       // make API call
       await updateTheatresById(activeItem._id,activeItem);
       alert(`Theatre updated successfully with id ${activeItem._id}`)
   }

 };

 const handleChange = (id, key, value) => {
   console.log("inside change");
   const nextData = Object.assign([], theatresList);
   nextData.find(item => item._id === id)[key] = value;
   setTheatresList(nextData);
    };

   
   
   return <div className="P-3">
   <h3 className="m-3"> Theatres </h3>

   <Table style={{minHeight:"400px"}} data= {theatresList}>

       <Column flexGrow={1}  sortable fixed resizable>
               <HeaderCell>Theatre Id</HeaderCell>
               <Cell dataKey="_id" />
               </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Name </HeaderCell>
           <EditableCell dataKey="name"  onChange={handleChange}/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Description </HeaderCell>
           <EditableCell dataKey="description"  onChange={handleChange}/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> City </HeaderCell>
           <EditableCell dataKey="city"  onChange={handleChange}/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> PinCode </HeaderCell>
           <EditableCell dataKey="pinCode"  onChange={handleChange}/>
       </Column>

           <Column flexGrow={1}>
               <HeaderCell>...</HeaderCell>
               <ActionCell dataKey="_id" onClick={handleEditState} />
            </Column>

        </Table>
       
       
       
       </div>
}
export default TheatresTableClient;