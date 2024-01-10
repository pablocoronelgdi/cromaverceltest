import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@cromaui/react";

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  tags: ["autodocs"],
  component: Switch,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
      description:
        "Si su valor es 'true' el componente se mostrará deshabilitado. Impidiendo su uso.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { disabled: false },
};
