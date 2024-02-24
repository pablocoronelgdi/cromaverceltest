import React, { useState } from 'react'
import type { ToogletipPropTypes } from './types'
import { Icon } from '../icon'
import TooltipHOC from './TooltipHOC'
import { renderToogletipActions } from './functions'
import { Button } from '../button'

const Toogletip: React.FC<Omit<ToogletipPropTypes, 'isVisible' & 'setIsVisible' & 'tooltipref'>> =
  TooltipHOC(
    ({
      title,
      label,
      children,
      isVisible,
      setIsVisible,
      tooltipref,
      actionLinks,
      actionButtons,
      steps
    }: ToogletipPropTypes) => {
      const [step, setStep] = useState(1)

      const handleStepFoward = (): void => {
        setStep(step + 1)
      }

      const handleStepBack = (): void => {
        setStep(step - 1)
      }
      const handleClose = (): void => {
        if (setIsVisible) {
          setIsVisible(false)
        }
      }
      return (
        <>
          {children}
          {isVisible && (
            <div className="croma_toogletip_card" ref={tooltipref}>
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
              {!step && renderToogletipActions(actionLinks, actionButtons)}
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
          )}
        </>
      )
    }
  )

export default Toogletip
