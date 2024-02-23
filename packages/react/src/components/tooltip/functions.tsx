import React, { Children, type ReactNode, type RefObject, type SetStateAction } from 'react'
import type { AdjustementTypes, BorderPositions, LinePositions } from './types'

const adjustments: Record<string, AdjustementTypes> = {
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
export const renderToogletipActions = (
  actionLinks: ReactNode,
  actionButtons: ReactNode
): ReactNode => {
  // Convertimos el JSX de las props actionLinks y actionButtons en arrays
  let arrayChildrenLinks: ReactNode[] = actionLinks ? Children.toArray(actionLinks) : []
  let arrayChildrenButtons: ReactNode[] = actionButtons ? Children.toArray(actionButtons) : []

  // Si solo habia un children, le agregamos un fragment para siempre usar una misma estructura
  if (arrayChildrenButtons[0]?.type !== React.Fragment) {
    const addedFragment = <>{actionButtons}</>
    arrayChildrenButtons = Children.toArray(addedFragment)
  }
  if (arrayChildrenLinks[0]?.type !== React.Fragment) {
    const addedFragment = <>{actionLinks}</>
    arrayChildrenLinks = Children.toArray(addedFragment)
  }

  // Filtramos por Link o por Button. Volvemos a convertir en array para evitar childrens type obj
  arrayChildrenLinks = Children.toArray(arrayChildrenLinks[0]?.props?.children).filter(
    (e) => e.type.name === 'Link'
  )
  arrayChildrenButtons = Children.toArray(arrayChildrenButtons[0]?.props?.children).filter(
    (e) => e.type.name === 'Button'
  )

  // Unimos los arrays filtrados
  const filteredArray = [...arrayChildrenLinks, ...arrayChildrenButtons]
  // Objecto que usamos para contruir el return
  const buildObj = { content: [], divClass: '', countlinks: 0, countbuttons: 0 }

  filteredArray.forEach((e) => {
    if (e.type.name === 'Link' && buildObj.countlinks < 2) {
      buildObj.content.push(e)
      buildObj.divClass = 'croma_toogletip_card_actions_start'
      buildObj.countlinks++
    }
    if (e.type.name === 'Button' && buildObj.countlinks + buildObj.countbuttons < 2) {
      if (buildObj.countlinks === 0) {
        buildObj.content.push(e)
        buildObj.divClass = 'croma_toogletip_card_actions_end'
        buildObj.countbuttons++
      } else {
        buildObj.content.push(e)
        buildObj.divClass = 'croma_toogletip_card_actions_between'
        buildObj.countbuttons++
      }
    }
  })
  return <div className={buildObj.divClass}>{buildObj.content}</div>
}
