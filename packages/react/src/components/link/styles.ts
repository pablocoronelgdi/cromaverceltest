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
    =     ESTILOS DEL COMPONENTE LINK     =
============================================= */

export const StyledLink = styled.a<LinkPropsTypes>`
  ${FLEX_CENTER}
  min-width: fit-content;
  color: ${({ $disabled }) => ($disabled ? color.neutral[400] : color.blue.main)};
  padding: ${spacings.space2};
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled && 'none')};

  ${(props) => (props.$weightRegular ? FONT_TYPE_REGULAR : FONT_TYPE_SEMIBOLD)}

  ${(props) =>
    props.$size === 'large' &&
    css`
      ${FONT_LINK_LG}
      text-decoration: none;
    `}
  ${(props) =>
    props.$size === 'medium' &&
    css`
      ${FONT_LINK_MD}
      text-decoration: none;
    `}
    ${(props) =>
    props.$size === 'small' &&
    css`
      ${FONT_LINK_SM}
      text-decoration: none;
    `}

      margin: 0;
  border-bottom: ${borders.br2};
  ${(props) => (props.$weightRegular ? FONT_TYPE_REGULAR : FONT_TYPE_SEMIBOLD)}

  & span:first-child {
    margin-right: ${spacings.space8};
    color: inherit;
  }
  & span:last-child {
    margin-left: ${spacings.space8};
    color: inherit;
  }

  &:hover {
    color: ${({ $disabled }) => ($disabled ? color.neutral[400] : color.blue.soft)};
    text-decoration: none;
  }

  &:focus,
  &:focus-within,
  &:focus-visible {
    border: ${({ $disabled }) => ($disabled ? 'none' : borders.br2 + color.blue.soft)};
    border-radius: ${shapes.xs};
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }

  &:disabled {
    text-decoration: none;
    color: ${color.neutral[400]};
    pointer-events: ${({ $disabled }) => ($disabled && 'none')};
  }
`
