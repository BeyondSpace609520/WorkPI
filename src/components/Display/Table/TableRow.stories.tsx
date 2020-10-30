import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';
import { TableCell } from './TableCell';
import { TableRow, TableRowProps } from './TableRow';

export default {
  title: 'WorkPi/UI/Display/Table/Table Row',
  component: TableRow,
  subComponents: [
    TableCell,
  ],
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '80%',
  height: '400px'
};

const Template: Story<TableRowProps> = (args) => <TableRow {...args} >
  <TableCell>A</TableCell>
  <TableCell>B</TableCell>
  <TableCell>C</TableCell>
</TableRow>;

export const Normal = Template.bind({});
Normal.args = {

};

