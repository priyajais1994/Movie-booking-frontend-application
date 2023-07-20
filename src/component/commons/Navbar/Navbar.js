import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { isUserLoggedIn } from "../../../utils/helper";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const Navbar = ({filterMovies})=>{

    const isLoggedIn = isUserLoggedIn();
    const navigate= useNavigate();

    const [searchValue, onSearchChange] = useState("");

    const onInputChange=(e)=>{
        onSearchChange(e.target.value);

        if(filterMovies)
        {
            filterMovies(e.target.value);
        }
    }

    const onAuthButtonClick = ()=>{

        if(isLoggedIn)
        {
            localStorage.clear();
        }
        navigate("/login");

    }


    return <div className= 'bg-dark sticky-top'>

            <div className=" d-flex  align-items-center justify-content-around">

                <div>
                    <div className='display-6 text-danger py-1'> MBA </div>
                </div>

                <div>
                    <Form.Control  size='lg' type= "text" placeholder="search movie" input = {searchValue} onChange={onInputChange} />
                </div>

                <div>
                    <Button onClick={onAuthButtonClick} className='' variant="danger"> {(isLoggedIn)? "logout" : "login"} </Button>
                </div>

            </div>

        </div>
    

}
export default Navbar;