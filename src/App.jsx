/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import FetcherButton from "./FetcherButton";
import { fetcher } from "./fetcher";

function App() {
  const [resData, setResData] = useState("");
  const postsURL =
    "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  useEffect(() => {
    console.log(resData);
  }, [resData]);

  const getData = async () => {
    const data = await fetcher(postsURL);
    setResData(data);
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
