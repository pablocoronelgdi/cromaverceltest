import React from 'react'
import type { TooltipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'

const Tooltip: React.FC<Omit<TooltipPropTypes, '$visible' & '$tooltipRef'>> = TooltipHOC(
  ({ $description, $tooltipRef }: TooltipPropTypes) => {
    return (
      <>
        <div className="croma_tooltip_text" ref={$tooltipRef}>
          <span>{$description}</span>
        </div>
      </>
    )
  }
)

export default Tooltip
