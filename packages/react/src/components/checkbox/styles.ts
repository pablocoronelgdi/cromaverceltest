import {
  Borders,
  Color,
  Opacities,
  Shapes,
  Spacings
} from '@cromaui/foundations'
import { styled, css } from 'styled-components'
import type { CheckInnerProps } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE CHECKBOX     =
============================================= */

/* ----------  Check Container  (div) ---------- */

export const CheckContainer = styled.div<CheckInnerProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${Spacings.space40};
  height: ${Spacings.space40};
  padding: ${Spacings.space8};
  border-radius: ${Shapes.full};

  /* ----------  Check Aura ---------- */
  &:hover {
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${Color.Navy.soft}${Opacities.opacity20};
      `}
    ${(props) =>
      props.isPressed &&
      css`
        background-color: ${Color.Neutral[600]}${Opacities.opacity20};
      `}
  }

  /* ----------  Check Area  (label) ---------- */
  & label {
    width: ${Spacings.space24};
    height: ${Spacings.space24};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${Shapes.xs};
    ${(props) =>
      props.isFocused &&
      css`
        outline: ${Borders.br2}${Color.Blue.main};
        outline-offset: 0px;
      `}

    /* ----------  Check Input  (input checkbox) ---------- */

    & input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
`
