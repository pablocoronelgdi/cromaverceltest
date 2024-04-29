import React, { useId, useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { color } from '@cromaui/foundations'
import { Button } from '../button'
import { Icon } from '../icon'
import { type InputFieldPropTypes } from './types'
import { type IconNameType } from '../icon/types'
import { styles } from './styles'

const InputField: React.FC<InputFieldPropTypes> = ({
  error,
  helperText,
  iconName,
  iconPosition,
  label,
  maxCharacterCount,
  password = false,
  disabled,
  width = '100%',
  value,
  ...props
}) => {
  const inputId = useId()
  const labelId = useId()
  const [textValue, setTextValue] = useState<string>(value || '')
  const [textVisible, setTextVisible] = useState<boolean>(password)

  // Limitamos el limite de caracteres entre 0 y 50
  const maxLimit =
    maxCharacterCount && maxCharacterCount < 50 && maxCharacterCount > 0 ? maxCharacterCount : 50

  const textStyle = [
    styles.text,
    error === true && styles.textError,
    disabled && styles.textDisabled
  ]

  const toogleTextVisibility = (): void => {
    setTextVisible(!textVisible)
  }
  return (
    <View style={[styles.container, { width }]}>
      <Text nativeID={labelId} style={[styles.label, disabled && styles.textDisabled]}>
        {label}
      </Text>
      <View
        style={[
          styles.area,
          iconPosition === 'right' && styles.areaReversed,
          password && styles.areaWithPassword,
          error && styles.areaError,
          disabled && styles.areaDisabled
        ]}
      >
        {iconName && !textVisible && (
          <Icon
            name={iconName as IconNameType}
            color={disabled ? color.neutral[500] : color.navy.main}
          />
        )}
        <TextInput
          id={props.id ?? inputId}
          aria-labelledby={props['aria-labelledby'] || labelId}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          onChangeText={(e) => {
            setTextValue(e)
          }}
          secureTextEntry={textVisible}
          style={[styles.input]}
          value={value || textValue}
          {...props}
        />
        {password && (
          <Button
            variant="ghost"
            size="extraSmall"
            iconName={textVisible ? 'visibility' : 'visibility-off'}
            onPress={toogleTextVisibility}
            disabled={disabled}
          />
        )}
      </View>
      <View style={styles.helperArea}>
        <View style={styles.helperText}>
          {error === true && <Icon style={[textStyle]} name="info-outline" />}
          <Text style={textStyle}>{helperText}</Text>
        </View>
        {maxCharacterCount && (
          <Text
            style={[
              { maxWidth: '25%', textAlign: 'right', width: '25%' },
              disabled && styles.textDisabled
            ]}
          >
            {value?.length || textValue?.length}/{maxLimit}
          </Text>
        )}
      </View>
    </View>
  )
}

export default InputField
