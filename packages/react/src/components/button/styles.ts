import styled, { css } from 'styled-components'
import type { AnchorPropTypes, ButtonPropTypes } from './types'
import {
  FLEX_CENTER,
  FONT_BUTTON_MD,
  FONT_BUTTON_SM,
  FONT_BUTTON_XSM,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'
import { color, shapes, spacings } from '@cromaui/foundations'

export const ButtonStyled = styled.button<ButtonPropTypes>`
  cursor: pointer;
  border-radius: ${shapes.sm};
  border: none;
  max-width: 328px;
  text-align: center;
  flex-direction: ${({ $iconPosition }) => ($iconPosition === 'left' ? 'row-reverse' : 'row')};
  gap: ${({ $iconName, $text, $size }) =>
    $iconName && $text && $size === 'extra-small' ? spacings.space6 : spacings.space8};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  ${FLEX_CENTER}
  ${FONT_TYPE_SEMIBOLD}
  ${({ $size }) =>
    $size === 'small' ? FONT_BUTTON_SM : $size === 'extra-small' ? FONT_BUTTON_XSM : FONT_BUTTON_MD}
  ${({ $variant, $backgroundType }) => {
    switch ($variant) {
      case 'fill':
        return css`
          background-color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[100]};
          color: ${$backgroundType === 'light' ? color.neutral[50] : color.navy.main};
          & > span {
            color: ${$backgroundType === 'light' ? color.neutral[50] : color.navy.main};
          }
          &:hover {
            background-color: ${$backgroundType === 'light'
              ? color.navy.soft
              : color.navy.extraSoft};
          }
          &:active {
            background-color: ${$backgroundType === 'light' ? color.navy.dark : color.navy.soft};
            color: ${color.neutral[50]};
            & > span {
              color: ${color.neutral[50]};
            }
          }
          &:focus,
          &:focus-visible,
          &:focus-within {
            outline: solid;
            outline-color: ${color.blue.soft};
            outline-offset: 2px;
            outline-width: 2px;
          }
          &:disabled {
            outline: none;
            background-color: ${$backgroundType === 'light'
              ? color.neutral[300]
              : color.neutral[400]};
            color: ${$backgroundType === 'light' ? color.neutral[500] : color.neutral[600]};
            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[500] : color.neutral[600]};
            }
          }
        `
      case 'outline':
        return css`
          background-color: transparent;
          color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[50]};
          border: solid;
          border-width: 1.7px;
          border-color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[50]};

          & > span {
            color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[50]};
          }
          &:hover {
            background-color: ${color.navy.extraSoft};
            border-color: ${$backgroundType === 'light' ? color.navy.soft : color.neutral[50]};
            color: ${color.navy.main};
            & > span {
              color: ${color.navy.main};
            }
          }
          &:active {
            background-color: ${color.navy.extraSoft};
            border-color: ${$backgroundType === 'light' ? color.navy.dark : color.navy.soft};
            color: ${color.navy.dark};
            & > span {
              color: ${color.navy.dark};
            }
          }
          &:focus,
          &:focus-visible,
          &:focus-within {
            background-color: transparent;
            border-color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[50]};
            color: ${$backgroundType === 'light' ? color.navy.main : color.neutral[50]};
            outline: solid;
            outline-color: ${color.blue.soft};
            outline-offset: 2px;
            outline-width: 2px;
          }
          &:disabled {
            border-color: ${$backgroundType === 'light' ? color.neutral[400] : color.neutral[600]};
            color: ${$backgroundType === 'light' ? color.neutral[400] : color.neutral[600]};
            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[400] : color.neutral[600]};
            }
          }
        `
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};

          & > span {
            color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};
          }
          &:hover {
            background-color: ${color.navy.extraSoft};
            color: ${$backgroundType === 'light' ? color.neutral[900] : color.navy.main};
            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[900] : color.navy.main};
            }
          }
          &:active {
            background-color: ${$backgroundType === 'light' ? color.neutral[200] : color.navy.soft};
            color: ${$backgroundType === 'light' ? color.navy.dark : color.neutral[50]};
            & > span {
              color: ${$backgroundType === 'light' ? color.navy.dark : color.neutral[50]};
            }
          }
          &:focus,
          &:focus-visible,
          &:focus-within {
            color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};
            outline: solid;
            outline-color: ${color.blue.soft};
            outline-offset: 2px;
            outline-width: 2px;
          }
          &:disabled {
            color: ${$backgroundType === 'light' ? color.neutral[400] : color.neutral[600]};
            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[400] : color.neutral[600]};
            }
          }
        `
      case 'tonal':
        return css`
          background-color: ${$backgroundType === 'light' ? color.blue.main : color.blue.soft};
          color: ${color.neutral[50]};
          & > span {
            color: ${color.neutral[50]};
          }
          &:hover {
            background-color: ${$backgroundType === 'light' ? color.blue.soft : color.blue.main};
          }
          &:active {
            background-color: ${color.blue.dark};
          }
          &:focus,
          &:focus-visible,
          &:focus-within {
            background-color: ${$backgroundType === 'light' ? color.blue.main : color.blue.soft};
            outline: solid;
            outline-color: ${color.blue.soft};
            outline-offset: 2px;
            outline-width: 2px;
          }
          &:disabled {
            outline: none;
            background-color: ${$backgroundType === 'light'
              ? color.neutral[300]
              : color.neutral[600]};
            color: ${$backgroundType === 'light' ? color.neutral[500] : color.neutral[400]};
            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[500] : color.neutral[400]};
            }
          }
        `
      default:
        return css``
    }
  }}
  ${({ $size, $variant, $iconPosition, $text, $iconName }) => {
    switch ($size) {
      case 'extra-small':
        return css`
          padding-top: ${$variant === 'ghost' && !$text ? spacings.space2 : spacings.space4};
          padding-bottom: ${$variant === 'ghost' && !$text ? spacings.space2 : spacings.space4};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space8
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text && $variant !== 'ghost'
            ? spacings.space4
            : $variant === 'ghost' && !!$iconName && !$iconPosition && !$text
            ? spacings.space2
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space8
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text && $variant !== 'ghost'
            ? spacings.space4
            : $variant === 'ghost' && !!$iconName && !$iconPosition && !$text
            ? spacings.space2
            : ''};
        `
      case 'small':
      case 'medium':
        return css`
          padding-top: ${spacings.space8};
          padding-bottom: ${spacings.space8};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space8
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space8
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space8
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space8
            : ''};
        `
      case 'large':
        return css`
          padding-top: ${spacings.space12};
          padding-bottom: ${spacings.space12};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space12
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space16
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space12
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space12
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space16
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space12
            : ''};
        `
      default:
        return css``
    }
  }}
