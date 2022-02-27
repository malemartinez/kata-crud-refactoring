import { useContext ,useEffect } from 'react';
import DataService from "../servicios/servicios-HTTP"
import { Store } from '../utilidades/Store';

import './List.css';


const List = ({Category}) => {
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    DataService.get(Category)
    .then((response) => {
      const list = response.data
      console.log(list)
        dispatch({ type: "update-list", list}) //agrega los items ed la peticion a list
    })
  }, [dispatch]);


  const onDelete = (id) => {
    DataService.deleteToDo(id)
    .then((list) => {
      dispatch({ type: "delete-item", id })
      console.log(id)
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
    console.log(`item a editar ${todo.id}`)
    console.log(`item a editar ${todo.name}`)
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
      listID : Category
    };
    DataService.updateToDo(Category,request)
       .then((response) => {
         const todo = response.data
         console.log(Category)
        dispatch({ type: "update-item", item: todo });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through',
    color: '#a7a7a7'
  };
  return (
    
    <div>
          
        {
          currentList.map((todo) => {
          return(
            <div className='d-flex align-items-center itemTodo' key={todo.id} style={todo.completed ? decorationDone : {}}>
                <div className='itemTodoInfo'>
                  <input  type="radio" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input>
                  <p>{todo.name}</p>

                </div>

              
              <div className='buttonsContainer'>

                <button onClick={() => onEdit(todo)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                <button onClick={() => onDelete(todo.id)}>
                  <i className="fa-solid fa-xmark"></i>
                  </button>
              </div>

            </div>
          )
          
            

          
        })
        }
      
    
  </div>
  ) 
}

export default List;