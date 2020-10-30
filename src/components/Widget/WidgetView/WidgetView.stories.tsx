import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { WidgetView, WidgetViewProps } from './WidgetView';


export default {
  title: 'WorkPi/UI/Widget/Widget View',
  component: WidgetView,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '50%',
  height: '100px'
};


const Template: Story<WidgetViewProps> = (args) =>
  <div style={previewStyle}>
    <WidgetView {...args}></WidgetView>
  </div>



export const Default = Template.bind({});
Default.args = {

};
