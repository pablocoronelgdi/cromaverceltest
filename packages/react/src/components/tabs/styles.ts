import styled from 'styled-components'
import {
  color,
  spacings,
  borders,
  shapes
} from '@cromaui/foundations'
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

export const StyledTabContainer = styled.div<TabsItemProps>`
  background: ${color.neutral[50]};

  &.flex {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    display: flex;

    div {
      width: 100%;
      ${FLEX_CENTER}
    }
  }
  div {
      width: 100%;
  }
  .slick-arrow.slick-prev {
    left: 0;
    background: ${color.neutral[50]};
    height: 100%;
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
    height: 100%;
    ${FLEX_CENTER}

    span {
      color: ${color.navy.main};
    }
  }
  .slick-arrow.slick-next:before, .slick-arrow.slick-prev:before {
    content: ''
  }
  .slick-prev.slick-disabled, .slick-next.slick-disabled {
    opacity: 0;
  }
`
export const Tab = styled.div<TabsItemProps>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: ${spacings.space8} ${spacings.space16};
  border-bottom: ${(props) => (props.active ? borders.br2 + color.blue.main : borders.br2 + color.neutral[400])};
  border-radius: ${(props) => (props.active ? `${shapes.sm} ${shapes.sm} 0 0` : 0)};

  &:hover {
    background: ${color.blue.extraSoft};
   }

  span.label {
    color: ${(props) => (props.active ? color.blue.main : color.neutral[700])};
    ${(props) => (props.active ? FONT_BODY_MD : FONT_BODY_SM)};
    ${(props) => (props.active ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
    margin: 0 ${spacings.space4}
  }
`
export const StyledFoco = styled.div<TabsItemProps>`
    background: ${(props) => (props.active ? color.neutral[50] : color.neutral[200])};
    border: ${(props) => (props.focused ? borders.br2 + color.blue.main : borders.br2 + ' none')};
    box-sizing: border-box;
`
export const Flex = styled.div<TabsProps>`
   ${(props) => (props.vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};
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
  div {
    width: 100%;
  }
`
export const FlexList = styled.li<TabsProps>`
  width: 100%;
  ${(props) => (props.vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};
`
export const StyledTabSegmented = styled.div<TabsProps>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  background: ${(props) => (props.active ? color.neutral[50] : 'transparent')};
  padding: ${spacings.space8} ${spacings.space16};
  border-radius: ${shapes.full};
  box-shadow: ${(props) => (props.active ? '0px 2px 4px 0px #4447484D' : '')};

  &:hover {
    background: ${color.blue.extraSoft};
    border-radius: ${shapes.full};
  }
`
export const FlexSegmented = styled.div<TabsProps>`
   ${(props) => (props.vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};

   span {
    width: 100%;
   }
`
export const StyledFocoSegmented = styled.div<TabsItemProps>`
    border: ${(props) => (props.focused ? borders.br2 + color.blue.main : borders.br2 + ' transparent')};
    padding: ${spacings.space2};
    border-radius: ${shapes.full};
    box-sizing: border-box;

  span {
    color: ${(props) => (props.active ? color.navy.main : color.neutral[700])};
    ${(props) => (props.active ? FONT_BODY_MD : FONT_BODY_SM)};
    ${(props) => (props.active ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
    margin: 0 ${spacings.space4};
  }
`
export const TabContent = styled.div<TabsItemProps>`
   margin-top: ${spacings.space20};
`
export const Divider = styled.div<TabsItemProps>`
  width: 1px;
  height: 20px;
  background: ${color.neutral[400]};
  margin: 0 ${spacings.space10};
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`
/* ====================== FIN ======================= */
