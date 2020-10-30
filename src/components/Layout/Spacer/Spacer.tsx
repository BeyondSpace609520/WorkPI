import React from 'react';
import { Property } from 'csstype';
import './Spacer.scss';


/** A layout spacer to fill the space between two components. */

export const Spacer: React.FC<{}> = props =>
  <div className="workpi-layout-spacer">{props.children}</div>