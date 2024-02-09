import React, { useRef, useState, useEffect } from 'react'
import type { BorderPositions, TooltipPropTypes } from './types'
import { TooltipContainer } from './styles'
import { checkSpaceAndAdjust } from './functions'
const Tooltip: React.FC<TooltipPropTypes> = ({
  position = 'right',
  label,
  children,
  arrowPosition = 'middle'
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [adjustedPosition, setAdjustedPosition] = useState<BorderPositions>(position)
  const [adjustedArrow, setAdjustedArrow] = useState<'start' | 'middle' | 'end'>(arrowPosition)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) {
      checkSpaceAndAdjust(
        tooltipRef,
        setAdjustedPosition,
        setAdjustedArrow,
        position,
        adjustedPosition
      )
    } else {
      setAdjustedPosition(position)
      setAdjustedArrow(arrowPosition)
    }

    window.addEventListener('resize', () => {
      checkSpaceAndAdjust(
        tooltipRef,
        setAdjustedPosition,
        setAdjustedArrow,
        position,
        adjustedPosition
      )
    })
    return () => {
      window.removeEventListener('resize', () => {
        checkSpaceAndAdjust(
          tooltipRef,
          setAdjustedPosition,
          setAdjustedArrow,
          position,
          adjustedPosition
        )
      })
    }
  }, [position, isVisible])

  const showTooltip = (): void => {
    setIsVisible(true)
  }
  const hideTooltip = (): void => {
    setIsVisible(false)
  }

  return (
    <TooltipContainer
      position={adjustedPosition}
      arrowPosition={adjustedArrow}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="croma_tooltip_text" ref={tooltipRef}>
          <span>{label}</span>
        </div>
      )}
    </TooltipContainer>
  )
}

export default Tooltip
