import { Color } from "@cromaui/foundations";
import { css, keyframes } from "styled-components";
import { hexToRgb } from "../../utils/colorUtils";

/*
 * INDICE:
 *
 * ESTILOS BASE
 * VARIANTES
 * FUNCIONES
 *
 */

/* =============================================
=            ESTILOS BASE            =
============================================= */

/* ----------  Switch Container  ---------- */
export const swtichContainer = (props) => {
  return css`
    padding: 2px 4px 2px 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;
};

/* ----------  Switch Background  ---------- */

export const switchBackground = (props) => {
  const base = css`
    width: 52px;
    height: 32px;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    background-color: ${props.checked ? Color.Navy.main : Color.Neutral[200]};
  `;

  if (props.disabled) {
    return css`
      ${base}
      background-color: ${Color.Neutral[300]};
    `;
  }
  return css`
    ${base}
  `;
};

/* ----------  Switch Background  ---------- */

export const switchAura = (props) => {
  const base = css`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${Color.Neutral[0]};
    transform: translateX(${props.checked ? "16px" : "-6px"});
  `;
  const pressed = css`
    background-color: ${props.checked
      ? hexToRgb(Color.Navy.soft, 0.2)
      : hexToRgb(Color.Neutral[600], 0.2)};
  `;

  if (props.disabled) {
    return css`
      ${base}
    `;
  }
  if (props.pressed) {
    return css`
      ${base};
      ${pressed};
    `;
  }
  return css`
    ${base}
  `;
};

export const swtichThumb = (props) => {
  const base = css`
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    width: ${props.checked ? "24px" : "16px"};
    height: ${props.checked ? "24px" : "16px"};
    background-color: ${props.checked
      ? Color.Neutral[100]
      : Color.Neutral[600]};
  `;
  const disabled = css`
    background-color: ${props.checked
      ? Color.Neutral[100]
      : Color.Neutral[600]};
  `;
  const pressed = css`
    width: 28px;
    height: 28px;
  `;
  if (props.disabled) {
    return css`
      ${base}
      ${disabled}
    `;
  }
  if (props.pressed) {
    return css`
      ${base}
      ${pressed}
    `;
  }
  return css`
    ${base}
  `;
};

/* =============================================
=            FUNCIONES             =
============================================= */

/* ---------- Obtener Movimiento del Switch Thumb  ---------- */

const getThumbTranslation = (props) => {
  if (props.checked) {
    return props.pressed ? "14px" : "16px";
  } else {
    return props.pressed ? "-8px" : "0px";
  }
};

/* =============================================
=            ANIMACIONES           =
============================================= */

/* ---------- Animacion para Switch Background  ---------- */
