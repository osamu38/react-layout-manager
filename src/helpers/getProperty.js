import {
  isNumber,
  isArray,
} from './type';
import { getUnit } from './util';

function getProperty(property, index) {
  return isArray(property) ? property[index] : property;
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
function getChildWidth(width, horizontalSpace, isWrap, childrenLength, index) {
  const totalHorizontalSpaces = getTotalHorizontalSpaces(horizontalSpace, childrenLength);

  if (isWrap) {
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
  isVisible,
  isWrap,
  childrenLength,
  isLastChild,
  index,
  responsive,
) {
  return {
    childWidth: getChildWidth(width, horizontalSpace, isWrap, childrenLength, index),
    verticalAlign: getProperty(verticalAlign, index),
    horizontalSpace: isLastChild ? 0 : getProperty(horizontalSpace, index) || 0,
    verticalSpace: verticalSpace && index && getProperty(verticalSpace, index - 1),
    wrapVerticalSpace,
    isWrap,
    isVisible: getProperty(isVisible, index),
    responsive,
    // pass props to styled components
    defaults: {
      width,
      verticalAlign,
      horizontalSpace,
      verticalSpace,
      wrapVerticalSpace,
      isWrap,
      isVisible,
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
