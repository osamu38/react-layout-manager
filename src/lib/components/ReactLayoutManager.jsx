import React, { Component } from 'react';
import { isArray } from '../helpers/type';
import { parsePropertyToNumber } from '../helpers/util';
import {
  getLayoutManagerProperty,
  getLayoutManagerChildProperty,
  getLayoutManagerChildInnerProperty,
} from '../helpers/getProperty';
import LayoutManager from './LayoutManager';
import LayoutManagerChild from './LayoutManagerChild';
import LayoutManagerChildInner from './LayoutManagerChildInner';

export default class ReactLayoutManager extends Component {
  static defaultProps = {
    children: null,
    horizontalSpace: 0,
    verticalSpace: 0,
    wrapVerticalSpace: 0,
    width: null,
    innerWidth: null,
    verticalAlign: null,
    align: null,
    visible: true,
    wrap: false,
    responsive: [],
  };
  render() {
    const {
      children,
      horizontalSpace,
      verticalSpace,
      wrapVerticalSpace,
      width,
      innerWidth,
      verticalAlign,
      align,
      visible,
      wrap,
      responsive,
    } = this.props;
    const parseWidth = parsePropertyToNumber(width);
    const parseHorizontalSpace = parsePropertyToNumber(horizontalSpace);
    const parseVerticalSpace = parsePropertyToNumber(verticalSpace);
    const parseInnerWidth = parsePropertyToNumber(innerWidth);
    const parseVerticalAlign = parsePropertyToNumber(verticalAlign);

    return (
      <LayoutManager
        {...getLayoutManagerProperty(wrapVerticalSpace, responsive)}
      >
        {isArray(children) ? (
          children.map((child, i) => {
            const childrenLength = children.length;
            const isLastChild = childrenLength - 1 === i;

            return (
              <LayoutManagerChild
                {...getLayoutManagerChildProperty(
                  parseWidth,
                  parseHorizontalSpace,
                  parseVerticalSpace,
                  wrapVerticalSpace,
                  parseVerticalAlign,
                  visible,
                  wrap,
                  childrenLength,
                  isLastChild,
                  i,
                  responsive
                )}
                key={i}
              >
                <LayoutManagerChildInner
                  {...getLayoutManagerChildInnerProperty(
                    parseInnerWidth,
                    align,
                    i,
                    responsive
                  )}
                  key={i}
                >
                  {child}
                </LayoutManagerChildInner>
              </LayoutManagerChild>
            );
          })
        ) : (
          <LayoutManagerChild childWidth={parseWidth}>
            <LayoutManagerChildInner innerWidth={parseInnerWidth} align={align}>
              {children}
            </LayoutManagerChildInner>
          </LayoutManagerChild>
        )}
      </LayoutManager>
    );
  }
}
