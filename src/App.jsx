/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import FetcherButton from "./FetcherButton";
import { fetcher } from "./fetcher";

function App() {
  const list = [];
  const [resData, setResData] = useState("");
  const [state, setState] = useState(list);
  const postsURL =
    "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  useEffect(() => {
    const entries = Object.entries(resData);
    for (const el of entries) {
      const [, value] = el;
      list.push(value["title"]);
      // console.log(value["title"]);
    }
    setState(list);
    console.log(list);
  }, [resData]);

  const getData = async () => {
    const data = await fetcher(postsURL);
    setResData(data);
  };

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

  const renderMarkElement = () => {
    if (state !== undefined) {
      state.map((el, index) => {
        return (
          <MarkElement element={el} id={index} handleDelete={handleDelete} />
        );
      });
    }
  };

  return (
    <>
      <AddElement handleCreate={handleCreate} />
      <FetcherButton func={getData} text={"get data"} />
      {renderMarkElement()}
    </>
  );
}

export default App;
