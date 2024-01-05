import { css } from "styled-components";
import { Color, Typography } from "@cromaui/foundations";
import { getColorByProp } from "../../utils/colorUtils";

/*
 * INDICE:
 *
 * ESTILOS BASE
 * VARIANTES DEL COMPONENTE
 * FUNCIONES
 *
 */

/* =============================================
=            ESTILOS BASE            =
============================================= */

/* ----------  Botón  ---------- */

export const getBaseButtonStyles = () => {
  return css`
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;
};

/* ----------  Texto del Botón  ---------- */

export const getBaseButtonTextStyles = () => {
  return css`
    font-size: ${Typography.button.md.semibold.fontSize};
    line-height: ${Typography.button.md.semibold.lineHeight};
    font-weight: ${Typography.button.md.semibold.fontWeight};
    text-align: center;
  `;
};

/* =============================================
=            VARIANTES de COMPONENTE                 =
============================================= */

/* ----------  Outlined Botón  ---------- */

const outlinedButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.outlined
        .disabled?.backgroundColor || Color.Neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.outlined.disabled.color ||
        Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${getColorByProp(
        props.color,
        props.theme,
        "extraLight"
      )};
      border: solid 2px ${getColorByProp(props.color, props.theme, "dark")};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${Color.Neutral[0]};
    border: solid 2px ${getColorByProp(props.color, props.theme)};
  `;
};

/* ----------  Outlined Texto del Botón  ---------- */

const outlinedTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.outlined.disabled
        ?.backgroundColor || Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${getColorByProp(props.color, props.theme, "dark")};
    `;
  }
  return css`
    color: ${getColorByProp(props.color, props.theme)};
  `;
};

/* ----------  Filled Botón  ---------- */

const filledButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.filled
        .disabled?.backgroundColor || Color.Neutral[300]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.filled.disabled.color ||
        Color.Neutral[300]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant?.filled
        .pressed.backgroundColor || Color.Navy.dark};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.filled?.pressed
          ?.backgroundColor || Color.Navy.dark};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${getColorByProp(props.color, props.theme)};
    border: solid 2px ${getColorByProp(props.color, props.theme)};
  `;
};

/* ----------  Filled Texto del Botón  ---------- */

const filledTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Neutral[500]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Neutral[100]};
    `;
  }
  // DISABLED
  return css`
    color: ${props.theme?.components?.button?.variant?.filled?.color ||
    Color.Neutral[100]};
  `;
};

/* ----------  Link Botón  ---------- */

const linkButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.disabled
        .backgroundColor || Color.Neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.link.disabled.color ||
        Color.Neutral[0]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.pressed
        .backgroundColor || Color.Neutral[200]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.link.pressed.color ||
        Color.Neutral[0]};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${props.theme?.components?.button?.variant.link
      ?.backgroundColor || Color.Neutral[0]};
    border: solid 2px
      ${props.theme?.components?.button?.variant?.link?.backgroundColor ||
      Color.Neutral[100]};
  `;
};

/* ----------  Link Texto del Botón  ---------- */

const linkTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.link?.color ||
      Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.link?.color ||
      Color.Navy.main};
    `;
  }
  // DEFAULT
  return css`
    color: ${props.theme?.components?.button?.variant?.link?.color ||
    Color.Navy.main};
  `;
};

/* =============================================
=            FUNCIONES                =
============================================= */

/* ----------  Obtener el tamaño del boton  ---------- */
export const getButtonSize = (props) => {
  switch (props.size) {
    case "small":
      return css`
        padding: 8px 12px;
      `;
    case "medium":
      return css`
        padding: 8px 12px;
      `;
    case "large":
      return css`
        padding: 12px 16px;
      `;
    default:
      return css`
        padding: 8px 12px;
      `;
  }
};

/* ----------  Obtener el tamaño del texto del boton  ---------- */
export const getButtonTextSize = (props) => {
  switch (props.size) {
    case "small":
      return css`
        font-size: ${Typography.button.sm.semibold.fontSize};
        line-height: ${Typography.button.sm.semibold.lineHeight};
      `;
    case "large":
      return css`
        font-size: ${Typography.button.md.semibold.fontSize};
        line-height: ${Typography.button.md.semibold.lineHeight};
      `;
    default:
      return css`
        font-size: ${Typography.button.md.semibold.fontSize};
        line-height: ${Typography.button.md.semibold.lineHeight};
      `;
  }
};

/* ----------  Obtener la variante del boton  ---------- */
export const getButtonVariant = (props) => {
  switch (props.variant) {
    case "link":
      return linkButton(props);
    case "outlined":
      return outlinedButton(props);
    default:
      return filledButton(props);
  }
};

/* ----------  Obtener la variante del texto del boton  ---------- */
export const getButtonTextVariant = (props) => {
  switch (props.variant) {
    case "link":
      return linkTextButton(props);
    case "outlined":
      return outlinedTextButton(props);
    default:
      return filledTextButton(props);
  }
};
