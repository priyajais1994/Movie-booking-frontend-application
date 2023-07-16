
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateTheatre = () =>{
    const navigate = useNavigate();

    const [createTheatreModal, setCreateTheatreModal] = useState(false);

    const CloseCreateTheatreModal = () =>{
        setCreateTheatreModal(false);
        navigate("/Admin");
    }

    const OpenCreateTheatreModal =()=>{

        setCreateTheatreModal(true);
        navigate("/Admin/CreateTheatre");
    }

    return {createTheatreModal, CloseCreateTheatreModal, OpenCreateTheatreModal}
}

export default useCreateTheatre;