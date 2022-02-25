//servicios para la solicitud de datos a la bas
import http from "./axios";

class DataService {
  getAll() {
    return http.get("/list");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/list", data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }

  deleteAll() {
    return http.delete(`/`);
  }

  
}

export default new DataService();
