/* eslint-disable array-callback-return */
import { useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import FetcherButton from "./FetcherButton";
import { fetcher } from "./fetcher";

function App() {
  const [resData, setResData] = useState("default useStatee");
  const postsURL =
    "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  const getData = async () => {
    const fetchData = async () => {
      const data = await fetcher(postsURL);
      setResData(data);
    };

    if (resData) {
      await fetchData();
    }
    console.log(resData);
  };

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
      <FetcherButton func={getData} text={"get data"} />
      {state.map((el, index) => {
        return (
          <MarkElement element={el} id={index} handleDelete={handleDelete} />
        );
      })}
    </>
  );
}

export default App;
