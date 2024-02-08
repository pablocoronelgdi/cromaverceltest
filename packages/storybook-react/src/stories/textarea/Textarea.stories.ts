import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '@cromaui/react'

const meta = {
  title: 'Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Se le puede agregar un título al componente',
      control: { type: 'text' }
    },
    label: {
      description: 'Se le puede agregar un label o mensaje al componente',
      control: { type: 'text' }
    },
    text: {
      description: 'Se le puede manejar el tipo de input por ejemplo text o password, al componente',
      control: { type: 'text' }
    },
    errorMessage: {
      description: 'Se le puede agregar un mensaje de error en remplazo del default label al componente',
      control: { type: 'text' }
    },
    error: {
      description: 'Activa el estado error para mostrar mensaje y styles para ese caso',
      control: { type: 'boolean' }
    },
    disabled: {
      description: 'Activa el estado disabled para impedir poder llenar los campos',
      control: { type: 'boolean' }
    },
    maxLength: {
      description: 'Maneja la cantidad de caracteres',
      control: { type: 'number' }
    },
    characterCounter: { control: { type: 'boolean' } }
  }
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Texto de ejemplo',
    text: 'Quiero comunicar que...',
    errorMessage: 'Texto de referencia',
    error: false,
    disabled: false,
    maxLength: 100
  }
}

export const Title: Story = {
  args: {
    title: 'Dejar comentario',
    label: 'Texto de ejemplo',
    text: 'Quiero comunicar que...',
    errorMessage: 'Texto de referencia',
    error: false,
    disabled: false,
    maxLength: 100,
    characterCounter: true
  }
}

export const Error: Story = {
  args: {
    title: 'Dejar comentario',
    label: 'Texto de ejemplo',
    text: 'Quiero comunicar que...',
    errorMessage:
      'Se supero el limite de caracteres, que se requiere en este tipo de formularios',
    error: true,
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    title: 'Dejar comentario',
    label: 'Texto de ejemplo',
    text: 'Quiero comunicar que...',
    errorMessage: 'Se supero el limite de caracteres',
    error: false,
    disabled: true,
    maxLength: 100,
    characterCounter: true
  }
}
