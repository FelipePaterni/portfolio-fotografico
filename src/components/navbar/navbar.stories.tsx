import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Navbar from './navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Components/navbar',
  component: Navbar,
  tags: ['autodocs'],
   argTypes: {
    itensNav: {
      control: { type: "object" },
    },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
 args: {
    itensNav: ['Home', 'Sobre Mim', 'Galeria', 'Serviços'],
  },
}
