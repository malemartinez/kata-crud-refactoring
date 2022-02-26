import CategoryList from './CategoryList';
import ListCreator from './ListCreator';
import { ListStoreProvider } from './ListStore';

const ListGroup = () => {
   

  return ( 
    <ListStoreProvider>
      <ListCreator/>
      <CategoryList/>
    </ListStoreProvider>
  );
}
 
export default ListGroup;