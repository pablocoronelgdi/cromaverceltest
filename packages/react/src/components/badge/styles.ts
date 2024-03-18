import styled, { css } from 'styled-components'
import { FLEX_CENTER, FONT_TYPE_SEMIBOLD } from '../../globals/globals'
import { borders, color, spacings, typography } from '@cromaui/foundations'
import type { BadgePropTypes } from './types'

export const BadgeContainerStyled = styled.div<BadgePropTypes>`
  ${FLEX_CENTER}
  border-radius: 100px;
  outline: ${({ $text }) => !$text && borders.br2};
  outline-color: ${({ $backgroundType }) =>
    $backgroundType === 'light' ? color.neutral[50] : color.navy.main};
  gap: ${({ $iconName, $size }) =>
    $size === 'large' && !!$iconName ? spacings.space4 : spacings.space2};
  overflow: hidden;
  text-align: center;
  width: fit-content;
  max-width: 142px;

  & small {
    ${FONT_TYPE_SEMIBOLD}
    font-family: ${typography.body.sm.fontFamily};
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ $size, $text, $count }) =>
      ($size === 'small' || $size === 'medium') &&
      ($text || $count) &&
      css`
        font-size: ${typography.caption.fontSize};
        line-height: 1.1em;
        letter-spacing: ${typography.caption.letterSpacing};
      `}

    ${({ $size, $text, $count }) =>
      $size === 'large' &&
      ($text || $count) &&
      css`
        font-size: ${typography.body.sm.fontSize};
        line-height: ${typography.body.sm.lineHeight};
        letter-spacing: ${typography.body.sm.letterSpacing};
      `}
  }

  ${({ $text, $size, $iconName }) =>
    $text &&
    css`
      padding-top: ${$size === 'small' ? '1px' : $size === 'medium' ? '2px' : '0'};
      padding-bottom: ${$size === 'small' ? '1px' : $size === 'medium' ? '2px' : '0'};
      padding-left: ${$size === 'small' || $size === 'medium'
        ? $iconName
          ? spacings.space4
          : spacings.space6
        : $iconName
        ? spacings.space6
        : spacings.space8};
      padding-right: ${$size === 'large' ? spacings.space8 : spacings.space6};
      width: max-content;
      white-space: nowrap;
      justify-content: start;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${({ $color }) =>
    $color === 'pink' &&
    css`
      background-color: ${color.pink.main};
      color: ${color.neutral[900]};
    `}

  ${({ $color }) =>
    $color === 'blue' &&
    css`
      background-color: ${color.Info.main};
      color: ${color.neutral[50]};
    `}

  ${({ $color }) =>
    $color === 'green' &&
    css`
      background-color: ${color.success[700]};
      color: ${color.neutral[50]};
    `}

    ${({ $color }) =>
    $color === 'light-blue' &&
    css`
      background-color: ${color.blue.extraSoft};
      color: ${color.neutral[900]};
    `}

  ${({ $size, $text, $count }) =>
    $size === 'small' &&
    !$text &&
    !$count &&
    css`
      height: ${spacings.space6};
      width: ${spacings.space6};
    `}

  ${({ $size, $text, $count }) =>
    $size === 'medium' &&
    !$text &&
    !$count &&
    css`
      height: ${spacings.space8};
      width: ${spacings.space8};
    `}

  ${({ $size, $text, $count }) =>
    $size === 'large' &&
    !$text &&
    !$count &&
    css`
      height: ${spacings.space10};
      width: ${spacings.space10};
    `}
    
  ${({ $size, $count }) =>
    $size === 'small' &&
    $count &&
    css`
      height: ${spacings.space16};
      min-width: ${spacings.space16};
      width: fit-content;
      max-width: 142px;
      padding-left: ${spacings.space4};
      padding-right: ${spacings.space4};
    `}

  ${({ $size, $count }) =>
    $size === 'medium' &&
    $count &&
    css`
      height: ${spacings.space20};
      min-width: ${spacings.space20};
      width: fit-content;
      padding-left: ${spacings.space6};
      padding-right: ${spacings.space6};
    `}

  ${({ $size, $count }) =>
    $size === 'large' &&
    $count &&
    css`
      height: ${spacings.space24};
      min-width: ${spacings.space24};
      width: fit-content;
      padding-left: ${spacings.space8};
      padding-right: ${spacings.space8};
    `}

  ${({ $size, $iconName, $text }) =>
    $size === 'small' &&
    $iconName &&
    !$text &&
    css`
      height: ${spacings.space16};
      width: ${spacings.space16};
    `}

  ${({ $size, $iconName, $text }) =>
    $size === 'medium' &&
    $iconName &&
    !$text &&
    css`
      height: ${spacings.space20};
      width: ${spacings.space20};
    `}

  ${({ $size, $iconName, $text }) =>
    $size === 'large' &&
    $iconName &&
    !$text &&
    css`
      height: ${spacings.space24};
      width: ${spacings.space24};
    `}
  
  & > span {
    ${({ $color }) =>
      $color === 'pink' &&
      css`
        background-color: ${color.pink.main};
        color: ${color.neutral[900]};
      `}

    ${({ $color }) =>
      $color === 'blue' &&
      css`
        background-color: ${color.Info.main};
        color: ${color.neutral[50]};
      `}

    ${({ $color }) =>
      $color === 'green' &&
      css`
        background-color: ${color.success[700]};
        color: ${color.neutral[50]};
      `}

      ${({ $color }) =>
      $color === 'light-blue' &&
      css`
        background-color: ${color.blue.extraSoft};
        color: ${color.neutral[900]};
      `}
  }
`
