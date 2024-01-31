import styled from 'styled-components'
import {
  elevations,
  color,
  spacings,
  typography,
  shapes,
  borders
} from '@cromaui/foundations'
import type { StyledTextAreaProps } from './types'
import { FONT_TYPE_REGULAR } from '../../globals/globals'

export const StyledContent = styled.div<StyledTextAreaProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${typography.body.sm.fontFamily};
  ${FONT_TYPE_REGULAR}

  & p {
    margin-bottom: ${spacings.space8};
    font-size: ${typography.body.sm.fontSize};
  }

  & label {
    display: flex;
    justify-content: space-between;
    color: ${(props) =>
      props.error
        ? color.error.main
        : color.neutral[800] && props.disabled
        ? color.neutral[400]
        : color.neutral[800]};
    margin-top: ${spacings.space8};
    font-size: ${typography.caption.fontSize};
    ${FONT_TYPE_REGULAR}
    line-height: ${typography.caption.lineHeight};

    & span {
      margin-right: ${spacings.space8};
    }

    & p {
      margin: 0;
      max-width: 300px;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`

export const StyledLabel = styled.div<StyledTextAreaProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledLabelIcon = styled.div<StyledTextAreaProps>`
  width: 100%;
  display: flex;
  align-items: center;
`

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  width: 100%;
  min-height: 120px;
  background-color: ${color.neutral[50]};
  color: ${(props) => (props.text ? color.neutral[800] : color.neutral[500])};
  padding: ${spacings.space12};
  border-radius: ${shapes.sm};
  border: ${(props) =>
    props.error
      ? borders.br2 + color.error.main
      : borders.br1 + color.neutral[400]};
  ${FONT_TYPE_REGULAR}
  font-size: ${typography.body.sm.fontSize};
  box-sizing: border-box;

  &:hover {
    border: ${borders.br1} ${color.neutral[800]};
    box-shadow: ${elevations.level2};
  }

  &:focus {
    border: ${borders.br1} solid ${color.blue.main};
    color: ${color.neutral[700]};
    box-shadow: ${elevations.level2};
  }

  &:disabled {
    border: ${borders.br1} solid ${color.neutral[400]};
    background-color: ${color.neutral[200]};
    cursor: no-drop;

    &:hover {
      box-shadow: none;
      border: ${borders.br1} ${color.neutral[400]};
    }
  }
`
