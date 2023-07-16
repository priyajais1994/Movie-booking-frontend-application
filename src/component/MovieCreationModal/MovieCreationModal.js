
import {Modal, Button} from "react-bootstrap";
import { createnewmovie } from "../../api/movie.api";



function MovieCreationModal(props){
    


    const createmovie=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const description = e.target.description.value;
        const language = e.target.language.value;
        const director = e.target.director.value;
        const releaseDate = e.target.releaseDate.value;
        const releaseStatus = e.target.releaseStatus.value;
        const posterUrl = e.target.posterUrl.value;

       

        // API call
        const movie  = {name, description, language, director, releaseDate,releaseStatus,posterUrl};
        createnewmovie(movie)
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
                <Modal.Title> Create Movie </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={createmovie}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Name </span>
                        <input type="text" name= "name" required/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Description</span>
                        <textarea type="text" name= "description" required className="md-textarea" row={5}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> language </span>
                        <input type="text" name= "language" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Director </span>
                        <input type="text" name= "director" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Release Date </span>
                        <input type="text" name= "releaseDate" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Release status </span>
                        <select className="form-select" name="releaseStatus">
                            <option value="RELEASED"> RELEASED </option>
                            <option value= "UNRELEASED"> UNRELEASED </option>
                            <option value="BLOCKED"> BLOCKED </option>
                        </select>
                        </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> posterUrl </span>
                        <input type="text" name= "posterUrl"  />
                    </div>

                  {/* <div className="input-group mb-3">
                        <span className="input-group-text"> trailerUrl </span>
                        <input type="text" name= "trailerUrl"  />
                  </div>*/}

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Cast </span>
                        <input type="text" name= "casts"  />
                    </div>

                    
                    <Button variant="secondary" onClick={props.onClose}> cancel </Button>
                    <Button variant= "primary" type="submit"> create </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default MovieCreationModal;