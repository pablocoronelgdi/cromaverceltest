import styled, { css } from 'styled-components'
import { FLEX_CENTER } from '../../globals/globals'
import { borders, color, spacings, typography } from '@cromaui/foundations'
import type { BadgePropsTypes } from './types'

export const BadgeContainerStyled = styled.div<BadgePropsTypes>`
  ${FLEX_CENTER}
  border-radius: 100px;
  outline: ${(props) => !props.text && borders.br2};
  outline-color: ${(props) =>
    props.backgroundType === 'light' ? color.neutral[50] : color.navy.main};
  gap: ${(props) =>
    props.size === 'large' && !!props.iconName
      ? spacings.space4
      : spacings.space2};
  overflow: hidden;
  text-align: center;
  width: fit-content;
  max-width: 142px;

  & small {
    font-family: ${typography.body.sm.semibold.fontFamily};
    font-weight: ${typography.body.sm.semibold.fontWeight};

    ${(props) =>
      (props.size === 'small' || props.size === 'medium') &&
      (props.text || props.count) &&
      css`
        font-size: ${typography.caption.semibold.fontSize};
        line-height: 1.1em;
        letter-spacing: ${typography.caption.semibold.letterSpacing};
      `}

    ${(props) =>
      props.size === 'large' &&
      (props.text || props.count) &&
      css`
        font-size: ${typography.body.sm.semibold.fontSize};
        line-height: ${typography.body.sm.semibold.lineHeight};
        letter-spacing: ${typography.body.sm.semibold.letterSpacing};
      `}
  }

  ${(props) =>
    props.text &&
    css`
      padding-top: ${props.size === 'small'
        ? '1px'
        : props.size === 'medium'
        ? '2px'
        : '0'};
      padding-bottom: ${props.size === 'small'
        ? '1px'
        : props.size === 'medium'
        ? '2px'
        : '0'};
      padding-left: ${props.size === 'small' || props.size === 'medium'
        ? props.iconName
          ? spacings.space4
          : spacings.space6
        : props.iconName
        ? spacings.space6
        : spacings.space8};
      padding-right: ${props.size === 'large'
        ? spacings.space8
        : spacings.space6};
      width: max-content;
      white-space: nowrap;
      justify-content: start;
    `}

  ${(props) =>
    props.color === 'pink' &&
    css`
      background-color: ${color.pink.main};
      color: ${color.neutral[900]};
    `}

  ${(props) =>
    props.color === 'blue' &&
    css`
      background-color: ${color.Info.main};
      color: ${color.neutral[50]};
    `}

  ${(props) =>
    props.color === 'green' &&
    css`
      background-color: ${color.success[700]};
      color: ${color.neutral[50]};
    `}

  ${(props) =>
    props.size === 'small' &&
    !props.text &&
    !props.count &&
    css`
      height: ${spacings.space6};
      width: ${spacings.space6};
    `}

  ${(props) =>
    props.size === 'medium' &&
    !props.text &&
    !props.count &&
    css`
      height: ${spacings.space8};
      width: ${spacings.space8};
    `}

  ${(props) =>
    props.size === 'large' &&
    !props.text &&
    !props.count &&
    css`
      height: ${spacings.space10};
      width: ${spacings.space10};
    `}
    
  ${(props) =>
    props.size === 'small' &&
    props.count &&
    css`
      height: ${spacings.space16};
      min-width: ${spacings.space16};
      width: fit-content;
      max-width: 142px;
      padding-left: ${spacings.space4};
      padding-right: ${spacings.space4};
    `}

  ${(props) =>
    props.size === 'medium' &&
    props.count &&
    css`
      height: ${spacings.space20};
      min-width: ${spacings.space20};
      width: fit-content;
      padding-left: ${spacings.space6};
      padding-right: ${spacings.space6};
    `}

  ${(props) =>
    props.size === 'large' &&
    props.count &&
    css`
      height: ${spacings.space24};
      min-width: ${spacings.space24};
      width: fit-content;
      padding-left: ${spacings.space8};
      padding-right: ${spacings.space8};
    `}

  ${(props) =>
    props.size === 'small' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${spacings.space16};
      width: ${spacings.space16};
    `}

  ${(props) =>
    props.size === 'medium' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${spacings.space20};
      width: ${spacings.space20};
    `}

  ${(props) =>
    props.size === 'large' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${spacings.space24};
      width: ${spacings.space24};
    `}
  
  & > span {
    ${(props) =>
      props.color === 'pink' &&
      css`
        background-color: ${color.pink.main};
        color: ${color.neutral[900]};
      `}

    ${(props) =>
      props.color === 'blue' &&
      css`
        background-color: ${color.Info.main};
        color: ${color.neutral[50]};
      `}

    ${(props) =>
      props.color === 'green' &&
      css`
        background-color: ${color.success[700]};
        color: ${color.neutral[50]};
      `}
  }
`
