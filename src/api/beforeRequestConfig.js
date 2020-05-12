/* eslint-disable no-param-reassign */
/**
 *  TODO: Add language params
 * @param {*} config
 */
export default function beforeRequestConfig(config) {
  // Do something before request is sent
  console.warn('Before request');

  if (config.hideLoading) {
    //
  }
  return config;
}
