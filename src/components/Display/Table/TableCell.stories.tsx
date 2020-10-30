import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';
import { TableCell, TableCellProps } from './TableCell';

export default {
  title: 'WorkPi/UI/Display/Table/Table Cell',
  component: TableCell,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '80%',
  height: '400px'
};

const Template: Story<TableCellProps> = (args) => <TableCell {...args} >Heading</TableCell>;

export const Normal = Template.bind({});
Normal.args = {

};

