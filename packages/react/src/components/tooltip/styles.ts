import { color, shapes, spacings } from '@cromaui/foundations'
import styled, { css, type RuleSet } from 'styled-components'
import type { TooltipPositionTypes } from './types'

const getTooltipPosition = (position: string): RuleSet<object> => {
  switch (position) {
    case 'top':
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
      `
    case 'right':
      return css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      `
    case 'bottom':
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      `
    case 'left':
      return css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      `
    default:
      return css``
  }
}

export const TooltipContainer = styled.div<TooltipPositionTypes>`
  position: relative;
  display: inline-block;

  & .croma_tooltip {
    position: absolute;
    background-color: ${color.neutral[800]};
    color: ${color.neutral[100]};
    border-radius: ${shapes.sm};
    padding: ${spacings.space8};
    z-index: 1;
    display: block;
    ${({ position }) => getTooltipPosition(position)}
    &:before {
      content: '';
      width: 0;
      height: 0;
      left: 40px;
      top: 20px;
      position: absolute;
      border: 10px solid transparent;
      transform: rotate(135deg);
      transition: border 0.4s ease-in-out;
      background-color: ${color.neutral[800]};
    }
  }
  &:hover .tooltip {
    display: block;
  }
`
