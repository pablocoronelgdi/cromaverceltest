import type { Meta, StoryObj } from '@storybook/react'
import { TabSegmented } from '@cromaui/react'

const tabs2 = [
  {
    label: 'Tab 1',
    iconLeftName: 'arrow_forward_ios',
    iconRightName: 'arrow_forward_ios',
    content: <div>Contenido de la pestaña 1</div>
  },
  {
    label: 'Tab 2',
    iconLeftName: 'home',
    iconRightName: 'home',
    content: <div>Contenido de la pestaña 2</div>
  }
]
const tabs3 = [
  {
    label: 'Tab 1',
    iconLeftName: 'arrow_forward_ios',
    iconRightName: 'arrow_forward_ios',
    content: <div>Contenido de la pestaña 1</div>
  },
  {
    label: 'Tab 2',
    iconLeftName: 'home',
    iconRightName: 'home',
    content: <div>Contenido de la pestaña 2</div>
  },
  {
    label: 'Tab 3',
    iconLeftName: 'home',
    iconRightName: 'home',
    content: <div>Contenido de la pestaña 3</div>
  }
]

const meta = {
  title: 'Navigation/TabSegmented',
  component: TabSegmented,
  tags: ['autodocs']
} satisfies Meta<typeof TabSegmented>

export default meta
type Story = StoryObj<typeof meta>

export const TresTabs: Story = {
  args: { tabs3 },
  decorators: [
    () => (
      <TabSegmented tabs={tabs3} />
    )
  ]
}

export const DosTabs: Story = {
  args: { tabs2 },
  decorators: [
    () => (
      <TabSegmented tabs={tabs2} />
    )
  ]
}
