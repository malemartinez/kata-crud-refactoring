import React , {useRef, useContext, useState } from 'react'
import { ListStore } from '../utilidades/ListStore';
import DataService from "../servicios/servicios-HTTP"

import './ListCreator.css'


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
      const data = response.data
      dispatch({ type: "add-item", item: data });
      setState({ name: "" });
      formRef.current.reset();
      console.log("Lista creada")
      console.log(`respuesta del servidor ${item}`)
    });

  }

  //Funcion que me cambia el estado de acuerdo a los cambios en el input
  const onchange = (event)=>{
    setState({ ...state, name: event.target.value })
    console.log(state)
    
  }

  //Funcion que me actualiza el nombre de la lista
  const onEdit = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      id: item.id,
    };
    
      DataService.updateList(item.id , request)
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return ( 
    <div className='d-flex justify-content-center'>
      <form ref={formRef} >
        <div className = 'formCreateList'>
          <input className='inputList'
            type="text" 
            name="name"
            placeholder='Nombre de la lista'
            defaultValue={item.name}
            onChange={onchange}
            />
          {!item.id && <button onClick={onAdd}>
            <i className="fa-solid fa-plus"></i>
            Crear Nueva Lista
          </button>}
          {item.id && <button onClick={onEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>}

        </div>

        <hr />
      </form>

    </div>
   );
}
 
export default ListCreator;