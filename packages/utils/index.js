export const isObject = (val) => {
  return Object.prototype.toString.call(val).toLowerCase() === '[object object]';
};
