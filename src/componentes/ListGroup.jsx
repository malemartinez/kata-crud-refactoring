import React, { useState , useContext , Fragment}from 'react'
import { Form } from './Form';
import List from './List'
import { Store } from './Store';

const ListGroup = () => {
  // const ListRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.listgroup;
  const [state, setState] = useState(currentList);
  const [creado,SetCreado] = useState(false)
  
  //Peticion de que me traiga los todos con el id en especifico
  // useEffect(() => {
  //   fetch(HOST_API + "/todos")
  //     .then(response => response.json())
  //     .then((listgroup) => {
  //       dispatch({ type: "update-list", listgroup }) 
  //     })
  // }, [dispatch]);

  const onAdd = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      id: null      
    };

    console.log("lista creada")
    SetCreado(true)
      
   
  }

  const onchange = (event)=>{
    setState({ ...state, name: event.target.value })
    console.log(state)
    
  }

  return ( 
    <Fragment>
      <form action="">
        <input 
          type="text" 
          placeholder='Nombre de la lista'
          onChange={onchange}
          />
        <button onClick={onAdd}>Crear</button>
        <hr />
      </form>
      {
        creado ? 
        <div>
          <Form/> 
          <List />
        </div> : 
        <p>Crea una lista</p>

      }

    </Fragment>
  );
}
 
export default ListGroup;