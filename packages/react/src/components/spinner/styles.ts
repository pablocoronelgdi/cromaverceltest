import styled, { keyframes } from 'styled-components'
import { color, shapes, spacings } from '@cromaui/foundations'
import { FLEX_CENTER, FONT_BODY_SM, FONT_TYPE_REGULAR } from '../../globals/globals'
import type { SpinnerPropTypes } from './types'

// @TODO: Definir e igualar (react y react native) animaciones y sus tiempos cuando hayan definiciones en el equipo de visuals
const rotateOuterDivWithOpacity = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 50%;
  }
  25% {
    transform: rotate(90deg);
    opacity: 50%;
  }
  50% {
    transform: rotate(180deg);
    opacity: 100%;
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const rotateOuterDiv = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const rotateInnedDiv = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 50%;
  }
  25% {
    transform: rotate(90deg);
    opacity: 50%;
  }
  50% {
    transform: rotate(180deg);
    opacity: 100%;
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const sizeCenterDiv = keyframes`
0% {
  height: 2.4px;
  width: 2.4px;
  opacity: 50%;
}
25% {
  height: 2.4px;
  width: 2.4px;
  opacity: 50%;
}
50% {
  height: ${spacings.space12};
  width: ${spacings.space12};
  opacity: 100%;
}
75% {
  height: ${spacings.space12};
  width: ${spacings.space12};
}
100% {
  height: ${spacings.space12};
  width: ${spacings.space12};
}
`

/* =============================================
=            ESTILOS DEL COMPONENTE SPINNER     =
============================================= */

/* ----------  Spinner Container  (div) ---------- */
export const StyledSpinnerContainer = styled.div<SpinnerPropTypes>`
  ${FLEX_CENTER}
  flex-direction:column;
  gap: ${({ $withLogo }) => ($withLogo ? spacings.space8 : spacings.space4)};
  padding: ${spacings.space2};
  width: min-content;

  /* ----------  Outer Spinner Ring  (div) ---------- */
  & > div {
    ${FLEX_CENTER}
    height: ${({ $withLogo, $size }) =>
      ($withLogo && $size === 'extra-small') ||
      ($withLogo && $size === 'small') ||
      ($withLogo && $size === 'medium')
        ? '45.6px'
        : $withLogo && $size === 'large'
        ? spacings.space80
        : !$withLogo && $size === 'extra-small'
        ? spacings.space16
        : !$withLogo && $size === 'small'
        ? spacings.space20
        : !$withLogo && $size === 'medium'
        ? spacings.space40
        : spacings.space64};
    width: ${({ $withLogo, $size }) =>
      ($withLogo && $size === 'extra-small') ||
      ($withLogo && $size === 'small') ||
      ($withLogo && $size === 'medium')
        ? '45.6px'
        : $withLogo && $size === 'large'
        ? spacings.space80
        : !$withLogo && $size === 'extra-small'
        ? spacings.space16
        : !$withLogo && $size === 'small'
        ? spacings.space20
        : !$withLogo && $size === 'medium'
        ? spacings.space40
        : spacings.space64};
    padding: ${({ $withLogo }) => ($withLogo ? spacings.space2 : 0)};
    border-style: solid;
    border-width: ${({ $withLogo, $size }) =>
      ($withLogo && $size === 'extra-small') ||
      ($withLogo && $size === 'small') ||
      ($withLogo && $size === 'medium')
        ? spacings.space6
        : $withLogo && $size === 'large'
        ? spacings.space12
        : (!$withLogo && $size === 'extra-small') || (!$withLogo && $size === 'small')
        ? spacings.space2
        : !$withLogo && $size === 'medium'
        ? spacings.space4
        : spacings.space8};
    border-color: transparent;
    border-radius: ${shapes.full};
    border-left-color: ${({ $variantColor, $withLogo }) =>
      $variantColor === 'light' && !$withLogo ? color.navy.extraSoft : color.navy.main};
    border-top-color: ${({ $variantColor, $withLogo }) =>
      $variantColor === 'light' && !$withLogo ? color.navy.extraSoft : color.navy.main};
    transform: rotate(0deg);
    animation: 1.8s ease-in-out infinite;
    animation-name: ${({ $withLogo }) => ($withLogo ? rotateOuterDivWithOpacity : rotateOuterDiv)};

    /* ----------  Inner Spinner Ring  (div) ---------- */
    & > div {
      ${FLEX_CENTER}
      border-style: solid;
      border-color: transparent;
      border-width: ${({ $size }) =>
        $size === 'extra-small' || $size === 'small' || $size === 'medium'
          ? spacings.space6
          : spacings.space12};
      border-radius: 100%;
      height: ${({ $size }) => ($size === 'large' ? spacings.space48 : '28.8px')};
      width: ${({ $size }) => ($size === 'large' ? spacings.space48 : '28.8px')};
      border-left-color: ${color.navy.soft};
      border-top-color: ${color.navy.soft};
      animation: ${rotateInnedDiv} 1.8s ease-in-out infinite;

      /* ----------  Center Spinner Circle  (div) ---------- */
      & > div {
        height: ${({ $size }) => ($size === 'large' ? spacings.space20 : spacings.space12)};
        width: ${({ $size }) => ($size === 'large' ? spacings.space20 : spacings.space12)};
        background-color: ${color.navy.main};
        border-radius: 100%;
        animation: ${sizeCenterDiv} 1.8s ease-in-out infinite;
      }
    }
  }
`
export const StyledSpinnerLabel = styled.span<SpinnerPropTypes>`
  ${FONT_BODY_SM}
  ${FONT_TYPE_REGULAR}
  color: ${({ $variantColor, $withLogo }) =>
    $variantColor === 'light' && !$withLogo ? color.neutral[50] : color.neutral[900]};
  text-align: center;
`
