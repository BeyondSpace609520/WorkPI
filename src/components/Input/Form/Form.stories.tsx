import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form, FormProps, useForm } from './Form';
import { TextInput } from '../TextInput/TextInput';
import { Map } from 'immutable';


export default {
  title: 'WorkPi/Components/Input/Form',
  component: Form,
  argTypes: {
  },
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args}>
  <TextInput id="text-a" label="Sample A"></TextInput>
  <TextInput id="text-b" label="Sample B"></TextInput>
</Form>;


export const Example = Template.bind({});
Example.args = {
  onCommit: (values) => {},
  onCommitErrors: (errors) => {}
};

