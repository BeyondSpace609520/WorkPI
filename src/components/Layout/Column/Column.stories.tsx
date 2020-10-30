import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Map } from 'immutable';
import { Column, ColumnProps } from './Column';


export default {
  title: 'WorkPi/UI/Layout/Column',
  component: Column,
  argTypes: {
  },
} as Meta;

const boxStyle: React.CSSProperties = {
  height: '50px',
  width: '50px',
  background: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  border: '1px solid black',
  margin: 2
};

const TemplateColumn: Story<ColumnProps> = (args) => <Column {...args}>
  <p style={boxStyle}>A</p>
  <p style={boxStyle}>B</p>
</Column>;



export const ColumnLayout = TemplateColumn.bind({});
ColumnLayout.args = {

};

