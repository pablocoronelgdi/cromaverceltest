import styled from 'styled-components'
/* import {
  elevations,
  color,
  spacings,
  typography,
  shapes,
  borders
} from '@cromaui/foundations' */
import type { TabsItemProps } from './types'
/* import { FONT_TYPE_REGULAR } from '../../globals/globals' */

export const TabContainer = styled.div<TabsItemProps>`
  display: flex;
  flex-direction: row;
`
export const Tab = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#ccc' : 'transparent')};
`
export const TabContent = styled.div<TabsItemProps>`
   margin-top: 20px;
`
