/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import FetcherButton from "./FetcherButton";
import { fetcher } from "./fetcher";

function App() {
  const list = [];

  const [state, setState] = useState(list);
  const postsURL =
    "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  useEffect(() => {
    const data = fetcher(postsURL);
    data.then((dataResponse) => {
      for (const el of dataResponse) {
        list.push(el.title);
        setState(list);
      }
    });
    console.log(list);
    // console.log(list);
  }, []);

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
      <AddElement handleCreate={handleCreate} />

      {state.map((el, index) => {
        return (
          <MarkElement element={el} id={index} handleDelete={handleDelete} />
        );
      })}
    </>
  );
}

export default App;
