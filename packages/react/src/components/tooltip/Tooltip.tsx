import React from 'react'
import type { TooltipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'

const Tooltip: React.FC<Omit<TooltipPropTypes, 'isVisible' & 'tooltipref'>> = TooltipHOC(
  ({ label, tooltipref }: TooltipPropTypes) => {
    return (
      <>
        <div className="croma_tooltip_text" ref={tooltipref}>
          <span>{label}</span>
        </div>
      </>
    )
  }
)

export default Tooltip
