import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@cromaui/react";

const meta: Meta<typeof Switch> = {
  title: "Inputs",
  tags: ["autodocs"],
  component: Switch,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Switcho: Story = {};
