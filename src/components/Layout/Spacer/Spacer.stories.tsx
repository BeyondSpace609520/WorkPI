import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Map } from 'immutable';
import { Spacer } from './Spacer';
import { Row } from '../Row/Row';


export default {
  title: 'WorkPi/UI/Layout/Spacer',
  component: Spacer,
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

const TemplateRow: Story<{}> = (args) => <Row>
  <p style={boxStyle}>A</p>
  <Spacer/>
  <p style={boxStyle}>B</p>
</Row>;


export const RowWithSpacer = TemplateRow.bind({});
RowWithSpacer.args = {

};
