import React, { type ChangeEvent, useId, useState } from 'react'
import { TextAreaContainerStyled } from './styles'
import { Icon } from '../icon'
import type { TextAreaPropTypes } from './types'

const TextArea: React.FC<TextAreaPropTypes> = ({
  $error,
  $helperText,
  $label,
  $maxCharacterCount,
  ...props
}) => {
  const defaultId = useId()
  const [textValue, setTextValue] = useState<string>()
  const maxLimit =
    $maxCharacterCount && $maxCharacterCount < 50 && $maxCharacterCount > 0
      ? $maxCharacterCount
      : 50

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextValue(e.target.value)
  }

  return (
    <TextAreaContainerStyled
      $label={$label}
      $helperText={$helperText}
      $error={$error}
      $maxCharacterCount={$maxCharacterCount}
      {...props}
    >
      <label htmlFor={props.name ?? defaultId}>{$label}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        maxLength={maxLimit}
        onChange={(e) => {
          handleInputChange(e)
        }}
        aria-describedby={props.name ?? defaultId}
      >
        {textValue}
      </textarea>
      <div>
        <span id={props.name ?? defaultId}>
          {$error && $helperText && <Icon name="info_outlined" size="small" />}
          {$helperText}
        </span>
        {$maxCharacterCount && (
          <small>
            {textValue?.length ? textValue.length : 0}/{maxLimit}
          </small>
        )}
      </div>
    </TextAreaContainerStyled>
  )
}

export default TextArea
