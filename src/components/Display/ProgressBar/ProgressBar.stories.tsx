import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'WorkPi/UI/Display/Progress Bar',
  component: ProgressBar,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  background: '#333',
  height: '20px',
  padding: '10px'
};


const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 20
};

const TemplateDark: Story<ProgressBarProps> = (args) =>
  <div style={previewStyle} className="dark">
    <ProgressBar {...args} />;
  </div>


/** Used on a dark background. */
export const Dark = TemplateDark.bind({});
Dark.args = {
  value: 20
};
Dark.parameters = {
  backgrounds: { default: 'dark' }
}