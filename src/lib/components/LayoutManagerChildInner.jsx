import styled from 'styled-components';
import {
  setInnerWidth,
  setAlign,
  setResponsivePropertyToChildInner,
} from '../helpers/setStyles';

const LayoutManagerChildInner = styled.div`
  ${({ align }) => setAlign(align)}
  ${({ innerWidth }) => setInnerWidth(innerWidth)}
  ${(props) => setResponsivePropertyToChildInner(props)}
`;

export default LayoutManagerChildInner;
