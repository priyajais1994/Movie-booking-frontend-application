import Moviecard from "../Moviecard/Moviecard";


function MovieList(props)
{
    const{movieData} = props;

    const rendermovies = (movies)=>{
        return movieData.map((movie)=>{
            return <Moviecard movie= {movie}/>
        })
    }
    
    return<div className="bg-light py-3">
                <h2> Recommended Movies </h2>

    <div style={{flexFlow:"wrap"}} className="bg-light d-flex justify-content-center" >
        {rendermovies()}
    </div>
    </div>
}
export default MovieList;