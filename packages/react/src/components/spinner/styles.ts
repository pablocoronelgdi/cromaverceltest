import styled, { keyframes } from 'styled-components'
import { FLEX_CENTER } from '../../globals/globals'
import { color, shapes, spacings } from '@cromaui/foundations'
import type { SpinnerPropTypes } from './types'

/* =============================================
=                   KEYFRAMES                  =
============================================= */
const rotateOuterDiv = keyframes`
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
`
const rotateInnedDiv = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

/* =============================================
=            ESTILOS DEL COMPONENTE SPINNER     =
============================================= */

/* ----------  Spinner Container  (div) ---------- */
export const SpinnerContainerStyled = styled.div<SpinnerPropTypes>`
  ${FLEX_CENTER}
  flex-direction:column;
  gap: ${({ withLogo }) => (withLogo ? spacings.space8 : spacings.space4)};
  padding: ${spacings.space2};
  width: min-content;

  /* ----------  Outer Spinner Ring  (div) ---------- */
  & > div {
    ${FLEX_CENTER}
    width: ${({ withLogo }) =>
      withLogo ? spacings.space76 : spacings.space64};
    height: ${({ withLogo }) =>
      withLogo ? spacings.space76 : spacings.space64};
    padding: ${({ withLogo }) => (withLogo ? spacings.space2 : 0)};
    border-style: solid;
    border-width: ${({ withLogo }) =>
      withLogo ? spacings.space10 : spacings.space8};
    border-color: ${color.navy.extraSoft};
    border-radius: ${shapes.full};
    border-left-color: ${({ withLogo }) =>
      withLogo ? color.navy.main : color.navy.extraSoft};
    border-top-color: ${color.navy.main};
    transform: rotate(45deg);
    animation: ${rotateOuterDiv} 1s ease infinite;

    /* ----------  Inner Spinner Ring  (div) ---------- */
    & > div {
      ${FLEX_CENTER}
      border: solid 10px ${color.navy.extraSoft};
      border-radius: 50%;
      width: ${spacings.space48};
      height: ${spacings.space48};
      border-left-color: ${color.navy.soft};
      border-top-color: ${color.navy.soft};
      animation: ${rotateInnedDiv} 2s ease infinite;

      /* ----------  Center Spinner Circle  (div) ---------- */
      & > div {
        width: ${spacings.space20};
        height: ${spacings.space20};
        background-color: ${color.navy.main};
        border-radius: 50%;
        font-size: 12px;
      }
    }

    /* ----------  Spinner label  (div) ---------- */
    & > span {
      text-align: center;
      font-family: 'OpenSans';
    }
  }
`
