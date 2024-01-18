import { useArgs } from '@storybook/preview-api'
import { Switch } from '@cromaui/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    disabled: {
      description:
        "Si su valor es 'true' el componente se mostrara deshabilitado impidiendo así su uso.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    checked: {
      description: 'Valor que indica si el input ha sido seleccionado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onChange: {
      description: 'Función que se ejecuta cuando el input cambia su estado.',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    },
    defaultValue: {
      description:
        "Valor por defecto del switch. Solo válido cuando no se establece la propiedad 'checked'.",
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: 'null' }
      }
    }
  }
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  DOC STORIES ---------- */

export const ControlledSwitch: Story = {
  name: 'Switch Controlado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value , setValue] = useState();
        const handleChange = () => {
          setValue(!value)
        }

        return (
        <Switch checked={value} onChange={handleChange} />
        )
        `
      }
    }
  },
  args: {
    checked: false
  },

  render: function Render(args) {
    const [{ value }, setValue] = useArgs()

    const onChange = (): void => {
      setValue({ value: !value })
    }
    return <Switch {...args} onChange={onChange} checked={value} />
  }
}
export const UnControlledSwitch: Story = {
  name: 'Switch Sin Controlar',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      const [value,setValue] = useState("El valor del switch es: false");
      const getValorDelSwitch = (isChecked) => {
        setValue("El nuevo valor es:" + isChecked)
        }

      return (
       <>
          <Switch onChange={getValorDelSwitch} defaultValue={false} />
          <p>{value}</p>
       </>
       )
        `
      }
    }
  },
  args: {
    checked: false
  },

  render: function Render(args) {
    const [value, setValue] = useState('El valor del switch es: false')
    const getValorDelSwitch = (isChecked: boolean): void => {
      setValue(`El valor del switch es: ${isChecked}`)
    }
    return (
      <>
        <Switch {...args} onChange={getValorDelSwitch} defaultValue={false} />
        <p>{value}</p>
      </>
    )
  }
}
export const DefaultValue: Story = {
  name: 'Valor por defecto',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
          <Switch defaultValue={true} />
        `
      }
    }
  },
  args: {
    defaultValue: true
  },

  render: function Render({ ...args }) {
    return (
      <>
        <Switch {...args} />
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
          <Switch disabled defaultValue={true} />
          <Switch disabled defaultValue={false} />
        `
      }
    }
  },
  args: {
    disabled: true
  },

  render: function Render({ ...args }) {
    return (
      <>
        <Switch {...args} defaultValue={true} />
        <Switch {...args} defaultValue={false} />
      </>
    )
  }
}

/* ----------  STORYBOOK STORIES ---------- */

export const Default: Story = {
  args: {
    disabled: false
  }
}
