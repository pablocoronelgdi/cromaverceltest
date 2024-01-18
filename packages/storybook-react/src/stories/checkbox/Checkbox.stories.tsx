import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { Checkbox } from '@cromaui/react'
import { useState } from 'react'

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
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
        "Valor por defecto del checkbox. Solo válido cuando no se establece la propiedad 'checked'.",
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: 'null' }
      }
    }
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  DOC STORIES ---------- */

export const ControlledCheckBox: Story = {
  name: 'Checkbox Controlado',
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
        <Checkbox checked={value} onChange={handleChange} />
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

    function onChange(): void {
      setValue({ value: !value })
    }
    return <Checkbox {...args} onChange={onChange} checked={value} />
  }
}
export const UnControlledCheckBox: Story = {
  name: 'Checkbox Sin Controlar',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      const [value,setValue] = useState("El valor del checkbox es: false");
      const getValorDelCheckbox = (isChecked) => {
        setValue("El nuevo valor es:" + isChecked)
        }

      return (
       <>
          <Checkbox onChange={getValorDelCheckbox} defaultValue={false} />
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
    const [value, setValue] = useState('El valor del checkbox es: false')
    const getValorDelCheckbox = (isChecked: boolean): void => {
      setValue(`El valor del checkbox es: ${isChecked}`)
    }
    return (
      <>
        <Checkbox
          {...args}
          onChange={getValorDelCheckbox}
          defaultValue={false}
        />
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
          <Checkbox defaultValue={true} />
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
        <Checkbox {...args} />
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
          <Checkbox disabled defaultValue={true} />
          <Checkbox disabled defaultValue={false} />
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
        <Checkbox {...args} defaultValue={true} />
        <Checkbox {...args} defaultValue={false} />
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
