/* eslint import/prefer-default-export: 0 */
export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
  Math.ceil(min);
