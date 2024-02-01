import styled, { css } from 'styled-components'
import type { TextfieldPropTypes } from './types'
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
import { neutral } from '@cromaui/foundations/dist/colors'

/* =============================================
=            ESTILOS DEL COMPONENTE TEXTFIELD     =
============================================= */

/* ----------  Textfield Container  (div) ---------- */

// Container general de todo el componente
export const TextfieldContainerStyled = styled.div<TextfieldPropTypes>`
  width: ${({ width }) => width && 'auto'};

  /* ---------- Input label  (label) ---------- */
  // Label que contiene el texto label del componente + Input area
  & label {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    ${FONT_CAPTION}
    ${FONT_TYPE_SEMIBOLD}
    background-color: ${color.neutral[50]};

    /* ---------- Input area  (div) ---------- */
    // Div que envuelve el input y el icono. Proporciona el borde visible del componente
    & > div {
      ${({ iconName }) => (iconName ? FLEX_BETWEEN : FLEX_END)}
      flex-direction: ${({ type, iconPosition }) =>
        iconPosition === 'right' && type === 'text' ? 'row-reverse' : 'row'};
      gap: ${spacings.space8};
      padding: ${spacings.space12};
      background-color: ${color.neutral[50]};
      border-radius: ${shapes.sm};
      border: ${borders.br1};
      border-color: ${color.neutral[400]};
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

      &:hover {
        border: ${borders.br1};
        border-color: ${({ error, disabled }) =>
          disabled || error ? color.neutral[400] : color.neutral[600]};
      }
      &:focus-within {
        outline: ${borders.br2};
        outline-color: ${({ error }) =>
          error ? color.error.main : color.blue.main};
      }
      ${({ error }) =>
        error &&
        css`
          outline: ${borders.br2};
          outline-color: ${color.error.main};
        `}
      ${({ disabled }) =>
        disabled &&
        css`
          background-color: ${color.neutral[200]};
          border-color: ${color.neutral[400]};
          outline-color: ${color.neutral[0]};
        `}

     
      /* ---------- Input  (input) ---------- */
      // El input en cuestión, se remueven bordes ya que el input area se encarga del estilo
      & > input {
        ${FONT_BODY_SM}
        width: 100%;
        border: none;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }

  /* ---------- Helper Area  (div) ---------- */

  // Div que envuelve el mensaje de error y el contador. Se ubica debajo del label
  & > div {
    ${({ helperText }) => (helperText ? FLEX_BETWEEN : FLEX_END)}
    align-items:flex-start;
    gap: ${spacings.space4};
    padding: ${spacings.space4};
    max-width: '100%';
    width: '100%';

    /* ---------- Helper Text  (span) ---------- */
    & > span:first-of-type {
      ${FLEX_CENTER}
      align-items: flex-start;
      color: ${({ error }) => (error ? color.error.main : neutral[800])};
      ${FONT_CAPTION}
      ${FONT_TYPE_REGULAR}
    }

    /* ---------- Character count (span) ---------- */
    & > span:last-of-type {
      ${FONT_CAPTION}
      ${FONT_TYPE_REGULAR}
    }
  }
`
