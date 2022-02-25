import { useContext ,useEffect } from 'react';
import { ListStore } from './ListStore';
import { HOST_API } from '../servicios/Url';
import DataService from "../servicios/servicios-HTTP"

const CategoryList = () => {
  const { dispatch, state: { listCategory } } = useContext(ListStore);
  const currentList = listCategory.list;

  useEffect(() => {
    //peticion al servidor para que traiga todas las listas creadas
    DataService.getAll()
      .then((list) => {
        dispatch({ type: "update-list",list: list.data }) //agrega los items ed la peticion a list
        console.log(list.data)
      })
  }, [dispatch]); //El dispatch me indica que solo se ejecute de nuevo el useEfecto cuando el dispatch cambie


  // const onEdit = (todo) => {
  //   dispatch({ type: "edit-item", item: todo })
  // };
  // DataService.updateCompleted()
  //     .then(response => response.json())
  //     .then((todo) => {
  //       dispatch({ type: "update-item", item: todo });
    
  //     })

  return (
    <div>
      {
          currentList.map(itemCategory =>{
            <div>
              <h5> {itemCategory.name} </h5>
              <button>Eliminar</button>
              <button>Editar</button>
            </div>
          })
      }
      
    </div>
  )
}
    
 
export default CategoryList;