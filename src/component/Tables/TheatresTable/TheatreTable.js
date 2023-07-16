 import { Cell, Column, HeaderCell, Table } from "rsuite-table";
 import useCreateTheatre from "../../../hooks/useCreateTheatre";
import TheatreCreationModal from "../../TheatreCreationModal/TheatreCreationModal";
 import '../TheatresTable/TheatresTable.css';

const TheatresTable = ({theatresList})=>{

    const {createTheatreModal, CloseCreateTheatreModal, OpenCreateTheatreModal} = useCreateTheatre();
    
    return <div className="P-3">
    <h3 className="m-3"> Theatres </h3>

    <Table style={{minHeight:"400px"}} data= {theatresList}>

        <Column flexGrow={1} sortable  resizable>
            <HeaderCell> ID </HeaderCell>
            <Cell dataKey = "_id"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Name </HeaderCell>
            <Cell dataKey = "name"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Description </HeaderCell>
            <Cell dataKey = "description"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> City </HeaderCell>
            <Cell dataKey = "city"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> PinCode </HeaderCell>
            <Cell dataKey = "pinCode"/>
        </Column>

         </Table>
        <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "CREATE New Theatre" onClick={OpenCreateTheatreModal} />
        
        <TheatreCreationModal show={createTheatreModal} onClose={CloseCreateTheatreModal}/>
        </div>
}
export default TheatresTable;