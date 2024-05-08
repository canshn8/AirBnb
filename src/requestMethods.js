import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN = null;

const persistedState = localStorage.getItem("persist:root");
if (persistedState) {
  const user = JSON.parse(JSON.parse(persistedState).user);
  TOKEN = user && user.currentUser ? user.currentUser.token : null;
}

const headers = TOKEN ? { token: TOKEN } : {};

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: headers,
});
