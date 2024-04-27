import { StyleSheet, View, TextInput, Text } from 'react-native'
import React, { useId, useState } from 'react'
import { Icon } from '../icon'
import { type InputFieldPropTypes } from './types'
import { type IconNameType } from '../icon/types'
import { spacingsNative } from '@cromaui/foundations/dist/spacings'
import { color, shapesNative } from '@cromaui/foundations'
import { ButtonNew } from '../button'

const InputField: React.FC<InputFieldPropTypes> = ({
  error,
  helperText,
  iconName,
  iconPosition,
  label,
  maxCharacterCount,
  password = false,
  disabled,
  width,
  ...props
}) => {
  const inputId = useId()
  const labelId = useId()

  const [textValue, setTextValue] = useState<string>('')
  const [textVisible, setTextVisible] = useState<boolean>(password)
  const maxLimit =
    maxCharacterCount && maxCharacterCount < 50 && maxCharacterCount > 0 ? maxCharacterCount : 50

  const handleTextChange = (e: string): void => {
    setTextValue(e)
    props.onChangeText && props.onChangeText(e)
  }
  /*   const toogleVisibility = (): void => {
    setTextVisible(!textVisible)
  }
 */
  const textStyle = [
    styles.text,
    error === true && styles.textError,
    disabled && styles.textDisabled
  ]

  const handlePress = (): void => {
    setTextVisible(!textVisible)
  }
  return (
    <View style={[styles.container]}>
      <Text nativeID={labelId} style={styles.label}>
        {label}
      </Text>
      <View
        style={[
          styles.area,
          iconName !== undefined && styles.areaWithIcon,
          iconPosition === 'right' && styles.areaReversed
        ]}
      >
        {iconName && !textVisible && <Icon name={iconName as IconNameType} />}
        <TextInput
          id={props.id ?? inputId}
          aria-labelledby={props['aria-labelledby'] || labelId}
          onChangeText={handleTextChange}
          secureTextEntry={textVisible}
          style={[styles.input]}
          {...props}
        />
        {password && (
          <ButtonNew
            variant="ghost"
            size="extraSmall"
            iconName={textVisible ? 'visibility' : 'visibility-off'}
            onPress={handlePress}
          />
        )}
      </View>
      <View style={styles.helperArea}>
        <View style={styles.helperText}>
          {error === true && <Icon style={textStyle} name="info-outline" />}
          <Text style={textStyle}>{helperText}</Text>
        </View>
        {maxCharacterCount && (
          <Text style={textStyle}>
            {textValue?.length ? textValue.length : 0}/{maxLimit}
          </Text>
        )}
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  container: {
    gap: spacingsNative.space4,
    maxWidth: '100%'
  },
  label: {
    color: color.neutral[900]
  },
  area: {
    padding: spacingsNative.space8,
    flexDirection: 'row',
    backgroundColor: color.neutral[50],
    borderRadius: shapesNative.sm,
    color: color.neutral[700],
    borderWidth: 1,
    borderColor: color.neutral[600],
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 2,
    borderWidth: 0
  },
  areaWithIcon: {
    justifyContent: 'center'
  },
  areaReversed: {
    flexDirection: 'row-reverse'
  },
  helperArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacingsNative.space4
  },
  helperText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacingsNative.space4
  },
  text: {
    color: color.neutral[700]
  },
  textError: {
    color: color.error.main
  },
  textDisabled: { color: color.neutral[400] }
})
