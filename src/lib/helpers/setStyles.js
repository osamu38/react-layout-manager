import { css } from 'styled-components';
import {
  isNumber,
  isString,
  isBoolean,
  isArray,
} from './type';
import { getUnit } from './util';
import {
  getLayoutManagerProperty,
  getLayoutManagerChildProperty,
  getLayoutManagerChildInnerProperty,
} from './getProperty';

function checkPropertyValid(property) {
  return (
    isBoolean(property) ||
    isArray(property) ||
    isString(property) ||
    isNumber(property)
  );
}
function checkApplyProperyValid(property) {
  return (
    isBoolean(property) ||
    isString(property) ||
    isNumber(property)
  );
}
function sortResponsiveBreakpoint(responsive) {
  return responsive.sort((pre, cur) => cur.breakpoint - pre.breakpoint);
}

export function setVisible(isVisible) {
  return checkApplyProperyValid(isVisible) && `
    display: ${isVisible ? 'inline-block' : 'none'};
  `;
}
export function setRightMargin(horizontalSpace) {
  return checkApplyProperyValid(horizontalSpace) && `
    margin-right: ${horizontalSpace}px;
  `;
}
export function setBottomMargin(wrapVerticalSpace) {
  return checkApplyProperyValid(wrapVerticalSpace) && `
    margin-bottom: ${wrapVerticalSpace}px;
  `;
}
export function setBottomNegativeMargin(wrapVerticalSpace) {
  return checkApplyProperyValid(wrapVerticalSpace) && `
    margin-bottom: -${wrapVerticalSpace}px;
  `;
}
export function setWidth(childWidth) {
  return childWidth && `
    max-width: ${childWidth + getUnit(childWidth)};
  `;
}
export function setVerticalSpace(verticalSpace) {
  return checkApplyProperyValid(verticalSpace) && `
    margin-top: ${verticalSpace}px;
  `;
}
export function setVerticalAlign(verticalAlign) {
  return checkApplyProperyValid(verticalAlign) && `
    vertical-align: ${verticalAlign + getUnit(verticalAlign)};
  `;
}
export function setInnerWidth(innerWidth) {
  return checkApplyProperyValid(innerWidth) && `
    max-width: ${innerWidth + getUnit(innerWidth)};
  `;
}
export function setAlign(align) {
  return align && align === 'center' ? `
    margin: 0 auto;
  ` : `
    float: ${align};
  `;
}
export function setResponsivePropertyToLayoutManager(props) {
  return props.responsive && sortResponsiveBreakpoint(props.responsive).map(({
    breakpoint,
    settings,
  }) => css`
    @media (max-width: ${breakpoint}px) {
      ${(() => {
        const layoutManagerProperty = getLayoutManagerProperty(
          settings.wrapVerticalSpace || props.defaults.wrapVerticalSpace,
        );

        return css`
          ${setBottomNegativeMargin(layoutManagerProperty.wrapVerticalSpace)}
        `;
      })()}
    }
  `);
}
export function setResponsivePropertyToChild(props) {
  return props.responsive && sortResponsiveBreakpoint(props.responsive).map(({
    breakpoint,
    settings,
  }) => css`
    @media (max-width: ${breakpoint}px) {
      ${(() => {
        const childProperty = getLayoutManagerChildProperty(
          checkPropertyValid(settings.width) ? settings.width : props.defaults.width,
          checkPropertyValid(settings.horizontalSpace) ? settings.horizontalSpace : props.defaults.horizontalSpace,
          checkPropertyValid(settings.verticalSpace) ? settings.verticalSpace : props.defaults.verticalSpace,
          checkPropertyValid(settings.wrapVerticalSpace) ? settings.wrapVerticalSpace : props.defaults.wrapVerticalSpace,
          checkPropertyValid(settings.verticalAlign) ? settings.verticalAlign : props.defaults.verticalAlign,
          checkPropertyValid(settings.visible) ? settings.visible : props.defaults.visible,
          settings.wrap || props.defaults.wrap,
          props.childrenLength,
          props.isLastChild,
          props.index,
        );

        return css`
          ${setRightMargin(childProperty.horizontalSpace)}
          ${setBottomMargin(childProperty.wrapVerticalSpace)}
          ${setVerticalSpace(childProperty.verticalSpace)}
          ${setWidth(childProperty.childWidth)}
          ${setVerticalAlign(childProperty.verticalAlign)}
          ${setVisible(childProperty.isVisible)}
        `;
      })()}
    }
  `);
}
export function setResponsivePropertyToChildInner(props) {
  return props.responsive && sortResponsiveBreakpoint(props.responsive).map(({
    breakpoint,
    settings,
  }) => css`
    @media (max-width: ${breakpoint}px) {
      ${(() => {
        const childInnerProperty = getLayoutManagerChildInnerProperty(
          checkPropertyValid(settings.innerWidth) ? settings.innerWidth : props.defaults.innerWidth,
          checkPropertyValid(settings.align) ? settings.align : props.defaults.align,
          props.index,
        );

        return css`
          ${setInnerWidth(childInnerProperty.innerWidth)}
          ${setAlign(childInnerProperty.align)}
        `;
      })()}
    }
  `);
}
