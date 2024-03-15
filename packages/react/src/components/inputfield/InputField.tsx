import React, { type ChangeEvent, useState, useId } from 'react'
import type { InputFieldPropTypes } from './types'
import { InputfieldContainerStyled } from './styles'
import { Icon } from '../icon'
import { Button } from '../button'

const InputField: React.FC<InputFieldPropTypes> = ({
  $error,
  $helperText,
  $iconName,
  $iconPosition = 'left',
  $label,
  $maxCharacterCount,
  $type = 'text',
  ...props
}) => {
  const defaultId = useId()
  const [textValue, setTextValue] = useState<string>()
  const [passVisible, setPassVisible] = useState<boolean>($type === 'text')
  const maxLimit =
    $maxCharacterCount && $maxCharacterCount < 50 && $maxCharacterCount > 0
      ? $maxCharacterCount
      : 50

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.target.value)
  }
  const toogleVisibility = (): void => {
    setPassVisible(!passVisible)
  }

  return (
    <InputfieldContainerStyled
      $label={$label}
      $helperText={$helperText}
      $error={$error}
      $type={$type}
      $maxCharacterCount={$maxCharacterCount}
      $iconName={$iconName}
      $iconPosition={$type === 'password' ? 'right' : $iconPosition}
      {...props}
    >
      <label htmlFor={props.name ?? defaultId}>{$label}</label>
      <div>
        {$iconName && $type !== 'password' && <Icon $name={$iconName} />}
        <input
          name={props.name}
          placeholder={props.placeholder}
          type={$type === 'password' ? (passVisible ? 'text' : 'password') : $type}
          disabled={props.disabled}
          maxLength={maxLimit}
          onChange={(e) => {
            handleInputChange(e)
          }}
          aria-describedby={props.name ?? defaultId}
        />
        {$type === 'password' && (
          <Button
            variant="ghost"
            size="extra-small"
            onClick={() => {
              if (!props.disabled) {
                toogleVisibility()
              }
            }}
            iconName={passVisible ? 'visibility' : 'visibility_off'}
          />
        )}
      </div>
      <div>
        <span id={props.name ?? defaultId}>
          {$error && $helperText && <Icon $name="info_outlined" $size="small" />}
          {$helperText}
        </span>
        {$maxCharacterCount && (
          <small>
            {textValue?.length ? textValue.length : 0}/{maxLimit}
          </small>
        )}
      </div>
    </InputfieldContainerStyled>
  )
}

export default InputField
