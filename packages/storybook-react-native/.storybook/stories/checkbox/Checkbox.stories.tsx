import * as React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@cromaui/react-native'

const MySCheckboxMeta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'pressed the Checkbox' }
  },
  args: {
    onChange: () => {}
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    )
  ]
}

export default MySCheckboxMeta

export const Basic: StoryObj<typeof Checkbox> = {}

export const AnotherExample: StoryObj<typeof Checkbox> = {
  args: {
    onChange: () => {}
  }
}
