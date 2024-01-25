import styled from 'styled-components';
import {
  color,
  shapes,
  spacings,
  typography
} from '@cromaui/foundations'
import type { ProgressBarPropsTypes } from './types'

export const Container = styled.div`
  width: 100%;

  & p {
    margin: 0;
    font-family: ${typography.caption.regular.fontFamily};
    font-size: ${typography.caption.regular.fontSize};
    font-weight: ${typography.caption.regular.fontWeight};
    line-height: ${typography.caption.regular.lineHeight};
    letter-spacing: ${typography.caption.regular.letterSpacing};
  }
`;

export const ContainerProgress = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${color.blue.extraSoft};
  border-radius: ${shapes.md};
  margin-top: ${spacings.space4};
  margin-bottom: ${spacings.space4};
  overflow: hidden;
`;

export const ProgressFill = styled.div<ProgressBarPropsTypes>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${color.blue.main};
  transition: width 0.3s ease-in-out;
`;
export default ProgressFill;
