import "./MarkElement.css";
const MarkElement = (props) => {
  const { element } = props;

  return (
    <div className="task-container">
      <div style={{ display: "flex" }}>
        {
          <input
            type="checkbox"
            className="input-check"

            /* onClick={() => handleDelete(id)}*/
          />
        }
        <h3 className="element">{element}</h3>
      </div>
    </div>
  );
};
export default MarkElement;
