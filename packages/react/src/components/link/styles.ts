import styled, { css } from 'styled-components'
import { FLEX_CENTER } from '../../globals/globals'
import {
  color,
  typography,
  borders,
  shapes,
  spacings
} from '@cromaui/foundations'
import type { LinkPropsTypes } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE LINK     =
============================================= */

export const StyledLink = styled.a<LinkPropsTypes>`
  ${FLEX_CENTER}
  color: ${(props) => (props.disabled ? color.neutral[400] : color.blue.main)};
  padding: ${spacings.space2};
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  font-family: ${typography.link.md.regular.fontFamily};

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${typography.link.lg.regular.fontSize};
      font-weight: ${typography.link.lg.regular.fontWeight};
      line-height: ${typography.link.lg.regular.lineHeight};
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: ${typography.link.md.regular.fontSize};
      font-weight: ${typography.link.md.regular.fontWeight};
      line-height: ${typography.link.md.regular.lineHeight};
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${typography.link.sm.regular.fontSize};
      font-weight: ${typography.link.sm.regular.fontWeight};
      line-height: ${typography.link.sm.regular.lineHeight};
    `}

    & p {
    margin: 0;
    border-bottom: ${borders.br2};
  }

  & span:first-child {
    margin-right: ${spacings.space8};
  }
  & span:last-child {
    margin-left: ${spacings.space8};
  }

  &:hover {
    ${(props) => (props.disabled ? color.neutral[400] : color.blue.soft)};
  }

  &:focus {
    border: ${borders.br2} ${color.blue.main};
    border-radius: ${shapes.xs};
  }
`
