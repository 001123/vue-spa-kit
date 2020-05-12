/**
 *
 * @param {*} response
 */
export default function afterResponseResolve(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}
