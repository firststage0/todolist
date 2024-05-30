import { useState } from "react";
import "./AppModule.css";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const changeColor = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <>
      <div className={`element ${isClicked ? "active" : ""}`}></div>
      <button onClick={changeColor}>click</button>
    </>
  );
}

export default App;
