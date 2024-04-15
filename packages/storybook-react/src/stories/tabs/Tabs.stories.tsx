import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '@cromaui/react'

const TABS_MOCK_1 = [
  {
    id: 'tab1',
    $label: 'Tab 1 - texto largo',
    $content: (
      <div>
        <h1>Tab 1</h1>
        <span>contenido tab 1</span>
      </div>
    )
  },
  {
    id: 'tab2',
    $label: 'Tab 2',
    $content: (
      <div>
        <h1>Tab 2</h1>
        <span>contenido tab 2</span>
      </div>
    )
  }
]

const TABS_MOCK_2 = [
  {
    id: 'tab3',
    $label: 'Tab 1 - texto largo',
    $content: (
      <div>
        <h1>Tab 1</h1>
        <span>contenido tab 1</span>
      </div>
    ),
    $iconName: 'person'
  },
  {
    id: 'tab4',
    $label: 'Tab 2',
    $content: (
      <div>
        <h1>Tab 2</h1>
        <span>contenido tab 2</span>
      </div>
    ),
    $iconName: 'home'
  },
  {
    id: 'tab5',
    $label: 'Tab 3',
    $content: (
      <div>
        <h1>Tab 3</h1>
        <span>contenido tab 3</span>
      </div>
    ),
    $iconName: 'dataset'
  }
]

const TABS_MOCK_3 = [
  {
    id: 'tab6',
    $label: 'Tab 1 - texto largo',
    $content: (
      <div>
        <h1>Tab 1</h1>
        <span>contenido tab 1</span>
      </div>
    ),
    $iconName: 'person'
  },
  {
    id: 'tab7',
    $label: 'Tab 2',
    $content: (
      <div>
        <h1>Tab 2</h1>
        <span>contenido tab 2</span>
      </div>
    ),
    $iconName: 'star'
  },
  {
    id: 'tab8',
    $label: 'Tab 3',
    $content: (
      <div>
        <h1>Tab 3</h1>
        <span>contenido tab 3</span>
      </div>
    ),
    $iconName: 'dataset'
  }
]

