/* eslint-disable array-callback-return */
import { useState } from 'react';

import MarkElement from './MarkElement';
import AddElement from './AddElement';

function App() {
  const list = ['Task 1', 'Task 2','Task 3']
  const [state, setState] = useState(list);

  // const handleDelete = (id) => {
  //   setState((prevState) => {
  //     return prevState.filter((_,i) =>{
  //         return i !== id;
  //     });
  //   })
  // }

  const handleCreate = (input) => {
    setState((prevState) => {
      return [...prevState, input]
      });
    }
  
  return (
    <>  
        {<AddElement handleCreate={handleCreate}/>}
        {state.map((el) => {
          return <MarkElement element={el}/>
        })}
    </>
  );
}

export default App;
