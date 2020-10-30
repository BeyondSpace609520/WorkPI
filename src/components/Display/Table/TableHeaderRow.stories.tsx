import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';
import { TableHeaderCell } from './TableHeaderCell';
import { TableHeaderRow, TableHeaderRowProps } from './TableHeaderRow';

export default {
  title: 'WorkPi/UI/Display/Table/Table Header Row',
  component: TableHeaderRow,
  subComponents: [
    TableHeaderCell,
  ],
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '80%',
  height: '400px'
};

const Template: Story<TableHeaderRowProps> = (args) => <TableHeaderRow {...args} >
  <TableHeaderCell>Heading 1</TableHeaderCell>
  <TableHeaderCell>Heading 2</TableHeaderCell>
  <TableHeaderCell>Heading 3</TableHeaderCell>
</TableHeaderRow>;

export const Normal = Template.bind({});
Normal.args = {

};

