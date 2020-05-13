import app from '@/main';

/**
 *
 * @param {*} error
 */
export default function beforeRequestError(error) {
  app.$screenloading(false);

  return Promise.reject(error);
}
