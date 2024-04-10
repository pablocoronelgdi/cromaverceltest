import React, { useEffect, useId, useRef, useState } from 'react'
import { breakpoints } from '@cromaui/foundations'
import type { TabsPropTypes, TabItemTypes } from './types'
import {
  StyledTabContent,
  StyledTabItems,
  StyledTabsContainer,
  StyledTabsItemsContainer
} from './styles'
import { Button } from '../button'
import { Tab } from '../tab'

const Tabs: React.FC<TabsPropTypes> = ({
  $items,
  $id,
  $isCarousel = false,
  $isDismissibleItems = false,
  $isVerticalItems = false
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showPrevArrow, setShowPrevArrow] = useState<boolean>(false)
  const [showNextArrow, setShowNextArrow] = useState<boolean>(true)
  const [shouldRenderTabs, setShouldRenderTabs] = useState<boolean>(true)
  const [visibleItems, setVisibleItems] = useState<TabItemTypes[]>($items)
  const [selectedTab, setSelectedTab] = useState<string>(visibleItems[0]?.id ?? '')
  const [renderedContent, setRenderedContent] = useState<React.ReactNode>(
    visibleItems.length > 0 ? visibleItems[0].$content : null
  )
  const tabItemsRef = useRef<HTMLUListElement>(null)
  const defaultId = useId()
  const isDesktop = windowWidth > breakpoints.lg
  const maxTabsVisible = $items.length

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
      handleScrollArrows()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleUpdateTabContent = (): void => {
      const content = visibleItems.find((tab) => tab.id === selectedTab)?.$content
      setRenderedContent(content)
    }

    handleUpdateTabContent()
    setShouldRenderTabs(visibleItems.length > 0)
  }, [selectedTab, visibleItems])
  // Función para selecionar una Tab
  const handleSelectTab = (tabId: string): void => {
    setSelectedTab(tabId)
  }
  // Función que hace un scroll controlado segun la disponibilidad dentro de StyledTabItems
  const handleArrowClick = (direction: 'prev' | 'next'): void => {
    const scrollAmount = tabItemsRef.current?.clientWidth || 0
    if (direction === 'prev' && tabItemsRef.current) {
      tabItemsRef.current.scrollLeft -= scrollAmount
    } else if (direction === 'next' && tabItemsRef.current) {
      tabItemsRef.current.scrollLeft += scrollAmount
    }
    handleScrollArrows()
  }
  // Función para mostrar o ocultar los iconos tipo arrow segun el espacio que haya disponible dentro de StyledTabItems
  const handleScrollArrows = (): void => {
    if (tabItemsRef.current) {
      setShowPrevArrow(tabItemsRef.current.scrollLeft > 0)
      setShowNextArrow(
        tabItemsRef.current.scrollLeft + tabItemsRef.current.clientWidth + 4 <
          tabItemsRef.current.scrollWidth
      )
    }
  }
  // Función para eliminar el tab item y tab content @TODO: Por acá esta el error
  const handleCloseTab = (tabId: string): void => {
    if ($isDismissibleItems) {
      const updatedTabs: TabItemTypes[] = visibleItems.filter((tab) => tab.id !== tabId)
      const currentIndex = visibleItems.findIndex((tab) => tab.id === tabId)
      const nextIndex = currentIndex < updatedTabs.length ? currentIndex : currentIndex - 1
      const nextTabId = updatedTabs[nextIndex]?.id ?? selectedTab
      if (selectedTab === tabId && updatedTabs.length > 0) {
        setVisibleItems(updatedTabs)
        setSelectedTab(nextTabId)
      } else {
        setVisibleItems(updatedTabs)
        setSelectedTab(selectedTab)
      }

      if (updatedTabs.length <= 0) {
        setShouldRenderTabs(false)
      }
    }
  }
  if (!shouldRenderTabs) {
    return null
  }

  return (
    <StyledTabsContainer id={$id && defaultId}>
      <StyledTabsItemsContainer>
        {$isCarousel && isDesktop && maxTabsVisible && showPrevArrow && (
          <Button
            $iconName="arrow_back_ios"
            $size="extra-small"
            $variant="ghost"
            onClick={() => {
              handleArrowClick('prev')
            }}
          />
        )}
        <StyledTabItems ref={tabItemsRef}>
          {visibleItems?.map((tabItem) => (
            <Tab
              key={tabItem.id}
              id={tabItem.id}
              $iconName={tabItem.$iconName}
              $isActive={selectedTab === tabItem.id}
              $isDismissible={$isDismissibleItems}
              $isVerticalContent={$isVerticalItems}
              $label={tabItem.$label}
              $onDismiss={() => {
                if (tabItem?.id) {
                  handleCloseTab(tabItem?.id)
                }
              }}
              onClick={() => {
                if (tabItem?.id) {
                  handleSelectTab(tabItem?.id)
                }
              }}
            />
          ))}
        </StyledTabItems>
        {$isCarousel && isDesktop && maxTabsVisible && showNextArrow && (
          <Button
            $iconName="arrow_forward_ios"
            $size="extra-small"
            $variant="ghost"
            onClick={() => {
              handleArrowClick('next')
            }}
          />
        )}
      </StyledTabsItemsContainer>
      {
        <StyledTabContent key={visibleItems.find((tab) => tab.id === selectedTab)?.id}>
          {renderedContent}
        </StyledTabContent>
      }
    </StyledTabsContainer>
  )
}

export default Tabs
