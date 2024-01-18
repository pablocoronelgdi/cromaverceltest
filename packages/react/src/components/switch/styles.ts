import { styled, css } from 'styled-components'
import {
  spacings,
  color,
  shapes,
  borders,
  opacities
} from '@cromaui/foundations'
import type { SwitchInnerProps } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE SWITCH     =
============================================= */

/* ----------  Switch Container  (div) ---------- */

export const SwitchContainer = styled.div<SwitchInnerProps>`
  width: 60px;
  padding: ${spacings.space2};
  border: ${borders.br2};
  border-radius: ${shapes.full};
  border-color: transparent;
  ${(props) =>
    props.isFocused &&
    css`
      border: ${borders.br2};
      border-color: ${color.blue.main};
    `}

  /* ----------  Switch Area  ---------- */

  //El background del componente que contiene al input y al thumb.
  & label {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${spacings.space32};
    padding-top: ${spacings.space2};
    padding-bottom: ${spacings.space2};
    padding-left: ${(props) =>
      props.isPressed ? spacings.space2 : spacings.space4};
    padding-right: ${(props) =>
      props.isPressed ? spacings.space2 : spacings.space4};
    background-color: ${(props) =>
      props.disabled
        ? color.neutral[300]
        : props.isChecked
        ? color.navy.main
        : color.neutral[300]};

    border: ${borders.br2};
    border-radius: ${shapes.full};
    border-color: ${(props) =>
      props.disabled
        ? color.neutral[300]
        : props.isChecked
        ? color.navy.main
        : color.neutral[600]};
    transition: all 0.4s ease;
    cursor: pointer;

    /* ----------  Switch Input ---------- */
    // Input no oculto de opacidad 0 para el manejo de eventos
    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* ----------  Switch Thumb ---------- */
    // La bolita trasladable del switch que contiene el icono.

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${(props) =>
        props.isChecked ? spacings.space24 : spacings.space16};
      height: ${(props) =>
        props.isChecked ? spacings.space24 : spacings.space16};
      background-color: ${(props) =>
        props.isChecked ? color.neutral[50] : color.neutral[600]};
      border-radius: ${shapes.full};
      transform: translateX(${(props) => (props.isChecked ? '18px' : 0)});
      transition: all 0.4s ease;
      z-index: 1;

      // Disabled
      ${(props) =>
        props.disabled &&
        css`
          height: ${props.isChecked ? spacings.space24 : spacings.space16};
          width: ${props.isChecked ? spacings.space24 : spacings.space16};
          background-color: ${props.isChecked
            ? color.neutral[50]
            : color.neutral[400]};
          transform: translateX(${props.isChecked ? '18px' : 0});
        `}

      // Pressed
      ${(props) =>
        props.isPressed &&
        css`
          height: ${spacings.space28};
          width: ${spacings.space28};
          transform: translateX(${props.isChecked ? '18px' : '-4px'});
        `}

      /* ---------- Thumb Aura ---------- */
    // Aura del hover del thumb.

      &::before {
        content: '';
        position: absolute;
        height: 40px;
        width: 40px;
        border-radius: inherit;
        z-index: -1;
      }
      &:hover {
        &::before {
          background-color: ${(props) =>
            props.isChecked
              ? color.navy.soft + opacities.opacity20
              : color.neutral[600] + opacities.opacity20};
        }
      }

      /* ---------- Thumb Icon ---------- */
      // Icono del thumb.

      & span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit;
        border-radius: inherit;
        height: ${(props) =>
          props.isPressed ? spacings.space28 : spacings.space24};
        width: ${(props) =>
          props.isPressed ? spacings.space28 : spacings.space24};
        transition: all 0.4s ease;

        ${(props) =>
          props.disabled &&
          css`
            color: ${color.neutral[300]};
          `}
      }
    }
  }
`
