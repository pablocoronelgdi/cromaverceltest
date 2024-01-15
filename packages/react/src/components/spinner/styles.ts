import styled, { keyframes } from "styled-components";
import { SpinnerPropTypes } from "./types";
import { FlexBoxCenter } from "../../globals/globals";
import { Color, Shapes, Spacings } from "@cromaui/foundations";

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
`;
const rotateInnedDiv = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* =============================================
=            ESTILOS DEL COMPONENTE SPINNER     =
============================================= */

/* ----------  Spinner Container  (div) ---------- */
export const SpinnerContainerStyled = styled.div<SpinnerPropTypes>`
  ${FlexBoxCenter}
  flex-direction:column;
  gap: ${({ withLogo }) => (withLogo ? Spacings.space8 : Spacings.space4)};
  padding: ${Spacings.space2};
  width: min-content;

  /* ----------  Outer Spinner Ring  (div) ---------- */
  & > div {
    ${FlexBoxCenter}
    width: ${({ withLogo }) =>
      withLogo ? Spacings.space76 : Spacings.space64};
    height: ${({ withLogo }) =>
      withLogo ? Spacings.space76 : Spacings.space64};
    padding: ${({ withLogo }) => (withLogo ? Spacings.space2 : 0)};
    border-style: solid;
    border-width: ${({ withLogo }) => (withLogo ? "10px" : Spacings.space8)};
    border-color: ${Color.Navy.extraSoft};
    border-radius: ${Shapes.full};
    border-left-color: ${({ withLogo }) =>
      withLogo ? Color.Navy.main : Color.Navy.extraSoft};
    border-top-color: ${Color.Navy.main};
    transform: rotate(45deg);
    animation: ${rotateOuterDiv} 1s ease infinite;

    /* ----------  Inner Spinner Ring  (div) ---------- */
    & > div {
      ${FlexBoxCenter}
      border: solid 10px ${Color.Navy.extraSoft};
      border-radius: 50%;
      width: ${Spacings.space48};
      height: ${Spacings.space48};
      border-left-color: ${Color.Navy.soft};
      border-top-color: ${Color.Navy.soft};
      animation: ${rotateInnedDiv} 2s ease infinite;

      /* ----------  Center Spinner Circle  (div) ---------- */
      & > div {
        width: ${Spacings.space20};
        height: ${Spacings.space20};
        background-color: ${Color.Navy.main};
        border-radius: 50%;
        font-size: 12px;
      }
    }

    /* ----------  Spinner label  (div) ---------- */
    & > span {
      text-align: center;
      font-family: "OpenSans";
    }
  }
`;
