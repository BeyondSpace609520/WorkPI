import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';
import { TableHeaderCell, TableHeaderCellProps } from './TableHeaderCell';

export default {
  title: 'WorkPi/UI/Display/Table/Table Header Cell',
  component: TableHeaderCell,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '80%',
  height: '400px'
};

const Template: Story<TableHeaderCellProps> = (args) => <TableHeaderCell {...args} >Heading</TableHeaderCell>;

export const Normal = Template.bind({});
Normal.args = {

};

