import { useContext ,useEffect } from 'react';
import { ListStore } from './ListStore';
import DataService from "../servicios/servicios-HTTP"
import { StoreProvider } from './Store';
import List from './List';
import {Form} from "./ToDoCreator"

const CategoryList = () => {
  const { dispatch, state: { listCategory } } = useContext(ListStore);
  const currentList = listCategory.list;

  useEffect(() => {
    //peticion al servidor para que traiga todas las listas creadas
    DataService.getAll()
      .then((response) => {
        dispatch({ type: "update-list",list: response.data }) //agrega los items ed la peticion a list
        console.log(response.data)
      })
  }, [dispatch]); //El dispatch me indica que solo se ejecute de nuevo el useEfecto cuando el dispatch cambie


  //Eliminar la lista completa
  const onDelete = (id)=>{
    DataService.delete(id).then((list) => {
      dispatch({ type: "delete-item", id })
    })
  }

  return (
    <div>
      {
          currentList.map(itemCategory =>{
            return(
              <div>
                <div>
                  <h3 key={itemCategory.id}> {itemCategory.name} </h3>
                  <button onClick={()=> onDelete(itemCategory.id)} >Eliminar</button>
                </div>
                <StoreProvider>
                  <Form Category = {itemCategory.id} />
                  <List  Category = {itemCategory.id}/>
                </StoreProvider>
                <hr></hr>

              </div>
            )
            
          })
      }
      
    </div>
  )
}
    
 
export default CategoryList;