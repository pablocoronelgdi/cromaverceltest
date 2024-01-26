import styled from 'styled-components'
import type { ButtonPropTypes } from './types'
import { borders, color, shapes, spacings } from '@cromaui/foundations'
import { FLEX_CENTER } from '../../globals/globals'

export const StyledButton = styled.button<ButtonPropTypes>`
  ${FLEX_CENTER}
  padding: ${spacings.space12};
  gap: ${spacings.space8};
  border: ${borders.br2};
  border-radius: ${shapes.full};
  border-color: ${({ variant }) =>
    variant === 'link' ? 'transparent' : color.navy.main};
  background-color: ${({ variant }) =>
    variant === 'link' ? 'transparent' : color.navy.main};

  & > span {
    color: ${({ variant }) =>
      variant === 'link' ? color.navy.main : color.neutral[50]};
  }
`
