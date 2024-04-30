import { color, shapesNative, spacingsNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    padding: spacingsNative.space4,
    maxWidth: '100%'
  },
  label: {
    color: color.neutral[900],
    fontWeight: '600'
  },
  area: {
    padding: spacingsNative.space12,
    gap: spacingsNative.space8,
    flexDirection: 'row',
    backgroundColor: color.neutral[50],
    borderRadius: shapesNative.sm,
    color: color.neutral[700],
    borderWidth: 1,
    borderColor: color.neutral[600],
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  areaDisabled: {
    backgroundColor: color.neutral[300]
  },
  areaError: {
    borderColor: color.error.main
  },
  areaWithPassword: {
    paddingRight: 0
  },
  input: {
    flex: 1,
    borderWidth: 0
  },
  areaReversed: {
    flexDirection: 'row-reverse'
  },
  helperArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacingsNative.space8
  },
  helperText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacingsNative.space4,
    flex: 1
  },
  text: {
    color: color.neutral[700]
  },
  textError: {
    color: color.error.main
  },
  textDisabled: { color: color.neutral[400] }
})
