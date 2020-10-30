import { MockedProvider } from '@apollo/client/testing';
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { BrowserRouter, RouteProps } from 'react-router-dom';
import { AuthRoute } from './AuthRoute';


export default {
  title: 'WorkPi/Components/Navigation/Auth Route',
  component: AuthRoute,
  argTypes: {
  },
} as Meta;


const Template: Story<RouteProps> = (args) =>
  <MockedProvider>
    <BrowserRouter>
      <AuthRoute></AuthRoute>
    </BrowserRouter>
  </MockedProvider>



export const Default = Template.bind({});
Default.args = {
  path: '/'
};

