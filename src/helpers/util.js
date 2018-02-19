import {
  isNumber,
  isString,
  isArray,
} from '../helpers/type';

export function getUnit(property) {
  return isNumber(property) ? 'px' : '';
}
export function parsePropertyToNumber(property) {
  if (isArray(property)) {
    return property.map((item) => (
      isString(item) ? (
        Number(item) ||
        item
      ) :
      item
    ));
  }
  return (
    isString(property) &&
    Number(property)
  ) || property;
}
