//axios is a promise based library
import axios from "axios";

const instance = axios.create({
  //https://api.themoviedb.org/3
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