const TABS_MOCK_4 = [
  {
    id: 'tab9',
    $label: 'Tab 1 - texto largo',
    $content: (
      <div>
        <h1>Tab 1</h1>
        <span>contenido tab 1</span>
      </div>
    ),
    $iconName: 'person'
  },
  {
    id: 'tab10',
    $label: 'Tab 2',
    $content: (
      <div>
        <h1>Tab 2</h1>
        <span>contenido tab 2</span>
      </div>
    ),
    $iconName: 'star'
  },
  {
    id: 'tab11',
    $label: 'Tab 3',
    $content: (
      <div>
        <h1>Tab 3</h1>
        <span>contenido tab 3</span>
      </div>
    ),
    $iconName: 'settings'
  },
  {
    id: 'tab12',
    $label: 'Tab 4',
    $content: (
      <div>
        <h1>Tab 4</h1>
        <span>contenido tab 4</span>
      </div>
    ),
    $iconName: 'dataset'
  },
  {
    id: 'tab13',
    $label: 'Tab 5',
    $content: (
      <div>
        <h1>Tab 5</h1>
        <span>contenido tab 5</span>
      </div>
    ),
    $iconName: 'arrow_back_ios'
  },
  {
    id: 'tab14',
    $label: 'Tab 6',
    $content: (
      <div>
        <h1>Tab 6</h1>
        <span>contenido tab 6</span>
      </div>
    ),
    $iconName: 'zoom_in'
  },
  {
    id: 'tab15',
    $label: 'Tab 7',
    $content: (
      <div>
        <h1>Tab 7</h1>
        <span>contenido tab 7</span>
      </div>
    ),
    $iconName: 'delete'
  }
]

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    $items: {
      description: 'Recibe un Array de items con $content, $label e $iconName principalmente',
      control: { type: 'Array' },
      table: {
        type: { summary: 'Array' },
        defaultValue: {
          summary: `[{
          $content?: ReactNode,
          $label?: string,
          id?: string
        }]`
        }
      }
    },
    $isDismissibleItems: {
      description: 'Define si los items y su contenido de las Tabs son descartables',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    $isVerticalItems: {
      description:
        'Define si los items de las Tabs se ven de forma vertical, solo funciona en mobile',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const TabsDefault: Story = {
  name: 'Tabs deafult',
  args: { $items: TABS_MOCK_1 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_MOCK_1 = [
          {
            id: 'tab1',
            $label: 'Tab 1 - texto largo',
            $content: (
              <div>
                <h1>Tab 1</h1>
                <span>contenido tab 1</span>
              </div>
            ),
            $iconName: 'person'
          },
          {
            id: 'tab2',
            $label: 'Tab 2',
            $content: (
              <div>
                <h1>Tab 2</h1>
                <span>contenido tab 2</span>
              </div>
            ),
            $iconName: 'home'
          }
        ]
    
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Tabs $items={TABS_MOCK_1} />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_MOCK_1 = [
      {
        id: 'tab1',
        $label: 'Tab 1 - texto largo',
        $content: (
          <div>
            <h1>Tab 1</h1>
            <span>contenido tab 1</span>
          </div>
        ),
        $iconName: 'person'
      },
      {
        id: 'tab2',
        $label: 'Tab 2',
        $content: (
          <div>
            <h1>Tab 2</h1>
            <span>contenido tab 2</span>
          </div>
        ),
        $iconName: 'home'
      }
    ]

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Tabs $items={TABS_MOCK_1} />
      </div>
    )
  }
}

export const TabsWithIcon: Story = {
  name: 'Tabs with icons',
  args: { $items: TABS_MOCK_2 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_MOCK_2 = [
          {
            id: 'tab3',
            $label: 'Tab 1 - texto largo',
            $content: (
              <div>
                <h1>Tab 1</h1>
                <span>contenido tab 1</span>
              </div>
            ),
            $iconName: 'person'
          },
          {
            id: 'tab4',
            $label: 'Tab 2',
            $content: (
              <div>
                <h1>Tab 2</h1>
                <span>contenido tab 2</span>
              </div>
            ),
            $iconName: 'home'
          },
          {
            id: 'tab5',
            $label: 'Tab 2',
            $content: (
              <div>
                <h1>Tab 2</h1>
                <span>contenido tab 2</span>
              </div>
            ),
            $iconName: 'dataset'
          }
        ]
    
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Tabs $items={TABS_MOCK_2} />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_MOCK_2 = [
      {
        id: 'tab3',
        $label: 'Tab 1 - texto largo',
        $content: (
          <div>
            <h1>Tab 1</h1>
            <span>contenido tab 1</span>
          </div>
        ),
        $iconName: 'person'
      },
      {
        id: 'tab4',
        $label: 'Tab 2',
        $content: (
          <div>
            <h1>Tab 2</h1>
            <span>contenido tab 2</span>
          </div>
        ),
        $iconName: 'home'
      },
      {
        id: 'tab5',
        $label: 'Tab 2',
        $content: (
          <div>
            <h1>Tab 2</h1>
            <span>contenido tab 2</span>
          </div>
        ),
        $iconName: 'dataset'
      }
    ]

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Tabs $items={TABS_MOCK_2} />
      </div>
    )
  }
}

