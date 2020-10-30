import React, { useState } from 'react';
import './Table.scss';
import { patchObject } from '../../../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextMenuItem, useContextMenu } from '../../Menu/ContextMenu/ContextMenu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  /** Row actions. */
  actions?: ContextMenuItem[]
}


export const TableRow: React.FC<TableRowProps> = props => {
  const trProps = patchObject(props, {
    className: (props.className ?? '')
      + ' workpi-table-row'
  })
  const ctxMenu = useContextMenu();
  const [menuOpen, setMenuOpen] = useState(false);
  const openActions = (ev: React.MouseEvent) => {
    setMenuOpen(true);
    ctxMenu.showAtPos(ev.clientX, ev.clientY, props.actions!, {
      onClose: () => {
        setMenuOpen(false);
      }, orientation: 'sw'
    })
  }
  const className = 'workpi-table-cell workpi-row-actions' + (menuOpen ? ' active' : '');
  return <>
    <tr {...trProps}>
      {props.children}
      {props.actions ?
        <td className={className} onClick={openActions}>
          <div>
            <FontAwesomeIcon title="Actions" icon={['fas', 'ellipsis-v']}></FontAwesomeIcon>
          </div>
        </td>
        : null}
    </tr>
  </>
}
