import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@cromaui/react'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    disabled: {
      description:
        "Si su valor es 'true' el componente se mostrara deshabilitado impidiendo así su uso.",
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onClick: {
      description: 'Función que se ejecuta cuando se hace click o presiona el botón',
      action: 'onClick',
      table: {
        type: { summary: 'function' }
      }
    },
    $as: {
      description: 'Define si el componente Button es un botón o un anchor',
      options: ['button', 'a'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'button'" }
      }
    },
    $variant: {
      description: 'Define las variantes de estilo que posee el componente.',
      options: ['fill', 'outline', 'ghost', 'tonal'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'fill'" }
      }
    },
    $size: {
      description: 'Define el tamaño del Button',
      options: ['extra-small', 'small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'medium'" }
      }
    },
    $text: {
      description: 'Define el texto o el contenido que se quiere mostrar en el componente',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button label' }
      }
    },
    $iconName: {
      description: 'Define el nombre del icono que se quiere mostrar en el Button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    $iconPosition: {
      description:
        'Define la posición del icono, puede ser a la izquierda o derecha del texto, siempre se debe usar en conjunto con $text si se quiere mostrar un icono y un texto.',
      options: ['left', 'right'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'left'" }
      }
    },
    $backgroundType: {
      description:
        'Define el color de fondo del boton y su contraste, las opciones entre claro y oscuro (light/dark)',
      options: ['dark', 'light'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'light'" }
      }
    },
    $fullWidth: {
      control: { type: 'boolean' },
      description: 'Define si el componente ocupa todo el ancho posible o el contenido. Máximo 328px',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    href: {
      description: 'Define el link interno o el ancla a dónde se quiera navegar, siempre y cuando el $as sea "a"',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Button deafult',
  args: {
    disabled: false,
    $as: 'button',
    $variant: 'fill',
    $backgroundType: 'light',
    $size: 'medium',
    $text: 'Button text'
  }
}

/* ----------  DOC STORIES ---------- */
export const FillBackgroundLight: Story = {
  name: 'Button `fill` con backgroundType `light`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section style={{ 
            display: 'flex', 
            gap: '24px',           
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small"
                $variant="fill"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small"
                $variant="fill"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium"
                $variant="fill"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large"
                $variant="fill"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small"
            $variant="fill"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small"
            $variant="fill"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium"
            $variant="fill"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large"
            $variant="fill"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="fill"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="fill"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="fill"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const FillBackgroundLightDisabled: Story = {
  name: 'Button `fill` con backgroundType `light` con estado `disabled`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section style={{ 
            display: 'flex', 
            gap: '24px',           
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small"
                $variant="fill"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small"
                $variant="fill"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium"
                $variant="fill"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large"
                $variant="fill"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="fill"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small"
            $variant="fill"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small"
            $variant="fill"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium"
            $variant="fill"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large"
            $variant="fill"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="fill"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="fill"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="fill"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const FillBackgroundDark: Story = {
  name: 'Button `fill` con backgroundType `dark`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="fill"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small"
                $variant="fill"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium"
                $variant="fill"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large"
                $variant="fill"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="fill" $size="small" $iconName="login" />
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="fill"
                $size="medium"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="fill" $size="large" $iconName="login" />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="fill"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small"
            $variant="fill"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium"
            $variant="fill"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large"
            $variant="fill"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="fill"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="fill"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="fill"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const FillBackgroundDarkDisabled: Story = {
  name: 'Button `fill` con backgroundType `dark` en estado disabled',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="fill"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small"
                $variant="fill"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium"
                $variant="fill"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large"
                $variant="fill"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="fill"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="fill"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="fill"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="fill"
                $size="extra-small"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="fill" $size="small" $iconName="login" />
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="fill"
                $size="medium"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="fill" $size="large" $iconName="login" />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="fill"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small"
            $variant="fill"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium"
            $variant="fill"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large"
            $variant="fill"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="fill"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="fill"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="fill"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="fill"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="fill"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="fill"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="fill"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const OutlineBackgroundLight: Story = {
  name: 'Button `outline` con backgroundType `light`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section style={{ 
            display: 'flex', 
            gap: '24px',           
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small"
                $variant="outline"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small"
                $variant="outline"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium"
                $variant="outline"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large"
                $variant="outline"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="outline"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="outline"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="outline"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small"
            $variant="outline"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small"
            $variant="outline"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium"
            $variant="outline"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large"
            $variant="outline"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="outline"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="outline"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="outline"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const OutlineBackgroundLightDisabled: Story = {
  name: 'Button `outline` con backgroundType `light` con estado `disabled`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
      return (
        <section
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button extra-small"
              $variant="outline"
              $size="extra-small"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button small"
              $variant="outline"
              $size="small"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button medium"
              $variant="outline"
              $size="medium"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button large"
              $variant="outline"
              $size="large"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button extra-small icon-left"
              $variant="outline"
              $size="extra-small"
              $iconName="login"
              $iconPosition="left"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button small icon-left"
              $variant="outline"
              $size="small"
              $iconName="login"
              $iconPosition="left"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button medium icon-left"
              $variant="outline"
              $size="medium"
              $iconName="login"
              $iconPosition="left"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button large icon-left"
              $variant="outline"
              $size="large"
              $iconName="login"
              $iconPosition="left"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button extra-small icon-right"
              $variant="outline"
              $size="extra-small"
              $iconName="login"
              $iconPosition="right"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button small icon-right"
              $variant="outline"
              $size="small"
              $iconName="login"
              $iconPosition="right"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button medium icon-right"
              $variant="outline"
              $size="medium"
              $iconName="login"
              $iconPosition="right"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $text="Button large icon-right"
              $variant="outline"
              $size="large"
              $iconName="login"
              $iconPosition="right"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $variant="outline"
              $size="extra-small"
              $iconName="login"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $variant="outline"
              $size="small"
              $iconName="login"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $variant="outline"
              $size="medium"
              $iconName="login"
            />
            <Button
              $as="button"
              disabled
              $backgroundType="light"
              $variant="outline"
              $size="large"
              $iconName="login"
            />
          </div>
        </section>
      )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small"
            $variant="outline"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small"
            $variant="outline"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium"
            $variant="outline"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large"
            $variant="outline"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="outline"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="outline"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="outline"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const OutlineBackgroundDark: Story = {
  name: 'Button `outline` con backgroundType `dark`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="outline"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small"
                $variant="outline"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium"
                $variant="outline"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large"
                $variant="outline"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="outline" $size="small" $iconName="login" />
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="outline"
                $size="medium"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="outline" $size="large" $iconName="login" />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="outline"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small"
            $variant="outline"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium"
            $variant="outline"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large"
            $variant="outline"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="outline"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="outline"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="outline"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const OutlineBackgroundDarkDisabled: Story = {
  name: 'Button `outline` con backgroundType `dark` en estado disabled',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="outline"
                $size="extra-small"
              />
              <Button
                 $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small"
                $variant="outline"
                $size="small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium"
                $variant="outline"
                $size="medium"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large"
                $variant="outline"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="outline"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="outline"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="outline"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="outline"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="outline" 
                $size="small" 
                $iconName="login"
                />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="outline"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="outline" 
                $size="large" 
                $iconName="login"
                />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="outline"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small"
            $variant="outline"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium"
            $variant="outline"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large"
            $variant="outline"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="outline"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="outline"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="outline"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="outline"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="outline"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="outline"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="outline"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const GhostBackgroundLight: Story = {
  name: 'Button `ghost` con backgroundType `light`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section style={{ 
            display: 'flex', 
            gap: '24px',           
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small"
                $variant="ghost"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small"
                $variant="ghost"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium"
                $variant="ghost"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large"
                $variant="ghost"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="ghost"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="ghost"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="ghost"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small"
            $variant="ghost"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small"
            $variant="ghost"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium"
            $variant="ghost"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large"
            $variant="ghost"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="ghost"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="ghost"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="ghost"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const GhostBackgroundLightDisabled: Story = {
  name: 'Button `ghost` con backgroundType `light` con estado `disabled`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small"
                $variant="ghost"
                $size="extra-small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small"
                $variant="ghost"
                $size="small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium"
                $variant="ghost"
                $size="medium"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large"
                $variant="ghost"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="ghost"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="ghost"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="ghost"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )`
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small"
            $variant="ghost"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small"
            $variant="ghost"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium"
            $variant="ghost"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large"
            $variant="ghost"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="ghost"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="ghost"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="ghost"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const GhostBackgroundDark: Story = {
  name: 'Button `ghost` con backgroundType `dark`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="ghost"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small"
                $variant="ghost"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium"
                $variant="ghost"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large"
                $variant="ghost"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="ghost" $size="small" $iconName="login" />
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="ghost"
                $size="medium"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="ghost" $size="large" $iconName="login" />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="ghost"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small"
            $variant="ghost"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium"
            $variant="ghost"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large"
            $variant="ghost"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="ghost"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="ghost"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="ghost"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const GhostBackgroundDarkDisabled: Story = {
  name: 'Button `ghost` con backgroundType `dark` en estado disabled',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="ghost"
                $size="extra-small"
              />
              <Button
                 $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small"
                $variant="ghost"
                $size="small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium"
                $variant="ghost"
                $size="medium"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large"
                $variant="ghost"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="ghost"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="ghost"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="ghost"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="ghost"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="ghost" 
                $size="small" 
                $iconName="login"
                />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="ghost"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="ghost" 
                $size="large" 
                $iconName="login"
                />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="ghost"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small"
            $variant="ghost"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium"
            $variant="ghost"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large"
            $variant="ghost"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="ghost"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="ghost"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="ghost"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="ghost"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="ghost"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="ghost"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="ghost"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const TonalBackgroundLight: Story = {
  name: 'Button `tonal` con backgroundType `light`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section style={{ 
            display: 'flex', 
            gap: '24px',           
            width: '100%',
            justifyContent: 'center',
            padding: '24px 16px'
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small"
                $variant="tonal"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small"
                $variant="tonal"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium"
                $variant="tonal"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large"
                $variant="tonal"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="light"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="tonal"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="tonal"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                $backgroundType="light"
                $variant="tonal"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small"
            $variant="tonal"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small"
            $variant="tonal"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium"
            $variant="tonal"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large"
            $variant="tonal"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="light"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="tonal"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="tonal"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="light"
            $variant="tonal"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const TonalBackgroundLightDisabled: Story = {
  name: 'Button `tonal` con backgroundType `light` con estado `disabled`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small"
                $variant="tonal"
                $size="extra-small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small"
                $variant="tonal"
                $size="small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium"
                $variant="tonal"
                $size="medium"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large"
                $variant="tonal"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small icon-left"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small icon-left"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium icon-left"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large icon-left"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button extra-small icon-right"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button small icon-right"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button medium icon-right"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $text="Button large icon-right"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="tonal"
                $size="small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="tonal"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="light"
                $variant="tonal"
                $size="large"
                $iconName="login"
              />
            </div>
          </section>
        )`
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small"
            $variant="tonal"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small"
            $variant="tonal"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium"
            $variant="tonal"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large"
            $variant="tonal"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-left"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-left"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-left"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-left"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button extra-small icon-right"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button small icon-right"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button medium icon-right"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $text="Button large icon-right"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="tonal"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="tonal"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="light"
            $variant="tonal"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const TonalBackgroundDark: Story = {
  name: 'Button `tonal` con backgroundType `dark`',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="tonal"
                $size="extra-small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small"
                $variant="tonal"
                $size="small"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium"
                $variant="tonal"
                $size="medium"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large"
                $variant="tonal"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="tonal" $size="small" $iconName="login" />
              <Button
                $as="button"
                $backgroundType="dark"
                $variant="tonal"
                $size="medium"
                $iconName="login"
              />
              <Button $as="button" $backgroundType="dark" $variant="tonal" $size="large" $iconName="login" />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="tonal"
            $size="extra-small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small"
            $variant="tonal"
            $size="small"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium"
            $variant="tonal"
            $size="medium"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large"
            $variant="tonal"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="tonal"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="tonal"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            $backgroundType="dark"
            $variant="tonal"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const TonalBackgroundDarkDisabled: Story = {
  name: 'Button `tonal` con backgroundType `dark` en estado disabled',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
              background: '#010101',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small"
                $variant="tonal"
                $size="extra-small"
              />
              <Button
                 $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small"
                $variant="tonal"
                $size="small"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium"
                $variant="tonal"
                $size="medium"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large"
                $variant="tonal"
                $size="large"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-left"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-left"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-left"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="left"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-left"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="left"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button extra-small icon-right"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button small icon-right"
                $variant="tonal"
                $size="small"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button medium icon-right"
                $variant="tonal"
                $size="medium"
                $iconName="login"
                $iconPosition="right"
              />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $text="Button large icon-right"
                $variant="tonal"
                $size="large"
                $iconName="login"
                $iconPosition="right"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="tonal"
                $size="extra-small"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="tonal" 
                $size="small" 
                $iconName="login"
                />
              <Button
                $as="button"
                disabled
                $backgroundType="dark"
                $variant="tonal"
                $size="medium"
                $iconName="login"
              />
              <Button
                $as="button"
                disabled 
                $backgroundType="dark" 
                $variant="tonal" 
                $size="large" 
                $iconName="login"
                />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          background: '#010101',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small"
            $variant="tonal"
            $size="extra-small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small"
            $variant="tonal"
            $size="small"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium"
            $variant="tonal"
            $size="medium"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large"
            $variant="tonal"
            $size="large"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-left"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-left"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-left"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="left"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-left"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="left"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button extra-small icon-right"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button small icon-right"
            $variant="tonal"
            $size="small"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button medium icon-right"
            $variant="tonal"
            $size="medium"
            $iconName="login"
            $iconPosition="right"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $text="Button large icon-right"
            $variant="tonal"
            $size="large"
            $iconName="login"
            $iconPosition="right"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="tonal"
            $size="extra-small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="tonal"
            $size="small"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="tonal"
            $size="medium"
            $iconName="login"
          />
          <Button
            $as="button"
            disabled
            $backgroundType="dark"
            $variant="tonal"
            $size="large"
            $iconName="login"
          />
        </div>
      </section>
    )
  }
}

export const ButtonFullWidth: Story = {
  name: 'Button fullWidth',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <section
            style={{
              display: 'flex',
              gap: '24px',
              width: '100%',
              justifyContent: 'center',
              padding: '24px 16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <Button $as="button" $text="Button fill" $variant="fill" $fullWidth />
              <Button $as="button" $text="Button outline" $variant="outline" $fullWidth />
              <Button $as="button" $text="Button ghost" $variant="ghost" $fullWidth />
              <Button $as="button" $text="Button tonal" $variant="tonal" $fullWidth />
            </div>
          </section>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <section
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          <Button $as="button" $text="Button fill" $variant="fill" $fullWidth />
          <Button $as="button" $text="Button outline" $variant="outline" $fullWidth />
          <Button $as="button" $text="Button ghost" $variant="ghost" $fullWidth />
          <Button $as="button" $text="Button tonal" $variant="tonal" $fullWidth />
        </div>
      </section>
    )
  }
}
