import React, { useRef, useState, useEffect } from 'react'
import type { TooltipPropTypes } from './types'
import { TooltipContainer } from './styles'

const Tooltip: React.FC<TooltipPropTypes> = ({ position, label, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [adjustedPosition, setAdjustedPosition] = useState<'top' | 'right' | 'bottom' | 'left'>(
    position
  )
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = (): void => {
    setIsVisible(true)
  }
  const hideTooltip = (): void => {
    setIsVisible(false)
  }

  useEffect(() => {
    const checkSpaceAndAdjust = (): void => {
      if (isVisible) {
        if (tooltipRef.current) {
          const tooltipRect = tooltipRef.current.getBoundingClientRect()
          const adjustments: Record<string, 'top' | 'right' | 'bottom' | 'left'> = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }

          if (tooltipRect[position] < 0) {
            setAdjustedPosition(adjustments[adjustedPosition])
          }
        }
      } else {
        setAdjustedPosition(position)
      }
    }

    checkSpaceAndAdjust()

    window.addEventListener('resize', checkSpaceAndAdjust)
    return () => {
      window.removeEventListener('resize', checkSpaceAndAdjust)
    }
  }, [position, isVisible])

  return (
    <TooltipContainer
      position={adjustedPosition}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="croma_tooltip" ref={tooltipRef}>
          {label}
        </div>
      )}
    </TooltipContainer>
  )
}

export default Tooltip
