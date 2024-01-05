import styled, { css } from "styled-components";
import { RoundedImageProps } from "./types";
import { Borders, Color, Typography } from "@cromaui/foundations";
import { getSize } from "./RoundedImage";

export const RoundedImageContainerStyled = styled.div<RoundedImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${Borders.br1};
  border-color: ${Color.Navy.main};
  border-radius: 100px;
  background-color: ${Color.Navy.extraSoft};
  color: ${Color.Navy.main};
  height: ${(props) => getSize(props.size)};
  width: ${(props) => getSize(props.size)};
  text-align: center;
  overflow: hidden;

& small {
    font-family: ${Typography.body.sm.semibold.fontFamily};
    font-weight: ${Typography.body.sm.semibold.fontWeight};

    ${(props) =>
    props.size === "extra-small" &&
    css`
    font-size: ${Typography.body.sm.semibold.fontSize};
    line-height: 1.1em;
    letter-spacing: ${Typography.body.sm.semibold.letterSpacing};
    `}

    ${(props) =>
    props.size === "small" &&
    css`
    font-size: ${Typography.body.md.semibold.fontSize};
    letter-spacing: ${Typography.body.md.semibold.letterSpacing};
    line-height: letter-spacing: ${Typography.body.md.semibold.lineHeight};
    `}

    ${(props) =>
    (props.size === "medium" || props.size === "large") &&
    css`
    font-size: ${Typography.body.lg.semibold.fontSize};
    letter-spacing: ${Typography.body.lg.semibold.letterSpacing};
    line-height: letter-spacing: ${Typography.body.lg.semibold.lineHeight};
    `}
    
    ${(props) =>
    props.size === "extra-large" &&
    css`
    font-size: ${Typography.heading.sm.semibold.fontSize};
    letter-spacing: ${Typography.heading.sm.semibold.letterSpacing};
    line-height: letter-spacing: ${Typography.heading.sm.semibold.lineHeight};
    `}
  }

  ${(props) =>
    props.disabled &&
    css`
    background-color: ${Color.Neutral[200]};
    border-color: ${Color.Neutral[400]};
    color: ${Color.Neutral[400]};
    cursor: not-allowed;
  `}

  & > img {
    ${(props) =>
    props.disabled &&
    css`
      opacity: 50%;
      filter: grayscale(100%);
      cursor: not-allowed;
    `}
  }

  & > span {
    ${(props) =>
    props.disabled &&
    css`
      color: ${Color.Neutral[400]};
    `}
  }
`;
