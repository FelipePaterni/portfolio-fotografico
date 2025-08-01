import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";


const meta: Meta<typeof Button> = {
  title: "components/button",
  component: Button,
  tags: ["autodocs"],

  args: {
    children: "button",

  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Botão",
  },
};

export const CustomSytle: Story = {
  args: {
    children: "Botão customizado",
    className: "",
  },
};
