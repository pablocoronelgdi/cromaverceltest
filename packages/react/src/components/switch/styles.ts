import { styled, css } from 'styled-components'
import { spacings, color, shapes, borders, opacities } from '@cromaui/foundations'
import type { SwitchInnerProps } from './types'

/* =============================================
=            ESTILOS DEL COMPONENTE SWITCH     =
============================================= */

/* ----------  Switch Container  (div) ---------- */

export const SwitchContainer = styled.div<SwitchInnerProps>`
  min-width: ${spacings.space60};
  padding: ${spacings.space2};
  border: ${borders.br2};
  border-radius: ${shapes.full};
  border-color: transparent;

  &:focus &:focus-visible,
  &:focus-within {
    border: ${borders.br2};
    border-color: ${({ disabled }) => (disabled ? color.neutral[0] : color.blue.main)};
  }

  /* ----------  Switch Area  ---------- */

  //El background del componente que contiene al input y al thumb.
  & label {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${spacings.space32};
    padding-top: ${spacings.space2};
    padding-bottom: ${spacings.space2};
    padding-left: ${({ $isPressed }) => ($isPressed ? spacings.space2 : spacings.space4)};
    padding-right: ${({ $isPressed }) => ($isPressed ? spacings.space2 : spacings.space4)};
    background-color: ${({ disabled, $isChecked }) =>
      disabled ? color.neutral[300] : $isChecked ? color.navy.main : color.neutral[300]};
    border: ${borders.br2};
    border-radius: ${shapes.full};
    border-color: ${({ disabled, $isChecked }) =>
      disabled ? color.neutral[300] : $isChecked ? color.navy.main : color.neutral[600]};
    transition: all 0.4s ease;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

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
      width: ${({ $isChecked }) => ($isChecked ? spacings.space24 : spacings.space16)};
      height: ${({ $isChecked }) => ($isChecked ? spacings.space24 : spacings.space16)};
      background-color: ${({ $isChecked }) =>
        $isChecked ? color.neutral[50] : color.neutral[600]};
      border-radius: ${shapes.full};
      transform: translateX(${({ $isChecked }) => ($isChecked ? '18px' : 0)});
      transition: all 0.4s ease;
      z-index: 1;

      // Disabled
      ${({ disabled, $isChecked }) =>
        disabled &&
        css`
          height: ${$isChecked ? spacings.space24 : spacings.space16};
          width: ${$isChecked ? spacings.space24 : spacings.space16};
          background-color: ${$isChecked ? color.neutral[50] : color.neutral[400]};
          transform: translateX(${$isChecked ? '18px' : 0});
        `}

      // Pressed
      ${({ $isChecked, $isPressed }) =>
        $isPressed &&
        css`
          height: ${spacings.space28};
          width: ${spacings.space28};
          transform: translateX(${$isChecked ? '18px' : '-4px'});
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
          background-color: ${({ disabled, $isChecked }) =>
            disabled
              ? color.neutral[0]
              : $isChecked
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
        height: ${({ $isPressed }) => ($isPressed ? spacings.space28 : spacings.space24)};
        width: ${({ $isPressed }) => ($isPressed ? spacings.space28 : spacings.space24)};
        transition: all 0.4s ease;

        ${({ disabled }) =>
          disabled &&
          css`
            color: ${color.neutral[300]};
          `}
      }
    }
  }
`
