import React, { useState } from 'react'
import {
  StyledTabContainerSegmented,
  StyledTabSegmented,
  TabContent,
  FlexList,
  FlexSegmented,
  StyledFocoSegmented,
  Divider
} from './styles'
import type { TabsProps } from './types'

const TabSegmented: React.FC<TabsProps> = ({ $tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [focusedTab, setFocusedTab] = useState<number | null>(null)

  const handleTabClick = (index: number): void => {
    setActiveTab(index)
  }
  const handleTabFocus = (index: number): void => {
    setFocusedTab(index)
  }
  const handleTabBlur = (): void => {
    setFocusedTab(null)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number): void => {
    if (event.key === 'ArrowLeft' && index > 0) {
      setActiveTab(index - 1)
    } else if (event.key === 'ArrowRight' && index < $tabs.length - 1) {
      setActiveTab(index + 1)
    }
  }

  return (
    <div>
      <StyledTabContainerSegmented className="flex">
        {$tabs.map((tab, index: number) => (
          <FlexList $tabs={$tabs} key={index}>
            <StyledFocoSegmented
              $focused={index === focusedTab}
              onClick={() => {
                handleTabClick(index)
              }}
              onFocus={() => {
                handleTabFocus(index)
              }}
              onBlur={handleTabBlur}
              onKeyDown={(event) => {
                handleKeyDown(event, index)
              }}
              tabIndex={0}
            >
              <StyledTabSegmented $tabs={$tabs} $active={index === activeTab}>
                <FlexSegmented $tabs={$tabs}>
                  <span>{tab.$label}</span>
                </FlexSegmented>
              </StyledTabSegmented>
            </StyledFocoSegmented>
            {index !== $tabs.length - 1 && <Divider $hide={index + 1 === activeTab} />}
          </FlexList>
        ))}
      </StyledTabContainerSegmented>
      <TabContent>{$tabs[activeTab].$content}</TabContent>
    </div>
  )
}
export default TabSegmented
