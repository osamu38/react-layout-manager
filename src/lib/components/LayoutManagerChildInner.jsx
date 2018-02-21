import styled from 'styled-components';
import {
  setInnerWidth,
  setAlign,
  setResponsivePropertyToChildInner,
} from '../helpers/setStyles';

const LayoutManagerChildInner = styled.div`
  width: 100%;
  ${({ innerWidth }) => setInnerWidth(innerWidth)}
  ${({ align }) => setAlign(align)}
  ${(props) => setResponsivePropertyToChildInner(props)}
`;

export default LayoutManagerChildInner;
