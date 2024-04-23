import { StyleSheet, View, TextInput } from 'react-native'
import React, { useId, useState } from 'react'
import { Icon } from '../icon'
import { CromaText } from '../text'
import { InputFieldPropTypes } from './types'
import { IconNameType } from '../icon/types'
import { spacingsNative } from '@cromaui/foundations/dist/spacings'
import { color, typographyNative } from '@cromaui/foundations'
import { shapesNative } from '@cromaui/foundations/dist/shapes'

const InputField: React.FC<InputFieldPropTypes> = ({
  error,
  helperText,
  iconName,
  iconPosition,
  label,
  maxCharacterCount,
  password,
  disabled,
  width,
  ...props
}) => {
  const inputId = useId()
  const labelId = useId()

  const [textValue, setTextValue] = useState<string>('')
  const [textVisible, _] = useState<boolean>(props.secureTextEntry || false)
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
  const textStyle = [styles.text, error && styles.textError, disabled && styles.textDisabled]

  return (
    <View style={[styles.container]}>
      <CromaText nativeID={labelId} style={styles.label}>
        {label}
      </CromaText>
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
          style={[
            { width: '100%', margin: 0, padding: 0 },
            typographyNative.bodyMd,
            typographyNative.variant.body.semibold
          ]}
          {...props}
        />
        {textVisible && <Icon name={password ? 'visibility' : 'visibility-off'} />}
      </View>
      <View style={styles.helperArea}>
        <View style={styles.helperText}>
          {error && <Icon style={textStyle} name="info-outline" />}
          <CromaText style={textStyle}>{helperText}</CromaText>
        </View>
        {maxCharacterCount && (
          <CromaText style={textStyle}>
            {textValue?.length ? textValue.length : 0}/{maxLimit}
          </CromaText>
        )}
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  container: {
    gap: spacingsNative.space4,
    width: '100%'
  },
  label: {
    color: color.neutral[900]
  },
  area: {
    flexDirection: 'row',
    gap: spacingsNative.space8,
    padding: spacingsNative.space12,
    backgroundColor: color.neutral[50],
    borderRadius: shapesNative.sm,
    color: color.neutral[700],
    borderWidth: 1,
    borderColor: color.neutral[600],
    justifyContent: 'flex-end'
  },
  areaWithIcon: {
    justifyContent: 'space-between'
  },
  areaReversed: {
    flexDirection: 'row-reverse'
  },
  helperArea: {
    alignItems: 'flex-start',
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
