import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Icon } from '../icon'
import * as SwitchStyles from './styles'
import type { SwitchAreaProps, SwitchProps } from './types'

const SwitchContainer = styled.Pressable`
  padding: 2px 4px;
`
const SwitchBackground = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.switchBackground(props)}
`
const SwitchAura = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.switchAura(props)}
`
const SwitchThumb = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.swtichThumb(props)}
`

const SwitchIcon: React.FC<SwitchProps> = ({
  onPress,
  disabled = false,
  value
}: SwitchProps) => {
  const [pressed, setpressed] = useState(false)

  return (
    <SwitchContainer
      onPressIn={() => {
        setpressed(true)
      }}
      onPressOut={() => {
        setpressed(false)
      }}
      onPress={!disabled ? onPress : null}
    >
      <SwitchBackground checked={value} disabled={disabled}>
        <SwitchAura pressed={pressed} checked={value} disabled={disabled}>
          <SwitchThumb pressed={pressed} checked={value} disabled={disabled}>
            {value && (
              <Icon
                name={'check'}
                color={disabled ? 'neutral' : 'primary'}
                size="small"
              />
            )}
          </SwitchThumb>
        </SwitchAura>
      </SwitchBackground>
    </SwitchContainer>
  )
}

export default SwitchIcon
