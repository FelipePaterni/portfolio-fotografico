import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Template from './template'


const meta: Meta<typeof Template> = {
  title: 'template',
  component: Template,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {

}
