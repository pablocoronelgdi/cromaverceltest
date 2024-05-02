import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PinInput } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Inputs/PinInput',
  component: PinInput,
  argTypes: {
    $pinLength: {
      description: 'Maneja la cantidad de bloques o inputs a mostrar para llenar, máximo 6',
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 4 },
        type: { summary: 'number' }
      }
    },
    $label: {
      description: 'Se le puede agregar un label para acompañar al input',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      }
    },
    $helperText: {
      description:
        'Se le puede agregar un mensaje de soporte o de error, se recomienda usar cómo un estado',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      }
    },
    $error: {
      description: 'Activa el estado error',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $visibility: {
      description: 'Define si se debe mostrar u ocultar el contenido del PIN Input',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: true },
        type: { summary: 'boolean' }
      }
    },
    disabled: {
      description: 'La propiedad disabled es la que define si el componente está habilitado o no',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $onComplete: {
      description:
        'Función que se ejecuta cuando se llena el contenido del PIN Input, recibe como parámetro el PIN de tipo string',
      action: 'onClick',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    },
    $onPinChange: {
      description:
        'Función que se ejecuta cuando se cambia el contenido del PIN Input, recibe como parámetro el PIN de tipo string',
      action: 'onClick',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    }
  }
} satisfies Meta<typeof PinInput>

export default meta
type Story = StoryObj<typeof meta>

export const PinInputDefault: Story = {
  name: 'PIN Input default',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: 'return <PinInput />'
      }
    }
  },
  render: function Render() {
    return <PinInput />
  }
}

export const PinInputLabel: Story = {
  name: 'PIN Input con label',
  args: {
    $label: 'Ingresar código SMS'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <PinInput $label="Ingresar código SMS" />
        `
      }
    }
  },
  render: function Render() {
    return <PinInput $label="Ingresar código SMS" />
  }
}

export const PinInputLength: Story = {
  name: 'PIN Input length',
  args: {
    $label: 'Ingresar código SMS',
    $pinLength: 4
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '12px'}}>
            <PinInput $label="Ingresar código SMS" $pinLength={4} />
            <PinInput $label="Ingresar código SMS" $pinLength={6} />
            <PinInput $label="Ingresar código SMS" $pinLength={8} />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '12px' }}>
        <PinInput $label="Ingresar código SMS" $pinLength={4} />
        <PinInput $label="Ingresar código SMS" $pinLength={6} />
        <PinInput $label="Ingresar código SMS" $pinLength={8} />
      </div>
    )
  }
}

export const PinInputDisabled: Story = {
  name: 'PIN Input disabled',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{display: 'flex', flexDirection: 'column' ,gap: '24px'}}>
            <PinInput disabled $label="Ingresar código SMS" $helperText="Recordá que son 4 dígitos" />
            <PinInput disabled $label="Ingresar código SMS" />
            <PinInput disabled />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <PinInput disabled $label="Ingresar código SMS" $helperText="Recordá que son 4 dígitos" />
        <PinInput disabled $label="Ingresar código SMS" />
        <PinInput disabled />
      </div>
    )
  }
}

export const PinInputError: Story = {
  name: 'PIN Input error',
  args: {
    $pinLength: 4,
    $error: true,
    $helperText: 'El códgio ingresado es incorrecto'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState<string>('')
        const [error, setError] = useState<boolean>(false)
        const [helperMessage, setHelperMessage] = useState<string | null>('Recordá que son 6 digitos numéricos')
    
        useEffect(() => {
          if(value === '1234') {
            setError(false)
            setHelperMessage(null)
            alert('Validación Exitosa.')
          } else {
            setError(!error)
            setHelperMessage('El código ingresado es incorrecto')
          }
        },[value])
    
        return (
          <PinInput
            $error={error}
            $helperText={helperMessage}
            $pinLength={4}
            $label="Ingrese un pin"
            value={value}
            $onPinChange={(e: string) => {
              setValue(e)
            }}
          />
        )
        `
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [helperMessage, setHelperMessage] = useState<string | null>(
      'Recordá que son 6 digitos numéricos'
    )

    useEffect(() => {
      if (value === '1234') {
        setError(false)
        setHelperMessage(null)
        alert('Validación Exitosa.')
      } else {
        setError(!error)
        setHelperMessage('El código ingresado es incorrecto')
      }
    }, [value])

    return (
      <PinInput
        $error={error}
        $helperText={helperMessage}
        $pinLength={4}
        $label="Ingrese un pin"
        value={value}
        $onPinChange={(e: string) => {
          setValue(e)
        }}
      />
    )
  }
}

export const PinInputVisibility: Story = {
  name: 'PIN Input visibility',
  args: {
    $pinLength: 4,
    $label: 'Ingresar código SMS'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return <PinInput $label="Ingresar código SMS" $visibility={false} />
        )
        `
      }
    }
  },
  render: function Render() {
    return <PinInput $label="Ingresar código SMS" $visibility={false} />
  }
}

export const PinInputControlled: Story = {
  name: 'PIN Input controlado',
  args: {
    $pinLength: 6
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState('123456')

        const onChange = (e: string): void => {
          setValue(e)
        }
    
        return (
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <PinInput $pinLength={6} $onPinChange={onChange} value={value} />
            <p>Valor del PIN Input: {value}</p>
          </div>
        )
      }
        `
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('123456')

    const onChange = (e: string): void => {
      setValue(e)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <PinInput $pinLength={6} $onPinChange={onChange} value={value} />
        <p>Valor del PIN Input: {value}</p>
      </div>
    )
  }
}

export const PinInputOnComplete: Story = {
  name: 'PIN Input on complete',
  args: {
    $pinLength: 4,
    $label: 'Ingresar código SMS'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState<string>('')

        const handleCompleted = (completedValue: string): void => {
          if (completedValue === '1234') {
            alert('El codigo es correcto')
          } else {
            alert('El codigo no es válido')
          }
        }
        return (
          <PinInput
            $label="Ingresar código SMS"
            value={value}
            $onPinChange={(e: string) => {
              setValue(e)
            }}
            $onComplete={handleCompleted}
            $helperText="Ingresá el código 1234"
          />
        )
        `
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string>('')

    const handleCompleted = (completedValue: string): void => {
      if (completedValue === '1234') {
        alert('El codigo es correcto')
      } else {
        alert('El codigo no es válido')
      }
    }
    return (
      <PinInput
        $label="Ingresar código SMS"
        value={value}
        $onPinChange={(e: string) => {
          setValue(e)
        }}
        $onComplete={handleCompleted}
        $helperText="Ingresá el código 1234"
      />
    )
  }
}
