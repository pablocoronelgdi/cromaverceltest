import styled from 'styled-components'
import { color, spacings, elevations } from '@cromaui/foundations'
import {
  FONT_BODY_SM,
  FONT_TYPE_SEMIBOLD,
  FONT_TYPE_REGULAR,
  FLEX_CENTER
} from '../../globals/globals'
import type { TabSegmentedItemTypes } from './types'

export const StyledTabsSegmentedContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 254px;
  padding: 0;
`
/* @TODO: Definiciones pendientes de visuals team:
  - Definir si se cambia el padding por el valor de 4px en lugar de 0
  - Definir espacio entre items
  - Definir ancho máximo y mínimo
  - Definir ancho del contenedor si ocupa el ancho permitido o si se ajusta a su contenido(actualmente)
  - Definir espacio entre items cuando se agrega el divider
  - Definir si el máximo de items permitido es 3
  - Definir si mostrar el mensaje de error
*/
export const StyledTabSegmentedItems = styled.ul`
  background: ${color.neutral[200]};
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0;
  width: fit-content;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`

export const StyledTabSegmentedItem = styled.li`
display: flex;
align-items: center;
`

export const StyledTabSegmented = styled.button<TabSegmentedItemTypes>`
  ${FLEX_CENTER}
  ${FONT_BODY_SM}
  ${({ $isActive }) => ($isActive ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
  background-color: ${({ $isActive }) => ($isActive ? color.neutral[50] : 'transparent')};
  border: none;
  border-radius: 100px;
  box-shadow: ${({ $isActive }) => ($isActive ? elevations.level1 : 'none')};
  color: ${({ $isActive }) => ($isActive ? color.blue.main : color.neutral[700])};
  cursor: pointer;
  max-width: 216px;
  min-width: 116px;
  overflow: hidden;
  padding: ${spacings.space8};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    background-color: ${color.blue.extraSoft};
    color: ${color.neutral[700]};
  }

  &:active {
    background-color: ${color.blue.extraSoft};
    color: ${({ $isActive }) => ($isActive ? color.blue.dark : color.neutral[700])};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    background-color: ${({ $isActive }) => ($isActive ? color.neutral[50] : 'transparent')};
    color: ${({ $isActive }) => ($isActive ? color.blue.main : color.neutral[700])};
    outline: solid;
    outline-color: ${color.blue.soft};
    outline-offset: ${spacings.space2};
    outline-width: ${spacings.space2};
    z-index: 1;
  }
`

export const StyledTabSegmentedContent = styled.div`
  width: 100%;
`

export const StyledTabSegmentedDivider = styled.div`
  height: ${spacings.space24};
  width: ${spacings.space1};
  background: ${color.neutral[400]};
`

export const StyledTabsSegmentedError = styled.span`
  ${FLEX_CENTER}
  ${FONT_BODY_SM}
  ${FONT_TYPE_SEMIBOLD}
  color: ${color.neutral[700]};
  text-align: center;
`
