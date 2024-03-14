import React, { type ReactNode, useState } from 'react'
import type { ToogletipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'
import { renderToogletipActions } from './utils'
import { Button } from '../button'

const Toogletip: React.FC<ToogletipPropTypes> = TooltipHOC(
  ({
    $title,
    $description = 'Descripción del Toogletip',
    $visible,
    $actionLinks,
    $actionButtons,
    children,
    $steps,
    $onToogletipClose,
    ...props
  }: ToogletipPropTypes) => {
    const [step, setStep] = useState(1)

    const handleStepFoward = (): void => {
      setStep(step + 1)
    }

    const handleStepBack = (): void => {
      setStep(step - 1)
    }
    const handleClose = (): void => {
      if ($onToogletipClose) {
        $onToogletipClose()
      }
    }
    return (
      <>
        <div className="croma_toogletip_card" ref={props.$tooltipRef}>
          {$steps && (
            <div className="croma_toogletip_card_steps">
              <small>
                Paso {step} de {$steps?.length}
              </small>
              <Button variant="ghost" size="extra-small" onClick={handleClose} iconName="close" />
            </div>
          )}
          <div className="croma_toogletip_card_header">
            <small>{$steps?.[step - 1]?.title || $title}</small>
            {!$steps && (
              <Button variant="ghost" size="extra-small" onClick={handleClose} iconName="close" />
            )}
          </div>
          <div className="croma_toogletip_card_body">
            <span>{$steps?.[step - 1]?.label || $description}</span>
            {!$steps ? (
              renderToogletipActions($actionLinks as ReactNode, $actionButtons as ReactNode)
            ) : (
              <div className="croma_toogletip_card_actions_end">
                {step > 1 && (
                  <>
                    <Button variant="ghost" onClick={handleStepBack} size="small">
                      Anterior
                    </Button>
                  </>
                )}
                <Button
                  variant="filled"
                  size="small"
                  onClick={!$steps || step === $steps.length ? handleClose : handleStepFoward}
                >
                  {!$steps || step === $steps.length ? 'Confirmar' : 'Siguiente'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
)

export default Toogletip
