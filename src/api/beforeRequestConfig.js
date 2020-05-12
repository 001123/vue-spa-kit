/**
 *
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
