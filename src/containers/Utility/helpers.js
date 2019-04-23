/* eslint import/prefer-default-export: 0 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
  Math.ceil(min);

/**
 * @param {Object} object
 * @param {String|Array} path
 * @param {*} defaultVal
 */
const get = (object, path, defaultVal) => {
  if (!object) return '';
  const _path = Array.isArray(path)
    ? path
    : path.split('.').filter(i => i.length);

  if (!_path.length) {
    return object === undefined ? defaultVal : object;
  }

  return get(object[_path.shift()], _path, defaultVal);
};

export { get, getRandomInt };
