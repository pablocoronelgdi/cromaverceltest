import React, { type ReactNode, useState } from 'react'
import type { ToogletipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'
import { renderToogletipActions } from './utils'
import { Button } from '../button'
import { Icon } from '../icon'

const Toogletip: React.FC<ToogletipPropTypes> = TooltipHOC(
  ({
    title,
    label,
    actionLinks,
    actionButtons,
    children,
    steps,
    onToogletipClose,
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
      if (onToogletipClose) {
        onToogletipClose()
      }
    }
    return (
      <>
        <div className="croma_toogletip_card" ref={props.tooltipref}>
          {steps && (
            <div className="croma_toogletip_card_steps">
              <span>
                Paso {step} de {steps?.length}
              </span>
              <Icon name="close" size='small' onClick={handleClose} />
            </div>
          )}
          <div className="croma_toogletip_card_header">
            <span>{steps?.[step - 1]?.title || title}</span>
            {!steps && <Icon name="close" size='small' onClick={handleClose} />}
          </div>
          <div className="croma_toogletip_card_body">
            <span>{steps?.[step - 1]?.label || label}</span>
          </div>
          {!steps ? (
            renderToogletipActions(actionLinks as ReactNode, actionButtons as ReactNode)
          ) : (
            <div className="croma_toogletip_card_actions_end">
              {step > 1 && (
                <>
                  <Button variant="text" onClick={handleStepBack} size="small">
                    Anterior
                  </Button>
                </>
              )}
              <Button
                variant="filled"
                size="small"
                onClick={!steps || step === steps.length ? handleClose : handleStepFoward}
              >
                {!steps || step === steps.length ? 'Confirmar' : 'Siguiente'}
              </Button>
            </div>
          )}
        </div>
      </>
    )
  }
)

export default Toogletip
