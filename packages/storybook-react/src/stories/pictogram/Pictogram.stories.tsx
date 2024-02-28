import type { Meta, StoryObj } from '@storybook/react'
import { Pictogram } from '@cromaui/react'
import PictogramCash from './cash.svg'
import { color } from '@cromaui/foundations'

const meta = {
  title: 'Assets/Pictogram',
  component: Pictogram,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'Alert',
        'Bag',
        'Calendar',
        'Car',
        'CardSmile',
        'Card',
        'Cart',
        'Cash',
        'Clock',
        'Doc',
        'Home',
        'Laptop',
        'Location',
        'Lock',
        'Message',
        'Microphone',
        'Plus',
        'Question',
        'Smartphone',
        'Trash',
        'User',
        'Validation'
      ],
      description: 'La prop name indica el pictograma de Macro que se quiere mostrar',
      table: {
        defaultValue: { summary: "'Cash'" },
        type: { summary: 'string' }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['LG', 'MD', 'SM'],
      description: 'La prop size define el tamaño del Pictograma',
      table: {
        defaultValue: { summary: "'MD'" },
        type: { summary: 'string' }
      }
    },
    segmentName: {
      control: { type: 'select' },
      options: ['Individuos', 'Selecta', 'Empresas', 'Agro', 'Gobierno'],
      description:
        'La prop segmentName define el segmento en donde se va a usar el pictograma, esto define el color secundario',
      table: {
        defaultValue: { summary: "'Individuos'" },
        type: { summary: 'string' }
      }
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
      description:
        'La prop backgroundColor define el color de fondo donde se va a usar el pictograma',
      table: {
        defaultValue: { summary: "'Light'" },
        type: { summary: 'string' }
      }
    },
    individuosColor: {
      control: { type: 'select' },
      options: ['Blue', 'Pink'],
      description:
        'La prop individuosColor solo se debe usar si el pictograma se usa en el segmento Individuos, y esta prop define el color secundario del pictograma',
      table: {
        defaultValue: { summary: "'Blue'" },
        type: { summary: 'string' }
      }
    },
    children: {
      control: { type: 'text' },
      description:
        'El children se debe usar en caso de no tener el Pictogram dentro del Content Design System. Puede ser un SVG o un link',
      table: {
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Pictogram>

export default meta
type Story = StoryObj<typeof meta>

export const PictogramDefault: Story = {
  name: 'Default',
  args: {
    name: 'Cash',
    size: 'MD',
    segmentName: 'Individuos',
    backgroundColor: 'Light',
    individuosColor: 'Blue'
  }
}

export const PictogramWithBackgroundDark: Story = {
  name: 'Pictogram con fondo Dark',
  args: {
    name: 'Alert',
    size: 'LG',
    segmentName: 'Individuos',
    backgroundColor: 'Dark',
    individuosColor: 'Blue'
  }
}

export const PictogramWithIndividuosPink: Story = {
  name: 'Pictogram en segmento Individuos, color secundario Rosa',
  args: {
    name: 'Bag',
    size: 'LG',
    segmentName: 'Individuos',
    backgroundColor: 'Light',
    individuosColor: 'Pink'
  }
}

export const PictogramSelecta: Story = {
  name: 'Pictogram en segmento Selecta',
  args: {
    name: 'Calendar',
    size: 'LG',
    segmentName: 'Selecta',
    backgroundColor: 'Light'
  }
}

export const PictogramEmpresas: Story = {
  name: 'Pictogram en segmento Empresas',
  args: {
    name: 'Car',
    size: 'LG',
    segmentName: 'Empresas',
    backgroundColor: 'Light'
  }
}

export const PictogramAgro: Story = {
  name: 'Pictogram en segmento Agro',
  args: {
    name: 'CardSmile',
    size: 'LG',
    segmentName: 'Agro',
    backgroundColor: 'Light'
  }
}

export const PictogramGobierno: Story = {
  name: 'Pictogram en segmento Gobierno',
  args: {
    name: 'Card',
    size: 'LG',
    segmentName: 'Gobierno',
    backgroundColor: 'Light'
  }
}

export const PictogramWithImportedSvg: Story = {
  name: 'Con svg importado',
  args: {
    children: PictogramCash
  }
}

export const PictogramWithChildren: Story = {
  name: 'Con svg children',
  args: {
    children: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.76 52.0195H30.23C30.1 52.0195 30 51.8895 30 51.7195V48.3195C30 48.1495 30.11 48.0195 30.23 48.0195H33.76C33.89 48.0195 33.99 48.1495 33.99 48.3195V51.7195C33.99 51.8895 33.88 52.0195 33.76 52.0195Z"
          fill="#053575"
        />
        <path
          d="M33.76 16.0303H30.23C30.1 16.0303 30 15.9003 30 15.7303V12.3303C30 12.1603 30.11 12.0303 30.23 12.0303H33.76C33.89 12.0303 33.99 12.1603 33.99 12.3303V15.7303C33.99 15.9003 33.88 16.0303 33.76 16.0303Z"
          fill="#053575"
        />
        <path
          d="M37.2203 27.0301C37.1003 24.0701 34.4603 21.6901 31.2803 21.9501C28.8703 22.1501 26.8303 23.9401 26.4003 26.2501C26.4003 26.2801 26.4003 26.3001 26.3903 26.3301C26.0203 28.5001 27.4503 30.6001 29.6103 31.2601L34.3903 32.7301C36.5503 33.4001 37.9803 35.4901 37.6103 37.6601C37.6103 37.6901 37.6103 37.7101 37.6003 37.7401C37.1703 40.0501 35.1303 41.8501 32.7203 42.0401C29.5503 42.3001 26.9303 39.9501 26.7803 37.0101"
          stroke="#053575"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M58 32C58 46.36 46.36 58 32 58C17.64 58 6 46.36 6 32"
          stroke="#203AE9"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M6 32C6 17.64 17.64 6 32 6C46.36 6 58 17.64 58 32"
          stroke="#053575"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </svg>
    )
  }
}

/* ----------  DOC STORIES ---------- */

export const DocPictogramDefault: Story = {
  name: 'Pictogram component',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Card"
            size="MD"
            segmentName="Individuos"
            backgroundColor="Light"
            individuosColor="Blue"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram
          name="Card"
          size="MD"
          segmentName="Individuos"
          backgroundColor="Light"
          individuosColor="Blue"
        />
      </div>
    )
  }
}

