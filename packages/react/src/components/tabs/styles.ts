import styled from 'styled-components'
import { color, spacings, borders, shapes, elevations } from '@cromaui/foundations'
import {
  FONT_BODY_MD,
  FONT_BODY_SM,
  FONT_TYPE_SEMIBOLD,
  FONT_TYPE_REGULAR,
  FLEX_CENTER,
  FLEX_COLUMN_CENTER
} from '../../globals/globals'
import type { TabsItemProps, TabsProps } from './types'

/* =============================================
=                   TABS DEFAULT              =
============================================= */

export const StyledTabContainer = styled.ul<TabsItemProps>`
  background: ${color.neutral[50]};

  &.flex {
    ${FLEX_CENTER}
  }

  .slick-slide {
    display: flex;

    div {
      width: ${spacings.spaceFull};
      ${FLEX_CENTER}
    }
  }
  div {
    width: ${spacings.spaceFull};
  }
  .slick-arrow.slick-prev {
    left: 0;
    background: ${color.neutral[50]};
    height: ${spacings.spaceFull};
    z-index: 2;
    ${FLEX_CENTER}

    span {
      color: ${color.navy.main};
    }
  }
  .slick-arrow.slick-next {
    right: 0;
    z-index: 2;
    background: ${color.neutral[50]};
    height: ${spacings.spaceFull};
    ${FLEX_CENTER}

    span {
      color: ${color.navy.main};
    }
  }
  .slick-arrow.slick-next:before,
  .slick-arrow.slick-prev:before {
    content: '';
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    opacity: 0;
  }
`
export const Tab = styled.button<TabsItemProps>`
  background: ${({ $active }) => ($active ? color.neutral[200] : color.neutral[50])};
  width: ${spacings.spaceFull};
  text-align: center;
  cursor: pointer;
  padding: ${spacings.space8} ${spacings.space16};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${({ $active }) =>
    $active ? borders.br2 + color.blue.main : borders.br2 + color.neutral[400]};
  border-radius: ${shapes.sm} ${shapes.sm} 0 0;

  &:hover {
    background: ${color.blue.extraSoft};
  }

  small {
    color: ${({ $active }) => ($active ? color.neutral[900] : color.neutral[700])};
    ${({ $active }) => ($active ? FONT_BODY_MD : FONT_BODY_SM)};
    ${({ $active }) => ($active ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
    margin: 0 ${spacings.space4};
  }

  span {
    color: ${({ $active }) => ($active ? color.neutral[900] : color.neutral[700])};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    color: ${({ $active }) => ($active ? color.neutral[900] : color.neutral[700])};
    background: ${({ $active }) => ($active ? color.neutral[50] : color.neutral[200])};
    border: ${({ $active, $focused }) =>
      $focused || $active ? borders.br2 + color.blue.main : borders.br1 + ' none'};
    box-sizing: border-box;
  }
`
export const Flex = styled.div<TabsProps>`
  ${({ $vertical }) => ($vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};
`
/* ====================== FIN ======================= */

/* =============================================
=                   TABS SEGMENTED              =
============================================= */

export const StyledTabContainerSegmented = styled.ul<TabsItemProps>`
  background: ${color.neutral[200]};
  border-radius: ${shapes.full};
  padding: ${spacings.space2};
  position: relative;

  &.flex {
    ${FLEX_CENTER}
  }
`
export const FlexList = styled.li<TabsProps>`
  width: ${spacings.spaceFull};
  ${({ $vertical }) => ($vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};
`
export const StyledTabSegmented = styled.div<TabsProps>`
  width: ${spacings.spaceFull};
  text-align: center;
  cursor: pointer;
  background: ${({ $active }) => ($active ? color.neutral[50] : 'transparent')};
  padding: ${spacings.space8} ${spacings.space16};
  border-radius: ${shapes.full};
  box-shadow: ${({ $active }) => $active && elevations.level1};
  &:hover {
    background: ${color.blue.extraSoft};
    border-radius: ${shapes.full};
  }
`
export const FlexSegmented = styled.div<TabsProps>`
  ${({ $vertical }) => ($vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};

  span {
    width: ${spacings.spaceFull};
  }
`
export const StyledFocoSegmented = styled.div<TabsItemProps>`
  width: ${spacings.spaceFull};
  border: ${({ $focused }) =>
    $focused ? borders.br2 + color.blue.main : borders.br2 + ' transparent'};
  padding: ${spacings.space2};
  border-radius: ${shapes.full};
  box-sizing: border-box;

  span {
    color: ${({ $active }) => ($active ? color.navy.main : color.neutral[700])};
    ${({ $active }) => ($active ? FONT_BODY_MD : FONT_BODY_SM)};
    ${({ $active }) => ($active ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
    margin: 0 ${spacings.space4};
  }
`
export const TabContent = styled.div<TabsItemProps>`
  margin-top: ${spacings.space20};
`
export const Divider = styled.div<TabsItemProps>`
  width: ${spacings.space1};
  height: ${spacings.space20};
  background: ${color.neutral[400]};
  margin: 0 ${spacings.space10};
  visibility: ${({ $hide }) => ($hide ? 'hidden' : 'visible')};
`
/* ====================== FIN ======================= */
