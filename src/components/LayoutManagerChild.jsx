import styled from 'styled-components';
import {
  setRightMargin,
  setBottomMargin,
  setVerticalSpace,
  setWidth,
  setVerticalAlign,
  setVisible,
  setResponsivePropertyToChild,
} from '../helpers/setStyles';

const LayoutManagerChild = styled.div`
  width: 100%;
  vertical-align: middle;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
  ${({ horizontalSpace }) => setRightMargin(horizontalSpace)}
  ${({ wrapVerticalSpace }) => setBottomMargin(wrapVerticalSpace)}
  ${({ verticalSpace }) => setVerticalSpace(verticalSpace)}
  ${({ childWidth }) => setWidth(childWidth)}
  ${({ verticalAlign }) => setVerticalAlign(verticalAlign)}
  ${({ isVisible }) => setVisible(isVisible)}
  ${(props) => setResponsivePropertyToChild(props)}
`;

export default LayoutManagerChild;
