

import { Cell, Column, HeaderCell, Table } from "rsuite-table";
import useCreateUser from "../../../hooks/useCreateUser";
import UserCreationModal from "../../UserCreationModal/UserCreationModal";


const UsersTable = ({usersList})=>{

    const {createUserModal, CloseCreateUserModal, OpenCreateUserModal} = useCreateUser();
   
   return <div className="P-3">
   <h3 className="m-3"> Users </h3>

   <Table autoHeight={true} rowHeight={80} data= {usersList}>

       <Column flexGrow={1} sortable  resizable>
           <HeaderCell> User ID </HeaderCell>
           <Cell dataKey = "userId"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell>   Name </HeaderCell>
           <Cell dataKey = "name"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> Email  </HeaderCell>
           <Cell dataKey = "email"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell>User type </HeaderCell>
           <Cell dataKey = "userTypes"/>
       </Column>

       <Column flexGrow={1} sortable resizable>
           <HeaderCell> User Status </HeaderCell>
           <Cell dataKey = "userStatus"/>
       </Column>

       </Table>
       <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New User" onClick={OpenCreateUserModal} />

       <UserCreationModal show = {createUserModal} onClose={CloseCreateUserModal}/>
       </div>
}
export default UsersTable;