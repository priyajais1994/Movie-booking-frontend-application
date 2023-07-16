

import { keys } from "../../utils/constants";
import CWidget from "../CWidget/CWidget";

function CardList(props)
{
    const {counterInfo, onWidgetClick, show} = props;

    return <div className="row">

       <div className="col">

         <CWidget id = {keys.THEATRE} show={show} onWidgetClick={onWidgetClick } value= {counterInfo.theatres} icon="bi-building" text="Number of Theatres" title="Theatres"/>
        
         </div>

         <div className="col">

         <CWidget id = {keys.MOVIE} show={show} onWidgetClick={onWidgetClick } value= {counterInfo.movies} icon="bi-film" text="Number of Movies" title="Movies"/>
        
         </div>

         <div className="col">

         <CWidget id = {keys.BOOKING} show={show} onWidgetClick={onWidgetClick } value= {counterInfo.bookings} icon="bi-card-list" text="Number of Bookings" title="Bookings"/>
        
         </div>

         <div className="col">

         <CWidget id = {keys.USER} show={show} onWidgetClick={onWidgetClick }value= {counterInfo.users} icon="bi-people" text="Number of Users" title="Users"/>
        
         </div>

         
</div>

}
export default CardList;