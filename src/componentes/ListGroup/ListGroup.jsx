import CategoryList from '../CategoryList/CategoryList';
import ListCreator from '../ListCreator/ListCreator';
import { ListStoreProvider } from '../utilidades/ListStore';

import './ListGroup.css'

const ListGroup = () => {
   

  return ( 
    <ListStoreProvider>
      <div  className='container'>
      <ListCreator/>
      <CategoryList/>

      </div>
    </ListStoreProvider>
  );
}
 
export default ListGroup;