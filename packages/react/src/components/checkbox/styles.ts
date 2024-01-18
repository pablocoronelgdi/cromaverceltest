import {
  borders,
  color,
  opacities,
  shapes,
  spacings
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
  width: ${spacings.space40};
  height: ${spacings.space40};
  padding: ${spacings.space8};
  border-radius: ${shapes.full};

  /* ----------  Check Aura ---------- */
  &:hover {
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${color.navy.soft}${opacities.opacity20};
      `}
    ${(props) =>
      props.isPressed &&
      css`
        background-color: ${color.neutral[600]}${opacities.opacity20};
      `}
  }

  /* ----------  Check Area  (label) ---------- */
  & label {
    width: ${spacings.space24};
    height: ${spacings.space24};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${shapes.xs};
    ${(props) =>
      props.isFocused &&
      css`
        outline: ${borders.br2}${color.blue.main};
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
