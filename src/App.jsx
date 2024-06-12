/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

import MarkElement from "./MarkElement";
import AddElement from "./AddElement";
import { fetcher } from "./fetcher";

function App() {
  const [state, setState] = useState([]);
  const postsURL =
    "https://my-json-server.typicode.com/firststage0/todolistdb/posts";

  useEffect(() => {
    const data = fetcher(postsURL);
    data.then((dataResponse) => {
      console.log(dataResponse);
      const list = dataResponse.map((el) => el.title);
      setState(list);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
