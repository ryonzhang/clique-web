import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://52.15.120.145:3001',
  // baseURL: 'http://3.21.10.77:3000',

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});


export default axiosService;
