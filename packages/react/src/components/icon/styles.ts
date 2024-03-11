import styled from 'styled-components'
import type { IconPropTypes } from './types'
import { shapes } from '@cromaui/foundations'

export const StyledIcon = styled.span<IconPropTypes>`
  // @TODO: Remover linea 7 cuando se cree la variante extra-small en el size de Button
  cursor: ${({ onClick }) => (onClick ? 'pointer' : '')};
  white-space: nowrap;
  word-wrap: normal;
  margin: 0;
  padding: 0;
  vertical-align: top;
  color: ${({ color }) => color ?? 'inherit'};
  background-color: transparent;
  font-family: 'Material Icons Outlined';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  user-select: none;
  border-radius: ${shapes.full};
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;

  &.croma-icon-small {
    line-height: 16px;
    width: 16px;
    height: 16px;
    font-size: 16px;
  }
  &.croma-icon-medium {
    line-height: 20px;
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
  &.croma-icon-large {
    line-height: 24px;
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
  &.croma-icon-extra-large {
    line-height: 32px;
    width: 32px;
    height: 32px;
    font-size: 32px;
  }
`
