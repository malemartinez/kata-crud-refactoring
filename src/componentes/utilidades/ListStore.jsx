import {createContext ,useReducer } from "react";
import { reducerList } from "./reducerList";

const initialState = {
  listCategory: { list: [], item: {} },
 };
const ListStore = createContext(initialState)



// hacer que nuestros componentes se registren al store, con la intención de que reciban las actualizaciones en caso de alguien actualice el store.
const ListStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerList, initialState);

  return <ListStore.Provider value={{ state, dispatch }}>
    {children}
  </ListStore.Provider>
}

export {ListStoreProvider, ListStore };