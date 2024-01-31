import styled from 'styled-components/native'
import { Icon } from '../icon'
import { color, shapes, typography } from '@cromaui/foundations'
import type { FabInnerPropTypes, FabPseudoTypes } from './types'
import { css } from 'styled-components'
import { StyleSheet, type PressableProps } from 'react-native'

export const FabPressableStyled = styled.Pressable<PressableProps>``

export const FabArea = styled.View<FabInnerPropTypes & FabPseudoTypes>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  border-radius: ${shapes.full};
  padding: ${({ size }) => (size === 'small' ? '10px' : '16px')};
  background-color: ${({ size, disabled }) =>
    disabled
      ? color.neutral[300]
      : size === 'small'
      ? color.neutral[50]
      : color.blue.main};

  ${({ isPressed, ...props }) =>
    isPressed &&
    !props.disabled &&
    css`
      background-color: ${props.size === 'small'
        ? color.blue.extraSoft
        : color.blue.dark};
    `}
`

export const FabIcon = styled(Icon)<FabInnerPropTypes>`
  color: ${({ size, disabled }) =>
    disabled
      ? color.neutral[500]
      : size === 'medium'
      ? color.blue.main
      : color.neutral[50]};
`
export const FabText = styled.Text<FabInnerPropTypes>`
  color: ${({ size, disabled }) =>
    disabled
      ? color.neutral[500]
      : size === 'small'
      ? color.blue.main
      : color.neutral[50]};
  font-size: ${typography.button.md.semibold.fontSize};
  text-decoration: ${typography.button.md.semibold.textDecoration};
  font-weight: ${typography.button.md.semibold.fontWeight};
  font-style: ${typography.button.md.semibold.fontStyle};
  letter-spacing: ${typography.button.md.semibold.letterSpacing};
  line-height: ${typography.button.md.semibold.lineHeight};
`

export const FabStyles = StyleSheet.create({
  area: {
    elevation: 9
  }
})
