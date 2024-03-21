/* eslint-disable react/prop-types */
import React, { useEffect, useState, useId } from 'react'
import { StyledTabContainer, Tab, TabContent, Flex, StyledFoco } from './styles'
import { breakpoints } from '@cromaui/foundations'
import type { TabsProps } from './types'
import { Icon } from '../icon'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow({ className = '', onClick = undefined }): React.JSX.Element {
  return (
    <button className={className} style={{ display: 'block' }} onClick={onClick}>
      <Icon $name="arrow_forward_ios" $size="small" />
    </button>
  )
}

function SamplePrevArrow({ className = '', onClick = undefined }): React.JSX.Element {
  return (
    <button className={className} style={{ display: 'block' }} onClick={onClick}>
      <Icon $name="arrow_back_ios" $size="small" />
    </button>
  )
}

const Tabs: React.FC<TabsProps> = ({
  id,
  $tabs,
  $vertical = false,
  $iconLeft,
  $iconRight,
  $slidesToShow,
  $labelShow = true,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [focusedTab, setFocusedTab] = useState<number | null>(null)
  const defaultId = useId()

  const handleTabClick = (index: number): void => {
    setActiveTab(index)
  }
  const handleTabFocus = (index: number): void => {
    setFocusedTab(index)
  }
  const handleTabBlur = (): void => {
    setFocusedTab(null)
  }

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: $slidesToShow || 5, // Se define la cantidad de items a mostrar por default o por props
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    onclick,
    responsive: [
      // Respomsive Slider
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoints.xs,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  const showSlider = windowWidth < 1024

  if (showSlider) {
    // Trasforma a el componente tabs comun en un slider
    return (
      <div>
        <StyledTabContainer>
          <Slider {...settings}>
            {$tabs.map((tab, index) => (
              <StyledFoco key={index}>
                <Tab
                  id={id && defaultId}
                  onFocus={() => { handleTabFocus(index) }}
                  $focused={index === focusedTab}
                  onBlur={handleTabBlur}
                  {...props}
                  key={index}
                  $active={index === activeTab}
                  onClick={() => {
                    handleTabClick(index)
                  }}
                >
                  <Flex $tabs={$tabs} $vertical={$vertical}>
                    {$iconLeft && <Icon $name={`${tab.iconLeftName}`} $size="large" />}
                    <p className="label">{$labelShow && tab.label}</p>
                    {$iconRight && <Icon $name={`${tab.iconRightName}`} $size="large" />}
                  </Flex>
                </Tab>
              </StyledFoco>
            ))}
          </Slider>
        </StyledTabContainer>
        <TabContent>{$tabs[activeTab].content}</TabContent>
      </div>
    )
  }
  return (
    <div>
      <StyledTabContainer className="flex">
        {$tabs.map((tab, index) => (
          <StyledFoco key={index}>
            <Tab
              id={id && defaultId}
              {...props}
              $focused={index === focusedTab}
              onFocus={() => {
                handleTabFocus(index)
              }}
              onBlur={handleTabBlur}
              key={index}
              $active={index === activeTab}
              onClick={() => {
                handleTabClick(index)
              }}
            >
              <Flex $tabs={$tabs} $vertical={$vertical}>
                {$iconLeft && <Icon $name={`${tab.iconLeftName}`} $size="large" />}
                <p className="label">{$labelShow && tab.label}</p>
                {$iconRight && <Icon $name={`${tab.iconRightName}`} $size="large" />}
              </Flex>
            </Tab>
          </StyledFoco>
        ))}
      </StyledTabContainer>
      <TabContent>{$tabs[activeTab].content}</TabContent>
    </div>
  )
}
export default Tabs
