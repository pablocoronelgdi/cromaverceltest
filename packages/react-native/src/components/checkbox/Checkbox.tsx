import React from 'react'
import styled from 'styled-components/native'
import { color, shapes, spacings } from '@cromaui/foundations'
import { Icon } from '../icon'

const CheckboxContainer = styled.Pressable`
  background-color: ${color.navy.extraSoft};
  padding: ${spacings.space8};
  border-radius: ${shapes.full};
`

const CheckboxBorder = styled.View`
  background-color: ${color.blue.main};
  border-radius: 100px;
`

const CheckboxIcon = styled(Icon)`
  color: ${color.neutral[50]};
  background-color: ${color.navy.main};
`

const Checkbox: React.FC = () => {
  return (
    <CheckboxContainer>
      <CheckboxBorder>
        <CheckboxIcon size="medium" name="check" />
      </CheckboxBorder>
    </CheckboxContainer>
  )
}

export default Checkbox
