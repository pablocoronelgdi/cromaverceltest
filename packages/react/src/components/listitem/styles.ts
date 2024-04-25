import styled from 'styled-components'
import { FLEX_AROUND, FONT_BODY_SM, FONT_BODY_LG, FONT_TYPE_REGULAR } from '../../globals/globals'
import { color, borders, spacings } from '@cromaui/foundations'
import type { ListItemLinkPropTypes, ListItemPropTypes } from './types'

export const StyledListItemTextContent = styled.div<ListItemPropTypes>`
  width: 100%;
  gap: ${spacings.space4};
  text-align: left;

  span {
    ${FONT_BODY_LG}
    ${FONT_TYPE_REGULAR}
    color:  ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[900])};
    margin: 0;
  }
  p {
    ${FONT_BODY_SM}
    ${FONT_TYPE_REGULAR}
    color:  ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[700])};
    width: 100%;
    margin: 0;
  }
`

export const StyledListItem = styled.button<ListItemPropTypes>`
  ${FLEX_AROUND}
  cursor: pointer;
  background: ${({ disabled }) => (disabled ? color.neutral[200] : 'transparent')};
  border: none;
  border-bottom: ${borders.br1} ${color.neutral[300]};
  gap: ${spacings.space8};
  padding: ${spacings.space12} ${spacings.space8};
  width: 100%;
  max-width: 1024px;

  &:hover {
    background: ${({ disabled }) => (disabled ? color.neutral[200] : color.neutral[100])};
  }

  &:active {
    background-color: ${({ disabled }) => (disabled ? color.neutral[200] : color.navy.extraSoft)};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    background-color: ${({ disabled }) => (disabled ? color.neutral[200] : 'transparent')};
    outline: solid;
    outline-color: ${color.blue.main};
    outline-width: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    outline: none;
  }
`

export const StyledListItemLink = styled.a<ListItemLinkPropTypes>`
  ${FLEX_AROUND}
  background: ${({ disabled }) => (disabled ? color.neutral[200] : 'transparent')};
  border: none;
  border-bottom: ${borders.br1} ${color.neutral[300]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  gap: ${spacings.space8};
  padding: ${spacings.space12} ${spacings.space8};
  max-width: 1024px;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: ${({ disabled }) => (disabled ? color.neutral[200] : color.neutral[100])};
  }

  &:active {
    background-color: ${({ disabled }) => (disabled ? color.neutral[200] : color.navy.extraSoft)};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    background-color: ${({ disabled }) => (disabled ? color.neutral[200] : 'transparent')};
    outline: ${({ disabled }) => (disabled ? 'none' : 'solid')};
    outline-color: ${color.blue.main};
    outline-width: 2px;
  }
`
