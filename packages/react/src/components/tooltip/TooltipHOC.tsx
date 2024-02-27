import React, { useRef, useState, useEffect } from 'react'
import type { BorderPositions, ToogletipPropTypes } from './types'
import { TooltipContainerStyled } from './styles'
import { checkSpaceAndAdjust } from './functions'

const TooltipHOC = (Component: any): React.FC<ToogletipPropTypes> => {
  const ComponentHoc: React.FC<ToogletipPropTypes> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [adjustedPosition, setAdjustedPosition] = useState<BorderPositions>(props.position)
    const [adjustedArrow, setAdjustedArrow] = useState<'start' | 'middle' | 'end'>(
      props.arrowPosition
    )
    const tooltipRef = useRef<HTMLDivElement>(null)

    const onCloseModified = (): void => {
      if (setIsVisible) {
        setIsVisible(false)
      }
      if (props.onToogletipClose) {
        props.onToogletipClose()
      }
    }

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
        {props.children}
        {isVisible && (
          <Component
            {...props}
            setIsVisible={setIsVisible}
            tooltipref={tooltipRef}
            onToogletipClose={onCloseModified}
          />
        )}
      </TooltipContainerStyled>
    )
  }
  return ComponentHoc
}
export default TooltipHOC
