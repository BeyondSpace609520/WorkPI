import React from 'react';
import { Property } from 'csstype';
import './Column.scss';

export type ColumnProps = {
  justify?: Property.JustifyContent
  align?: Property.AlignItems
}

function getStyle(props: ColumnProps): React.CSSProperties {
  return {
    justifyContent: props.justify,
    alignItems: props.align
  }
}


/** A layout column container. */

export const Column: React.FC<ColumnProps> = props =>
  <div className="workpi-layout-column" style={getStyle(props)}>{props.children}</div>
