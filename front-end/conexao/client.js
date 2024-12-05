import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'; // Back-end Laravel
axios.defaults.withCredentials = true; // Envia os cookies automaticamente nas requisições
