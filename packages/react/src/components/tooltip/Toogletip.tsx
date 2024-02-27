import React, { type ReactNode, useState } from 'react'
import type { ToogletipPropTypes } from './types'
import TooltipHOC from './TooltipHOC'
import { renderToogletipActions } from './functions'
import { Button } from '../button'

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
              <p>
                {step} de {steps?.length}
              </p>
              <Button variant="link" iconName="close" onClick={handleClose} />
            </div>
          )}
          <div className="croma_toogletip_card_header">
            <p>{steps?.[step - 1]?.title || title}</p>
            {!steps && <Button variant="link" iconName="close" onClick={handleClose} />}
          </div>
          <div className="croma_toogletip_card_body">
            <p>{steps?.[step - 1]?.label || label}</p>
          </div>
          {!step && renderToogletipActions(actionLinks as ReactNode, actionButtons as ReactNode)}
          <div className="croma_toogletip_card_actions_end">
            {step > 1 && (
              <Button variant="link" onClick={handleStepBack}>
                Anterior
              </Button>
            )}
            <Button
              variant="filled"
              onClick={!steps || step === steps.length ? handleClose : handleStepFoward}
            >
              {!steps || step === steps.length ? 'Confirmar' : 'Siguiente'}
            </Button>
          </div>
        </div>
      </>
    )
  }
)

export default Toogletip
