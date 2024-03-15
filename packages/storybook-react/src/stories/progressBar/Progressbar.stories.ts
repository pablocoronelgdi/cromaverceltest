import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Feedback/Progressbar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    duration: { control: { type: 'number' } },
    percentage: { control: { type: 'number' } },
    label: { control: { type: 'text' } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const ProgressbarDefault: Story = {
  args: {
    duration: 100
  }
}

export const ProgressbarLabel: Story = {
  args: {
    duration: 75,
    label: 'Subiendo archivos..'
  }
}
