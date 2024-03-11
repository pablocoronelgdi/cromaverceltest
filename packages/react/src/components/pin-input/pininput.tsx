import React, { useRef, useState } from 'react'
import type { PinInputPropTypes } from './types'
import { StyledLabel, StyledLabelIcon, StyledPinInput } from './styles'
import { color } from '@cromaui/foundations'
import { Icon } from '../icon'

const PinInput: React.FC<PinInputPropTypes> = ({
  length = 6,
  onComplete,
  label,
  error,
  errorMessage,
  ...props
}) => {
  const [pin, setPin] = useState<Array<number | undefined>>(new Array(length))
  const inputRefs = useRef<HTMLInputElement[]>([])

  // Funcion que se va a encargar de setear el array de numeros modificados en base a la logica o eventos
  const changePin = (newValue: number | undefined, index: number): void => {
    const newPin = [...pin]
    newPin[index] = newValue
    setPin(newPin)
    validatePinOnComplete(newPin)
  }

  const changePinFocus = (index: number): void => {
    const ref = inputRefs.current[index]
    ref && ref.focus()
  }

  const validatePinOnComplete = (newPin: Array<number | undefined>): void => {
    const fullPinValue = newPin.join('')
    console.log(fullPinValue)
    if (fullPinValue.length === length) {
      onComplete(fullPinValue)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const value = e.target.value
    const pinNumber = Number(value.trim())
    if (isNaN(pinNumber) || value.length === 0) {
      return
    }

    if (pinNumber >= 0 && pinNumber <= 9) {
      changePin(pinNumber, index)
      if (index < length - 1) {
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

    for (let i = 0; i < filteredData.length && currentIndex + i < length; i++) {
      newPin[currentIndex + i] = Number(filteredData[i])
    }

    setPin(newPin)
    if (filteredData.length >= pin.length) {
      changePinFocus(pin.length - 1)
    } else {
      changePinFocus(filteredData.length)
    }

    const filledCode = newPin.join('')
    if (filledCode.length === length) {
      onComplete(filledCode)
    }
  }

  return (
    <StyledPinInput onComplete={onComplete} length={length}>
      {props.title && <p className="title">{props.title}</p>}
      <div className="content-input">
        {Array.from({ length }, (_, index) => {
          return (
            <input
              key={index}
              type="text"
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
              {...props}
            />
          )
        })}
      </div>
      {label && (
        <label>
          <StyledLabel onComplete={onComplete} length={length}>
            <StyledLabelIcon onComplete={onComplete} length={length}>
              {error && <Icon name="info_outlined" color={color.error.main} size="small" />}
              <p>{label || errorMessage}</p>
            </StyledLabelIcon>
          </StyledLabel>
        </label>
      )}
    </StyledPinInput>
  )
}

export default PinInput
