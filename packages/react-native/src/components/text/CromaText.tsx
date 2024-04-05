import React from 'react'
import { Text } from 'react-native'
import type { TextPropTypes, TypograpyRecordType } from './types'
import { styles } from './styles'

export const typoRecord: TypograpyRecordType = {
  h1: 'displayXL',
  h2: 'displayLg',
  h3: 'headingXl',
  h4: 'headingLg',
  h5: 'headingMd',
  h6: 'headingSm',
  bodyLg: 'bodyLg',
  bodyMd: 'bodyMd',
  bodySm: 'bodySm',
  caption: 'caption',
  linkLg: 'linkLg',
  linkMd: 'linkMd',
  linkSm: 'linkSm',
  buttonMd: 'buttonMd',
  buttonSm: 'buttonSm',
  buttonXsm: 'buttonXsm'
}

const CromaText: React.FC<TextPropTypes> = ({
  variant = 'regular',
  component = 'bodyLg',
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[styles(variant)[typoRecord[component]], style]} {...props}>
      {children}
    </Text>
  )
}

export default CromaText
