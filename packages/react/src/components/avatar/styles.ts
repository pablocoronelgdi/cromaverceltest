import styled, { css } from 'styled-components'
import { borders, color, typography } from '@cromaui/foundations'
import { getSize } from './utils'
import type { AvatarPropTypes } from './types'
import { FLEX_CENTER, FONT_TYPE_SEMIBOLD } from '../../globals/globals'

export const StyledAvatarContainer = styled.div<AvatarPropTypes>`
  ${FLEX_CENTER}
  border: ${borders.br1};
  border-color: ${color.navy.main};
  border-radius: 100px;
  background-color: ${color.navy.extraSoft};
  color: ${color.navy.main};
  height: ${({ $size }) => getSize($size)};
  min-height: ${({ $size }) => getSize($size)};
  min-width: ${({ $size }) => getSize($size)};
  width: ${({ $size }) => getSize($size)};
  text-align: center;
  overflow: hidden;

  & > small {
    ${FONT_TYPE_SEMIBOLD}
    font-family: ${typography.body.sm.fontFamily};

    ${({ $size }) =>
      $size === 'extra-small' &&
      css`
        font-size: ${typography.body.sm.fontSize};
        line-height: 1.1em;
        letter-spacing: ${typography.body.sm.letterSpacing};
      `}

    ${({ $size }) =>
      $size === 'small' &&
      css`
    font-size: ${typography.body.md.fontSize};
    letter-spacing: ${typography.body.md.letterSpacing};
    line-height: letter-spacing: ${typography.body.md.lineHeight};
    `}

    ${({ $size }) =>
      ($size === 'medium' || $size === 'large') &&
      css`
    font-size: ${typography.body.lg.fontSize};
    letter-spacing: ${typography.body.lg.letterSpacing};
    line-height: letter-spacing: ${typography.body.lg.lineHeight};
    `}
    
    ${({ $size }) =>
      $size === 'extra-large' &&
      css`
    font-size: ${typography.heading.sm.fontSize};
    letter-spacing: ${typography.heading.sm.letterSpacing};
    line-height: letter-spacing: ${typography.heading.sm.lineHeight};
    `}
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${color.neutral[200]};
      border-color: ${color.neutral[400]};
      color: ${color.neutral[400]};
      cursor: not-allowed;
    `}

  & > img {
    ${({ $disabled }) =>
      $disabled &&
      css`
        opacity: 50%;
        filter: grayscale(100%);
        cursor: not-allowed;
      `}
  }

  & > span {
    ${({ $disabled }) =>
      $disabled &&
      css`
        color: ${color.neutral[400]};
      `}
  }
`
