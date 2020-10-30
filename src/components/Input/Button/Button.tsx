import React from 'react';
import './Button.scss';

export type ButtonProps = {
  /** The button title, visible when hovering over the button. */
  title?: string
  /** Function to trigger when the user clicks the button. */
  onClick?: () => void
  /** The button variant, default is rounded, rectangle is more squared. Borderless looks like a link. */
  variant?: 'default' | 'rectangle' | 'borderless'
  /** Set the role to primary if it is the default button in a view. */
  role?: 'primary' | 'default'
  /** Disabled state makes the button unclickable. */
  disabled?: boolean
}

const getClassName = (props: ButtonProps) => [
  'workpi-button',
  props.role ?? 'default',
  props.variant ?? 'default',
  props.disabled === true ? 'disabled' : ''
].join(' ')

/** A simple button. */

export const Button: React.FC<ButtonProps> = props => {
  const handleClick = () => {
    if (props.disabled || !props.onClick) return;
    props.onClick();
  }
  return <div className={getClassName(props)} onClick={handleClick} title={props.title}>
    <div className="bg"></div>
    <div className="label">{props.children}</div>
  </div>;
}