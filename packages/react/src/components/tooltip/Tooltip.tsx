import React, { useRef, useState, useEffect, type SetStateAction } from 'react'
import type { BorderPositions, TooltipPropTypes } from './types'
import { TooltipContainer } from './styles'

const Tooltip: React.FC<TooltipPropTypes> = ({
  position,
  label,
  children,
  arrowPosition = 'middle'
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [adjustedPosition, setAdjustedPosition] = useState<BorderPositions>(position)
  const [adjustedArrow, setAdjustedArrow] = useState<'start' | 'middle' | 'end'>(arrowPosition)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkSpaceAndAdjust = (): void => {
      if (isVisible) {
        if (tooltipRef.current) {
          const tooltipRect = tooltipRef.current.getBoundingClientRect()
          const adjustments: Record<string, { oposite: string; others: string[] }> = {
            top: { oposite: 'bottom', others: ['left', 'right'] },
            right: { oposite: 'left', others: ['top', 'bottom'] },
            bottom: { oposite: 'top', others: ['left', 'right'] },
            left: { oposite: 'left', others: ['top', 'bottom'] }
          }
          console.log(tooltipRect)
          console.log(window.innerWidth)
          console.log(window.innerWidth < tooltipRect.right)

          if (tooltipRect[position] < 0) {
            setAdjustedPosition(
              adjustments[adjustedPosition].oposite as SetStateAction<BorderPositions>
            )
            adjustments[adjustedPosition].others.forEach((item: BorderPositions) => {
              if (tooltipRect[item] - window.innerWidth < 1 && arrowPosition !== 'middle') {
                item === 'left' || item === 'top'
                  ? setAdjustedArrow('end')
                  : setAdjustedArrow('start')
              }
            })
          }
        }
      } else {
        setAdjustedPosition(position)
        setAdjustedArrow(arrowPosition)
      }
    }

    checkSpaceAndAdjust()

    window.addEventListener('resize', checkSpaceAndAdjust)
    return () => {
      window.removeEventListener('resize', checkSpaceAndAdjust)
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
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="croma_tooltip" ref={tooltipRef}>
          <span>{label}</span>
        </div>
      )}
    </TooltipContainer>
  )
}

export default Tooltip
