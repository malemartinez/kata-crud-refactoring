import React , {useRef, useContext, useState } from 'react'
import { Store } from './Store';
import DataService from "../servicios/servicios-HTTP"

const Form = ({Category}) => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);


  const onAdd = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      id: null,
      completed: false,
      ListID: Category
    };
    
    DataService.createToDo(Category, request)
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }
  
  const onEdit = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      ListID: Category
    };
  
    DataService.updateToDo(Category,request)
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>Actualizar</button>}
    {!item.id && <button onClick={onAdd}>Crear</button>}
  </form>
}
export {Form};