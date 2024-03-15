import { color, elevations, shapes, spacings } from '@cromaui/foundations'
import styled, { css, type RuleSet } from 'styled-components'
import type { TooltipArrowPositionTypes, TooltipPositionTypes } from './types'
import {
  FLEX_BETWEEN,
  FLEX_COLUMN_CENTER,
  FLEX_COLUMN_START,
  FLEX_END,
  FLEX_START,
  FONT_BODY_MD,
  FONT_BODY_SM,
  FONT_CAPTION,
  FONT_TYPE_BOLD,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'

const getTooltipPosition = ($position: string, $arrowPosition: string): RuleSet<object> => {
  switch ($position) {
    case 'top':
      return css`
        bottom: 120%;
        left: ${$arrowPosition === 'start' ? '0' : $arrowPosition === 'middle' ? '50%' : '100%'};
        transform: ${$arrowPosition === 'start'
          ? 'translateX(4%)'
          : $arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'right':
      return css`
        top: ${$arrowPosition === 'start' ? '0' : $arrowPosition === 'middle' ? '50%' : '100%'};
        left: 105%;
        transform: ${$arrowPosition === 'start'
          ? 'translateY(0)'
          : $arrowPosition === 'middle'
          ? 'translateY(-50%)'
          : 'translateY(-100%)'};
      `
    case 'bottom':
      return css`
        top: 120%;
        left: ${$arrowPosition === 'start' ? '0' : $arrowPosition === 'middle' ? '50%' : '90%'};
        transform: ${$arrowPosition === 'start'
          ? 'translateX(4%)'
          : $arrowPosition === 'middle'
          ? 'translateX(-50%)'
          : 'translateX(-100%)'};
      `
    case 'left':
      return css`
        top: ${$arrowPosition === 'start' ? '0' : $arrowPosition === 'middle' ? '50%' : '100%'};
        right: 105%;
        transform: ${$arrowPosition === 'start'
          ? 'translateY(0)'
          : $arrowPosition === 'middle'
          ? 'translateY(-50%)'
          : 'translateY(-100%)'};
      `
    default:
      return css``
  }
}

const getTooltipArrowPosition = (
  $position: string,
  $arrowPosition: string,
  arrowColor: string
): RuleSet<object> => {
  switch ($position) {
    case 'top':
      return css`
        top: 100%;
        left: ${$arrowPosition === 'start' ? '8%' : $arrowPosition === 'middle' ? '48%' : ''};
        right: ${$arrowPosition === 'end' ? '8%' : ''};
        transform: ${$arrowPosition === 'middle' ? 'translate(-50%, 0)' : ''};
        border-top: ${spacings.space8} solid ${arrowColor};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
      `
    case 'right':
      return css`
        right: 100%;
        top: ${$arrowPosition === 'start' ? '8%' : $arrowPosition === 'middle' ? '50%' : ''};
        bottom: ${$arrowPosition === 'end' ? '8%' : ''};
        transform: ${$arrowPosition === 'middle' ? 'translate(0, -50%)' : ''};
        border-right: 8px solid ${arrowColor};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      `
    case 'bottom':
      return css`
        bottom: 100%;
        left: ${$arrowPosition === 'start' ? '8%' : $arrowPosition === 'middle' ? '48%' : ''};
        right: ${$arrowPosition === 'end' ? '8%' : ''};
        transform: ${$arrowPosition === 'middle' ? 'translate(-50%, 0)' : ''};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid ${arrowColor};
      `

    case 'left':
      return css`
        left: 99%;
        top: ${$arrowPosition === 'start' ? '12%' : $arrowPosition === 'middle' ? '50%' : ''};
        bottom: ${$arrowPosition === 'end' ? '12%' : ''};
        transform: ${$arrowPosition === 'middle' ? 'translate(0, -50%)' : ''};
        border-top: 8px solid transparent;
        border-left: 8px solid ${arrowColor};
        border-bottom: 8px solid transparent;
      `
    default:
      return css``
  }
}

export const TooltipContainerStyled = styled.div<TooltipPositionTypes & TooltipArrowPositionTypes>`
  position: relative;
  display: inline-block;
  width: fit-content;
  border: none;

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

    ${({ $position, $arrowPosition }) =>
      getTooltipPosition($position as string, $arrowPosition as string)};

    &:before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      ${({ $position, $arrowPosition }) =>
        getTooltipArrowPosition($position as string, $arrowPosition as string, color.neutral[800])}
    }
  }

  & .croma_toogletip_card {
    border: none;
    ${FLEX_COLUMN_CENTER}
    gap: ${spacings.space4};
    position: absolute;
    z-index: 1;
    width: 328px;
    padding: ${spacings.space16};
    background-color: ${color.Info.extraSoft};
    border-radius: ${shapes.sm};
    box-shadow: ${elevations.level3};
    ${({ $position, $arrowPosition }) =>
      getTooltipPosition($position as string, $arrowPosition as string)};

    &:after {
      content: ' ';
      color: ${color.Info.extraSoft};
      position: absolute;
      width: 0;
      height: 0;
      ${({ $position, $arrowPosition }) =>
        getTooltipArrowPosition($position as string, $arrowPosition as string, color.Info.extraSoft)};
    }
    & .croma_toogletip_card_steps {
      width: 100%;
      ${FLEX_BETWEEN}
      & > small:first-of-type {
        ${FONT_CAPTION};
        ${FONT_TYPE_SEMIBOLD}
        color: ${color.Info.main};
      }
    }
    & .croma_toogletip_card_header {
      width: 100%;
      ${FLEX_BETWEEN}
      gap: ${spacings.space4};
      & h2:first-of-type {
        ${FONT_BODY_MD}
        ${FONT_TYPE_BOLD}
      }
    }
    & .croma_toogletip_card_body {
      ${FLEX_COLUMN_START}
      gap: ${spacings.space8};
      width: 100%;
      & p {
        ${FONT_BODY_SM}
        ${FONT_TYPE_REGULAR}
      }
    }
    & .croma_toogletip_card_actions_start {
      width: 100%;
      ${FLEX_START}
    }
    & .croma_toogletip_card_actions_between {
      width: 100%;
      ${FLEX_BETWEEN}
    }
    & .croma_toogletip_card_actions_end {
      gap: ${spacings.space12};
      width: 100%;
      ${FLEX_END}
    }
  }
`
