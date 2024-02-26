import styled, { css } from 'styled-components'
import type { InnerButtonProps } from './types'
import { borders, color, shapes, spacings } from '@cromaui/foundations'
import {
  FLEX_CENTER,
  FONT_BUTTON_MD,
  FONT_BUTTON_SM,
  FONT_TYPE_SEMIBOLD
} from '../../globals/globals'

export const ButtonStyled = styled.button<InnerButtonProps>`
  ${FLEX_CENTER}
  ${FONT_BUTTON_MD}
  ${FONT_TYPE_SEMIBOLD}
  cursor: pointer;
  gap: ${spacings.space8};
  border: ${borders.br2};
  border-radius: ${shapes.sm};
  flex-direction: ${({ iconPosition }) => (iconPosition === 'left' ? 'row-reverse' : 'row')};
  padding: ${({ size }) =>
    size === 'large'
      ? `${spacings.space12} ${spacings.space16}`
      : `${spacings.space8} ${spacings.space12}`};
  ${({ size }) => (size === 'small' ? FONT_BUTTON_SM : FONT_BUTTON_MD)}

  &:focus {
    outline: solid;
    outline-color: ${color.blue.main};
    outline-offset: 2px;
    outline-width: 2px;
  }

  &.croma-button-filled {
    border-color: ${color.navy.main};
    background-color: ${color.navy.main};
    color: ${color.neutral[50]};

    & > span {
      color: ${color.neutral[50]};
    }
    ${({ isPressed }) =>
      isPressed &&
      css`
        border-color: ${color.navy.dark};
        background-color: ${color.navy.dark};
        color: ${color.neutral[50]};
      `}

    &:hover {
      border-color: ${({ isPressed }) => !isPressed && color.navy.soft};
      background-color: ${({ isPressed }) => !isPressed && color.navy.soft};
      color: ${({ isPressed }) => !isPressed && color.neutral[50]};
    }

    &:disabled {
      cursor: not-allowed;
      outline: none;
      border-color: ${color.neutral[300]};
      background-color: ${color.neutral[300]};
      color: ${color.neutral[500]};
      & > span {
        color: ${color.neutral[500]};
      }
    }
  }

  &.croma-button-outlined {
    border-color: ${color.navy.main};
    background-color: transparent;
    color: ${color.navy.main};
    & > span {
      color: ${color.navy.main};
    }

    ${({ isPressed }) =>
      isPressed &&
      css`
        border-color: ${color.navy.dark};
        color: ${color.navy.dark};
      `}

    &:hover {
      border-color: ${({ isPressed }) => !isPressed && color.navy.soft};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${color.neutral[400]};
      color: ${color.neutral[400]};
      & > span {
        color: ${color.neutral[400]};
      }
      cursor: not-allowed;
    }
  }
  &.croma-button-text {
    border-color: transparent;
    background-color: transparent;
    & > span {
      color: ${color.neutral[900]};
    }
    ${({ isPressed }) =>
      isPressed &&
      css`
        background-color: ${color.neutral[200]};
      `}

    &:hover {
      background-color: ${({ isPressed }) => !isPressed && color.navy.extraSoft};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${color.neutral[400]};
      background-color: transparent;
      & > span {
        color: ${color.neutral[400]};
      }
    }
  }
  &.croma-button-light-filled {
    border-color: ${color.neutral[100]};
    background-color: ${color.neutral[100]};
    color: ${color.navy.main};

    & > span {
      color: ${color.navy.main};
    }
    ${({ isPressed }) =>
      isPressed &&
      css`
        border-color: ${color.navy.soft};
        background-color: ${color.navy.soft};
        color: ${color.neutral[50]};
      `}

    &:hover {
      border-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      background-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      color: ${({ isPressed }) => !isPressed && color.navy.soft};
    }

    &:disabled {
      cursor: not-allowed;
      outline: none;
      border-color: ${color.neutral[400]};
      background-color: ${color.neutral[400]};
      color: ${color.neutral[600]};
      & > span {
        color: ${color.neutral[600]};
      }
    }
  }

  &.croma-button-light-outlined {
    border-color: ${color.neutral[50]};
    background-color: transparent;
    color: ${color.neutral[50]};
    & > span {
      ${color.neutral[50]};
    }

    ${({ isPressed }) =>
      isPressed &&
      css`
        border-color: ${color.navy.soft};
        background-color: ${color.navy.extraSoft};
        color: ${color.navy.dark};
      `}

    &:hover {
      border-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      background-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      color: ${({ isPressed }) => !isPressed && color.navy.main};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: transparent;
      border-color: transparent;
      color: ${color.neutral[600]};
      & > span {
        color: ${color.neutral[600]};
      }
      cursor: not-allowed;
    }
  }
  &.croma-button-light-text {
    border-color: transparent;
    background-color: transparent;
    color: ${color.neutral[50]};
    & > span {
      ${color.neutral[50]};
    }

    ${({ isPressed }) =>
      isPressed &&
      css`
        border-color: ${color.navy.soft};
        background-color: ${color.navy.soft};
        color: ${color.neutral[50]};
      `}

    &:hover {
      border-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      background-color: ${({ isPressed }) => !isPressed && color.neutral[50]};
      color: ${({ isPressed }) => !isPressed && color.navy.main};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: transparent;

      border-color: ${color.neutral[600]};
      color: ${color.neutral[600]};
      & > span {
        color: ${color.neutral[600]};
      }
      cursor: not-allowed;
    }
  }
`

export const ButtonContainerStyled = styled.div`
  ${FLEX_CENTER}
  padding: ${spacings.space2}
`