&:disabled {
    cursor: not-allowed;
  }
`
export const AnchorStyled = styled.a<AnchorPropTypes>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${shapes.sm};
  max-width: 328px;
  flex-direction: ${({ $iconPosition }) => ($iconPosition === 'left' ? 'row-reverse' : 'row')};
  gap: ${({ $iconName, $text, $size }) =>
    $iconName && $text && $size === 'extra-small' ? spacings.space6 : spacings.space8};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  ${FLEX_CENTER}
  ${FONT_TYPE_SEMIBOLD}
  ${({ $size }) =>
    $size === 'small' ? FONT_BUTTON_SM : $size === 'extra-small' ? FONT_BUTTON_XSM : FONT_BUTTON_MD}
  ${({ $variant, $backgroundType, $disabled }) => {
    switch ($variant) {
      case 'fill':
        return css`
          // State Disabled:
          outline: ${$disabled && 'none'};
          background-color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[300]
            : color.neutral[400]};
          color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[500]
            : color.neutral[600]};
          & > span {
            color: ${$disabled && $backgroundType === 'light'
              ? color.neutral[500]
              : color.neutral[600]};
          }

          ${!$disabled &&
          css`
            background-color: ${!$disabled && $backgroundType === 'light'
              ? color.navy.main
              : color.neutral[100]};
            color: ${!$disabled && $backgroundType === 'light'
              ? color.neutral[50]
              : color.navy.main};
            & > span {
              color: ${!$disabled && $backgroundType === 'light'
                ? color.neutral[50]
                : color.navy.main};
            }
            &:hover {
              background-color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.soft
                : color.navy.extraSoft};
            }
            &:active {
              background-color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.dark
                : color.navy.soft};
              color: ${color.neutral[50]};
              & > span {
                color: ${color.neutral[50]};
              }
            }
            &:focus,
            &:focus-visible,
            &:focus-within {
              outline: ${!$disabled && 'solid'};
              outline-color: ${!$disabled && color.blue.soft};
              outline-offset: ${!$disabled && '2px'};
              outline-width: ${!$disabled && '2px'};
            }
          `}
        `
      case 'outline':
        return css`
          // State Disabled:
          outline: none;
          border: solid;
          border-width: 1.7px;
          border-color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[400]
            : color.neutral[600]};
          color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[400]
            : color.neutral[600]};
          & > span {
            color: ${$disabled && $backgroundType === 'light'
              ? color.neutral[400]
              : color.neutral[600]};
          }
          ${!$disabled &&
          css`
            background-color: transparent;
            color: ${!$disabled && $backgroundType === 'light'
              ? color.navy.main
              : color.neutral[50]};

            border-color: ${!$disabled && $backgroundType === 'light'
              ? color.navy.main
              : color.neutral[50]};

            & > span {
              color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.main
                : color.neutral[50]};
            }
            &:hover {
              background-color: ${color.navy.extraSoft};
              border-color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.soft
                : color.neutral[50]};
              color: ${color.navy.main};
              & > span {
                color: ${color.navy.main};
              }
            }
            &:active {
              background-color: ${color.navy.extraSoft};
              border-color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.dark
                : color.navy.soft};
              color: ${color.navy.dark};
              & > span {
                color: ${color.navy.dark};
              }
            }
            &:focus,
            &:focus-visible,
            &:focus-within {
              background-color: transparent;
              border-color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.main
                : color.neutral[50]};
              color: ${!$disabled && $backgroundType === 'light'
                ? color.navy.main
                : color.neutral[50]};
              outline: ${!$disabled && 'solid'};
              outline-color: ${!$disabled && color.blue.soft};
              outline-offset: 2px;
              outline-width: 2px;
            }
          `}
        `
      case 'ghost':
        return css`
          // State Disabled:
          outline: none;
          color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[400]
            : color.neutral[600]};
          & > span {
            color: ${$disabled && $backgroundType === 'light'
              ? color.neutral[400]
              : color.neutral[600]};
          }
          ${!$disabled &&
          css`
            background-color: transparent;
            color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};

            & > span {
              color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};
            }
            &:hover {
              background-color: ${color.navy.extraSoft};
              color: ${$backgroundType === 'light' ? color.neutral[900] : color.navy.main};
              & > span {
                color: ${$backgroundType === 'light' ? color.neutral[900] : color.navy.main};
              }
            }
            &:active {
              background-color: ${$backgroundType === 'light'
                ? color.neutral[200]
                : color.navy.soft};
              color: ${$backgroundType === 'light' ? color.navy.dark : color.neutral[50]};
              & > span {
                color: ${$backgroundType === 'light' ? color.navy.dark : color.neutral[50]};
              }
            }
            &:focus,
            &:focus-visible,
            &:focus-within {
              color: ${$backgroundType === 'light' ? color.neutral[900] : color.neutral[50]};
              outline: solid;
              outline-color: ${color.blue.soft};
              outline-offset: 2px;
              outline-width: 2px;
            }
          `}
        `
      case 'tonal':
        return css`
          // State Disabled:
          outline: ${$disabled && 'none'};
          background-color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[300]
            : color.neutral[600]};
          color: ${$disabled && $backgroundType === 'light'
            ? color.neutral[500]
            : color.neutral[400]};
          & > span {
            color: ${$disabled && $backgroundType === 'light'
              ? color.neutral[500]
              : color.neutral[400]};
          }
          ${!$disabled &&
          css`
            background-color: ${$backgroundType === 'light' ? color.blue.main : color.blue.soft};
            color: ${color.neutral[50]};
            & > span {
              color: ${color.neutral[50]};
            }
            &:hover {
              background-color: ${$backgroundType === 'light' ? color.blue.soft : color.blue.main};
            }
            &:active {
              background-color: ${color.blue.dark};
            }
            &:focus,
            &:focus-visible,
            &:focus-within {
              background-color: ${$backgroundType === 'light' ? color.blue.main : color.blue.soft};
              outline: solid;
              outline-color: ${color.blue.soft};
              outline-offset: 2px;
              outline-width: 2px;
            }
          `}
        `
      default:
        return css``
    }
  }}
  ${({ $size, $variant, $iconPosition, $text, $iconName }) => {
    switch ($size) {
      case 'extra-small':
        return css`
          padding-top: ${$variant === 'ghost' && !$text ? spacings.space2 : spacings.space4};
          padding-bottom: ${$variant === 'ghost' && !$text ? spacings.space2 : spacings.space4};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space8
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text && $variant !== 'ghost'
            ? spacings.space4
            : $variant === 'ghost' && !!$iconName && !$iconPosition && !$text
            ? spacings.space2
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space8
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text && $variant !== 'ghost'
            ? spacings.space4
            : $variant === 'ghost' && !!$iconName && !$iconPosition && !$text
            ? spacings.space2
            : ''};
        `
      case 'small':
      case 'medium':
        return css`
          padding-top: ${spacings.space8};
          padding-bottom: ${spacings.space8};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space8
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space8
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space8
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space12
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space8
            : ''};
        `
      case 'large':
        return css`
          padding-top: ${spacings.space12};
          padding-bottom: ${spacings.space12};
          padding-left: ${$iconPosition === 'left'
            ? spacings.space12
            : $iconPosition === 'right' || ($text && !$iconPosition)
            ? spacings.space16
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space12
            : ''};
          padding-right: ${$iconPosition === 'right'
            ? spacings.space12
            : $iconPosition === 'left' || ($text && !$iconPosition)
            ? spacings.space16
            : !!$iconName && !$iconPosition && !$text
            ? spacings.space12
            : ''};
        `
      default:
        return css``
    }
  }}
`
