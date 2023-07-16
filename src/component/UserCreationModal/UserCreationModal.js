

import {Modal, Button} from "react-bootstrap";
import { createnewUser } from "../../api/user.api";



function UserCreationModal(props){
    


    const createuser=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const userId = e.target.userId.value;
        const password = e.target.password.value;
        const userType = e.target.userType.value;

       

        // API call
        const User = {name, email, userId, password, userType};
        createnewUser(User)
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
                <Modal.Title> Create New User </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={createuser}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Name </span>
                        <input type="text" name= "name" required/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Email </span>
                        <input type="text" name= "email" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> User Id </span>
                        <input type="text" name= "userId" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Password </span>
                        <input type="text" name= "password" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> User Type </span>
                        <select className="form-select" name="userType">
                            <option value="ADMIN"> ADMIN </option>
                            <option value= "CUSTOMER"> CUSTOMER </option>
                            <option value="CLIENT"> CLIENT </option>
                        </select>
                        </div>

                    
                    <Button variant="secondary" onClick={props.onClose}> cancel </Button>
                    <Button variant= "primary" type="submit"> create </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default UserCreationModal;