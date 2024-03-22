import type { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from '@cromaui/react'
import { type ChangeEvent, useState } from 'react'

const meta = {
  title: 'Inputs/RadioButton',
  component: RadioButton,
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
    }
  }
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  STORYBOOK STORIES ---------- */

export const Default: Story = {
  name: 'Default Radio',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [value, setValue] = useState("");

        function onChange(e) {
          setValue(e);
        }

      <>
        <RadioButton
          name="defaults"
          value="radio1"
          checked={value === "radio1"}
          onChange={(e) => onChange(e.target.value)}
        />
        <RadioButton
          name="defaults"
          value="radio2"
          checked={value === "radio2"}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
        `
      }
    }
  },
  args: {
    disabled: false,
    name: '',
    checked: true,
    value: ''
  },

  render: function Render() {
    const [value, setValue] = useState('')

    function onChange(e: string): void {
      setValue(e)
    }
    return (
      <>
        <RadioButton
          name="defaults"
          value="radio1"
          checked={value === 'radio1'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          }}
        />
        <RadioButton
          name="defaults"
          value="radio2"
          checked={value === 'radio2'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          }}
        />
      </>
    )
  }
}

/* ----------  DOC STORIES ---------- */

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
        const [value, setValue] = useState("radio1");

        function onChange(e) {
          setValue(e);
        }

      <>
        <RadioButton
          disabled
          name="defaults"
          value="radio1"
          checked={value === "radio1"}
          onChange={(e) => onChange(e.target.value)}
        />
        <RadioButton
          disabled
          name="defaults"
          value="radio2"
          checked={value === "radio2"}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
        `
      }
    }
  },
  args: {
    disabled: true,
    checked: false,
    name: 'disabled radio input',
    value: 'radio2'
  },

  render: function Render() {
    const [value, setValue] = useState('radio1')

    function onChange(e: string): void {
      setValue(e)
    }

    return (
      <>
        <RadioButton
          disabled
          name="defaults"
          value="radio1"
          checked={value === 'radio1'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          }}
        />
        <RadioButton
          disabled
          name="defaults"
          value="radio2"
          checked={value === 'radio2'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          }}
        />
      </>
    )
  }
}
