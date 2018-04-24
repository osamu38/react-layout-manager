import styled from 'styled-components';
import {
  setBottomNegativeMargin,
  setResponsivePropertyToLayoutManager,
} from '../helpers/setStyles';

const LayoutManager = styled.div`
  display: block;
  ${({ wrapVerticalSpace }) =>
    setBottomNegativeMargin(wrapVerticalSpace)} ${props =>
    setResponsivePropertyToLayoutManager(props)};
`;

export default LayoutManager;
