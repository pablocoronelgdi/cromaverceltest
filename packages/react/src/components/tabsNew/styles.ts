import styled from 'styled-components'
import type { TabsPropTypes } from './types'
import { color, spacings } from '@cromaui/foundations'
import { FLEX_CENTER } from '../../globals/globals'

export const StyledTabsContainer = styled.ul<TabsPropTypes>`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 254px;
  padding: 0;

  div {
    ${FLEX_CENTER}
  }
`
export const StyledTabItems = styled.li<TabsPropTypes>`
  background: ${color.neutral[50]};
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  padding: ${spacings.space4};
  position: relative;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`

export const StyledTabContent = styled.div<TabsPropTypes>`
  width: 100%;
`
