const DeleteElement = (props) => {
    const {element, id, handleDelete} = props;

    return (
        <div className="task-container">
            <div style={{display: "flex"}}>
            <input type="checkbox" onClick={() => handleDelete(id)}/>
            <h3>{element}</h3>
            </div>
        </div>  
    );
}
export default DeleteElement;