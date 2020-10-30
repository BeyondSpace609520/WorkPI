import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { WidgetFrame, WidgetFrameProps } from './WidgetFrame';


export default {
  title: 'WorkPi/UI/Widget/Widget Frame',
  component: WidgetFrame,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '50%',
  height: '100px',
};


const Template: Story<WidgetFrameProps> = (args) =>
  <div style={previewStyle}>
    <WidgetFrame {...args}></WidgetFrame>
  </div>



export const Default = Template.bind({});
Default.args = {
  title: 'Test'
};
