import React, { useState } from 'react';
import './Table.scss';
import { patchObject } from '../../../util';


export type TableHeaderRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  /** Soon to be removed. */
  hasActions?: boolean
}

/** A header row for a table. */

export const TableHeaderRow: React.FC<TableHeaderRowProps> = props => {
  const [rowHasFocus, setRowHasFocus] = useState(false);
  const trProps = patchObject(props, {
    className: (props.className ?? '')
      + ' workpi-table-row'
      + (rowHasFocus ? ' focus' : ''),
    onClick: (ev) => {
      setRowHasFocus(!rowHasFocus)
      if (props.onClick) {
        props.onClick(ev);
      }
    }
  })
  return <>
    <tr {...trProps}>
      {props.children}
      { props.hasActions === true ? <th className="workpi-table-header-cell"></th> : null }
    </tr>
  </>
}
