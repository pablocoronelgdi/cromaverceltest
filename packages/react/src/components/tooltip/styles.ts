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
          ? 'translateX(4%)'
          : arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'right':
      return css`
        top: ${arrowPosition === 'start' ? '0' : arrowPosition === 'middle' ? '50%' : '100%'};
        left: 150%;
        transform: ${arrowPosition === 'start'
          ? 'translateY(0)'
          : arrowPosition === 'middle'
          ? 'translateY(-50%)'
          : 'translateY(-100%)'};
      `
    case 'bottom':
      return css`
        top: 150%;
        left: ${arrowPosition === 'start' ? '0' : arrowPosition === 'middle' ? '50%' : '90%'};
        transform: ${arrowPosition === 'start'
          ? 'translateX(4%)'
          : arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'left':
      return css`
        top: ${arrowPosition === 'start' ? '0' : arrowPosition === 'middle' ? '50%' : '100%'};
        right: 150%;
        transform: ${arrowPosition === 'start'
          ? 'translateY(0)'
          : arrowPosition === 'middle'
          ? 'translateY(-50%)'
          : 'translateY(-100%)'};
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
        left: ${arrowPosition === 'start' ? '8%' : arrowPosition === 'middle' ? '48%' : ''};
        right: ${arrowPosition === 'end' ? '8%' : ''};
        transform: ${arrowPosition === 'middle' ? 'translate(-50%, 0)' : ''};
        border-top: ${spacings.space8} solid ${color.neutral[800]};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
      `
    case 'right':
      return css`
        right: 99%;
        top: ${arrowPosition === 'start' ? '8%' : arrowPosition === 'middle' ? '50%' : ''};
        bottom: ${arrowPosition === 'end' ? '8%' : ''};
        transform: ${arrowPosition === 'middle' ? 'translate(0, -50%)' : ''};
        border-right: 8px solid ${color.neutral[800]};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      `
    case 'bottom':
      return css`
        bottom: 100%;
        left: ${arrowPosition === 'start' ? '8%' : arrowPosition === 'middle' ? '48%' : ''};
        right: ${arrowPosition === 'end' ? '8%' : ''};
        transform: ${arrowPosition === 'middle' ? 'translate(-50%, 0)' : ''};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid ${color.neutral[800]};
      `

    case 'left':
      return css`
        left: 99%;
        top: ${arrowPosition === 'start' ? '12%' : arrowPosition === 'middle' ? '50%' : ''};
        bottom: ${arrowPosition === 'end' ? '12%' : ''};
        transform: ${arrowPosition === 'middle' ? 'translate(0, -50%)' : ''};
        border-top: 8px solid transparent;
        border-left: 8px solid ${color.neutral[800]};
        border-bottom: 8px solid transparent;
      `
    default:
      return css``
  }
}

export const Tooltip = styled.div

export const TooltipContainer = styled.div<TooltipPositionTypes & TooltipArrowPositionTypes>`
  position: relative;
  display: inline-block;

  & .croma_tooltip_text {
    position: absolute;
    display: block;
    padding: 8px;
    border-radius: ${shapes.sm};
    background-color: ${color.neutral[800]};
    color: ${color.neutral[100]};
    width: max-content;
    max-width: 280px;
    min-width: 100px;
    text-overflow: ellipsis;
    white-space: normal;
    z-index: 1;
    & span {
      ${FONT_BODY_SM}
    }

    ${({ position, arrowPosition }) =>
      getTooltipPosition(position as string, arrowPosition as string)};

    &:before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      ${({ position, arrowPosition }) =>
        getTooltipArrowPosition(position as string, arrowPosition as string)}
    }
  }
`
