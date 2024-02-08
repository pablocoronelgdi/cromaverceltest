import React, { useState, useRef, useEffect } from 'react'
import { StyledPinInput, StyledLabel, StyledLabelIcon } from './styles'
import type { PinInputPropsTypes } from './types'
import { color } from '@cromaui/foundations'
import { Icon } from '../icon'

const PinInput: React.FC<PinInputPropsTypes> = ({ length, onComplete, disabled, title, label, error, errorMessage, type = 'text' }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (index: number, value: string) => { // Permitemanejar el foco y avanzar con el codigo aplcado.
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    const filledCode = newCode.join('')
    if (filledCode.length === length) {
      onComplete(filledCode)
    } else if (value !== '' && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => { // Permite modificar / borrar de atras para adelante.
    if (e.key === 'Enter') {
      e.preventDefault()

      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    } else if (e.key === 'Backspace' || (e.key === 'Delete' && process.platform === 'darwin')) {
      if (index === length - 1 && code[index] === '') {
        e.preventDefault()
        return
      }

      if (index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, currentIndex: number) => { // Permite copiar y pegar codigo.
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const newCode = [...code]

    for (let i = 0; i < pastedData.length && currentIndex + i < length; i++) {
      newCode[currentIndex + i] = pastedData[i]
    }

    setCode(newCode)
    const filledCode = newCode.join('')
    if (filledCode.length === length) {
      onComplete(filledCode)
    }
  }

  return (
    <StyledPinInput onComplete={onComplete} length={length}>
      {title && <p className='title'>{title}</p>}
      <div className='content-input'>
        {code.map((digit, index) => (
          <input
            key={index}
            disabled={disabled}
            type={type}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1} // Parámetro el cual por ahora no voy a dejar que sea manejado por fuera.
            value={digit}
            onChange={(e) => { handleChange(index, e.target.value) }}
            onKeyDown={(e) => { handleKeyDown(index, e) }}
            onPaste={(e) => { handlePaste(e, index) }}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      {label && (
        <label>
          <StyledLabel onComplete={onComplete} length={length}>
            <StyledLabelIcon onComplete={onComplete} length={length}>
              {error && (
                <Icon
                  name="info_outlined"
                  color={color.error.main}
                  size="small"
                />
              )}
              <p>{label || errorMessage}</p>
            </StyledLabelIcon>
          </StyledLabel>
        </label>
      )}
    </StyledPinInput>
  )
}

export default PinInput
