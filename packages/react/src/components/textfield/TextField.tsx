import React, { type ChangeEvent, useState } from 'react'
import type { TextfieldPropTypes } from './types'
import { TextfieldContainerStyled } from './styles'
import { Icon } from '../icon'
import { Button } from '../button'

const TextField: React.FC<TextfieldPropTypes> = ({
  label,
  helperText,
  error,
  type = 'text',
  characterCount = 50,
  iconName,
  iconPosition = 'left',
  ...props
}) => {
  const [textValue, setTextValue] = useState<string>()
  const [passVisible, setPassVisible] = useState<boolean>(type === 'text')
  const maxLimit = characterCount < 50 ? characterCount : 50

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.target.value)
  }
  const toogleVisibility = (): void => {
    setPassVisible(!passVisible)
  }

  return (
    <TextfieldContainerStyled
      label={label}
      helperText={helperText}
      error={error}
      type={type}
      characterCount={characterCount}
      iconName={iconName}
      iconPosition={type === 'password' ? 'right' : iconPosition}
      {...props}
    >
      <label htmlFor={props.name}>
        {label}
        <div>
          {iconName && type === 'text' && <Icon name={iconName} />}
          <input
            name={props.name}
            placeholder={props.placeholder}
            type={passVisible ? 'text' : 'password'}
            disabled={props.disabled}
            maxLength={maxLimit}
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          {type === 'password' && (
            <Button
              variant="link"
              onClick={() => {
                if (!props.disabled) {
                  toogleVisibility()
                }
              }}
              style={{ padding: 0 }}
              iconName={passVisible ? 'visibility' : 'visibility_off'}
            />
          )}
        </div>
      </label>
      <div>
        <span>
          {error && <Icon name="info_outlined" size="small" />}
          {helperText}
        </span>
        <span>
          {textValue?.length ? textValue.length : 0}/{maxLimit}
        </span>
      </div>
    </TextfieldContainerStyled>
  )
}

export default TextField
