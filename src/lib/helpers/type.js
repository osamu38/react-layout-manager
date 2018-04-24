function typeOf(x) {
  return x !== x
    ? 'NaN'
    : Object.prototype.toString
        .call(x)
        .slice(8, -1)
        .toLowerCase(); // eslint-disable-line no-self-compare
}

export function isNumber(property) {
  return typeOf(property) === 'number';
}
export function isString(property) {
  return typeOf(property) === 'string';
}
export function isArray(property) {
  return typeOf(property) === 'array';
}
export function isBoolean(property) {
  return typeOf(property) === 'boolean';
}
