import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '@cromaui/react'

const meta = {
  title: 'Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    $label: {
      description: 'Se le puede agregar un label al componente',
      control: { type: 'text' }
    },
    $helperText: {
      description:
        'Se le puede agregar un mensaje de ayuda o error en remplazo del default label al componente',
      control: { type: 'text' }
    },
    $error: {
      description: 'Activa el estado error',
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Activa el estado disabled para impedir poder llenar los campos',
      control: { type: 'boolean' }
    },
    $maxCharacterCount: {
      description: 'Maneja la cantidad de caracteres permitidos',
      control: { type: 'number' }
    }
  }
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Quiero comunicar que...'
  }
}

export const Label: Story = {
  args: {
    $label: 'Comentario',
    $helperText: 'Texto de ayuda',
    $error: false,
    disabled: false,
    placeholder: 'Quiero comunicar que...',
    $maxCharacterCount: 100
  }
}

export const Error: Story = {
  args: {
    $label: 'Comentario',
    $helperText: 'Texto de ayuda',
    $error: true,
    disabled: false,
    placeholder: 'Quiero comunicar que...',
    $maxCharacterCount: 100
  }
}

export const Disabled: Story = {
  args: {
    $label: 'Comentario',
    $helperText: 'Texto de ayuda',
    $error: false,
    disabled: true,
    placeholder: 'Quiero comunicar que...',
    $maxCharacterCount: 100
  }
}
