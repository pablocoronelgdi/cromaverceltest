import type { Meta, StoryObj } from '@storybook/react'
import { PinInput } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Inputs/PinInput',
  component: PinInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Se aplica el type o tipo de input a mostrar (text, password)',
      options: ['text', 'password'],
      control: {
        type: 'select',
        table: {
          defaultValue: { summary: "'text'" },
          type: { summary: 'string' }
        }
      }
    },
    length: {
      description: 'Maneja la cantidad de bloques o inputs a mostrar para llenar',
      control: {
        type: 'number',
        table: {
          defaultValue: { summary: 6 },
          type: { summary: 'number' }
        }
      }
    },
    title: {
      description: 'Se le puede agregar un título al componente pin input',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: 'Título de ejemplo' },
          type: { summary: 'string' }
        }
      }
    },
    label: {
      description: 'Se le puede agregar un label o mensaje al componente',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: 'Supporting text' },
          type: { summary: 'string' }
        }
      }
    },
    errorMessage: {
      description: 'Se le puede agregar un mensaje de error en remplazo del default label al componente',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: '¡El código cargado no es correcto!' },
          type: { summary: 'string' }
        }
      }
    },
    error: {
      description: 'Activa el estado error para mostrar mensaje y styles para ese caso',
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
          type: { summary: 'boolean' }
        }
      }
    },
    disabled: {
      description: 'Activa el estado disabled para impedir poder llenar los campos',
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
          type: { summary: 'boolean' }
        }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    length: 6
  }
}

export const Title: Story = {
  args: {
    length: 6,
    title: 'Subiendo archivos..'
  }
}

export const Label: Story = {
  args: {
    length: 6,
    label: 'Subiendo archivos..'
  }
}

export const Error: Story = {
  args: {
    length: 6,
    label: 'Validá tu idenatidad',
    error: true
  }
}

export const Disabled: Story = {
  args: {
    length: 6,
    label: 'Validá tu idenatidad',
    disabled: true
  }
}

export const Password: Story = {
  args: {
    length: 6,
    type: 'password',
    label: 'Validá tu idenatidad'
  }
}
