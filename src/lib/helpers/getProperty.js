import {
  isNumber,
  isArray,
} from './type';
import { getUnit } from './util';

function getProperty(property, index) {
  return isArray(property) ? property[index] : property;
}
function getHorizontalSpace(horizontalSpace, childWidth, isLastChild, index) {
  const horizontalSpaceValue = getProperty(horizontalSpace, index);

  if (
    !horizontalSpaceValue ||
    String(childWidth) === '100%' ||
    isLastChild
  ) {
    return 0;
  }
  return horizontalSpaceValue;
}
function getVerticalSpace(verticalSpace, index) {
  if (
    verticalSpace &&
    index
  ) {
    return getProperty(verticalSpace, index - 1);
  }
}
function getTotalFixedWidth(fixedWidth) {
  return fixedWidth.reduce((pre, cur) => pre + cur, 0);
}
function getTotalHorizontalSpaces(horizontalSpace, childrenLength) {
  if (isArray(horizontalSpace)) {
    return horizontalSpace.reduce((pre, cur) => pre + cur, 0);
  }
  return horizontalSpace * (childrenLength - 1);
}
function getChildWidth(width, horizontalSpace, wrap, childrenLength, index) {
  const totalHorizontalSpaces = getTotalHorizontalSpaces(horizontalSpace, childrenLength);

  if (wrap) {
    return getProperty(width, index);
  }
  if (isArray(width)) {
    const isIncludesVariableWidth = `${width[index]}`.includes('%');
    const variableWidth = width.filter(item => `${item}`.includes('%'));
    const fixedWidth = width.filter(item => isNumber(item));

    if (isIncludesVariableWidth) {
      if (fixedWidth.length) {
        const totalFixedWidth = getTotalFixedWidth(fixedWidth);

        return `calc(${width[index]} - ${(totalHorizontalSpaces + totalFixedWidth) / variableWidth.length}px)`;
      }
      return `calc(${width[index]} - ${totalHorizontalSpaces / childrenLength}px)`;
    }
    return width[index];
  }
  const isVariableWidth = `${width}`.includes('%');

  if (isVariableWidth) {
    return `calc(${width + getUnit(width)} - ${totalHorizontalSpaces / childrenLength}px)`;
  }
  return getProperty(width, index);
}

export function getLayoutManagerProperty(wrapVerticalSpace, responsive) {
  return {
    wrapVerticalSpace,
    responsive,
    // pass props to styled components
    defaults: {
      wrapVerticalSpace,
    },
  };
}
export function getLayoutManagerChildProperty(
  width,
  horizontalSpace,
  verticalSpace,
  wrapVerticalSpace,
  verticalAlign,
  visible,
  wrap,
  childrenLength,
  isLastChild,
  index,
  responsive,
) {
  const childWidth = getChildWidth(width, horizontalSpace, wrap, childrenLength, index);

  return {
    childWidth,
    verticalAlign: getProperty(verticalAlign, index),
    horizontalSpace: getHorizontalSpace(horizontalSpace, childWidth, isLastChild, index),
    verticalSpace: getVerticalSpace(verticalSpace, index),
    wrapVerticalSpace,
    isWrap: wrap,
    isVisible: getProperty(visible, index),
    responsive,
    // pass props to styled components
    defaults: {
      width,
      verticalAlign,
      horizontalSpace,
      verticalSpace,
      wrapVerticalSpace,
      wrap,
      visible,
    },
    childrenLength,
    isLastChild,
    index,
  };
}
export function getLayoutManagerChildInnerProperty(innerWidth, align, index, responsive) {
  return {
    innerWidth: getProperty(innerWidth, index),
    align: getProperty(align, index),
    responsive,
    // pass props to styled components
    defaults: {
      innerWidth,
      align,
    },
    index,
  };
}