export const DocPictogramWithBackgroundColor: Story = {
  name: 'Pictogram con backgroundColor',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Alert"
            size="LG"
            segmentName="Individuos"
            backgroundColor="Light"
            individuosColor="Blue"
          />
          <Pictogram
            name="Alert"
            size="LG"
            segmentName="Individuos"
            backgroundColor="Dark"
            individuosColor="Blue"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '100%', padding: '1rem', display: 'flex', gap: 24 }}>
        <Pictogram
          name="Alert"
          size="LG"
          segmentName="Individuos"
          backgroundColor="Light"
          individuosColor="Blue"
        />
        <div style={{ padding: '1rem', backgroundColor: color.navy.main, borderRadius: '4px' }}>
          <Pictogram
            name="Alert"
            size="LG"
            segmentName="Individuos"
            backgroundColor="Dark"
            individuosColor="Blue"
          />
        </div>
      </div>
    )
  }
}

export const DocPictogramWithIndividuosColor: Story = {
  name: 'Pictogram en segmento Individuos color secundario Rosa',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Bag"
            size="LG"
            segmentName="Individuos"
            backgroundColor="Light"
            individuosColor="Blue"
           />
          <Pictogram
            name="Bag"
            size="LG"
            segmentName="Individuos"
            backgroundColor="Light"
            individuosColor="Pink"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem', display: 'flex', gap: 24 }}>
        <Pictogram
          name="Bag"
          size="LG"
          segmentName="Individuos"
          backgroundColor="Light"
          individuosColor="Blue"
        />
        <Pictogram
          name="Bag"
          size="LG"
          segmentName="Individuos"
          backgroundColor="Light"
          individuosColor="Pink"
        />
      </div>
    )
  }
}

export const DocPictogramSelecta: Story = {
  name: 'Pictogram en segmento Selecta',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Calendar"
            size="LG"
            segmentName="Selecta"
            backgroundColor="Light"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram name="Calendar" size="LG" segmentName="Selecta" backgroundColor="Light" />
      </div>
    )
  }
}

export const DocPictogramEmpresas: Story = {
  name: 'Pictogram en segmento Empresas',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Car"
            size="LG"
            segmentName="Empresas"
            backgroundColor="Light"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram name="Car" size="LG" segmentName="Empresas" backgroundColor="Light" />
      </div>
    )
  }
}

export const DocPictogramAgro: Story = {
  name: 'Pictogram en segmento Agro',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="CardSmile"
            size="LG"
            segmentName="Agro"
            backgroundColor="Light"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram name="CardSmile" size="LG" segmentName="Agro" backgroundColor="Light" />
      </div>
    )
  }
}

