import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '@cromaui/react'

const tabs = [
  {
    label: 'Tab 1',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
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
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 3</div>
  },
  {
    label: 'Tab 4',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 4</div>
  }
]

const tabsSlider = [
  {
    label: 'Tab 1',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
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
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 3</div>
  },
  {
    label: 'Tab 4',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 4</div>
  },
  {
    label: 'Tab 5',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 5</div>
  },
  {
    label: 'Tab 6',
    iconLeftName: 'close',
    iconRightName: 'expand_more',
    content: <div>Contenido de la pestaña 6</div>
  }
]

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    $labelShow: {
      description: 'Se define si requiere o no un label dentro del tab',
      control: { type: 'string' }
    },
    $iconLeft: {
      description: 'activa icono izquierdo',
      control: { type: 'boolean' }
    },
    $iconRight: {
      description: 'activa icono Derecho',
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'dejar inactivo un tab',
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { tabs },
  decorators: [
    () => (
      <Tabs tabs={tabsSlider} $label $slidesToShow={4} />
    )
  ]
}

export const IconLeft: Story = {
  args: { tabs },
  decorators: [
    () => (
      <Tabs tabs={tabs} $label $iconLeft $slidesToShow={5} />
    )
  ]
}

export const IconRight: Story = {
  args: { tabs },
  decorators: [
    () => (
      <Tabs tabs={tabsSlider} $label $iconRight $slidesToShow={3} />
    )
  ]
}

export const Vertical: Story = {
  args: { tabs },
  decorators: [
    () => (
      <Tabs tabs={tabs} $vertical $label $iconLeft $slidesToShow={5} />
    )
  ]
}

export const Icon: Story = {
  args: { tabs },
  decorators: [
    () => (
      <Tabs tabs={tabs} $iconLeft $slidesToShow={5} />
    )
  ]
}