export const TabsVerticalItems: Story = {
  name: 'Tabs with vertical items',
  args: { $items: TABS_MOCK_3 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_MOCK_3 = [
          {
            id: 'tab6',
            $label: 'Tab 1 - texto largo',
            $content: (
              <div>
                <h1>Tab 1</h1>
                <span>contenido tab 1</span>
              </div>
            ),
            $iconName: 'person'
          },
          {
            id: 'tab7',
            $label: 'Tab 2',
            $content: (
              <div>
                <h1>Tab 2</h1>
                <span>contenido tab 2</span>
              </div>
            ),
            $iconName: 'star'
          },
          {
            id: 'tab8',
            $label: 'Tab 3',
            $content: (
              <div>
                <h1>Tab 3</h1>
                <span>contenido tab 3</span>
              </div>
            ),
            $iconName: 'dataset'
          }
        ]
        
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Tabs $items={TABS_MOCK_3} $isVerticalItems />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_MOCK_3 = [
      {
        id: 'tab6',
        $label: 'Tab 1 - texto largo',
        $content: (
          <div>
            <h1>Tab 1</h1>
            <span>contenido tab 1</span>
          </div>
        ),
        $iconName: 'person'
      },
      {
        id: 'tab7',
        $label: 'Tab 2',
        $content: (
          <div>
            <h1>Tab 2</h1>
            <span>contenido tab 2</span>
          </div>
        ),
        $iconName: 'star'
      },
      {
        id: 'tab8',
        $label: 'Tab 3',
        $content: (
          <div>
            <h1>Tab 3</h1>
            <span>contenido tab 3</span>
          </div>
        ),
        $iconName: 'dataset'
      }
    ]

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Tabs $items={TABS_MOCK_3} $isVerticalItems />
      </div>
    )
  }
}

export const TabsDismissible: Story = {
  name: 'Tabs with items dissmisible',
  args: { $items: TABS_MOCK_4 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_MOCK_4 = [
          {
            id: 'tab9',
            $label: 'Tab 1 - texto largo',
            $content: (
              <div>
                <h1>Tab 1</h1>
                <span>contenido tab 1</span>
              </div>
            ),
            $iconName: 'person'
          },
          {
            id: 'tab10',
            $label: 'Tab 2',
            $content: (
              <div>
                <h1>Tab 2</h1>
                <span>contenido tab 2</span>
              </div>
            ),
            $iconName: 'star'
          },
          {
            id: 'tab11',
            $label: 'Tab 3',
            $content: (
              <div>
                <h1>Tab 3</h1>
                <span>contenido tab 3</span>
              </div>
            ),
            $iconName: 'settings'
          },
          {
            id: 'tab12',
            $label: 'Tab 4',
            $content: (
              <div>
                <h1>Tab 4</h1>
                <span>contenido tab 4</span>
              </div>
            ),
            $iconName: 'dataset'
          },
          {
            id: 'tab13',
            $label: 'Tab 5',
            $content: (
              <div>
                <h1>Tab 5</h1>
                <span>contenido tab 5</span>
              </div>
            ),
            $iconName: 'arrow_back_ios'
          }
        ]
        
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Tabs $items={TABS_MOCK_4} $isDismissibleItems />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_MOCK_4 = [
      {
        id: 'tab9',
        $label: 'Tab 1 - texto largo',
        $content: (
          <div>
            <h1>Tab 1</h1>
            <span>contenido tab 1</span>
          </div>
        ),
        $iconName: 'person'
      },
      {
        id: 'tab10',
        $label: 'Tab 2',
        $content: (
          <div>
            <h1>Tab 2</h1>
            <span>contenido tab 2</span>
          </div>
        ),
        $iconName: 'star'
      },
      {
        id: 'tab11',
        $label: 'Tab 3',
        $content: (
          <div>
            <h1>Tab 3</h1>
            <span>contenido tab 3</span>
          </div>
        ),
        $iconName: 'settings'
      },
      {
        id: 'tab12',
        $label: 'Tab 4',
        $content: (
          <div>
            <h1>Tab 4</h1>
            <span>contenido tab 4</span>
          </div>
        ),
        $iconName: 'dataset'
      },
      {
        id: 'tab13',
        $label: 'Tab 5',
        $content: (
          <div>
            <h1>Tab 5</h1>
            <span>contenido tab 5</span>
          </div>
        ),
        $iconName: 'arrow_back_ios'
      }
    ]

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Tabs $items={TABS_MOCK_4} $isDismissibleItems />
      </div>
    )
  }
}
