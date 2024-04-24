import styled from 'styled-components'
import {
  FLEX_AROUND,
  FLEX_CENTER,
  FLEX_END,
  FONT_BODY_SM,
  FONT_BODY_LG,
  FONT_TYPE_REGULAR
} from '../../globals/globals'
import { color, borders, spacings } from '@cromaui/foundations'
import type { ListItemPropsTypes } from './types'

/* =============================================
=    ESTILOS DEL COMPONENTE LIST ITEM     =
============================================= */

export const StyledListItem = styled.li<ListItemPropsTypes>`
  ${FLEX_AROUND}
  background: ${(props) => (props.$disabled ? color.neutral[200] : 'transparent')};
  width: 100%;
  max-width: 1024px;
  padding: ${spacings.space12} ${spacings.space8};
  border-bottom: ${borders.br1} ${color.neutral[300]};
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.$disabled ? 'no-drop' : 'pointer')};
  &:hover {
    background: ${(props) => (props.$disabled ? color.neutral[200] : color.neutral[100])};
    transition: 0.3s;
  }
  &:focus,
  &:focus-within,
  &:focus-visible {
    border: ${({ $disabled }) => !$disabled && borders.br2 + color.blue.main};
  }
  &.pressed {
    background: ${(props) => (props.$disabled ? color.neutral[200] : color.navy.extraSoft)};
  }
`
export const RightContent = styled.div`
  ${FLEX_END}
  margin-left: ${spacings.space16};
  width: 100%;
`
export const LeftContent = styled.div`
  ${FLEX_CENTER}
  margin-right: ${spacings.space16};
`
export const TextContent = styled.div<ListItemPropsTypes>`
  width: 100%;
  gap: ${spacings.space4};

  span {
    ${FONT_BODY_LG}
    ${FONT_TYPE_REGULAR}
    color:  ${({ $disabled }) => ($disabled ? color.neutral[400] : color.neutral[900])};
    text-align: left;
    width: 100%;
    margin: 0;
  }
  p {
    ${FONT_BODY_SM}
    ${FONT_TYPE_REGULAR}
    color:  ${({ $disabled }) => ($disabled ? color.neutral[400] : color.neutral[700])};
    text-align: left;
    width: 100%;
    margin: 0;
  }
`
