import axios from 'axios';

export const ajax = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 120000,
  baseURL: 'https://test.dev-relabs.ru/api',
});
