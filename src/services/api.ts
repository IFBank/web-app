import axios, { AxiosError } from "axios";
import { signOut } from "../context/AuthContext";

const token = localStorage.getItem("@IFTAKE:token");

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorizarion: `Bearer ${token}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      signOut();
    }
  }
);

export { api };
