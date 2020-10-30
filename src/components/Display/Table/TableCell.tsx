import React, { useState } from 'react';
import './Table.scss';
import { patchObject } from '../../../util';


export type TableCellProps = React.HTMLAttributes<HTMLTableCellElement> & {

}

export const TableCell: React.FC<TableCellProps> = props => {
  const tdProps = patchObject(props, { className: props.className + ' ' + 'workpi-table-cell' })

  return <td {...tdProps}>{props.children}</td>
}



