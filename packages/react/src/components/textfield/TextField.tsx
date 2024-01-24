import React, { type ChangeEvent, useState } from 'react'
import type { TextfieldPropTypes } from './types'
import { TextfieldContainerStyled } from './styles'
import { Icon } from '../icon'

const TextField: React.FC<TextfieldPropTypes> = ({
  label,
  helperText,
  error,
  type = 'text',
  characterCount = 50,
  ...props
}) => {
  const [textValue, setTextValue] = useState<string>()
  const maxLimit = characterCount < 50 ? characterCount : 50

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.target.value)
  }

  return (
    <TextfieldContainerStyled
      label={label}
      helperText={helperText}
      error={error}
      type={type}
      isFocused={false}
      characterCount={characterCount}
    >
      <label htmlFor={props.name}>
        {label}
        <div>
          <input
            name={props.name}
            placeholder={props.placeholder}
            type={type === 'password' ? 'password' : 'text'}
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          {type === 'password' && <Icon name="visibility" />}
        </div>
      </label>
      <div>
        <span>
          {textValue?.length ? textValue.length : 0}/{maxLimit}
        </span>
        <span>
          {error && <Icon name="error" />}
          {helperText}
        </span>
      </div>
    </TextfieldContainerStyled>
  )
}

export default TextField
