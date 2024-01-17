import {
  Borders,
  Color,
  Opacities,
  Shapes,
  Spacings
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
  width: ${Spacings.space40};
  height: ${Spacings.space40};
  padding: ${Spacings.space8};
  border-radius: ${Shapes.full};
  background-color: ${(props) =>
    props.disabled
      ? 'transparent'
      : props.isPressed
      ? Color.Neutral[600] + Opacities.opacity20
      : 'transparent'};

  & hover {
    background-color: ${(props) =>
      props.disabled
        ? 'transparent'
        : Color.Neutral[600] + Opacities.opacity20};
  }

  /* ----------  Radio Area  ---------- */
  & label {
    width: ${Spacings.space24};
    height: ${Spacings.space24};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Shapes.full};

    ${(props) =>
      props.isFocused &&
      css`
        outline: ${Borders.br2}${Color.Blue.main};
        outline-offset: -1px;
      `}

    /* ----------  Radio Icon  ---------- */
    & span {
      color: ${(props) => props.disabled && Color.Neutral[400]};
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
