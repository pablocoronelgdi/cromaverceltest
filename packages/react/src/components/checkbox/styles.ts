import { borders, color, opacities, shapes, spacings } from '@cromaui/foundations'
import { styled } from 'styled-components'
import type { CheckInnerProps } from './types'
import { FLEX_CENTER } from '../../globals/globals'

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

  /* ---------- Aura ---------- */
  &:hover {
    background-color: ${({ disabled, $isPressed }) =>
      disabled
        ? color.neutral[0]
        : $isPressed
        ? color.navy.soft + opacities.opacity20
        : color.neutral[600] + opacities.opacity20};
  }
  & label {
    ${FLEX_CENTER}
    width: ${spacings.space24};
    height: ${spacings.space24};
    border-radius: ${shapes.xs};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:focus &:focus-visible,
    &:focus-within {
      border: ${borders.br2};
      border-color: ${({ disabled }) => (disabled ? color.neutral[0] : color.blue.main)};
    }

    & input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
`
