
const onAdd = (event) => {
  event.preventDefault();

  const request = {
    name: state.name,
    id: null,
    completed: false
  };


  fetch(HOST_API + "/todo", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((todo) => {
      dispatch({ type: "add-item", item: todo });
      setState({ name: "" });
      formRef.current.reset();
    });
}

const onEdit = (event) => {
  event.preventDefault();

  const request = {
    name: state.name,
    id: item.id,
    isCompleted: item.isCompleted
  };


  fetch(HOST_API + "/todo", {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((todo) => {
      dispatch({ type: "update-item", item: todo });
      setState({ name: "" });
      formRef.current.reset();
    });
}

export { onEdit, onAdd }