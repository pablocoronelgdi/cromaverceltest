import React, { useEffect, useId, useState } from 'react'
import type { TabPropTypes } from './types'
import { StyledTab } from './styles'
import { Icon } from '../icon'

const Tab: React.FC<TabPropTypes> = ({
  $iconName,
  $onClose,
  $selected,
  $text,
  $isVertical = false,
  ...props
}) => {
  const defaultId = useId()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isDesktop = windowWidth > 768

  return (
    <StyledTab
      id={props.id || defaultId}
      $selected={$selected}
      $iconName={$iconName}
      $onClose={$onClose}
      $text={$text}
      $isVertical={$isVertical}
    >
      {$iconName && !$onClose && <Icon $name={$iconName} $size={isDesktop ? 'medium' : 'large'} />}
      {$text}
      {$onClose && <Icon $name="close" $size="medium" onClick={$onClose} />}
    </StyledTab>
  )
}

export default Tab
