import * as React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@cromaui/react-native'

const MySwitchMeta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onChange: { action: 'pressed the switch' }
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

export default MySwitchMeta

export const Basic: StoryObj<typeof Switch> = {}
