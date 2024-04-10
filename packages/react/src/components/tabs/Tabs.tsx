import React, { type ReactNode, useEffect, useId, useRef, useState } from 'react'
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
  $isDismissibleItems = false,
  $isVerticalItems = false
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showPrevArrow, setShowPrevArrow] = useState<boolean>(false)
  const [showNextArrow, setShowNextArrow] = useState<boolean>(true)
  const [shouldRenderTabs, setShouldRenderTabs] = useState<boolean>(true)
  const [visibleItems, setVisibleItems] = useState<TabItemTypes[]>($items)
  const [selectedTabId, setSelectedTabId] = useState<string>(visibleItems[0]?.id ?? '')
  const [renderedContent, setRenderedContent] = useState<ReactNode>(
    visibleItems.length > 0 ? visibleItems[0].$content : null
  )
  const isDesktop = windowWidth > breakpoints.lg
  const tabItemsRef = useRef<HTMLUListElement>(null)
  const defaultId = useId()
  const maxTabsVisible = visibleItems.length >= 5

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
      handleScrollArrows()
    }

    window.addEventListener('resize', handleResize)
    console.log(isDesktop)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Función para selecionar una Tab y su contenido
  const handleSelectTab = (tabId: string): void => {
    setSelectedTabId(tabId)
    const content = visibleItems.find((tab) => tab.id === tabId)?.$content
    setRenderedContent(content)
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
  // Función para eliminar el tab item y tab content
  const handleCloseTab = (tabId: string): void => {
    if ($isDismissibleItems) {
      const matchTabId = selectedTabId === tabId
      const updatedTabs: TabItemTypes[] = visibleItems.filter((tab) => tab.id !== tabId)
      const currentIndex = visibleItems.findIndex((tab) => tab.id === tabId)
      const currentNewIndex: number =
        updatedTabs.length > 0
          ? currentIndex < updatedTabs.length
            ? currentIndex
            : currentIndex - 1
          : 0

      if (updatedTabs.length === 0) {
        setShouldRenderTabs(false)
      } else {
        const newTabId =
          updatedTabs[currentNewIndex].id !== undefined ? updatedTabs[currentNewIndex].id : null
        setVisibleItems(updatedTabs)
        if (matchTabId && updatedTabs.length > 0) {
          handleSelectTab(newTabId || '')
        }
      }
    }
  }

  return !shouldRenderTabs ? null : (
    <StyledTabsContainer id={$id && defaultId}>
      <StyledTabsItemsContainer>
        {isDesktop && maxTabsVisible && showPrevArrow && (
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
              $isActive={selectedTabId === tabItem.id}
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
        {isDesktop && maxTabsVisible && showNextArrow && (
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
        <StyledTabContent key={visibleItems.find((tab) => tab.id === selectedTabId)?.id}>
          {renderedContent}
        </StyledTabContent>
      }
    </StyledTabsContainer>
  )
}

export default Tabs
