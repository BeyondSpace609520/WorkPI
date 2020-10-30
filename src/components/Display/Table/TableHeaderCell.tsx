import React, { useState } from 'react';
import './Table.scss';
import { patchObject } from '../../../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextMenuItem, useContextMenu } from '../../Menu/ContextMenu/ContextMenu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SortState = 'unsorted' | 'ascending' | 'descending';

export type TableHeaderCellProps = React.HTMLAttributes<HTMLTableCellElement> & {
  /** Is the column sortable?
   * @default false */
  sortable?: boolean
  /** Set the initial sort state of the column.
   * @default 'unsorted' */
  initialSortState?: SortState
  /** This function is called when the user clicks on the sort icon.
   * The function should return the new sort state. */
  onClickSort?: (currentState: SortState) => SortState
}

/**
 * A table header cell.
 */

export const TableHeaderCell: React.FC<TableHeaderCellProps> = props => {
  const [sortState, setSortState] = useState<SortState>('unsorted');
  const thProps = patchObject(props, {
    className: (props.className ?? '') + ' workpi-table-header-cell'
  })
  const onClickSort = () => {
    if (!props.onClickSort) return;
    setSortState(props.onClickSort(sortState));
  }
  const sortIcon: IconProp = [
    'fas',
    sortState === 'unsorted' ? 'sort' :
    sortState === 'ascending' ? 'sort-up' :
    'sort-down'
  ]

  return <th {...thProps}>
    <div>
      <div>{props.children}</div>
      { props.sortable ? <div onClick={onClickSort}><FontAwesomeIcon icon={sortIcon}></FontAwesomeIcon></div> : null }
      </div>
    </th>
}




