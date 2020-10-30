import React, { useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Map } from 'immutable';
import { ContextMenuTarget, ContextMenuTargetProps, useContextMenu } from './ContextMenu';
import { Button } from '../../Input/Button/Button';


export default {
  title: 'WorkPi/Components/Menu/Context Menu',
  component: ContextMenuTarget,
  argTypes: {
  },
} as Meta;

const boxStyle: React.CSSProperties = {
  height: '100px',
  width: '100%',
};

const MenuDemo: React.FC = props => {
  const ctx = useContextMenu();
  const showMenu = () => {
    const showMenuTrigger = () => {
      setTimeout(showMenu, 400);
    }
    ctx.showAtPos(20, 20, [
      {id: 't1', label: 'Test', onTrigger: showMenuTrigger},
      {id: 't2', label: 'Test 2', onTrigger: showMenuTrigger},
    ])
  }

  useEffect(() => {
    showMenu();
  }, []);

  return <div></div>
}

const Template: Story<ContextMenuTargetProps> = (args) => <ContextMenuTarget {...args}>
  <MenuDemo/>
</ContextMenuTarget>



export const MenuTarget = Template.bind({});
MenuTarget.args = {
  style: boxStyle
};

