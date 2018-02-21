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
  &::after {
    display: block;
    clear: both;
    content: '';
  }
  ${({ isVisible }) => setVisible(isVisible)}
  ${({ horizontalSpace }) => setRightMargin(horizontalSpace)}
  ${({ wrapVerticalSpace }) => setBottomMargin(wrapVerticalSpace)}
  ${({ verticalSpace }) => setVerticalSpace(verticalSpace)}
  ${({ childWidth }) => setWidth(childWidth)}
  ${({ verticalAlign }) => setVerticalAlign(verticalAlign)}
  ${(props) => setResponsivePropertyToChild(props)}
`;

export default LayoutManagerChild;
