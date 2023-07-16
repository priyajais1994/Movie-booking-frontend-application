import { Link } from "react-router-dom";

 function TheatreComponent(theatre, selectedMovie)
{
    return <>

    <Link to ={`/buyTickets/${selectedMovie}/${theatre._id}`} className="text-decoration-none">

     <div style= {{border:"1px solid grey",  cursor:"pointer"}} className= "row py-4">

        <div className="col">
            <hs> {theatre.name} </hs>
        </div>

        <div className="col">
            <div className="py-2 fw-bold text-success">
                <i className="bi bi-phone text-success"></i>
                  m-ticket
                  </div>
                   </div>

                   <div className="col">
            <div className="py-2 fw-bold text-danger">
                <i className="bi bi-cup-straw text-danger"></i>
                  Food and beverage
                  </div>
                   </div>
                   </div>
                   </Link>
                   </>
}

function TheatreDetails({theatresDetails, selectedMovie})
{
    return <div>
        {
            theatresDetails.map((theatre)=>TheatreComponent(theatre, selectedMovie) )
        }
    </div>

}
export default TheatreDetails; 


 

