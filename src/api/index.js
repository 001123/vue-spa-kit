import beforeRequestConfig from './beforeRequestConfig';
import beforeRequestError from './beforeRequestError';
import afterResponseResolve from './afterRequestResolve';
import afterResponseError from './afterRequestError';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

// Add a request interceptor
api.interceptors.request.use(beforeRequestConfig, beforeRequestError);

// Add a response interceptor
api.interceptors.response.use(afterResponseResolve, afterResponseError);

export default api;
