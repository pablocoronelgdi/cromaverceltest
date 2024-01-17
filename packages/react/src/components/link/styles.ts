import styled, { css } from 'styled-components'
import { FlexBoxCenter } from '../../globals/globals'
import {
  Color,
  Typography,
  Borders,
  Shapes,
  Spacings
} from '@cromaui/foundations'
import type { LinkPropsTypes } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE LINK     =
============================================= */

export const StyledLink = styled.a<LinkPropsTypes>`
  ${FlexBoxCenter}
  color: ${(props) => (props.disabled ? Color.Neutral[400] : Color.Blue.main)};
  padding: ${Spacings.space2};
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  font-family: ${Typography.link.md.regular.fontFamily};

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${Typography.link.lg.regular.fontSize};
      font-weight: ${Typography.link.lg.regular.fontWeight};
      line-height: ${Typography.link.lg.regular.lineHeight};
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: ${Typography.link.md.regular.fontSize};
      font-weight: ${Typography.link.md.regular.fontWeight};
      line-height: ${Typography.link.md.regular.lineHeight};
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${Typography.link.sm.regular.fontSize};
      font-weight: ${Typography.link.sm.regular.fontWeight};
      line-height: ${Typography.link.sm.regular.lineHeight};
    `}

    & p {
    margin: 0;
    border-bottom: ${Borders.br2};
  }

  & span:first-child {
    margin-right: ${Spacings.space8};
  }
  & span:last-child {
    margin-left: ${Spacings.space8};
  }

  &:hover {
    ${(props) => (props.disabled ? Color.Neutral[400] : Color.Blue.soft)};
  }

  &:focus {
    border: ${Borders.br2} ${Color.Blue.main};
    border-radius: ${Shapes.xs};
  }
`
