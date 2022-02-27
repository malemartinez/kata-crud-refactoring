import {createContext ,useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  todo: { list: [], item: {} },
 };
const Store = createContext(initialState)



// hacer que nuestros componentes se registren al store, con la intención de que reciban las actualizaciones en caso de alguien actualice el store.
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>
}

export {StoreProvider, Store };