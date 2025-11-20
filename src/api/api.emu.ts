import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:8080", // endereço fixo do emulador Android
  timeout: 10000,
});

export default api;
