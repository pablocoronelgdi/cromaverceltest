/* eslint-disable no-useless-escape */
import { useArgs } from '@storybook/preview-api'
import { TextField } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Inputs/Textfield',
  component: TextField,
  argTypes: {
    disabled: {
      description:
        "Si su valor es 'true' el componente se mostrara deshabilitado impidiendo así su uso.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      description: 'Texto que se ubica por encima del input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    helperText: {
      description:
        'Texto que se ubica por debajo del input. Cambia de color si la propiedad "error" es `true`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    error: {
      description:
        'Texto que se ubica por debajo del input. Cambia de color si la propiedad "error" es `true`.',
      table: {
        type: { summary: 'boolean' || '()=>boolean' },
        defaultValue: { summary: false }
      }
    },
    type: {
      description:
        'Define entre `text` o `password` el tipo de input que renderizará.',
      options: ['text', 'password'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'text' }
      }
    },
    characterCount: {
      description:
        'Si se setea un valor numérico, se mostrara debajo del input un contador de caracteres.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    iconName: {
      description:
        'Permite mostrar un icono dentro el input. Solo válido para type="text".',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    iconPosition: {
      description:
        'Define entre "left" o "right" la posicion del icono dentro del input.',
      options: ['left', 'right'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    },
    onChange: {
      description: 'Función que se ejecuta cuando el valor del input cambia.',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    }
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  STORYBOOK STORIES ---------- */

export const TextInput: Story = {
  name: 'Input de Texto',
  args: {
    disabled: false,
    type: 'text',
    value: '',
    placeholder: 'Escribí acá',
    label: 'Editá este label',
    helperText: 'Editá este helper text',
    iconName: 'person',
    iconPosition: 'left',
    characterCount: 20
  }
}

/* ----------  DOC STORIES ---------- */

export const Disabled: Story = {
  name: 'Disabled',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `

        return (
          <Textfield disabled placeholder="Input deshabilitado" />
        )
        `
      }
    }
  },
  args: {
    disabled: true
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <TextField disabled placeholder="Input deshabilitado" />
      </div>
    )
  }
}

export const TypeText: Story = {
  name: 'Tipo texto (type="text")',
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
          <Textfield type="text" label="Input de tipo texto" />
       </>
       )
        `
      }
    }
  },
  args: {
    type: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <TextField type="text" label="Input de tipo texto" />
      </div>
    )
  }
}
export const TypePassword: Story = {
  name: 'Tipo password (type="password")',
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
          <Textfield type="password" label="Input de tipo password" />
       </>
       )
        `
      }
    }
  },
  args: {
    type: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <TextField type="password" label="Input de tipo password" />
      </div>
    )
  }
}

export const WithIcon: Story = {
  name: 'Con ícono',
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
       <TextField iconName="email" label="Input con icono default" />
       <TextField
         iconName="email"
         iconPosition="right"
         label="Input con icono a la derecha"
       />
       </>
       )
        `
      }
    }
  },
  args: {
    type: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <TextField iconName="email" label="Input con icono default" />
        <TextField
          iconName="email"
          iconPosition="right"
          label="Input con icono a la derecha"
        />
      </div>
    )
  }
}

export const ErrorInput: Story = {
  name: 'Input con Error',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const isValidName = /^[a-zA-Z\s]*$/
        const [name , setName] = useState();

        return (
          <TextField
          iconName="person"
          label={'Nombre Completo'}
          value={name}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          error={!isValidName.test(name)}
          helperText={
            !regexp.test(name)
              ? 'No se deben ingresar caracteres numéricos '
              : 'Ingrese su nombre completo'
          }
        />
        )
        `
      }
    }
  },
  args: {
    checked: false
  },

  render: function Render() {
    const [{ value }, setValue] = useArgs()
    const regexp = /^[a-zA-Z\s]*$/

    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <TextField
          iconName="person"
          label="Nombre Completo"
          value={value}
          onChange={(e) => {
            setValue({ value: e.target.value })
          }}
          error={!regexp.test(value as string)}
          helperText={
            !regexp.test(value as string)
              ? 'Solo se permiten caracteres alfabéticos '
              : 'Ingrese su nombre completo'
          }
        />
      </div>
    )
  }
}
