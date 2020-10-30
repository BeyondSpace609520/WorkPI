import React, { createRef } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
// import { useEntitiesQuery } from '../../../../gen/hooks'
import { EntitiesQuery } from '../../../../gen/operations'
import Entities from './EntitiesGet.graphql';

import { EditEntityDialog, NewEntityDialog } from "../Dialogs/Entity";
import { createDialog } from "../../../../components/Dialog/Dialog";
import { ActionButton } from "../../../../components/Input/ActionButton/ActionButton";
import { buildWidget } from "../../../../components/Widget/WidgetContainer/WidgetContainer";
import { WidgetFrame } from "../../../../components/Widget/WidgetFrame/WidgetFrame";
import { useDialogTarget } from "../../../../components/Dialog";
import { Table } from "../../../../components/Display/Table";
import { TableCell } from "../../../../components/Display/Table/TableCell";
import { TableHeaderCell } from "../../../../components/Display/Table/TableHeaderCell";
import { TableHeaderRow } from "../../../../components/Display/Table/TableHeaderRow";
import { TableRow } from "../../../../components/Display/Table/TableRow";


const EntitiesWidgetImpl: React.FC = props => {
  // const client = useApolloClient();
  // const { loading, error, data } = useEntitiesQuery({client: client}); //useQuery(ENTITIES_GET);
  const dialogCtrl = useDialogTarget();
  const { loading, error, data } = useQuery<EntitiesQuery>(Entities);
  if (loading) return <WidgetFrame title="Entities"><div>Loading...</div></WidgetFrame>;
  if (error) return <WidgetFrame title="Entities"><div>Error, data not found: {error.message}</div></WidgetFrame>;
  if (!data) return <WidgetFrame title="Entities"><div>No data available for this request</div></WidgetFrame>;

  const rowData = data.unitFind;
  const newEntity = () => {
    dialogCtrl.showDialog(createDialog(<NewEntityDialog></NewEntityDialog>))
  }

  return <WidgetFrame title={'Entities'} actions={[
    <ActionButton key="add" icon={['fas', 'plus']} title="Add" onClick={newEntity}></ActionButton>
  ]} padding={0}><Table header={
    <TableHeaderRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Key</TableHeaderCell>
      <TableHeaderCell>Description</TableHeaderCell>
      <TableHeaderCell>Entity Type</TableHeaderCell>
      <TableHeaderCell>Indicator Count</TableHeaderCell>
      <TableHeaderCell>Measurement Count</TableHeaderCell>
    </TableHeaderRow>
  } rows={
    rowData.map((row) => {

      return <TableRow key={row.key} actions={[
        { id: 'edit', label: 'Edit', icon: ['fas', 'edit'], onTrigger: () => {
          dialogCtrl.showDialog(createDialog(<EditEntityDialog entityId={Number(row.id)}></EditEntityDialog>))
        } },
        { id: 'del', label: 'Delete', icon: ['fas', 'trash'], onTrigger: () => {} },
      ]}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.key}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.unitType.name}</TableCell>
              <TableCell>{row.indicatorCount}</TableCell>
              <TableCell>{row.measurementCount}</TableCell>
            </TableRow>
    })
  }></Table>
  </WidgetFrame>
}


export const EntitiesWidget = buildWidget(
  <div><EntitiesWidgetImpl></EntitiesWidgetImpl></div>,
  4,
  2,
  {
    minWidth: 4
  }
)