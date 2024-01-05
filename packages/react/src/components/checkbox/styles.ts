import {
  Borders,
  Color,
  Opacities,
  Shapes,
  Spacings,
} from "@cromaui/foundations";
import { css } from "styled-components";
import { CheckInnerProps } from "./types";
/*
 * INDICE:
 *
 * ESTILOS DE COMPONENTES
 *
 * - Check Container (div)
 * - Check Area (label)
 * - Check Input (input checkbox)
 */

/* ----------  Check Container  (div) ---------- */

export const checkContainer = (props: CheckInnerProps) => {
  // ESTILOS BASE
  const base = css`
    position: relative;
    display: inline-flex;
    width: ${Spacings.space40};
    height: ${Spacings.space40};
    padding: ${Spacings.space8};
    border-radius: ${Shapes.full};
    &:hover {
      background-color: ${Color.Navy.soft}${Opacities.opacity20};
    }
  `;

  // DISABLED
  const disabled = css`
    &:hover {
      background-color: transparent;
    }
  `;

  // PRESSED
  const pressed = css`
    &:hover {
      background-color: ${Color.Neutral[600]}${Opacities.opacity20};
    }
  `;

  if (props.disabled) {
    return css`
      ${base}
      ${disabled}
    `;
  }
  if (props.isPressed) {
    return css`
      ${base}
      ${pressed}
    `;
  }
  return css`
    ${base}
  `;
};

/* ----------  Check Area  (label) ---------- */

export const checkArea = () => {
  //ESTILOS BASE
  const base = css`
    width: ${Spacings.space24};
    height: ${Spacings.space24};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${Shapes.xs};
    &:focus-within {
      outline: ${Borders.br2}${Color.Blue.main};
      outline-offset: 0px;
    }
  `;
  return css`
    ${base}
  `;
};

/* ----------  Check Input  (input checkbox) ---------- */

export const checkInput = () => {
  return css`
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  `;
};
