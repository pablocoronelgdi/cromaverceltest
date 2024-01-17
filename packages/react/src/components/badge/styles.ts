import styled, { css } from 'styled-components'
import { FlexBoxCenter } from '../../globals/globals'
import { Borders, Color, Spacings, Typography } from '@cromaui/foundations'
import type { BadgePropsTypes } from './types'

export const BadgeContainerStyled = styled.div<BadgePropsTypes>`
  ${FlexBoxCenter}
  border-radius: 100px;
  outline: ${(props) => !props.text && Borders.br2};
  outline-color: ${(props) =>
    props.backgroundType === 'light' ? Color.Neutral[50] : Color.Navy.main};
  gap: ${(props) =>
    props.size === 'large' && !!props.iconName
      ? Spacings.space4
      : Spacings.space2};
  overflow: hidden;
  text-align: center;
  width: fit-content;
  max-width: 142px;

  & small {
    font-family: ${Typography.body.sm.semibold.fontFamily};
    font-weight: ${Typography.body.sm.semibold.fontWeight};

    ${(props) =>
      (props.size === 'small' || props.size === 'medium') &&
      (props.text || props.count) &&
      css`
        font-size: ${Typography.caption.semibold.fontSize};
        line-height: 1.1em;
        letter-spacing: ${Typography.caption.semibold.letterSpacing};
      `}

    ${(props) =>
      props.size === 'large' &&
      (props.text || props.count) &&
      css`
        font-size: ${Typography.body.sm.semibold.fontSize};
        line-height: ${Typography.body.sm.semibold.lineHeight};
        letter-spacing: ${Typography.body.sm.semibold.letterSpacing};
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
          ? Spacings.space4
          : Spacings.space6
        : props.iconName
        ? Spacings.space6
        : Spacings.space8};
      padding-right: ${props.size === 'large'
        ? Spacings.space8
        : Spacings.space6};
      width: max-content;
      white-space: nowrap;
      justify-content: start;
    `}

  ${(props) =>
    props.color === 'pink' &&
    css`
      background-color: ${Color.Pink.main};
      color: ${Color.Neutral[900]};
    `}

  ${(props) =>
    props.color === 'blue' &&
    css`
      background-color: ${Color.Info.main};
      color: ${Color.Neutral[50]};
    `}

  ${(props) =>
    props.color === 'green' &&
    css`
      background-color: ${Color.Success[700]};
      color: ${Color.Neutral[50]};
    `}

  ${(props) =>
    props.size === 'small' &&
    !props.text &&
    !props.count &&
    css`
      height: ${Spacings.space6};
      width: ${Spacings.space6};
    `}

  ${(props) =>
    props.size === 'medium' &&
    !props.text &&
    !props.count &&
    css`
      height: ${Spacings.space8};
      width: ${Spacings.space8};
    `}

  ${(props) =>
    props.size === 'large' &&
    !props.text &&
    !props.count &&
    css`
      height: ${Spacings.space10};
      width: ${Spacings.space10};
    `}
    
  ${(props) =>
    props.size === 'small' &&
    props.count &&
    css`
      height: ${Spacings.space16};
      min-width: ${Spacings.space16};
      width: fit-content;
      max-width: 142px;
      padding-left: ${Spacings.space4};
      padding-right: ${Spacings.space4};
    `}

  ${(props) =>
    props.size === 'medium' &&
    props.count &&
    css`
      height: ${Spacings.space20};
      min-width: ${Spacings.space20};
      width: fit-content;
      padding-left: ${Spacings.space6};
      padding-right: ${Spacings.space6};
    `}

  ${(props) =>
    props.size === 'large' &&
    props.count &&
    css`
      height: ${Spacings.space24};
      min-width: ${Spacings.space24};
      width: fit-content;
      padding-left: ${Spacings.space8};
      padding-right: ${Spacings.space8};
    `}

  ${(props) =>
    props.size === 'small' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${Spacings.space16};
      width: ${Spacings.space16};
    `}

  ${(props) =>
    props.size === 'medium' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${Spacings.space20};
      width: ${Spacings.space20};
    `}

  ${(props) =>
    props.size === 'large' &&
    props.iconName &&
    !props.text &&
    css`
      height: ${Spacings.space24};
      width: ${Spacings.space24};
    `}
  
  & > span {
    ${(props) =>
      props.color === 'pink' &&
      css`
        background-color: ${Color.Pink.main};
        color: ${Color.Neutral[900]};
      `}

    ${(props) =>
      props.color === 'blue' &&
      css`
        background-color: ${Color.Info.main};
        color: ${Color.Neutral[50]};
      `}

    ${(props) =>
      props.color === 'green' &&
      css`
        background-color: ${Color.Success[700]};
        color: ${Color.Neutral[50]};
      `}
  }
`
