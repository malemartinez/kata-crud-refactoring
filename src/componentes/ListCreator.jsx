import React , {useRef, useContext, useState } from 'react'
import { ListStore } from './ListStore';
import DataService from "../servicios/servicios-HTTP"


const ListCreator = () => {

  const formRef = useRef(null);
  const { dispatch, state: { listCategory } } = useContext(ListStore);
  const item = listCategory.item;
  const [state, setState] = useState(item);

  
  //Adiciona y crea una lista
  const onAdd = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
    };

    DataService.create(request)
    .then((response) => {
      dispatch({ type: "add-item", item: response.data });
      setState({ name: "" });
      formRef.current.reset();
      console.log("Lista creada")
      console.log(state)
    });

  }

  //Funcion que me cambia el estado de acuerdo a los cambios en el input
  const onchange = (event)=>{
    setState({ ...state, name: event.target.value })
    console.log(state)
    
  }

  return ( 
    <div>
      <form ref={formRef}>
        <input 
          type="text" 
          name="name"
          placeholder='Nombre de la lista'
          defaultValue={item.name}
          onChange={onchange}
          />
        {!item.id && <button onClick={onAdd}>Crear</button>}
        {/* {item.id && <button onClick={onEdit}>Actualizar</button>} */}
        <hr />
      </form>

    </div>
   );
}
 
export default ListCreator;