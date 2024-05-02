import { StyleSheet } from 'react-native'

export const iconStyles = (sizeUnit: number): StyleSheet.NamedStyles<any> =>
  StyleSheet.create({
    icon: {
      fontWeight: '600',
      width: sizeUnit,
      height: sizeUnit,
      lineHeight: sizeUnit,
      textAlign: 'center',
      padding: 0,
      margin: 0
    }
  })
