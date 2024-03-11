import styled, { css } from 'styled-components'
import { borders, color, spacings, shapes } from '@cromaui/foundations'
import type { TextAreaPropTypes } from './types'
import {
  FLEX_BETWEEN,
  FLEX_CENTER,
  FLEX_END,
  FONT_BODY_SM,
  FONT_CAPTION,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'

export const TextAreaContainerStyled = styled.div<TextAreaPropTypes>`
  display: flex;
  flex-direction: column;
  gap: ${spacings.space4};
  width: 100%;

  & label {
    ${FONT_BODY_SM}
    ${FONT_TYPE_SEMIBOLD}
    color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[900])};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  }

  & > textarea {
    ${FONT_BODY_SM}
    ${FONT_TYPE_REGULAR}
    background-color: ${color.neutral[50]};
    border: none;
    border-radius: ${shapes.sm};
    color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[800])};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
    min-height: 120px;
    outline: ${borders.br1};
    outline-color: ${color.neutral[400]};
    padding: ${spacings.space12};
    width: 100%;

    &::placeholder {
      color: ${color.neutral[500]};
    }

    &:hover {
      outline: ${borders.br1};
      outline-color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[800])};
    }

    &:focus,
    &:focus-within,
    &:focus-visible {
      color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[800])};
      outline: ${({ disabled }) => (disabled ? borders.br1 : borders.br2)};
      outline-color: ${({ disabled, $error }) =>
        disabled ? color.neutral[400] : $error ? color.error.main : color.blue.soft};
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
        background-color: ${color.neutral[200]};
        outline: ${borders.br1};
        outline-color: ${color.neutral[400]};
      `}
  }

  /* ---------- Helper Area  (div) ---------- */

  & > div:last-of-type {
    ${({ $helperText }) => ($helperText ? FLEX_BETWEEN : FLEX_END)};
    display: ${({ $helperText, $maxCharacterCount }) =>
      $helperText || $maxCharacterCount ? 'flex' : 'none'};
    align-items: flex-start;
    gap: ${spacings.space4};
    max-width: '100%';
    width: '100%';

    /* ---------- Helper Text  (span) ---------- */
    & > span {
      ${FLEX_CENTER}
      ${FONT_CAPTION}
      ${FONT_TYPE_REGULAR}
      align-items: flex-start;
      color: ${({ disabled, $error }) =>
        disabled ? color.neutral[400] : $error ? color.error.main : color.neutral[700]};
      gap: ${spacings.space4};
    }

    /* ---------- Character count (small) ---------- */
    & > small {
      ${FONT_CAPTION}
      ${FONT_TYPE_REGULAR}
      color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[700])};
    }
  }
`
