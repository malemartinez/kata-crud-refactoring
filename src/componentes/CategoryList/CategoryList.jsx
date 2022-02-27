import { useContext ,useEffect } from 'react';
import { ListStore } from '../utilidades/ListStore';
import DataService from "../servicios/servicios-HTTP.js"
import { StoreProvider } from '../utilidades/Store';
import List from '../List/List';
import {Form} from "../TodoCreator/ToDoCreator"

import './CategoryList.css'

const CategoryList = () => {
  const { dispatch, state: { listCategory } } = useContext(ListStore);
  const currentList = listCategory.list;

  useEffect(() => {
    //peticion al servidor para que traiga todas las listas creadas
    DataService.getAll()
      .then((response) => {
        const list = response.data
        dispatch({ type: "update-list",list:list }) //agrega los items ed la peticion a list
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
    <div className='category-list-container'>
      {
          currentList.map(itemCategory =>{
            return(
              <div className='list-item' key={itemCategory.id}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h3 > {itemCategory.name} </h3>
                  <button 
                    type="button"
                    onClick={()=> onDelete(itemCategory.id)} >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <StoreProvider>
                  <Form Category = {itemCategory.id} />
                  <List  Category = {itemCategory.id}/>
                </StoreProvider>
                

              </div>
            )
            
          })
      }
      
    </div>
  )
}
    
 
export default CategoryList;