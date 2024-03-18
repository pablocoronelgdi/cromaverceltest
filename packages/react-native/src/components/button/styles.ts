import { type RuleSet, css } from 'styled-components'
import { color, typography } from '@cromaui/foundations'
import { getColorByProp } from '../../utils/colorUtils'
import type { ButtonTextPropTypes, ChildrenButtonPropTypes } from './types'

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

export const getBaseButtonStyles = (): RuleSet<object> => {
  return css`
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `
}

/* ----------  Texto del Botón  ---------- */

export const getBaseButtonTextStyles = (): RuleSet<object> => {
  return css`
    font-size: ${typography.button.md.fontSize};
    line-height: ${typography.button.md.lineHeight};
    font-weight: ${typography.variants.semibold};
    text-align: center;
  `
}

/* =============================================
=            VARIANTES de COMPONENTE                 =
============================================= */

/* ----------  Outlined Botón  ---------- */

const outlinedButton = (props: ChildrenButtonPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.outlined.disabled
        ?.backgroundcolor || color.neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.outlined.disabled.color || color.neutral[400]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${getColorByProp(props.color, props.theme, 'extraLight')};
      border: solid 2px ${getColorByProp(props.color, props.theme, 'dark')};
    `
  }
  // DEFAULT
  return css`
    background-color: ${color.neutral[0]};
    border: solid 2px ${getColorByProp(props.color, props.theme)};
  `
}

/* ----------  Outlined Texto del Botón  ---------- */

const outlinedTextButton = (props: ButtonTextPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.outlined.disabled?.backgroundcolor ||
      color.neutral[400]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${getColorByProp(props.color, props.theme, 'dark')};
    `
  }
  return css`
    color: ${getColorByProp(props.color, props.theme)};
  `
}

/* ----------  Filled Botón  ---------- */

const filledButton = (props: ChildrenButtonPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.filled.disabled
        ?.backgroundcolor || color.neutral[300]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.filled.disabled.color || color.neutral[300]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant?.filled.pressed
        .backgroundcolor || color.navy.dark};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.filled?.pressed?.backgroundcolor ||
        color.navy.dark};
    `
  }
  // DEFAULT
  return css`
    background-color: ${getColorByProp(props.color, props.theme)};
    border: solid 2px ${getColorByProp(props.color, props.theme)};
  `
}

/* ----------  Filled Texto del Botón  ---------- */

const filledTextButton = (props: ButtonTextPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color || color.neutral[500]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color || color.neutral[100]};
    `
  }
  // DISABLED
  return css`
    color: ${props.theme?.components?.button?.variant?.filled?.color || color.neutral[100]};
  `
}

/* ----------  Link Botón  ---------- */

const linkButton = (props: ChildrenButtonPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.disabled.backgroundcolor ||
      color.neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.link.disabled.color || color.neutral[0]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.pressed.backgroundcolor ||
      color.neutral[200]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.link.pressed.color || color.neutral[0]};
    `
  }
  // DEFAULT
  return css`
    background-color: ${props.theme?.components?.button?.variant.link?.backgroundcolor ||
    color.neutral[0]};
    border: solid 2px
      ${props.theme?.components?.button?.variant?.link?.backgroundcolor || color.neutral[100]};
  `
}

/* ----------  Link Texto del Botón  ---------- */

const linkTextButton = (props: ButtonTextPropTypes): RuleSet<object> => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.link?.color || color.neutral[400]};
    `
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.link?.color || color.navy.main};
    `
  }
  // DEFAULT
  return css`
    color: ${props.theme?.components?.button?.variant?.link?.color || color.navy.main};
  `
}

/* =============================================
=            FUNCIONES                =
============================================= */

/* ----------  Obtener el tamaño del boton  ---------- */
export const getButtonSize = (props: ChildrenButtonPropTypes): RuleSet<object> => {
  switch (props.size) {
    case 'small':
      return css`
        padding: 8px 12px;
      `
    case 'medium':
      return css`
        padding: 8px 12px;
      `
    case 'large':
      return css`
        padding: 12px 16px;
      `
    default:
      return css`
        padding: 8px 12px;
      `
  }
}

/* ----------  Obtener el tamaño del texto del boton  ---------- */
export const getButtonTextSize = (props: ButtonTextPropTypes): RuleSet<object> => {
  switch (props.size) {
    case 'small':
      return css`
        font-size: ${typography.button.sm.fontSize};
        line-height: ${typography.button.sm.lineHeight};
      `
    case 'large':
      return css`
        font-size: ${typography.button.md.fontSize};
        line-height: ${typography.button.md.lineHeight};
      `
    default:
      return css`
        font-size: ${typography.button.md.fontSize};
        line-height: ${typography.button.md.lineHeight};
      `
  }
}

/* ----------  Obtener la variante del boton  ---------- */
export const getButtonVariant = (props: ChildrenButtonPropTypes): RuleSet<object> => {
  switch (props.variant) {
    case 'link':
      return linkButton(props)
    case 'outlined':
      return outlinedButton(props)
    default:
      return filledButton(props)
  }
}

/* ----------  Obtener la variante del texto del boton  ---------- */
export const getButtonTextVariant = (props: ButtonTextPropTypes): RuleSet<object> => {
  switch (props.variant) {
    case 'link':
      return linkTextButton(props)
    case 'outlined':
      return outlinedTextButton(props)
    default:
      return filledTextButton(props)
  }
}
