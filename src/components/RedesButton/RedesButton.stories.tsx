import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RedesButton from "./RedesButton";

const meta: Meta<typeof RedesButton> = {
  title: "components/redesButton",
  component: RedesButton,
  tags: ["autodocs"],
  args:{
    className:"h-dvh",
  },
  argTypes:{
    iconSize:{
      control:{
        type:"number"
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    instagram: "user",
    behance: "user",
    facebook: "user",
  },

};
