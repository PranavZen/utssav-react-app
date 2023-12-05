import axios from 'axios';

const apiBaseUrl = 'https://root.utssavjewels.com/app/consumer/services_v1';

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;