import React, { useState } from 'react'
import {
  FabArea,
  FabIcon,
  FabPressableStyled,
  FabStyles,
  FabText
} from './styles'
import type { FabPropTypes } from './types'

const Fab: React.FC<FabPropTypes> = ({
  onPress,
  disabled,
  size = 'large',
  iconName = 'edit',
  value
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <FabPressableStyled
      onPressIn={(): void => {
        setIsPressed(true)
      }}
      onPressOut={(): void => {
        setIsPressed(false)
      }}
      onPress={!disabled ? onPress : null}
    >
      <FabArea
        size={size}
        disabled={disabled}
        isPressed={isPressed}
        style={!disabled && FabStyles.area}
      >
        <FabIcon
          name={iconName}
          disabled={disabled}
          size={size === 'small' ? 'medium' : 'large'}
          color="primary"
        />
        {value && (
          <FabText size={size} disabled={disabled}>
            {value}
          </FabText>
        )}
      </FabArea>
    </FabPressableStyled>
  )
}

export default Fab
