import React, { useRef, useState, useEffect } from 'react'
import type { BorderPositions, ToogletipPropTypes, TooltipPropTypes } from './types'
import { TooltipContainerStyled } from './styles'
import { checkSpaceAndAdjust } from './functions'

const TooltipHOC = (Component: any): React.FC<ToogletipPropTypes | TooltipPropTypes> => {
  const ComponentHoc: React.FC<ToogletipPropTypes | TooltipPropTypes> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [adjustedPosition, setAdjustedPosition] = useState<BorderPositions>(props.position)
    const [adjustedArrow, setAdjustedArrow] = useState<'start' | 'middle' | 'end'>(
      props.arrowPosition
    )
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (isVisible) {
        checkSpaceAndAdjust(
          tooltipRef,
          setAdjustedPosition,
          setAdjustedArrow,
          props.position,
          adjustedPosition
        )
      } else {
        setAdjustedPosition(props.position)
        setAdjustedArrow(props.arrowPosition)
      }

      window.addEventListener('resize', () => {
        checkSpaceAndAdjust(
          tooltipRef,
          setAdjustedPosition,
          setAdjustedArrow,
          props.position,
          adjustedPosition
        )
      })
      return () => {
        window.removeEventListener('resize', () => {
          checkSpaceAndAdjust(
            tooltipRef,
            setAdjustedPosition,
            setAdjustedArrow,
            props.position,
            adjustedPosition
          )
        })
      }
    }, [props.position, isVisible])

    const showTooltip = (): void => {
      setIsVisible(true)
    }
    const hideTooltip = (): void => {
      setIsVisible(false)
    }
    return (
      <TooltipContainerStyled
        position={adjustedPosition}
        arrowPosition={adjustedArrow}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <Component
          {...props}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          tooltipref={tooltipRef}
        />
      </TooltipContainerStyled>
    )
  }
  return ComponentHoc
}
export default TooltipHOC
