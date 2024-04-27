import { useState } from "react";
import "./AddElement.css";
const AddElement = (props) => {
  const { handleCreate } = props;
  const [input, setInput] = useState();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="input-container">
        <br />
        <input
          id="input-field"
          className="input-field"
          type="text"
          onInput={(el) => {
            setInput(el.target.value);
          }}
        />
        <div className="button-container">
          <button
            onClick={() => {
              handleCreate(input);
              document.getElementById("input-field").value = "";
            }}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddElement;
