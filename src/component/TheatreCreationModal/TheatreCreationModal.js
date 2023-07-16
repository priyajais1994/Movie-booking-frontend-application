

import {Modal, Button} from "react-bootstrap";
import { createnewtheatre } from "../../api/theatre.api";


function TheatreCreationModal(props){
    


    const createtheatre=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const description = e.target.description.value;
        const city = e.target.city.value;
        const pinCode = e.target.pinCode.value;

       

        // API call
        const theatre = {name, description,city, pinCode};
        createnewtheatre(theatre)
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
                <Modal.Title> Create Theatre </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={createtheatre}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Name </span>
                        <input type="text" name= "name" required/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Description</span>
                        <textarea type="text" name= "description" required className="md-textarea" row={5}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> City </span>
                        <textarea type="text" name= "city" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> PinCode </span>
                        <textarea type="text" name= "pinCode" required />
                    </div>

                    
                    <Button variant="secondary" onClick={props.onClose}> cancel </Button>
                    <Button variant= "primary" type="submit"> create </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default TheatreCreationModal;