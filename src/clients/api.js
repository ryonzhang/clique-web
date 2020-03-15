import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://18.223.83.177:3001',
  // baseURL: 'http://3.21.10.77:3000',

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});


export default axiosService;
