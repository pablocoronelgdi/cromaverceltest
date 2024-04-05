import React, { useEffect, useId, useRef, useState } from 'react'
import type { TabsPropTypes, TabItemTypes } from './types'
import { breakpoints, color } from '@cromaui/foundations'
import { StyledTabContent, StyledTabItems, StyledTabsContainer } from './styles'
import Tab from '../tab/Tab'
import { Icon } from '../icon'

const TabsNew: React.FC<TabsPropTypes> = ({
  $items,
  $id,
  $isCarousel = false,
  $isDismissibleItems = false,
  $isVerticalItems = false
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showPrevArrow, setShowPrevArrow] = useState<boolean>(false)
  const [showNextArrow, setShowNextArrow] = useState<boolean>(true)
  const [visibleItems, setVisibleItems] = useState<TabItemTypes[]>($items)
  const tabItemsRef = useRef<HTMLLIElement>(null)
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
  // Función para selecionar una Tab
  const handleSelectTab = (index: number): void => {
    setSelectedTab(index)
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
  const handleCloseTab = (index: number): void => {
    if ($isDismissibleItems) {
      const updatedTabs = [...visibleItems]
      updatedTabs.splice(index, 1)
      setVisibleItems(updatedTabs)
      setSelectedTab(Math.min(index, updatedTabs.length - 1))
    }
  }

  return (
    <StyledTabsContainer id={$id && defaultId} $items={$items}>
      <div>
        {$isCarousel && isDesktop && maxTabsVisible && showPrevArrow && (
          <Icon
            $name="arrow_back_ios"
            $size="small"
            color={color.blue.main}
            onClick={() => {
              handleArrowClick('prev')
            }}
          />
        )}
        <StyledTabItems $items={$items} ref={tabItemsRef}>
          {visibleItems?.map((tabItem, index: number) => (
            <Tab
              key={tabItem.id}
              id={tabItem.id}
              $iconName={tabItem.$iconName}
              $isActive={index === selectedTab}
              $isDismissible={$isDismissibleItems}
              $isVerticalContent={$isVerticalItems}
              $label={tabItem.$label}
              $onDismiss={() => {
                handleCloseTab(index)
              }}
              onClick={() => {
                handleSelectTab(index)
              }}
            />
          ))}
        </StyledTabItems>
        {$isCarousel && isDesktop && maxTabsVisible && showNextArrow && (
          <Icon
            $name="arrow_forward_ios"
            $size="small"
            color={color.blue.main}
            onClick={() => {
              handleArrowClick('next')
            }}
          />
        )}
      </div>
      {<StyledTabContent $items={$items}>{visibleItems[selectedTab].$content}</StyledTabContent>}
    </StyledTabsContainer>
  )
}

export default TabsNew
