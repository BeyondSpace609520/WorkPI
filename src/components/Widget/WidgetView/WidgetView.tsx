import React from 'react';
import { patchObject } from '../../../util';
import './WidgetView.scss';

export type WidgetViewProps = React.HTMLAttributes<HTMLDivElement>;

export const WidgetView: React.FC<WidgetViewProps> = props => {
  const propsP = patchObject(props, {
    className: 'workpi-widget-view ' + (props.className ?? '')
  })
  return <div {...propsP}>{props.children}</div>
}