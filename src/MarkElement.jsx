import "./MarkElement.css";
import { useState } from "react";
const MarkElement = (props) => {
  const { element, id, handleDelete } = props;
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const changeClassName = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="task-container">
      <div className="input-check">
        <input
          type="checkbox"
          className="check-box"
          onClick={changeClassName}
          style={{ marginLeft: "10px" }}
        />

        <h3 className={`text-strike ${isButtonClicked ? "active" : ""}`}>
          {element}
        </h3>
        <button
          style={{
            color: "red",
            display: "block",
            margin: "20px 10px 0 40px",
            height: "25px",
            backgroundColor: "snow",
            borderRadius: "40px",
            borderColor: "lightblue",
          }}
          onClick={() => {
            handleDelete(id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default MarkElement;
