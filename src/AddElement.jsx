import { useState } from "react";
import './AddElement.css';
const AddElement = (props) => {
    const {handleCreate} = props;
    const [input, setInput] = useState();
    
    return(
        <div>
            <div className="input-container">
            <div className="task-input-title">Enter a task {" "} </div><br />
            <input type="text" onInput={(el) => {
                setInput(el.target.value);
            }}/>
            </div>
            <div className="tasks-container">
            <button
                onClick={() => {
                    handleCreate(input);
                }}
            >
               Add task
            </button>
            </div>
        </div>
    )
}

export default AddElement;