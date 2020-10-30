import React from 'react';
import { Property } from 'csstype';
import './Row.scss';

export type RowProps = {
  justify?: Property.JustifyContent
  align?: Property.AlignItems
}

function getStyle(props: RowProps): React.CSSProperties {
  return {
    justifyContent: props.justify,
    alignItems: props.align
  }
}

/** A layout row container. */

export const Row: React.FC<RowProps> = props => 
  <div className="workpi-layout-row" style={getStyle(props)}>{props.children}</div>

