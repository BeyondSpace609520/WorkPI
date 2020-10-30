import React from 'react';
import { patchObject } from '../../../util';
import './WidgetFrame.scss';

export type WidgetFrameProps = React.HTMLAttributes<HTMLDivElement> & {
  /** The title of the widget. */
  title: React.ReactNode
  /** The role of the widget. Normal is used for primary widgets, aside for secondary widgets,
   * and emphasized for emphasized widgets.
   */
  role?: 'normal'| 'aside' | 'focus' | 'emphasized' | 'modal'
  /** The type of title bar to use. */
  titleBar?: 'normal' | 'simple' | 'none'
  /** When 1, padding is added to the content. */
  padding?: number
  /** The element to render inside the bottom part of the widget. */
  bottom?: React.ReactNode
  /** Actions (ActionButton) to render inside the title bar. (requires the title bar to be visible) */
  actions?: React.ReactElement[]
  /** Is the current widget in a loading state? */
  isLoading?: boolean
}



const getClassName = (props: WidgetFrameProps) => {
  const role = props.role ?? 'normal';
  const titleBar = props.titleBar ?? 'normal';
  return [
    'workpi-widget',
    role,
    (props.padding ?? 1) === 1 ? 'with-padding' : '',
    'titlebar-' + titleBar
  ].join(' ') + ` ${props.className ?? ''}`;
}

/** A widget frame component to be used for widgets or dialogs. */

export const WidgetFrame: React.FC<WidgetFrameProps> = props => {
  const pProps = patchObject(props, {
    className: getClassName(props),
    isLoading: undefined
  });
  return <div {...pProps}>
    <div className="title"><div className="title-buttons"></div><div className="label">{props.title}</div><div className="actions">{props.actions}</div></div>
    <div className="content">{props.children}</div>
    { props.bottom && <div className="bottom dark">{props.bottom}</div> }
    
    { props.isLoading ? <div className="loading"></div> : null }
  </div>
}