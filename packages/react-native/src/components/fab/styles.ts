import { color, shapesNative } from '@cromaui/foundations'
import { Platform, StyleSheet, type StyleProp, type TextStyle, type ViewStyle } from 'react-native'

export const getAreaStyle = (
  size: string,
  disabled: boolean,
  pressed: boolean,
  focused: boolean
): StyleProp<ViewStyle> => {
  if (size === 'small') {
    if (disabled) {
      return { ...styles.area, ...styles.areaSmall, ...styles.areaDisabled }
    }
    if (pressed) {
      return { ...styles.area, ...styles.areaSmall, ...styles.areaSmallPressed }
    }
    return { ...styles.area, ...styles.areaSmall }
  } else {
    if (disabled) {
      return { ...styles.area, ...styles.areaLarge, ...styles.areaDisabled }
    }
    if (pressed || focused) {
      return { ...styles.area, ...styles.areaLarge, ...styles.areaLargePressed }
    }
    return { ...styles.area, ...styles.areaLarge }
  }
}
export const getTextStyle = (
  size: string,
  disabled: boolean,
  pressed: boolean,
  focused: boolean
): StyleProp<TextStyle> => {
  if (size === 'small') {
    if (disabled) {
      return { ...styles.textColorDisabled }
    }
    if (pressed || focused) {
      return { ...styles.textColorSmallPressed }
    }
    return { ...styles.textColorSmall }
  } else {
    if (disabled) {
      return { ...styles.textColorDisabled }
    }
    return { ...styles.textColorLarge }
  }
}

export const styles = StyleSheet.create({
  area: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: shapesNative.full,
    gap: 6,
    ...Platform.select({
      ios: {
        shadowColor: color.neutral[800],
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68
      },
      android: {
        elevation: 9
      }
    })
  },
  areaDisabled: {
    backgroundColor: color.neutral[300]
  },
  areaSmall: {
    padding: 10,
    backgroundColor: color.neutral[50]
  },
  areaSmallPressed: {
    backgroundColor: color.blue.extraSoft
  },
  areaLarge: {
    borderRadius: shapesNative.full,
    padding: 16,
    backgroundColor: color.blue.main
  },
  areaLargePressed: {
    backgroundColor: color.blue.dark
  },
  textColorSmall: {
    color: color.blue.main
  },
  textColorDisabled: {
    color: color.neutral[500]
  },
  textColorSmallPressed: {
    color: color.navy.dark
  },
  textColorLarge: {
    color: color.neutral[50]
  }
})

// Se decide esperar a etapa de testing para deprecar esta seccion de codigo

/* const smallTextColor: Record<string, string> = {
  disabled: color.neutral[50],
  pressed: color.blue.extraSoft,
  focused: color.blue.extraSoft
} */

/* export const styles = (
  pressed: boolean,
  focused: boolean,
  disabled: boolean
): StyleSheet.NamedStyles<FloatingRecordType> => {
  return StyleSheet.create({
    area: {
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: shapesNative.full,
      gap: 6,
      ...Platform.select({
        ios: {
          shadowColor: color.neutral[800],
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68
        },
        android: {
          elevation: 9
        }
      })
    },
    areaSmall: {
      padding: 10,
      backgroundColor: disabled
        ? color.neutral[300]
        : pressed || focused
        ? color.blue.extraSoft
        : color.neutral[50]
    },
    areaLarge: {
      borderRadius: shapesNative.full,
      padding: 16,
      backgroundColor: disabled ? color.neutral[300] : pressed ? color.blue.dark : color.blue.main
    },
    textColorSmall: {
      color: disabled
        ? color.neutral[500]
        : focused
        ? color.navy.dark
        : pressed
        ? color.blue.dark
        : color.blue.main
    },
    textColorLarge: {
      color: disabled ? color.neutral[500] : color.neutral[50]
    }
  })
} */
