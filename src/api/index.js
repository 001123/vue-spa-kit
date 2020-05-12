import axios from 'axios';

import beforeRequestConfig from './beforeRequestConfig';
import beforeRequestError from './beforeRequestError';
import afterResponseResolve from './afterRequestResolve';
import afterResponseError from './afterRequestError';

const Api = axios.create({
  baseURL: 'https://kd-mock-data.glitch.me/mock',
  timeout: 10000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

// Add a request interceptor
Api.interceptors.request.use(beforeRequestConfig, beforeRequestError);

// Add a response interceptor
Api.interceptors.response.use(afterResponseResolve, afterResponseError);

export default Api;
