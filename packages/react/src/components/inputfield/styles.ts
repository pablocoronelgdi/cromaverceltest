import styled, { css } from 'styled-components'
import type { InputFieldPropTypes } from './types'
import { borders, color, shapes, spacings } from '@cromaui/foundations'
import {
  FLEX_BETWEEN,
  FLEX_CENTER,
  FLEX_END,
  FONT_BODY_SM,
  FONT_CAPTION,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'

/* =============================================
=            ESTILOS DEL COMPONENTE TEXTFIELD     =
============================================= */

/* ----------  Inputfield Container  (div) ---------- */

// Container general de todo el componente
export const InputfieldContainerStyled = styled.div<InputFieldPropTypes>`
  width: ${({ width }) => width ?? 'auto'};
  display: flex;
  flex-direction: column;
  gap: ${spacings.space4};

  /* ---------- Input label  (label) ---------- */
  // Label que contiene el texto label del componente + Input area
  & label {
    color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[900])};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
    ${FONT_BODY_SM}
    ${FONT_TYPE_SEMIBOLD}
  }
  /* ---------- Input area  (div) ---------- */
  // Div que envuelve el input y el icono. Proporciona el borde visible del componente
  & > div:first-of-type {
    ${({ $iconName }) => ($iconName ? FLEX_BETWEEN : FLEX_END)}
    flex-direction: ${({ $iconName, $iconPosition }) =>
      $iconPosition === 'right' && $iconName ? 'row-reverse' : 'row'};
    gap: ${spacings.space8};
    padding: ${spacings.space12};
    background-color: ${color.neutral[50]};
    border-radius: ${shapes.sm};
    color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[800])};
    outline: ${borders.br1};
    outline-color: ${color.neutral[400]};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

    & span {
      color: ${({ disabled }) => (disabled ? color.neutral[400] : color.navy.main)};
    }

    &:hover {
      outline: ${borders.br1};
      outline-color: ${({ disabled }) => (disabled ? color.neutral[400] : color.neutral[600])};
    }
    &:focus,
    &:focus-within,
    &:focus-visible {
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
        outline-color: ${color.neutral[400]};
      `}

      /* ---------- Input  (input) ---------- */
      // El input en cuestión, se remueven bordes ya que el input area se encarga del estilo
      & > input {
      ${FONT_BODY_SM}
      width: 100%;
      border: none;
      padding: 0;
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

      &:focus {
        border: none;
        outline: none;
      }

      &::placeholder {
        color: ${color.neutral[500]};
      }
    }
  }

  /* ---------- Helper Area  (div) ---------- */

  // Div que envuelve el mensaje de error y el contador. Se ubica debajo del input
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
      align-items: flex-start;
      color: ${({ disabled, $error }) =>
        disabled ? color.neutral[400] : $error ? color.error.main : color.neutral[700]};
      ${FONT_CAPTION}
      ${FONT_TYPE_REGULAR}
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
