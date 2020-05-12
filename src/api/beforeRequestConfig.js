/* eslint-disable no-param-reassign */
import store from '@/store';

/**
 *  TODO: Add language params
 * @param {*} config
 */
export default function beforeRequestConfig(config) {
  // Do something before request is sent
  console.warn('Before request');

  //  Generate cancel token source
  const source = axios.CancelToken.source();

  // Set cancel token on this request
  config.cancelToken = source.token;

  // Add to vuex to make cancellation available from anywhere
  store.commit('cancelRequest/ADD_CANCEL_TOKEN', source);

  // TODO: For hide loading
  if (config.hideLoading) {
    //
  }
  return config;
}
