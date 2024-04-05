import React, { useEffect, useId, useState } from 'react'
import type { TabPropTypes } from './types'
import { StyledTab } from './styles'
import { Icon } from '../icon'
import { breakpoints } from '@cromaui/foundations'

const Tab: React.FC<TabPropTypes> = ({
  $iconName,
  $isActive,
  $isDismissible,
  $isVerticalContent = false,
  $onDismiss,
  $label,
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

  const isDesktop = windowWidth > breakpoints.lg

  return (
    <StyledTab
      id={props.id || defaultId}
      $isActive={$isActive}
      $iconName={$iconName}
      $onDismiss={$onDismiss}
      $label={$label}
      $isVerticalContent={$isVerticalContent}
      $isDismissible={$isDismissible}
      onClick={props.onClick}
      type="button"
      {...props}
    >
      {$iconName && !$isDismissible && <Icon $name={$iconName} $size={isDesktop ? 'medium' : 'large'} />}
      {$label}
      {$isDismissible && <Icon $name="close" $size="medium" onClick={$onDismiss} />}
      <div></div>
    </StyledTab>
  )
}

export default Tab
