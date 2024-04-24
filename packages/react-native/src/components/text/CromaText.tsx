import React from 'react'
import { Text } from 'react-native'
import type { TextPropTypes } from './types'
import { styles } from './styles'

export const typoRecord = {
  h1: 'displayLg',
  h2: 'displayMd',
  h3: 'displaySm',
  h4: 'headingXl',
  h5: 'headingLg',
  h6: 'headingMd',
  headingSm: 'headingSm',
  bodyLg: 'bodyLg',
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
