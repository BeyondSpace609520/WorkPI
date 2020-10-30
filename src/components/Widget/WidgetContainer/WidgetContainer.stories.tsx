import { MockedProvider } from '@apollo/client/testing';
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { BrowserRouter, RouteProps } from 'react-router-dom';
import { WidgetContainer, WidgetContainerProps } from './WidgetContainer';


export default {
  title: 'WorkPi/Components/Widget/Widget Container',
  component: WidgetContainer,
  argTypes: {
  },
} as Meta;


const Template: Story<WidgetContainerProps> = (args) =>
  <WidgetContainer {...args}></WidgetContainer>



export const Default = Template.bind({});
Default.args = {
  unitSize: 120,
  id: 'test',
  widgets: []
};

