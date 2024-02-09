import type { RefObject, SetStateAction } from 'react'
import type { AdjustementTyoes, BorderPositions, LinePositions } from './types'

const adjustments: Record<string, AdjustementTyoes> = {
  top: { oposite: 'bottom', others: ['left', 'right'] },
  right: { oposite: 'left', others: ['top', 'bottom'] },
  bottom: { oposite: 'top', others: ['left', 'right'] },
  left: { oposite: 'right', others: ['top', 'bottom'] }
}

const checkTopSpace = (rect: DOMRect): boolean => {
  return rect.top > 0
}
const checkBottomSpace = (rect: DOMRect): boolean => {
  return rect.bottom < window.innerHeight
}
const checkRightSpace = (rect: DOMRect): boolean => {
  return rect.right < window.innerWidth
}
const checkLeftSpace = (rect: DOMRect): boolean => {
  return rect.left > 0
}

export const checkSpaceAndAdjust = (
  tooltipRef: RefObject<HTMLDivElement>,
  setPosition: React.Dispatch<React.SetStateAction<BorderPositions>>,
  setArrow: React.Dispatch<React.SetStateAction<LinePositions>>,
  defaultPosition: BorderPositions,
  adjustedPosition: BorderPositions
): void => {
  if (tooltipRef.current) {
    const rect = tooltipRef.current.getBoundingClientRect()

    switch (defaultPosition) {
      case 'top':
        if (checkTopSpace(rect)) {
          !checkRightSpace(rect) && setArrow('end')
          !checkLeftSpace(rect) && setArrow('start')
        } else {
          setPosition(adjustments[adjustedPosition].oposite as SetStateAction<BorderPositions>)
          !checkRightSpace(rect) && setArrow('end')
          !checkLeftSpace(rect) && setArrow('start')
        }
        break
      case 'bottom':
        if (checkBottomSpace(rect)) {
          !checkRightSpace(rect) && setArrow('end')
          !checkLeftSpace(rect) && setArrow('start')
        } else {
          setPosition(adjustments[adjustedPosition].oposite as SetStateAction<BorderPositions>)
          !checkRightSpace(rect) && setArrow('end')
          !checkLeftSpace(rect) && setArrow('start')
        }
        break
      case 'left':
        if (checkLeftSpace(rect)) {
          !checkTopSpace(rect) && setArrow('end')
          !checkBottomSpace(rect) && setArrow('start')
        } else {
          setPosition(adjustments[adjustedPosition].oposite as SetStateAction<BorderPositions>)
          !checkTopSpace(rect) && setArrow('end')
          !checkBottomSpace(rect) && setArrow('start')
        }
        break
      case 'right':
        if (checkRightSpace(rect)) {
          !checkTopSpace(rect) && setArrow('end')
          !checkBottomSpace(rect) && setArrow('start')
        } else {
          setPosition(adjustments[adjustedPosition].oposite as SetStateAction<BorderPositions>)
          !checkTopSpace(rect) && setArrow('end')
          !checkBottomSpace(rect) && setArrow('start')
        }
        break

      default:
        break
    }
  }
}
