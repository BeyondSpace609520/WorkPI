import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from './TextInput';
import { notEmpty } from '../Form/Validators';

export default {
  title: 'WorkPi/UI/Input/Text Input',
  component: TextInput,
  argTypes: {
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Normal text input',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password input',
  password: true
};

export const Validation = Template.bind({});
Validation.args = {
  label: 'Only char a allowed',
  validators: [(v) => {
    for (const c of v) {
      if (c !== 'a') {
        return 'Value contains something that is not a.'
      }
    }
    return true;
  }],
  validateWhileTyping: true
};