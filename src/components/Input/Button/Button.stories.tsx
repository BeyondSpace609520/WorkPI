import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'WorkPi/UI/Input/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Caption</Button>;

export const Normal = Template.bind({});
Normal.args = {
  
};

export const Primary = Template.bind({});
Primary.args = {
  role: 'primary'
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  variant: 'rectangle'
};

export const RectanglePrimary = Template.bind({});
RectanglePrimary.args = {
  variant: 'rectangle',
  role: 'primary'
};

export const Borderless = Template.bind({});
Borderless.args = {
  variant: 'borderless'
};

