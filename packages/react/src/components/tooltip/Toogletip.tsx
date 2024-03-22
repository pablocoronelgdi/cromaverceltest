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
    $ariaTitelledBy,
    $ariaDescripbedBy,
    $ariaModal,
    $onToogletipClose,
    ...props
  }: ToogletipPropTypes) => {
    const [step, setStep] = useState<number>(1)

    const handleStepFoward = (): void => {
      setStep(step + 1)
    }

    const handleStepBack = (): void => {
      setStep(step - 1)
    }

    const onEsc = (e: React.KeyboardEvent<HTMLElement>): void => {
      if (e.key === 'Escape') {
        $onToogletipClose()
      }
    }

    const handleClose = (): void => {
      if ($onToogletipClose) {
        $onToogletipClose()
      }
    }

    return (
      <dialog
        className="croma_toogletip_card"
        ref={props.$tooltipRef}
        open={$visible}
        onKeyUp={(e): void => {
          onEsc(e)
        }}
        onKeyDown={(e): void => {
          onEsc(e)
        }}
        aria-labelledby={$ariaTitelledBy ?? 'toogletip_title'}
        aria-describedby={$ariaDescripbedBy ?? 'toogletip_description'}
        aria-modal={$ariaModal ?? true}
      >
        {$steps && (
          <div className="croma_toogletip_card_steps">
            <small>
              Paso {step} de {$steps?.length}
            </small>
            <Button $variant="ghost" $size="extra-small" onClick={handleClose} $iconName="close" />
          </div>
        )}
        <div className="croma_toogletip_card_header">
          <h2 id={$ariaTitelledBy ?? 'toogletip_title'}>{$steps?.[step - 1]?.title || $title}</h2>
          {!$steps && (
            <Button $variant="ghost" $size="extra-small" onClick={handleClose} $iconName="close" />
          )}
        </div>
        <div
          className="croma_toogletip_card_body"
          id={$ariaDescripbedBy ?? 'toogletip_description'}
        >
          <p>{$steps?.[step - 1]?.label || $description}</p>
          {!$steps ? (
            renderToogletipActions($actionLinks as ReactNode, $actionButtons as ReactNode)
          ) : (
            <div className="croma_toogletip_card_actions_end">
              {step > 1 && (
                <>
                  <Button
                    $variant="ghost"
                    onClick={handleStepBack}
                    $size="small"
                    $text="Anterior"
                  />
                </>
              )}
              <Button
                $variant="fill"
                $size="small"
                onClick={!$steps || step === $steps.length ? handleClose : handleStepFoward}
                $text={!$steps || step === $steps.length ? 'Confirmar' : 'Siguiente'}
              />
            </div>
          )}
        </div>
      </dialog>
    )
  }
)

export default Toogletip
