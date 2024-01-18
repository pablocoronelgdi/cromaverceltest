import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@cromaui/react'

const meta = {
  title: 'Data Display/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    withLogo: {
      control: { type: 'boolean' },
      description: 'Muestra una variante basada en el logo de Macro.',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    label: {
      control: { type: 'text' },
      description: 'El mensaje de carga que muestra el componente',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const SpinnerDefault: Story = {
  name: 'Default',
  args: {
    withLogo: false,
    label: undefined
  }
}

export const SpinnerWithLabel: Story = {
  name: 'Con texto',
  args: {
    withLogo: false,
    label: 'Cargando...'
  }
}

export const SpinerLogoDefault: Story = {
  name: 'Con logo',
  args: {
    withLogo: true,
    label: undefined
  }
}

export const SpinnerLogoWithLabel: Story = {
  name: 'Con logo y texto',
  args: {
    withLogo: true,
    label: 'Cargando...'
  }
}
