
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateBooking = () =>{
    const navigate = useNavigate();

    const [createBookingModal, setCreateBookingModal] = useState(false);

    const CloseCreateBookingModal = () =>{
        setCreateBookingModal(false);
        navigate("/Admin");
    }

    const OpenCreateBookingModal =()=>{

        setCreateBookingModal(true);
        navigate("/Admin/CreateBooking");
    }

    return {createBookingModal, CloseCreateBookingModal, OpenCreateBookingModal}
}

export default useCreateBooking;