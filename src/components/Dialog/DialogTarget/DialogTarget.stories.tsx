import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { DialogTargetContainer, DialogTargetContainerProps } from './DialogTarget';

export default {
  title: 'WorkPi/Components/Dialog/Dialog Target',
  component: DialogTargetContainer,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '50%',
  height: '100px'
};

const Template: Story<DialogTargetContainerProps> = (args) => <DialogTargetContainer {...args}/>;

export const Normal = Template.bind({});
Normal.args = {

};

