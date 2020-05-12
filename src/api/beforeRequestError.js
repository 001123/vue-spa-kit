/**
 *
 * @param {*} error
 */
export default function beforeRequestError(error) {
  return Promise.reject(error);
}
