

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateMovie = () =>{
    const navigate = useNavigate();

    const [createMovieModal, setCreateMovieModal] = useState(false);

    const CloseCreateMovieModal = () =>{
        setCreateMovieModal(false);
        navigate("/Admin");
    }

    const OpenCreateMovieModal =()=>{

        setCreateMovieModal(true);
        navigate("/Admin/CreateMovie");
    }

    return {createMovieModal, CloseCreateMovieModal, OpenCreateMovieModal}
}

export default useCreateMovie;