import styled from 'styled-components'
import type { TabPropTypes } from './types'
import { borders, breakpoints, color, shapes, spacings } from '@cromaui/foundations'
import {
  FLEX_CENTER,
  FONT_BODY_MD,
  FONT_BODY_SM,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'

export const StyledTab = styled.button<TabPropTypes>`
  background: ${({ $selected }) => ($selected ? color.neutral[100] : color.neutral[50])};
  border-radius: ${spacings.space8} ${spacings.space8} 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${({ $selected }) =>
    $selected ? borders.br1 + color.blue.main : borders.br1 + color.neutral[400]};
  border-radius: ${shapes.sm} ${shapes.sm} 0 0;
  color: ${({ $selected }) => ($selected ? color.neutral[900] : color.neutral[700])};
  cursor: pointer;
  gap: ${spacings.space8};
  padding: ${spacings.space8} ${spacings.space16};
  text-align: center;
  min-width: fit-content;
  ${FLEX_CENTER}
  flex-direction: ${({ $isVertical }) => ($isVertical ? 'column' : 'row')};
  ${FONT_BODY_SM};
  ${({ $selected }) => ($selected ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};

  &:hover {
    color: ${({ $selected, $text, $iconName, $onClose }) =>
      ($selected && $text && $iconName) ||
      ($selected && $iconName) ||
      ($selected && $onClose) ||
      ($iconName && $text) ||
      $iconName ||
      $onClose
        ? color.neutral[600]
        : $text && $selected
        ? color.neutral[800]
        : $text && !$selected && color.neutral[700]};
    background: ${({ $text, $iconName, $selected, $onClose }) =>
      ($selected && $text && $iconName) ||
      ($selected && $iconName) ||
      ($selected && $onClose) ||
      ($iconName && $text) ||
      $onClose
        ? color.neutral[50]
        : (($selected && $text) || $text) && color.blue.extraSoft};
    border-bottom-color: ${({ $selected }) => ($selected ? color.blue.soft : color.neutral[500])};
  }

  &:active {
    background: ${color.blue.extraSoft};
    color: ${({ $selected, $iconName }) =>
      $selected && !$iconName ? color.blue.dark : color.neutral[900]};
    border-bottom-color: ${({ $selected }) => ($selected ? color.blue.dark : color.neutral[900])};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    background: ${color.neutral[50]};
    border-bottom: ${({ $selected }) =>
      $selected ? borders.br1 + color.blue.soft : borders.br1 + color.neutral[400]};
    color: ${({ $selected }) => ($selected ? color.neutral[900] : color.neutral[700])};
    outline: solid;
    outline-color: ${color.blue.soft};
    outline-offset: ${spacings.space2};
    outline-width: ${spacings.space2};
  }

  span {
    display: ${({ $onClose }) => ($onClose ? 'none' : 'flex')};
  }
  
  @media ${`(min-width: ${breakpoints.lg.toLocaleString()}px)`} {
    background: ${({ $selected }) => ($selected ? color.neutral[200] : color.neutral[50])};
    flex-direction: row;
    ${({ $iconName, $onClose, $selected }) => !$iconName && !$onClose && $selected && FONT_BODY_MD}
    span {
      display: flex;
    }
  }
`
