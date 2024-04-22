import styled, { css } from 'styled-components'
import {
  FLEX_START,
  FLEX_COLUMN_START,
  FONT_BODY_SM,
  FONT_TYPE_SEMIBOLD,
  FONT_TYPE_REGULAR,
  FONT_HEADING_LG,
  FLEX_CENTER,
  FONT_CAPTION
} from '../../globals/globals'
import { color, borders, shapes, spacings } from '@cromaui/foundations'
import type { PinInputPropTypes } from './types'

export const StyledPinInputContainer = styled.div`
  ${FLEX_COLUMN_START}
  margin: 0;
  padding: 0;
  gap: ${spacings.space4};
`

export const StyledPinInputLabel = styled.label<PinInputPropTypes>`
  color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[700])};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  ${FONT_BODY_SM}
  ${FONT_TYPE_REGULAR}
  margin-bottom: ${spacings.space4};
`

export const StyledPinInputValueContainer = styled.div`
  ${FLEX_START}
`

export const StyledPinInput = styled.input<PinInputPropTypes>`
  ${FONT_HEADING_LG}
  ${FONT_TYPE_SEMIBOLD};
  font-size: ${({ $visibility }) => !$visibility && spacings.space40};
  background-color: ${(props) => (props.disabled ? color.neutral[200] : color.neutral[50])};
  border: none;
  border-radius: ${shapes.sm};
  color: ${(props) => (props.disabled ? color.neutral[400] : color.neutral[700])};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  height: ${spacings.space56};
  margin-right: ${spacings.space8};
  outline: ${borders.br1};
  outline-color: ${color.neutral[600]};
  padding: ${spacings.space12};
  text-align: center;
  width: ${spacings.space48};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    outline: ${borders.br1};
    outline-color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[900])};
  }

  &:active {
    outline: ${borders.br1};
    outline-color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[900])};
  }

  &:focus,
  &:focus-within,
  &:focus-visible {
    color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[700])};
    outline: ${({ disabled }) => (disabled ? borders.br1 : borders.br2)};
    outline-color: ${({ disabled, $error }) =>
      disabled ? color.neutral[400] : $error ? color.error.main : color.blue.soft};
  }

  &:disabled {
    cursor: no-drop;
    color: ${color.neutral[400]};
    background-color: ${color.neutral[200]};
    outline-color: ${color.neutral[400]};
  }

  ${({ $error }) =>
    $error &&
    css`
      outline: ${borders.br2};
      outline-color: ${color.error.main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${color.neutral[400]};
      background-color: ${color.neutral[200]};
      outline-color: ${color.neutral[400]};
    `}
`

export const StyledPinInputHelperTextContainer = styled.div<PinInputPropTypes>`
  display: ${({ $helperText }) => ($helperText ? 'flex' : 'none')};
  align-items: flex-start;
  gap: ${spacings.space4};
  width: 100%;

  & > span {
    ${FLEX_CENTER}
    ${FONT_CAPTION}
    ${FONT_TYPE_REGULAR}
    align-items: flex-start;
    color: ${({ disabled, $error }) =>
      disabled ? color.neutral[400] : $error ? color.error.main : color.neutral[700]};
    gap: ${spacings.space4};
  }
`
