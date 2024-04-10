import styled from 'styled-components'
import type { TabPropTypes } from './types'
import { borders, breakpoints, color, shapes, spacings } from '@cromaui/foundations'
import { FONT_BODY_SM, FONT_TYPE_REGULAR, FONT_TYPE_SEMIBOLD } from '../../globals/globals'

export const StyledTab = styled.button<TabPropTypes>`
  background-color: ${({ $isActive }) => ($isActive ? color.neutral[100] : color.neutral[50])};
  border-radius: ${spacings.space8} ${spacings.space8} 0 0;
  border: none;
  border-radius: ${shapes.sm} ${shapes.sm} 0 0;
  color: ${({ $isActive }) => ($isActive ? color.neutral[900] : color.neutral[700])};
  cursor: pointer;
  gap: ${spacings.space8};
  min-width: 116px;
  width: fit-content;
  max-width: 216px;
  padding: ${spacings.space8} ${spacings.space16};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${({ $isVerticalContent }) => ($isVerticalContent ? 'column' : 'row')};
  // revisar esto flex-grow: 1 esta bien que los tabs ocupen solo el ancho que corresponde al contenido
  // y que si el contenido supera el ancho maximo permitido, que se centre

  ${FONT_BODY_SM}
  ${({ $isActive }) => ($isActive ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};

  small {
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    background-color: ${({ $isActive }) => ($isActive ? color.blue.main : color.neutral[400])};
    border-radius: ${({ $isActive }) => ($isActive ? '1px' : 'none')};
    bottom: 0;
    left: 0;
    height: 2px;
    position: absolute;
    width: 100%;
  }

  &:hover {
    background-color: ${color.blue.extraSoft};
    color: ${color.neutral[700]};

    div {
      background-color: ${({ $isActive }) => ($isActive ? color.blue.soft : color.neutral[500])};
    }
  }

  &:active {
    background-color: ${color.blue.extraSoft};
    color: ${color.neutral[900]};

    div {
      background-color: ${({ $isActive }) => ($isActive ? color.blue.dark : color.neutral[900])};
    }
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    background-color: ${({ $isActive }) => ($isActive ? color.neutral[100] : color.neutral[50])};
    color: ${({ $isActive }) => ($isActive ? color.neutral[900] : color.neutral[700])};
    outline: solid;
    outline-color: ${color.blue.soft};
    outline-offset: ${spacings.space2};
    outline-width: ${spacings.space2};
    z-index: 1;

    div {
      background-color: ${({ $isActive }) =>
        $isActive ? borders.br2 + color.blue.soft : borders.br2 + color.neutral[400]};
    }
  }

  @media ${`(min-width: ${breakpoints.lg.toLocaleString()}px)`} {
    background-color: ${({ $isActive }) => ($isActive ? color.neutral[200] : color.neutral[50])};
    flex-direction: row;
    min-width: fit-content;

    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: ${({ $isActive }) => ($isActive ? color.neutral[200] : color.neutral[50])};
    }
  }
`
