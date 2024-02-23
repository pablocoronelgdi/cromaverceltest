import React from 'react'
import type { TooltipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'
/* const Tooltip: React.FC<TooltipPropTypes> = ({
  position = 'right',
  label,
  children,
  arrowPosition = 'middle'
}) => {
  return (
    <TooltipContainer position={position} arrowPosition={arrowPosition}>
      {children}
      <div className="croma_tooltip_text">
        <span>{label}</span>
      </div>
    </TooltipContainer>
  )
} */

const Tooltip: React.FC<Omit<TooltipPropTypes, 'isVisible' & 'tooltipref'>> = TooltipHOC(
  ({ label, children, isVisible, tooltipref }: TooltipPropTypes) => {
    console.log(tooltipref)
    return (
      <>
        {children}
        {isVisible && (
          <div className="croma_tooltip_text" ref={tooltipref}>
            <span>{label}</span>
          </div>
        )}
      </>
    )
  }
)

export default Tooltip
