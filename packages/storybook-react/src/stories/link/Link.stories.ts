import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '@cromaui/react'

const meta = {
  title: 'Actions/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    $to: { control: { type: 'text' } },
    $children: { control: { type: 'text' } },
    $alt: { control: { type: 'text' } },
    $disabled: { control: { type: 'boolean' } },
    $iconRight: { control: { type: 'boolean' } },
    $iconLeft: { control: { type: 'boolean' } },
    $target: {
      options: ['_self', '_blank'],
      control: { type: 'select' }
    },
    $size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const LinkDefault: Story = {
  args: {
    $title: 'title',
    $iconName: 'check',
    $to: 'https://google.com.ar',
    $children: 'Link de Ejemplo',
    $alt: 'Texto de referencia',
    $target: '_self'
  }
}

export const LinkDisabled: Story = {
  args: {
    $title: 'Macro ejemplo',
    $iconName: 'check',
    $to: 'https://google.com.ar',
    children: 'Link de Ejemplo',
    $alt: 'Texto de referencia',
    $target: '_self',
    $disabled: true
  }
}

export const LinkIconRight: Story = {
  args: {
    $title: 'title',
    $to: 'https://google.com.ar',
    $children: 'Link de Ejemplo',
    $alt: 'Texto de referencia',
    $target: '_self',
    $iconRight: true,
    $iconName: 'send'
  }
}

export const LinkIconLeft: Story = {
  args: {
    $title: 'title',
    $to: 'https://google.com.ar',
    $children: 'Link de Ejemplo',
    $alt: 'Texto de referencia',
    $target: '_self',
    $iconLeft: true,
    $iconName: 'send'
  }
}

export const LinkTargetBlank: Story = {
  args: {
    $iconName: 'send',
    $title: 'text',
    $to: 'https://google.com.ar',
    $children: 'Link de Ejemplo',
    $alt: 'Texto de referencia',
    $target: '_blank'
  }
}
