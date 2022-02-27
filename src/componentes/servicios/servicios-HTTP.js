//servicios para la solicitud de datos a la bas
import http from "./axios";

class DataService {

  //Traer todas las listas creadas
  getAll() {
    return http.get("/list");
  }

  //traer todos los ToDos de una lista especifica
  get(id) {
    return http.get(`list/todos/${id}`);
  }

  //Crear una lista
  create(data) {
    return http.post("/list", data);
  }

  //crear ToDo con idList
  createToDo(id , data){
    return http.post(`/todo/${id}`, data)
  }

  //Eliminar una lista en especifico
  delete(id) {
    return http.delete(`/list/${id}`);
  }

  //Eliminar un ToDo especifico
  deleteToDo(id){
    return http.delete(`todo/${id}`)
  }


  //Actualizar ToDo
  updateToDo(id, data){
    return http.put(`/todo/${id}`, data)
  }

  //Actualizar nombre de la lista
  updateList(id, data){
    return http.put(`/list/${id}`,data)
  }

  deleteAll() {
    return http.delete(`/`);
  }

  
}

export default new DataService();
