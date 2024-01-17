import { styled, css } from 'styled-components'
import {
  Spacings,
  Color,
  Shapes,
  Borders,
  Opacities
} from '@cromaui/foundations'
import type { SwitchInnerProps } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE SWITCH     =
============================================= */

/* ----------  Switch Container  (div) ---------- */

export const SwitchContainer = styled.div<SwitchInnerProps>`
  width: 60px;
  padding: ${Spacings.space2};
  border: ${Borders.br2};
  border-radius: ${Shapes.full};
  border-color: transparent;
  ${(props) =>
    props.isFocused &&
    css`
      border: ${Borders.br2};
      border-color: ${Color.Blue.main};
    `}

  /* ----------  Switch Area  ---------- */

  //El background del componente que contiene al input y al thumb.
  & label {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${Spacings.space32};
    padding-top: ${Spacings.space2};
    padding-bottom: ${Spacings.space2};
    padding-left: ${(props) =>
      props.isPressed ? Spacings.space2 : Spacings.space4};
    padding-right: ${(props) =>
      props.isPressed ? Spacings.space2 : Spacings.space4};
    background-color: ${(props) =>
      props.disabled
        ? Color.Neutral[300]
        : props.isChecked
        ? Color.Navy.main
        : Color.Neutral[300]};

    border: ${Borders.br2};
    border-radius: ${Shapes.full};
    border-color: ${(props) =>
      props.disabled
        ? Color.Neutral[300]
        : props.isChecked
        ? Color.Navy.main
        : Color.Neutral[600]};
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
        props.isChecked ? Spacings.space24 : Spacings.space16};
      height: ${(props) =>
        props.isChecked ? Spacings.space24 : Spacings.space16};
      background-color: ${(props) =>
        props.isChecked ? Color.Neutral[50] : Color.Neutral[600]};
      border-radius: ${Shapes.full};
      transform: translateX(${(props) => (props.isChecked ? '18px' : 0)});
      transition: all 0.4s ease;
      z-index: 1;

      // Disabled
      ${(props) =>
        props.disabled &&
        css`
          height: ${props.isChecked ? Spacings.space24 : Spacings.space16};
          width: ${props.isChecked ? Spacings.space24 : Spacings.space16};
          background-color: ${props.isChecked
            ? Color.Neutral[50]
            : Color.Neutral[400]};
          transform: translateX(${props.isChecked ? '18px' : 0});
        `}

      // Pressed
      ${(props) =>
        props.isPressed &&
        css`
          height: ${Spacings.space28};
          width: ${Spacings.space28};
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
              ? Color.Navy.soft + Opacities.opacity20
              : Color.Neutral[600] + Opacities.opacity20};
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
          props.isPressed ? Spacings.space28 : Spacings.space24};
        width: ${(props) =>
          props.isPressed ? Spacings.space28 : Spacings.space24};
        transition: all 0.4s ease;

        ${(props) =>
          props.disabled &&
          css`
            color: ${Color.Neutral[300]};
          `}
      }
    }
  }
`
