import React, { useEffect, useId, useRef, useState } from 'react'
import type { PinInputPropTypes } from './types'
import {
  StyledPinInput,
  StyledPinInputContainer,
  StyledPinInputHelperTextContainer,
  StyledPinInputLabel,
  StyledPinInputValueContainer
} from './styles'
import { Icon } from '../icon'

const PinInput: React.FC<PinInputPropTypes> = ({
  $pinLength: propPinLength = 4,
  $onComplete,
  $onPinChange,
  $helperText,
  $visibility = true,
  $error,
  $label,
  value,
  ...props
}) => {
  const $pinLength = propPinLength > 6 ? 6 : propPinLength
  const [pin, setPin] = useState<Array<number | string | undefined>>(new Array($pinLength))
  const inputRefs = useRef<HTMLInputElement[]>([])
  const defaultId = useId()

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
    <StyledPinInputContainer id={props.id ?? defaultId}>
      {$label && (
        <StyledPinInputLabel htmlFor={props.name ?? defaultId} disabled={props.disabled}>
          {$label}
        </StyledPinInputLabel>
      )}
      <StyledPinInputValueContainer>
        {Array.from(pin, (_, index) => {
          return (
            <StyledPinInput
              $visibility={$visibility}
              disabled={props.disabled}
              $error={$error}
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
      </StyledPinInputValueContainer>
      {$helperText && (
        <StyledPinInputHelperTextContainer
          $helperText={$helperText}
          $error={$error}
          disabled={props.disabled}
        >
          <span id={props.name ?? defaultId}>
            {$error && $helperText && <Icon $name="info_outlined" $size="small" />}
            {$helperText}
          </span>
        </StyledPinInputHelperTextContainer>
      )}
    </StyledPinInputContainer>
  )
}

export default PinInput
