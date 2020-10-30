import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table, TableProps } from './Table';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';
import { TableCell } from './TableCell';
import { TableHeaderCell } from './TableHeaderCell';
import { TableHeaderRow } from './TableHeaderRow';
import { TableRow } from './TableRow';

export default {
  title: 'WorkPi/UI/Display/Table',
  component: Table,
  subComponents: [
    TableHeaderRow,
    TableHeaderCell,
    TableRow,
    TableCell
  ],
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '80%',
  height: '400px'
};

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  header: <TableHeaderRow>
    <TableHeaderCell>Heading 1</TableHeaderCell>
    <TableHeaderCell>Heading 2</TableHeaderCell>
    <TableHeaderCell>Heading 3</TableHeaderCell>
  </TableHeaderRow>,
  rows: [
    <TableRow>
    <TableCell>A</TableCell>
    <TableCell>B</TableCell>
    <TableCell>C</TableCell>
  </TableRow>,
  <TableRow>
    <TableCell>1</TableCell>
    <TableCell>2</TableCell>
    <TableCell>3</TableCell>
  </TableRow>
  ]
};


export const InsideWidget = Template.bind({});
InsideWidget.args = {
  header: <TableHeaderRow>
    <TableHeaderCell>Heading 1</TableHeaderCell>
    <TableHeaderCell>Heading 2</TableHeaderCell>
    <TableHeaderCell>Heading 3</TableHeaderCell>
  </TableHeaderRow>,
  rows: [
    <TableRow>
    <TableCell>A</TableCell>
    <TableCell>B</TableCell>
    <TableCell>C</TableCell>
  </TableRow>,
  <TableRow>
    <TableCell>1</TableCell>
    <TableCell>2</TableCell>
    <TableCell>3</TableCell>
  </TableRow>
  ]
};
InsideWidget.decorators = [
  (Story) => <div style={previewStyle}><WidgetFrame title="Table widget" padding={0}><Story/></WidgetFrame></div>
]