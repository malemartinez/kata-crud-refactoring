import React , {useRef, useContext, useState } from 'react'
import { Store } from '../utilidades/Store';
import DataService from "../servicios/servicios-HTTP"

import './TodoCreator.css'

const Form = ({Category}) => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);


  const onAdd = (event) => {
    event.preventDefault();
  
    const request = {
      name: state.name,
      completed: false,
      listID: Category
    };
    
    DataService.createToDo(Category, request)
      .then((response) => {
        const todo = response.data
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
      completed: item.isCompleted,
      listID: Category
    };
  
    DataService.updateToDo(Category,request)
      .then((response) => {
        const todo = response.data
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return <form ref={formRef} className = 'form-container mb-3'>
    <input
      type="text"
      name="name"
      placeholder="Quiero hacer"
      defaultValue={item.name}
      onChange={(event) => {
        console.log(event.target.value)
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>
    <i className="fa-solid fa-pen-to-square"></i>
      </button>}
    {!item.id && <button onClick={onAdd}>
    <i className="fa-solid fa-plus"></i>
      </button>}
  </form>
}
export {Form};