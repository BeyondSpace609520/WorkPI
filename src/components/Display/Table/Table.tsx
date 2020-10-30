import React, { useState } from 'react';
import './Table.scss';
import { patchObject } from '../../../util';


export type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  /** An optional header (TableHeaderRow) element. */
  header?: React.ReactElement
  /** An array of table row (TableRow) elements. */
  rows: React.ReactElement[]
}

/** A table UI component. */

export const Table: React.FC<TableProps> = props => {
  const tProps = patchObject(props, {
    className: (props.className ?? '')
      + ' workpi-table'
  })

  return <div className="workpi-table-container"><table className={tProps.className}>
    {props.header ? <thead className="workpi-table-header">{props.header}</thead> : null}
    <tbody className="workpi-table-body">{props.rows}</tbody>
  </table></div>
}