export const DocPictogramGobierno: Story = {
  name: 'Pictogram en segmento Gobierno',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Pictogram
            name="Card"
            size="LG"
            segmentName="Gobierno"
            backgroundColor="Light"
          />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram name="Card" size="LG" segmentName="Gobierno" backgroundColor="Light" />
      </div>
    )
  }
}

export const DocPictogramWithImportedSvg: Story = {
  name: 'Pictogram con children SVG importado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        import PictogramCash from './path/to/cash.svg'
        return (
          <Pictogram>{PictogramCash}</Pictogram>
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram>{PictogramCash}</Pictogram>
      </div>
    )
  }
}

export const DocPictogramWithChildren: Story = {
  name: 'Pictogram con SVG incrustrado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `

        return (
          <Pictogram>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.76 52.0195H30.23C30.1 52.0195 30 51.8895 30 51.7195V48.3195C30 48.1495 30.11 48.0195 30.23 48.0195H33.76C33.89 48.0195 33.99 48.1495 33.99 48.3195V51.7195C33.99 51.8895 33.88 52.0195 33.76 52.0195Z" fill="#053575"/>
              <path d="M33.76 16.0303H30.23C30.1 16.0303 30 15.9003 30 15.7303V12.3303C30 12.1603 30.11 12.0303 30.23 12.0303H33.76C33.89 12.0303 33.99 12.1603 33.99 12.3303V15.7303C33.99 15.9003 33.88 16.0303 33.76 16.0303Z" fill="#053575"/>
              <path d="M37.2203 27.0301C37.1003 24.0701 34.4603 21.6901 31.2803 21.9501C28.8703 22.1501 26.8303 23.9401 26.4003 26.2501C26.4003 26.2801 26.4003 26.3001 26.3903 26.3301C26.0203 28.5001 27.4503 30.6001 29.6103 31.2601L34.3903 32.7301C36.5503 33.4001 37.9803 35.4901 37.6103 37.6601C37.6103 37.6901 37.6103 37.7101 37.6003 37.7401C37.1703 40.0501 35.1303 41.8501 32.7203 42.0401C29.5503 42.3001 26.9303 39.9501 26.7803 37.0101" stroke="#053575" strokeWidth="4" strokeMiterlimit="10"/>
              <path d="M58 32C58 46.36 46.36 58 32 58C17.64 58 6 46.36 6 32" stroke="#203AE9" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M6 32C6 17.64 17.64 6 32 6C46.36 6 58 17.64 58 32" stroke="#053575" strokeWidth="4" strokeMiterlimit="10"/>
            </svg>          
        </Pictogram>
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Pictogram>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.76 52.0195H30.23C30.1 52.0195 30 51.8895 30 51.7195V48.3195C30 48.1495 30.11 48.0195 30.23 48.0195H33.76C33.89 48.0195 33.99 48.1495 33.99 48.3195V51.7195C33.99 51.8895 33.88 52.0195 33.76 52.0195Z"
              fill="#053575"
            />
            <path
              d="M33.76 16.0303H30.23C30.1 16.0303 30 15.9003 30 15.7303V12.3303C30 12.1603 30.11 12.0303 30.23 12.0303H33.76C33.89 12.0303 33.99 12.1603 33.99 12.3303V15.7303C33.99 15.9003 33.88 16.0303 33.76 16.0303Z"
              fill="#053575"
            />
            <path
              d="M37.2203 27.0301C37.1003 24.0701 34.4603 21.6901 31.2803 21.9501C28.8703 22.1501 26.8303 23.9401 26.4003 26.2501C26.4003 26.2801 26.4003 26.3001 26.3903 26.3301C26.0203 28.5001 27.4503 30.6001 29.6103 31.2601L34.3903 32.7301C36.5503 33.4001 37.9803 35.4901 37.6103 37.6601C37.6103 37.6901 37.6103 37.7101 37.6003 37.7401C37.1703 40.0501 35.1303 41.8501 32.7203 42.0401C29.5503 42.3001 26.9303 39.9501 26.7803 37.0101"
              stroke="#053575"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
            <path
              d="M58 32C58 46.36 46.36 58 32 58C17.64 58 6 46.36 6 32"
              stroke="#203AE9"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M6 32C6 17.64 17.64 6 32 6C46.36 6 58 17.64 58 32"
              stroke="#053575"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
          </svg>
        </Pictogram>
      </div>
    )
  }
}
