import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/api/todos",
  headers: {
    "Content-type": "application/json"
  }
});