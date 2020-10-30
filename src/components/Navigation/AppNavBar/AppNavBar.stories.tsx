import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppNavBar, AppNavBarProps } from './AppNavBar';


export default {
  title: 'WorkPi/UI/Navigation/App Nav Bar',
  component: AppNavBar,
  argTypes: {
  },
} as Meta;


const Template: Story<AppNavBarProps> = (args) => 
<BrowserRouter>
  <AppNavBar {...args}></AppNavBar>
  </BrowserRouter>



export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 't1',
      label: 'Test',
      path: '/test'
    }
  ]
};

