import styled, { css } from 'styled-components'
import {
  FLEX_CENTER,
  FONT_LINK_LG,
  FONT_LINK_MD,
  FONT_LINK_SM,
  FONT_TYPE_REGULAR
} from '../../globals/globals'
import { color, borders, shapes, spacings } from '@cromaui/foundations'
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
  ${FONT_TYPE_REGULAR}

  ${(props) =>
    props.size === 'large' &&
    css`
      ${FONT_LINK_LG}
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      ${FONT_LINK_MD}
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      ${FONT_LINK_SM}
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
