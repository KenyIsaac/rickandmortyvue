import axios from "axios";

// Configuracion inicial de Axios

export default axios.create({
  baseURL: `https://rickandmortyapi.com/api/`,
});
