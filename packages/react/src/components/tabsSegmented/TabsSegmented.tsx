import React, { ReactNode, useId, useState } from 'react'
import {
  StyledTabSegmented,
  StyledTabSegmentedContent,
  StyledTabSegmentedItems,
  StyledTabsSegmentedContainer,
  StyledTabsSegmentedError,
  StyledTabSegmentedDivider,
  StyledTabSegmentedItem
} from './styles'
import type { TabsSegmentedPropTypes } from './types'

const TabsSegmented: React.FC<TabsSegmentedPropTypes> = ({ $items, $id }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>($items[0]?.id ?? '')
  const [isFirstTabActive, setIsFirstTabActive] = useState<boolean>(true)
  const [isLastTabActive, setIsLastTabActive] = useState<boolean>(false)
  const [renderedContent, setRenderedContent] = useState<ReactNode>(
    $items.length > 0 ? $items[0].$content : null
  )
  const defaultId = useId()
  const maxTabsVisible = $items.length === 3
  const showError = $items.length >= 4 && maxTabsVisible

  const handleSelectTab = (tabId: string): void => {
    setSelectedTabId(tabId)
    const content = $items.find((tab) => tab.id === tabId)?.$content
    setRenderedContent(content)
    updateTabActivation(tabId)
  }

  const updateTabActivation = (tabId: string): void => {
    const index = $items.findIndex((tab) => tab.id === tabId)
    setIsFirstTabActive(index === 0)
    setIsLastTabActive(index === $items.length - 1)
  }

  return showError ? (
    <StyledTabsSegmentedError>
      Ocurrió un error, recordá que el máximo permitido de ítems es 3 en el componente TabsSegmented
    </StyledTabsSegmentedError>
  ) : (
    <StyledTabsSegmentedContainer id={$id ?? defaultId}>
      <StyledTabSegmentedItems>
        {$items?.map((tabItem, index) => (
          <StyledTabSegmentedItem key={tabItem?.id}>
            <StyledTabSegmented
              id={tabItem?.id}
              $label={tabItem?.$label}
              $isActive={selectedTabId === tabItem?.id}
              onClick={() => {
                if (tabItem?.id) {
                  handleSelectTab(tabItem?.id)
                }
              }}
              type="button"
            >
              {tabItem.$label}
            </StyledTabSegmented>
            {maxTabsVisible && isLastTabActive && index === 0 && <StyledTabSegmentedDivider />}
            {maxTabsVisible && isFirstTabActive && index === 1 && <StyledTabSegmentedDivider />}
          </StyledTabSegmentedItem>
        ))}
      </StyledTabSegmentedItems>
      {renderedContent && (
        <StyledTabSegmentedContent key={$items.find((tab) => tab.id === selectedTabId)?.id}>
          {renderedContent}
        </StyledTabSegmentedContent>
      )}
    </StyledTabsSegmentedContainer>
  )
}
export default TabsSegmented
