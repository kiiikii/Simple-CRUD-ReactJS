import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default useAxios;
