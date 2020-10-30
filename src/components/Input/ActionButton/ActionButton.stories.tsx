import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ActionButton, ActionButtonProps } from './ActionButton';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { WidgetFrame } from '../../Widget/WidgetFrame/WidgetFrame';

library.add(fas, fab as any);

export default {
  title: 'WorkPi/UI/Input/Action Button',
  component: ActionButton,
  argTypes: {
  },
} as Meta;

const previewStyle: React.CSSProperties = {
  position: 'relative',
  width: '50%',
  height: '100px'
};

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args}/>;

const TemplateTitle: Story<ActionButtonProps> = (args) => <div style={previewStyle}><WidgetFrame
  title="Title"
  actions={[<ActionButton {...args}/>]}
></WidgetFrame></div>;

export const Normal = Template.bind({});
Normal.args = {
  icon: ['fas', 'grin']
};

export const InTitle = Template.bind({});
InTitle.args = {
  icon: ['fas', 'grin']
};
InTitle.decorators = [
  (Story) => <div style={previewStyle}><WidgetFrame
  title="Title"
  actions={[<Story/>]}
></WidgetFrame></div>
]