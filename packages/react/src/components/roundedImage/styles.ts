import styled, { css } from 'styled-components'
import { borders, color, typography } from '@cromaui/foundations'
import { getSize } from './utils'
import type { RoundedImagePropsTypes } from './types'
import { FONT_TYPE_SEMIBOLD } from '../../globals/globals'

export const RoundedImageContainerStyled = styled.div<RoundedImagePropsTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${borders.br1};
  border-color: ${color.navy.main};
  border-radius: 100px;
  background-color: ${color.navy.extraSoft};
  color: ${color.navy.main};
  height: ${(props: RoundedImagePropsTypes) => getSize(props.size)};
  width: ${(props: RoundedImagePropsTypes) => getSize(props.size)};
  text-align: center;
  overflow: hidden;

  & small {
    ${FONT_TYPE_SEMIBOLD}
    font-family: ${typography.body.sm.fontFamily};

    ${(props) =>
      props.size === 'extra-small' &&
      css`
        font-size: ${typography.body.sm.fontSize};
        line-height: 1.1em;
        letter-spacing: ${typography.body.sm.letterSpacing};
      `}

    ${(props) =>
      props.size === 'small' &&
      css`
    font-size: ${typography.body.md.fontSize};
    letter-spacing: ${typography.body.md.letterSpacing};
    line-height: letter-spacing: ${typography.body.md.lineHeight};
    `}

    ${(props) =>
      (props.size === 'medium' || props.size === 'large') &&
      css`
    font-size: ${typography.body.lg.fontSize};
    letter-spacing: ${typography.body.lg.letterSpacing};
    line-height: letter-spacing: ${typography.body.lg.lineHeight};
    `}
    
    ${(props) =>
      props.size === 'extra-large' &&
      css`
    font-size: ${typography.heading.sm.fontSize};
    letter-spacing: ${typography.heading.sm.letterSpacing};
    line-height: letter-spacing: ${typography.heading.sm.lineHeight};
    `}
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${color.neutral[200]};
      border-color: ${color.neutral[400]};
      color: ${color.neutral[400]};
      cursor: not-allowed;
    `}

  & > img {
    ${(props) =>
      props.disabled &&
      css`
        opacity: 50%;
        filter: grayscale(100%);
        cursor: not-allowed;
      `}
  }

  & > span {
    ${(props) =>
      props.disabled &&
      css`
        color: ${color.neutral[400]};
      `}
  }
`
