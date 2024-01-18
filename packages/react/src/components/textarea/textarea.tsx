import React, { useState } from 'react'
import {
  StyledContent,
  StyledLabel,
  StyledTextArea,
  StyledLabelIcon
} from './styles'
import { Icon } from '../icon'
import { color } from '@cromaui/foundations'
import type { StyledTextAreaProps } from './types'

const TextArea: React.FC<StyledTextAreaProps> = ({
  text = 'Hola',
  title = null,
  errorMessage = 'error de ejemplo',
  label = 'Texto de ayuda.',
  error = false,
  disabled = false,
  maxLength = 100,
  characterCounter = false
}) => {
  const [textValue, setTextValue] = useState<string>(text)
  const [caracters, setText] = useState('')

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTextValue(event.target.value)
    const newText = event.target.value

    if (newText.length <= maxLength) {
      setText(newText)
    }
  }

  return (
    <StyledContent error={error} disabled={disabled} label={label}>
      {title && <p>{title}</p>}
      <StyledTextArea
        maxLength={100}
        value={textValue}
        onChange={handleInputChange}
        placeholder={text}
        disabled={disabled}
        error={error}
        label={label}
      >
        {text}
      </StyledTextArea>
      {label && (
        <label>
          <StyledLabel error={error} label={label}>
            <StyledLabelIcon error={error} label={label}>
              {error && (
                <Icon
                  name="info_outlined"
                  color={color.error.main}
                  size="small"
                />
              )}
              <p>{errorMessage}</p>
            </StyledLabelIcon>
            {characterCounter && (
              <div>
                <p>{`${maxLength - caracters.length}/${maxLength}`}</p>
              </div>
            )}
          </StyledLabel>
        </label>
      )}
    </StyledContent>
  )
}

export default TextArea
