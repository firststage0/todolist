import "./MarkElement.css";
const MarkElement = (props) => {
  const { element } = props;

  return (
    <div className="task-container">
      <div className="input-check">
        {
          <input
            type="checkbox"

            /* onClick={() => handleDelete(id)}*/
          />
        }
        <h3 className="element" style={{ textDecoration: "line-through" }}>
          {element}
        </h3>
      </div>
    </div>
  );
};
export default MarkElement;
