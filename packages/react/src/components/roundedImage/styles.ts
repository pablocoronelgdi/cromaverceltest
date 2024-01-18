import styled, { css } from 'styled-components'
import { borders, color, typography } from '@cromaui/foundations'
import { getSize } from './utils'
import type { RoundedImagePropsTypes } from './types'

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
    font-family: ${typography.body.sm.semibold.fontFamily};
    font-weight: ${typography.body.sm.semibold.fontWeight};

    ${(props) =>
      props.size === 'extra-small' &&
      css`
        font-size: ${typography.body.sm.semibold.fontSize};
        line-height: 1.1em;
        letter-spacing: ${typography.body.sm.semibold.letterSpacing};
      `}

    ${(props) =>
      props.size === 'small' &&
      css`
    font-size: ${typography.body.md.semibold.fontSize};
    letter-spacing: ${typography.body.md.semibold.letterSpacing};
    line-height: letter-spacing: ${typography.body.md.semibold.lineHeight};
    `}

    ${(props) =>
      (props.size === 'medium' || props.size === 'large') &&
      css`
    font-size: ${typography.body.lg.semibold.fontSize};
    letter-spacing: ${typography.body.lg.semibold.letterSpacing};
    line-height: letter-spacing: ${typography.body.lg.semibold.lineHeight};
    `}
    
    ${(props) =>
      props.size === 'extra-large' &&
      css`
    font-size: ${typography.heading.sm.semibold.fontSize};
    letter-spacing: ${typography.heading.sm.semibold.letterSpacing};
    line-height: letter-spacing: ${typography.heading.sm.semibold.lineHeight};
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
