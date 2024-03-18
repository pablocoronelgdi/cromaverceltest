import styled from 'styled-components'
import {
  FLEX_AROUND,
  FLEX_CENTER,
  FLEX_END,
  FONT_BODY_SM,
  FONT_BODY_MD,
  FONT_TYPE_REGULAR
} from '../../globals/globals'
import { color, borders, spacings, elevations } from '@cromaui/foundations'
import type { ListItemPropsTypes } from './types'

/* =============================================
=    ESTILOS DEL COMPONENTE LIST ITEM     =
============================================= */

export const StyledListItem = styled.div<ListItemPropsTypes>`
  ${FLEX_AROUND}
  background: ${color.neutral[50]};
  color: ${color.neutral[700]};
  width: 100%;
  max-width: 1024px;
  padding: ${spacings.space12};
  border-bottom: ${borders.br1} ${color.neutral[300]};
  transition: 0.3s;
  cursor: ${(props) => props.$disabled ? 'no-drop' : 'pointer'};

  &:hover {
    box-shadow: ${elevations.level3};
    transition: 0.3s;
  }
  &:focus,
  &:focus-within,
  &:focus-visible {
    border: ${borders.br2} ${color.blue.main}
  }
  &.pressed {
    background: ${color.navy.extraSoft}
  }
  &.disabled {   
    background: ${color.neutral[200]};
    color: ${color.neutral[400]};

    &:hover {
      box-shadow: none;
      transition: 0.3s;
    }
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
export const TextContent = styled.div`
  width: 100%;

  h3 {
    ${FONT_BODY_MD}
    ${FONT_TYPE_REGULAR}
    text-align: left;
    width: 100%;
    margin: 0
  }
  p {
    ${FONT_BODY_SM}
    ${FONT_TYPE_REGULAR}
    text-align: left;
    width: 100%;
    margin: 0
  }
`
