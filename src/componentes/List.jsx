import { useContext ,useEffect } from 'react';
import DataService from "../servicios/servicios-HTTP"
import { Store } from './Store';


const List = ({Category}) => {
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    DataService.get(Category)
    .then((list) => {
      console.log(list.data)
        dispatch({ type: "update-list", list: list.data }) //agrega los items ed la peticion a list
    })
  }, [dispatch]);


  const onDelete = (id) => {
    DataService.deleteToDo(id)
    .then((list) => {
      dispatch({ type: "delete-item", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
      ListID : Category
    };
    DataService.updateToDo(Category,request)
       .then((todo) => {
         console.log(todo)
        dispatch({ type: "update-item", item: todo.data });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
  };
  return <div>
    <table >
      <thead>
        <tr>
          <td>ID</td>
          <td>Tarea</td>
          <td>¿Completado?</td>
        </tr>
      </thead>
      <tbody>
        {currentList.map((todo) => {
          return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
            <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
            <td><button onClick={() => onEdit(todo)}>Editar</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export default List;