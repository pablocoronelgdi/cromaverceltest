import type { Meta, StoryObj } from '@storybook/react'
import { PinInput } from '@cromaui/react'
import { useState } from 'react'

const meta: Meta<typeof Image> = {
  title: 'Inputs/PinInput',
  component: PinInput,
  argTypes: {
    $pinLength: {
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
    $label: {
      description: 'Se le puede agregar un label o mensaje al componente',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: 'Supporting text' },
          type: { summary: 'string' }
        }
      }
    },
    $errorMessage: {
      description:
        'Se le puede agregar un mensaje de error en remplazo del default label al componente',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: '¡El código cargado no es correcto!' },
          type: { summary: 'string' }
        }
      }
    },
    $error: {
      description: 'Activa el estado error para mostrar mensaje y styles para ese caso',
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
          type: { summary: 'boolean' }
        }
      }
    },
    $secret: {
      description: 'Si su estado es true, se mostrará ',
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

/* ----------  DOC STORIES ---------- */

export const TitleAndLabel: Story = {
  name: 'Con título y label',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      
        return (
          <PinInput title="Este es un titulo" $label="Este es un label" />
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    return <PinInput title="Este es un titulo" $label="Este es un label" />
  }
}

export const DifferentPinLength: Story = {
  name: 'Tamaño del pin',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      
        return (
          <>
            <PinInput title="Pin de 4 casilleros" $pinLength={4} />
            <PinInput title="Pin de 8 casilleros" $pinLength={8} />
          </>
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    return (
      <>
        <PinInput title="Pin de 4 casilleros" $pinLength={4} />
        <PinInput title="Pin de 8 casilleros" $pinLength={8} />
      </>
    )
  }
}

export const ControlledComponent: Story = {
  name: 'Componente controlado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      
        const [value, setValue] = useState('1234')
        const onChange = (e) => {
          setValue(e)
        }

        return (
        <>
          <PinInput
            $pinLength={6}
            $onPinChange={onChange}
            value={value}
          />

          <p>Value: {value}</p>
        </>
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    const [value, setValue] = useState('1234')

    const onChange = (e: string): void => {
      setValue(e)
    }

    return (
      <>
        <PinInput $pinLength={6} $onPinChange={onChange} value={value} />
        <p>Value: {value}</p>
      </>
    )
  }
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <PinInput
            disabled
          />
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    return <PinInput disabled />
  }
}

export const Error: Story = {
  name: 'Error',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState('1234')

        return (
          <PinInput
            $error={value.length > 3}
            $errorMessage="El pin debe ser menor a 3"
            $label="Ingrese un pin"
            $onPinChange={(e) => {
              setValue(e)
            }}
          />
        )
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    const [value, setValue] = useState('1234')

    return (
      <PinInput
        $error={value.length > 3}
        $errorMessage="El pin debe ser menor a 3"
        $label="Ingrese un pin"
        value={value}
        $onPinChange={(e: string) => {
          setValue(e)
        }}
      />
    )
  }
}

export const OnCompleted: Story = {
  name: 'Error',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState('1234')

        const handleCompleted = (completedValue) => {
          if (completedValue === '123456') {
            alert('El codigo es correcto')
          } else {
            alert('El codigo no es válido')
          }
        }
        return (
          <PinInput
            title="Ingrese un pin"
            value={value}
            $onPinChange={(e: string) => {
              setValue(e)
            }}
            $onComplete={handleCompleted}
          />
        )
        `
      }
    }
  },
  args: {
    size: 'large',
    name: 'person'
  },

  render: function Render() {
    const [value, setValue] = useState('1234')

    const handleCompleted = (completedValue: string): void => {
      if (completedValue === '123456') {
        alert('El codigo es correcto')
      } else {
        alert('El codigo no es válido')
      }
    }
    return (
      <PinInput
        title="Ingrese un pin"
        value={value}
        $onPinChange={(e: string) => {
          setValue(e)
        }}
        $onComplete={handleCompleted}
      />
    )
  }
}

export const Title: Story = {
  args: {
    length: 6,
    title: 'Título del pin input',
    $label: 'Label del pin input',
    $error: false,
    disabled: false
  }
}
