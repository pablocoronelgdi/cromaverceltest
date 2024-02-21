/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react'
import { TabContainer, Tab, TabContent, Flex, Foco } from './styles'
import { breakpoints } from '@cromaui/foundations'
import type { TabsProps } from './types'
import { Icon } from '../icon'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow({ className = '', onClick = undefined }): React.JSX.Element {
  return (
    <button className={className} style={{ display: 'block' }} onClick={onClick}>
      <Icon name='arrow_forward_ios' size='small' />
    </button>
  )
}

function SamplePrevArrow({ className = '', onClick = undefined }): React.JSX.Element {
  return (
    <button className={className} style={{ display: 'block' }} onClick={onClick}>
      <Icon name='arrow_back_ios' size='small' />
    </button>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Tabs: React.FC<TabsProps> = ({ tabs, vertical, iconLeft, iconRight, slidesToShow, label }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [focusedTab, setFocusedTab] = useState<number | null>(null)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTabFocus = (index: number) => {
    setFocusedTab(index)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTabBlur = () => {
    setFocusedTab(null)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const showSlider = windowWidth < 600 || tabs.length > 5

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow || 5, // Se define la cantidad de items a mostrar por default o por props
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    onclick,
    responsive: [ // Respomsive Slider
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

  if (showSlider) { // Trasforma a el componente tabs comun en un slider
    return (
    <div>
        <TabContainer>
            <Slider {...settings}>
                {tabs.map((tab, index) => (
                <Foco key={index}>
                    <Tab
                      focused={index === focusedTab}
                      onFocus={() => { handleTabFocus(index) }}
                      onBlur={handleTabBlur}key={index}
                      active={index === activeTab}
                      onClick={() => { handleTabClick(index) }}
                    >
                        <Flex tabs={tabs} vertical={vertical}>
                            {iconLeft && <Icon name={`${tab.iconLeftName}`} size='small'/>}<p>{label && tab.label}</p>{iconRight && <Icon name={`${tab.iconRightName}`} size='small'/>}
                        </Flex>
                    </Tab>
                </Foco>
                ))}
            </Slider>
        </TabContainer>
        <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
    )
  }
  return (
    <div>
      <TabContainer className='flex'>
        {tabs.map((tab, index) => (
          <Foco key={index}>
            <Tab
              focused={index === focusedTab}
              onFocus={() => { handleTabFocus(index) }}
              onBlur={handleTabBlur}key={index}
              active={index === activeTab}
              onClick={() => { handleTabClick(index) }}
            >
                <Flex tabs={tabs} vertical={vertical}>
                    {iconLeft && <Icon name={`${tab.iconLeftName}`} size='medium'/>}<p>{label && tab.label}</p>{iconRight && <Icon name={`${tab.iconRightName}`} size='medium'/>}
                </Flex>
            </Tab>
          </Foco>
        ))}
      </TabContainer>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  )
}
export default Tabs
