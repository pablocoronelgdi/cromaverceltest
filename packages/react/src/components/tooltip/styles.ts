import { color, shapes, spacings } from '@cromaui/foundations'
import styled, { css, type RuleSet } from 'styled-components'
import type { TooltipArrowPositionTypes, TooltipPositionTypes } from './types'
import { FONT_BODY_SM } from '../../globals/globals'

const getTooltipPosition = (position: string, arrowPosition: string): RuleSet<object> => {
  switch (position) {
    case 'top':
      return css`
        bottom: 150%;
        left: ${arrowPosition === 'start' ? '0' : arrowPosition === 'middle' ? '50%' : '100%'};
        transform: ${arrowPosition === 'start'
          ? 'translateX(0)'
          : arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'right':
      return css`
        top: 50%;
        left: 100%;
      `
    case 'bottom':
      return css`
        top: 150%;
        left: ${arrowPosition === 'start' ? '0' : arrowPosition === 'middle' ? '50%' : '100%'};
        transform: ${arrowPosition === 'start'
          ? 'translateX(0)'
          : arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'left':
      return css`
        top: 50%;
        right: 100%;
      `
    default:
      return css``
  }
}

const getTooltipArrowPosition = (position: string, arrowPosition: string): RuleSet<object> => {
  switch (position) {
    case 'top':
      return css`
        top: 100%;
        left: ${arrowPosition === 'start' ? '5%' : arrowPosition === 'middle' ? '50%' : '90%'};
      `
    case 'right':
      return css`
        right: 98%;
        top: ${arrowPosition === 'start' ? '10%' : arrowPosition === 'middle' ? '50%' : '90%'};
        transform: rotate(90deg);
      `
    case 'bottom':
      return css`
        bottom: 100%;
        left: ${arrowPosition === 'start' ? '10%' : arrowPosition === 'middle' ? '50%' : '90%'};
        transform: rotate(180deg);
      `

    case 'left':
      return css`
        left: 100%;
        top: ${arrowPosition === 'start' ? '10%' : arrowPosition === 'middle' ? '50%' : '90%'};
        transform: rotate(270deg);
      `
    default:
      return css``
  }
}
export const TooltipContainer = styled.div<TooltipPositionTypes & TooltipArrowPositionTypes>`
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
    text-overflow: ellipsis;
    white-space: normal;
    width: max-content;
    max-width: 380px;
    ${({ position, arrowPosition }) =>
      getTooltipPosition(position as string, arrowPosition as string)};
    & span {
      ${FONT_BODY_SM}
    }

    &:before {
      content: ' ';
      position: absolute;
      ${({ position, arrowPosition }) =>
        getTooltipArrowPosition(position as string, arrowPosition as string)}
      border-width: 8px;
      border-style: solid;
      border-color: ${color.neutral[800]} transparent transparent transparent;
    }
  }
`
