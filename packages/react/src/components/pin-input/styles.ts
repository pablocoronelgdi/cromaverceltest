import styled from 'styled-components'
import {
  FLEX_START,
  FLEX_BETWEEN_COLUMN,
  FLEX_COLUMN_START,
  FONT_HEADING_MD,
  FONT_BODY_SM,
  FONT_CAPTION,
  FONT_TYPE_SEMIBOLD,
  FONT_TYPE_REGULAR
} from '../../globals/globals'
import { color, borders, shapes, spacings } from '@cromaui/foundations'
import type { PinInputPropsTypes } from './types'

/* =============================================
=    ESTILOS DEL COMPONENTE PIN INPUT     =
============================================= */

export const StyledPinInput = styled.div<PinInputPropsTypes>`
  ${FLEX_COLUMN_START}

  .content-input {
    ${FLEX_START}
  }

  label {
    color: ${
      (props) =>
        props.disabled
        ? color.neutral[400]
        : props.error
        ? color.error.main
        : color.neutral[700]
    };

    p {
      ${FONT_CAPTION};
      ${FONT_TYPE_REGULAR};
      margin: 0;
      margin-left: ${spacings.space4}
    }
  }

  .title {
      ${FONT_BODY_SM};
      ${FONT_TYPE_REGULAR};
      margin: 0;
      margin-bottom: ${spacings.space4};
      color: ${
      (props) =>
        props.disabled
        ? color.neutral[400]
        : props.error
        ? color.error.main
        : color.neutral[700]
    };
  }

  input {
    ${FONT_HEADING_MD};
    ${FONT_TYPE_SEMIBOLD};
    width: 48px;
    height: 48px;
    margin-right: ${spacings.space8};
    background: ${(props) => (props.disabled ? color.neutral[200] : color.neutral[50])};
    color: ${(props) => (props.disabled ? color.neutral[400] : color.neutral[700])};
    border: ${
      (props) =>
        props.disabled
        ? borders.br1 + color.neutral[400]
        : props.error
        ? borders.br2 + color.error.main
        : borders.br1 + color.neutral[400]
    };
    border-radius: ${shapes.sm};
    gap: ${spacings.space8};
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
    text-align: center;

    &:last-child {
      margin-right: 0
    }

    &:hover {
      border: ${borders.br1} ${(props) => (props.disabled ? color.neutral[400] : color.neutral[700])};
    }
    &:focus {
      border: ${borders.br2} ${color.blue.soft};
    }
  }
`

export const StyledLabel = styled.div<PinInputPropsTypes>`
  width: 100%;
  ${FLEX_BETWEEN_COLUMN}
`

export const StyledLabelIcon = styled.div<PinInputPropsTypes>`
  ${FLEX_START}
  width: 100%;
  margin-top: ${spacings.space4};
`
