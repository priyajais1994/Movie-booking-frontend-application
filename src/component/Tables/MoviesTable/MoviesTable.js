
 import { Cell, Column, HeaderCell, Table, rowData, dataKey } from "rsuite-table";
 import useCreateMovie from "../../../hooks/useCreateMovie";
 import MovieCreationModal from "../../MovieCreationModal/MovieCreationModal";
 import { Button } from "react-bootstrap";
 import { deleteMoviesById, updateMoviesById } from "../../../api/movie.api";


 const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src={rowData[dataKey]} width="70" />
    </Cell>
  );

  const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {

    return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData._id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const DeleteCell = ({ rowData, dataKey, onClick, ...props }) => {

  return (
  <Cell {...props} style={{ padding: '6px' }}>
    <Button
      appearance="link"
      variant="danger"
      onClick={() => {
        onClick(rowData._id);
      }}
    >
      {rowData.status === 'DELETE' ? 'Save' : 'DELETE'}
    </Button>
  </Cell>
);
};

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
      <Cell {...props} className={editing ? 'table-content-editing' : ''}>
        {editing ? (
          <input
            className="rs-input"
            defaultValue={rowData[dataKey]}
            onChange={event => {
              onChange && onChange(rowData._id, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  };

  

  const MoviesTable = ({moviesList, setMoviesList})=>{

    const {createMovieModal, CloseCreateMovieModal, OpenCreateMovieModal} = useCreateMovie();

    const handleEditState = async id => {
      console.log(id);
  const nextData = Object.assign([], moviesList);
  const activeItem = nextData.find(item => item._id === id);
  activeItem.status = activeItem.status ? null : 'EDIT';
  setMoviesList(nextData);

  if(activeItem.status===null){
      // make API call
      await updateMoviesById(activeItem._id,activeItem);
      alert(`Movie updated successfully with id ${activeItem._id}`)
  }

};

const handleDeleteState = async id => {
  console.log(id);
 const nextData = moviesList.filter(item => item._id !== id);
 setMoviesList(nextData);
 // make API call
  await deleteMoviesById(id);
  alert(`Movie deleted successfully with id ${id}`)
};

const handleChange = (id, key, value) => {
  console.log("inside change");
  const nextData = Object.assign([], moviesList);
  nextData.find(item => item._id === id)[key] = value;
  setMoviesList(nextData);
   };


    return <div className="P-3">
    <h3 className="m-3"> Movies </h3>

    <Table bordered={true} autoHeight={true} rowHeight={100}  data= {moviesList}>

        
        
            <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>Movie Id</HeaderCell>
                <Cell dataKey="_id" />
                </Column>

        <Column flexGrow={1} height={200} resizable>
            <HeaderCell> Poster  </HeaderCell>
            <ImageCell dataKey="posterUrl"/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Director </HeaderCell>
            <EditableCell dataKey="director"  onChange={handleChange}/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Release Date </HeaderCell>
            <EditableCell dataKey="releaseDate"  onChange={handleChange}/>
        </Column>

        <Column flexGrow={1} sortable resizable>
            <HeaderCell> Release Status </HeaderCell>
            <EditableCell dataKey="releaseStatus"  onChange={handleChange}/>
        </Column>

        <Column flexGrow={1}>
                <HeaderCell>...</HeaderCell>
                <ActionCell dataKey="_id" onClick={handleEditState} />
             </Column>

             <Column flexGrow={1}>
                <HeaderCell>...</HeaderCell>
                <DeleteCell dataKey="_id" onClick={handleDeleteState} />
             </Column>


      </Table>
      <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Create New Movie" onClick={OpenCreateMovieModal}/>

      <MovieCreationModal  show={createMovieModal}  onClose={CloseCreateMovieModal} />
        </div>
}
export default MoviesTable;

