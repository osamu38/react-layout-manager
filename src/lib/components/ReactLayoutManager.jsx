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
    horizontalSpace: 0,
    wrapVerticalSpace: 0,
    align: null,
    children: null,
    width: 0,
    innerWidth: 0,
    verticalAlign: null,
    isVisible: true,
    isWrap: false,
  }
  render() {
    const {
      children,
      horizontalSpace,
      verticalSpace,
      wrapVerticalSpace,
      width,
      innerWidth,
      verticalAlign,
      responsive,
      align,
      isVisible,
      isWrap,
    } = this.props;
    const parseWidth = parsePropertyToNumber(width);
    const parseHorizontalSpace = parsePropertyToNumber(horizontalSpace);
    const parseVerticalSpace = parsePropertyToNumber(verticalSpace);
    const parseInnerWidth = parsePropertyToNumber(innerWidth);
    const parseVerticalAlign = parsePropertyToNumber(verticalAlign);

    return (
      <LayoutManager
        {...getLayoutManagerProperty(
          wrapVerticalSpace,
          responsive,
        )}
      >
        {isArray(children) ?
          children.map((child, i) => {
            const childrenLength = children.length;
            const isLastChild = (childrenLength - 1) === i;

            return (
              <LayoutManagerChild
                {...getLayoutManagerChildProperty(
                  parseWidth,
                  parseHorizontalSpace,
                  parseVerticalSpace,
                  wrapVerticalSpace,
                  parseVerticalAlign,
                  isVisible,
                  isWrap,
                  childrenLength,
                  isLastChild,
                  i,
                  responsive,
                )}
                key={i}
              >
                {parseInnerWidth ? (
                  <LayoutManagerChildInner
                    {...getLayoutManagerChildInnerProperty(
                      parseInnerWidth,
                      align,
                      i,
                      responsive,
                    )}
                    key={i}
                  >
                    {child}
                  </LayoutManagerChildInner>
                ) :
                  child
                }
              </LayoutManagerChild>
            );
          }) :
          <LayoutManagerChild
            childWidth={parseWidth}
          >
            {parseInnerWidth ? (
              <LayoutManagerChildInner
                innerWidth={parseInnerWidth}
                align={align}
              >
                {children}
              </LayoutManagerChildInner>
            ) :
              children
            }
          </LayoutManagerChild>
        }
      </LayoutManager>
    );
  }
};
