
 import { Cell, Column, HeaderCell, Table } from "rsuite-table";
import useCreateMovie from "../../../hooks/useCreateMovie";
 import MovieCreationModal from "../../MovieCreationModal/MovieCreationModal";

 const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src={rowData[dataKey]} width="70" />
    </Cell>
  );
  

  const MoviesTable = ({moviesList})=>{

    const {createMovieModal, CloseCreateMovieModal, OpenCreateMovieModal} = useCreateMovie();

    return <div className="P-3">
    <h3 className="m-3"> Movies </h3>

    <Table bordered={true} autoHeight={true} rowHeight={100}  data= {moviesList}>

        <Column flexGrow={1} sortable  resizable>
            <HeaderCell> ID </HeaderCell>
            <Cell dataKey = "_id"/>
        </Column>

        <Column flexGrow={1} height={200} resizable>
            <HeaderCell> Poster  </HeaderCell>
            <ImageCell dataKey="posterUrl"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Director </HeaderCell>
            <Cell dataKey = "director"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Release Date </HeaderCell>
            <Cell dataKey = "releaseDate"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Release Status </HeaderCell>
            <Cell dataKey = "releaseStatus"/>
        </Column>

      </Table>
      <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New Movie" onClick={OpenCreateMovieModal}/>

      <MovieCreationModal  show={createMovieModal}  onClose={CloseCreateMovieModal} />
        </div>
}
export default MoviesTable;

