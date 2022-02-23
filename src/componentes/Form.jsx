import React from 'react'


const Form = () => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>Actualizar</button>}
    {!item.id && <button onClick={onAdd}>Crear</button>}
  </form>
}
export default Form;