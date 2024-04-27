import "./MarkElement.css";
import { useState } from "react";
const MarkElement = (props) => {
  const { element } = props;
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
        />

        <h3 className={`text-strike ${isButtonClicked ? "active" : ""}`}>
          {element}
        </h3>
      </div>
    </div>
  );
};
export default MarkElement;
