/* eslint-disable array-callback-return */
import { useState } from 'react';

import DeleteElement from './DeleteElement';
import AddElement from './AddElement';

function App() {
  const list = ['title1', 'title2','titile3']
  const [state, setState] = useState(list);

  const handleDelete = (id) => {
    setState((prevState) => {
      return prevState.filter((_,i) =>{
          return i !== id;
      });
    })
  }
  const handleCreate = (input) => {
    setState((prevState) => {
      return [...prevState, input]
      });
    }
  
  return (
    <>  
        {<AddElement handleCreate={handleCreate}/>}
        {state.map((el, id) => {
          return <DeleteElement element={el} id={id} handleDelete={handleDelete}/>
        })}
    </>
  );
}

export default App;
