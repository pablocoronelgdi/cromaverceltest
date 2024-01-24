import styled from 'styled-components'
import type { TextfieldPropTypes } from './types'
import {
  borders,
  color,
  shapes,
  spacings,
  typography
} from '@cromaui/foundations'
import { FLEX_BETWEEN, FLEX_CENTER } from '../../globals/globals'
import { neutral } from '@cromaui/foundations/dist/colors'

export const TextfieldContainerStyled = styled.div<TextfieldPropTypes>`
  width: ${({ width }) => width && 'auto'};

  & label > div {
    ${FLEX_CENTER}
    gap: ${spacings.space8};
    padding: ${spacings.space12};
    border-radius: ${shapes.sm};
    border: ${borders.br1}${color.neutral[400]};
    outline: ${borders.br2};
    outline-color: ${({ error, isFocused }) =>
      error
        ? color.error.main
        : isFocused
        ? color.blue.main
        : color.neutral[0]};
    cursor: text;
  }
  & label > div > input {
    font-size: ${typography.body.sm.regular.fontSize};
    font-family: ${typography.body.sm.regular.fontFamily};
    font-weight: ${typography.body.sm.regular.fontWeight};
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }

  & > div {
    ${FLEX_BETWEEN}
    flex-direction:row-reverse;
  }

  & > div > span {
    color: ${({ error }) => (error ? color.error.main : neutral[800])};
  }
`
