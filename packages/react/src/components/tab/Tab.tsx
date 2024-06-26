import React, { useEffect, useId, useState } from 'react'
import { breakpoints } from '@cromaui/foundations'
import type { TabPropTypes } from './types'
import { StyledTab } from './styles'
import { Button } from '../button'
import { Icon } from '../icon'

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

  const handleOnDissmis = (
    e: React.MouseEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement>
  ): void => {
    e.stopPropagation()
    $onDismiss && $onDismiss(e)
  }

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
      {$iconName && !$isDismissible && (
        <Icon $name={$iconName} $size={isDesktop ? 'medium' : 'large'} />
      )}
      <small>{$label}</small>
      {$isDismissible && (
        // @TODO: Revisar el warning en consola de nestingDOM
        <Button $iconName="close" $size="extra-small" $variant="ghost" onClick={handleOnDissmis} />
      )}
      <div></div>
    </StyledTab>
  )
}

export default Tab
