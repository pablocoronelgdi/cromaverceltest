import type { Meta, StoryObj } from '@storybook/react';
import { Text } from "@cromaui/react";

const meta: Meta<typeof Text> = {
    title: 'Tipografia',
    component: Text,
    argTypes:{
        $component:{
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'bodyLg', 'bodyMd', 'bodySm', 'caption'],
            control: { type: 'select' },
        },
        $variant:{
            options: ['bold', 'semibold','regular'],
            control: { type: 'radio' },
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Texto: Story =
{
    args: {
        $component: 'h1',
        $variant: 'bold',
        children:'Texto base'
    },
}