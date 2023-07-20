

import { Cell, Column, HeaderCell, Table,  rowData, dataKey } from "rsuite-table";
import useCreateUser from "../../../hooks/useCreateUser";
import UserCreationModal from "../../UserCreationModal/UserCreationModal";
import { Button } from "react-bootstrap";
import {  updateUsersByuserId } from "../../../api/user.api";
 

 const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {

    return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.userId);
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
              onChange && onChange(rowData.userId, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  };


const UsersTable = ({usersList, setUsersList})=>{

    const {createUserModal, CloseCreateUserModal, OpenCreateUserModal} = useCreateUser();

    const handleEditState = async userId => {
        console.log(userId);
    const nextData = Object.assign([], usersList);
    const activeItem = nextData.find(item => item.userId === userId);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setUsersList(nextData);
  
    if(activeItem.status===null){
        // make API call
        await updateUsersByuserId(activeItem.userId,activeItem);
        alert(`User updated successfully with userId ${activeItem.userId}`)
    }
  
  };
  
  const handleChange = (userId, key, value) => {
    console.log("inside change");
    const nextData = Object.assign([], usersList);
    nextData.find(item => item.userId === userId)[key] = value;
    setUsersList(nextData);
     };
  
   
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
           <EditableCell dataKey="userStatus"  onChange={handleChange}/>
       </Column>

          <Column flexGrow={1}>
                <HeaderCell>...</HeaderCell>
                <ActionCell dataKey="userId" onClick={handleEditState} />
             </Column>

       </Table>
       <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New User" onClick={OpenCreateUserModal} />

       <UserCreationModal show = {createUserModal} onClose={CloseCreateUserModal}/>
       </div>
}
export default UsersTable;