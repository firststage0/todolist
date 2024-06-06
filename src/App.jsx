/* eslint-disable array-callback-return */
import { useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import fetcher from "./fetcher";
function App() {
  // const postsURL =
  //   "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  // const fetchData = async (postsURL) => {
  //   const data = await fetcher(postsURL);
  //   console.log(data);
  // };

  const list = ["task 1", "task 2", "task 3"];
  const [state, setState] = useState(list);

  const handleDelete = (id) => {
    setState((prevState) => {
      return prevState.filter((_, i) => {
        return i !== id;
      });
    });
  };

  const handleCreate = (input) => {
    setState((prevState) => {
      return [...prevState, input];
    });
  };

  return (
    <>
      {<AddElement handleCreate={handleCreate} />}
      {state.map((el, index) => {
        return (
          <div>
            <MarkElement element={el} id={index} handleDelete={handleDelete} />
            <fetcherButton text={"get data"} />
          </div>
        );
      })}
    </>
  );
}

export default App;
