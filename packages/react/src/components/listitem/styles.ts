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
  width: 100%;
  min-width: 300px;
  max-width: 1024px;
  background: ${color.neutral[50]};
  ${FLEX_AROUND}
  padding: ${spacings.space12};
  border-bottom: ${borders.br1} ${color.neutral[300]};
  transition: 0.3s;
  color: ${color.neutral[700]};

  &:hover {
    box-shadow: ${elevations.level3};
    transition: 0.3s;
  }
  &:focus {
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
export const RightContent = styled.div<ListItemPropsTypes>`
  ${FLEX_END}
  margin-left: ${spacings.space16};
  width: 100%;
`
export const LeftContent = styled.div<ListItemPropsTypes>`
  ${FLEX_CENTER}
  margin-right: ${spacings.space16};
`
export const TextContent = styled.div<ListItemPropsTypes>`
  width: 100%;

  h3 {
    ${FONT_BODY_MD}
    ${FONT_TYPE_REGULAR}
    text-align: left;
    width: 100%;
  }
  p {
    ${FONT_BODY_SM}
    ${FONT_TYPE_REGULAR}
    text-align: left;
    width: 100%;
  }
`
