import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ActionButton.scss';

export type ActionButtonProps = {
  /** A FontAwesome icon. */
  icon: IconProp
  /** The button title, visible when hovering over the button. Also used as label inside a textual context. */
  title: string
  /** Function to trigger when the user clicks the button. */
  onClick?: () => void
  /** Disabled state makes the button unclickable. */
  disabled?: boolean
}

const getClassName = (props: ActionButtonProps) => [
    'workpi-action-button',
  ].join(' ')


/** An Action Button is a button used inside a certain context such as a menu or a title bar.
 * Usually it is displayed as an icon. In a textual context the title text is used as a label.
 */

export const ActionButton: React.FC<ActionButtonProps> = props => {
  const handleClick = () => {
    if (props.disabled || !props.onClick) return;
    props.onClick();
  }
  return <div className={getClassName(props)} onClick={handleClick}><FontAwesomeIcon title={props.title} icon={props.icon}></FontAwesomeIcon></div>;
}