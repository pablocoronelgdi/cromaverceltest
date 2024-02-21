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

export const TabContainer = styled.div<TabsItemProps>`
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
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${color.navy.main};
    }
  }
  .slick-arrow.slick-next {
    right: 0;
    z-index: 2;
    background: ${color.neutral[50]};
    height: 100%;
    display: flex!important;
    justify-content: center;
    align-items: center;

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
  background: ${(props) => (props.active ? color.neutral[200] : color.neutral[50])};
  padding: ${spacings.space8} ${spacings.space16};
  border-bottom: ${(props) => (props.active ? borders.br2 + color.blue.main : borders.br2 + color.neutral[400])};
  border-radius: ${(props) => (props.active ? `${shapes.sm} ${shapes.sm} 0 0` : 0)};

  &:hover {
    background: ${color.blue.extraSoft};
   }

  span.label {
    color: ${(props) => (props.active ? color.neutral[900] : color.neutral[700])};
    ${(props) => (props.active ? FONT_BODY_MD : FONT_BODY_SM)};
    ${(props) => (props.active ? FONT_TYPE_SEMIBOLD : FONT_TYPE_REGULAR)};
    margin: 0 ${spacings.space4}
  }
`
export const TabContent = styled.div<TabsItemProps>`
   margin-top: ${spacings.space20};
`
export const Foco = styled.div<TabsItemProps>`
    border: ${(props) => (props.focused ? borders.br2 + color.blue.main : 'none')};
    padding: ${(props) => (props.focused ? '1px' : '0')};
    box-sizing: border-box;
`
export const Flex = styled.div<TabsProps>`

   ${(props) => (props.vertical ? FLEX_COLUMN_CENTER : FLEX_CENTER)};

   p {
    width: auto;
    margin: 0 ${spacings.space8}
   }
`
