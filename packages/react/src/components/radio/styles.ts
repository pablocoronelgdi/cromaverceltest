import {
  borders,
  color,
  opacities,
  shapes,
  spacings
} from '@cromaui/foundations'
import styled, { css } from 'styled-components'
import type { RadioInnerProps } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE RADIO     =
============================================= */

/* ----------  Radio Container  (div) ---------- */

export const RadioContainer = styled.div<RadioInnerProps>`
  position: relative;
  display: inline-flex;
  width: ${spacings.space40};
  height: ${spacings.space40};
  padding: ${spacings.space8};
  border-radius: ${shapes.full};
  background-color: ${(props) =>
    props.disabled
      ? 'transparent'
      : props.isPressed
      ? color.neutral[600] + opacities.opacity20
      : 'transparent'};

  & hover {
    background-color: ${(props) =>
      props.disabled
        ? 'transparent'
        : color.neutral[600] + opacities.opacity20};
  }

  /* ----------  Radio Area  ---------- */
  & label {
    width: ${spacings.space24};
    height: ${spacings.space24};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${shapes.full};

    ${(props) =>
      props.isFocused &&
      css`
        outline: ${borders.br2}${color.blue.main};
        outline-offset: -1px;
      `}

    /* ----------  Radio Icon  ---------- */
    & span {
      color: ${(props) => props.disabled && color.neutral[400]};
    }

    /* ----------  Radio Input  (input radiobox) ---------- */
    & input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
`
