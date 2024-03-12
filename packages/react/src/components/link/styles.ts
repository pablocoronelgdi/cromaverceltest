import styled, { css } from 'styled-components'
import {
  FLEX_CENTER,
  FONT_LINK_LG,
  FONT_LINK_MD,
  FONT_LINK_SM,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'
import { color, borders, shapes, spacings } from '@cromaui/foundations'
import type { LinkPropsTypes } from './types'

/* =============================================
    =      ESTILOS DEL COMPONENTE LINK     =
============================================= */

export const StyledLink = styled.a<LinkPropsTypes>`
  ${FLEX_CENTER}
  width: auto;
  color: ${(props) => (props.$disabled ? color.neutral[400] : color.blue.main)};
  padding: ${spacings.space2};
  text-decoration: none;
  cursor: ${(props) => (props.$disabled ? 'no-drop' : 'pointer')};
  
  ${(props) => props.$weight ? FONT_TYPE_REGULAR : FONT_TYPE_SEMIBOLD}

  ${(props) =>
    props.$size === 'large' &&
    css`
      ${FONT_LINK_LG}
    `}
  ${(props) =>
    props.$size === 'medium' &&
    css`
      ${FONT_LINK_MD}
    `}
    ${(props) =>
    props.$size === 'small' &&
    css`
      ${FONT_LINK_SM}
    `}

    & p {
      margin: 0;
      border-bottom: ${borders.br2};
      font-weight: ${(props) => (props.$weight)};
  }

  & span:first-child {
    margin-right: ${spacings.space8};
    color: inherit
  }
  & span:last-child {
    margin-left: ${spacings.space8};
    color: inherit
  }

  &:hover {
    color: ${(props) => (props.$disabled ? color.neutral[400] : color.blue.soft)};
  }

  &:focus,
  &:focus-within,
  &:focus-visible {
    border: ${(props) => (props.$disabled ? 'none' : borders.br2 + color.blue.soft)};
    border-radius: ${shapes.xs};
  }
`
