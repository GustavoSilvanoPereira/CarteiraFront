import axios from 'axios';


const api = axios.create({
baseURL: 'http://localhost:8080', // ajuste para seu backend
timeout: 10000,
});


// Observação: seu backend exige email+senha no body das requisições.
// Recomendo criar funções específicas para cada rota, injetando as credenciais do AuthContext.


export default api;