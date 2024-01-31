import { color } from '@cromaui/foundations'
import { type RuleSet, css } from 'styled-components'
import { hexToRgb } from '../../utils/colorUtils'
import type { SwitchAreaProps } from './types'
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
export const swtichContainer = (): RuleSet<object> => {
  return css`
    padding: 2px 4px 2px 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `
}

/* ----------  Switch Background  ---------- */

export const switchBackground = (props: SwitchAreaProps): RuleSet<object> => {
  const base = css`
    width: 52px;
    height: 32px;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    background-color: ${props.checked ? color.navy.main : color.neutral[200]};
  `

  if (props.disabled) {
    return css`
      ${base}
      background-color: ${color.neutral[300]};
    `
  }
  return css`
    ${base}
  `
}

/* ----------  Switch Background  ---------- */

export const switchAura = (props: SwitchAreaProps): RuleSet<object> => {
  const base = css`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${color.neutral[0]};
    transform: translateX(${props.checked ? '16px' : '-6px'});
  `
  const pressed = css`
    background-color: ${props.checked
      ? hexToRgb(color.navy.soft, 0.2)
      : hexToRgb(color.neutral[600], 0.2)};
  `

  if (props.disabled) {
    return css`
      ${base}
    `
  }
  if (props.pressed) {
    return css`
      ${base};
      ${pressed};
    `
  }
  return css`
    ${base}
  `
}

export const swtichThumb = (props: SwitchAreaProps): RuleSet<object> => {
  const base = css`
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    width: ${props.checked ? '24px' : '16px'};
    height: ${props.checked ? '24px' : '16px'};
    background-color: ${props.checked
      ? color.neutral[100]
      : color.neutral[600]};
  `
  const disabled = css`
    background-color: ${props.checked
      ? color.neutral[100]
      : color.neutral[600]};
  `
  const pressed = css`
    width: 28px;
    height: 28px;
  `
  if (props.disabled) {
    return css`
      ${base}
      ${disabled}
    `
  }
  if (props.pressed) {
    return css`
      ${base}
      ${pressed}
    `
  }
  return css`
    ${base}
  `
}
