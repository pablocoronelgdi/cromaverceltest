import React, { useEffect, useId, useRef, useState } from 'react'
import type { PinInputPropTypes } from './types'
import { StyledLabel, StyledLabelIcon, StyledPinInput } from './styles'
import { color } from '@cromaui/foundations'
import { Icon } from '../icon'

const PinInput: React.FC<PinInputPropTypes> = ({
  $pinLength = 6,
  $onComplete,
  $onPinChange,
  $helperText,
  $visibility = true,
  $error,
  $errorMessage,
  $label,
  value,
  ...props
}) => {
  const [pin, setPin] = useState<Array<number | string | undefined>>(new Array($pinLength))
  const inputRefs = useRef<HTMLInputElement[]>([])
  const cromaID = useId()

  useEffect(() => {
    if (value) {
      const valueToArray = value.toString().split('')
      const newPin = [...pin]
      for (let i = 0; i < $pinLength; i++) {
        newPin[i] = valueToArray[i]
      }
      setPin(newPin)
    }
  }, [])

  // Funcion que se va a encargar de setear el array de numeros modificados en base a la logica o eventos
  const changePin = (newValue: number | undefined, index: number): void => {
    const newPin = [...pin]
    newPin[index] = newValue?.toString()
    setPin(newPin)
    validatePinOnComplete(newPin)
    $onPinChange && $onPinChange(newPin.join(''))
  }

  const changePinFocus = (index: number): void => {
    const ref = inputRefs.current[index]
    ref && ref.focus()
  }

  const validatePinOnComplete = (newPin: Array<number | string | undefined>): void => {
    const fullPinValue = newPin.join('')
    if (fullPinValue.length === $pinLength) {
      $onComplete && $onComplete(fullPinValue)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const newValue = e.target.value
    const pinNumber = Number(newValue.trim())
    if (isNaN(pinNumber) || newValue.length === 0) {
      return
    }
    if (pinNumber >= 0 && pinNumber <= 9) {
      changePin(pinNumber, index)
      if (index < $pinLength - 1) {
        changePinFocus(index + 1)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    const keyBoardKeyCode = e.nativeEvent.code

    switch (keyBoardKeyCode) {
      case 'Backspace':
        if (pin[index] === undefined) {
          changePinFocus(index - 1)
        } else {
          changePin(undefined, index)
        }
        break
      case 'Delete':
        {
          const newPin = [...pin]
          for (let i = 0; i < newPin.length; i++) {
            if (i > index) {
              newPin[i] = newPin[i + 1]
            }
          }
          newPin[newPin.length - 1] = undefined
          setPin(newPin)
        }
        break
      case 'ArrowLeft':
        changePinFocus(index - 1)
        break
      case 'ArrowRight':
        changePinFocus(index + 1)
        break
      default:
        break
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, currentIndex: number): void => {
    // Permite copiar y pegar codigo.
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const filteredData = pastedData.replace(/\D/g, '')
    const newPin = [...pin]

    for (let i = 0; i < filteredData.length && currentIndex + i < $pinLength; i++) {
      newPin[currentIndex + i] = Number(filteredData[i])
    }
    setPin(newPin)
    $onPinChange && $onPinChange(newPin.join(''))

    if (filteredData.length >= pin.length) {
      changePinFocus(pin.length - 1)
    } else {
      changePinFocus(filteredData.length)
    }

    const filledCode = newPin.join('')
    if (filledCode.length === $pinLength) {
      $onComplete && $onComplete(filledCode)
    }
  }

  return (
    <StyledPinInput
      $onComplete={$onComplete}
      $pinLength={$pinLength}
      $error={$error}
      $visibility={$visibility}
      id={props.id ?? cromaID}
    >
      {$label && <p className="croma-pininput-label">{$label}</p>}
      <div className="content-input">
        {Array.from(pin, (_, index) => {
          return (
            <input
              key={index}
              type={$visibility ? 'text' : 'password'}
              value={pin[index] || ''}
              ref={(e) => {
                if (e) inputRefs.current[index] = e
              }}
              onChange={(e) => {
                handleChange(e, index)
              }}
              onKeyDown={(e) => {
                handleKeyDown(e, index)
              }}
              onPaste={(e) => {
                handlePaste(e, index)
              }}
              aria-label={`Dígito ${index}`}
              {...props}
            />
          )
        })}
      </div>
      {$helperText && (
        <label>
          <StyledLabel>
            <StyledLabelIcon>
              {$error && <Icon $name="info_outlined" $color={color.error.main} $size="small" />}
              <p>{$error ? $errorMessage : $helperText}</p>
            </StyledLabelIcon>
          </StyledLabel>
        </label>
      )}
    </StyledPinInput>
  )
}

export default PinInput
