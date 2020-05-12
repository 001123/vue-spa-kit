import axios from 'axios';
/**
 * https://github.com/axios/axios#cancellation
 * @param {*} error
 */
export default function afterResponseError(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (axios.isCancel(error)) {
    // Cancel request
    console.warn('Request cancel', error.message);
  } else if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
  }
  return Promise.reject(error);
}
