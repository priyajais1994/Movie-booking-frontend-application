
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateUser = () =>{
    const navigate = useNavigate();

    const [createUserModal, setCreateUserModal] = useState(false);

    const CloseCreateUserModal = () =>{
        setCreateUserModal(false);
        navigate("/Admin");
    }

    const OpenCreateUserModal =()=>{

        setCreateUserModal(true);
        navigate("/Admin/CreateUser");
    }

    return {createUserModal, CloseCreateUserModal, OpenCreateUserModal}
}

export default useCreateUser;