import React, { useEffect, useRef, useState } from 'react';

import { Map } from 'immutable';
import './Entity.scss';

import { useDialog } from '../../../../components/Dialog/Dialog';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { EditEntity, EntityEditGet, EntityTypes } from './Entity.graphql';
import { Button } from '../../../../components/Input/Button';
import { Form, notEmpty, FormCommitButton } from '../../../../components/Input/Form';
import { Select } from '../../../../components/Input/Select';
import { TextInput } from '../../../../components/Input/TextInput';
import { Row } from '../../../../components/Layout/Row';
import { Spacer } from '../../../../components/Layout/Spacer';
import { WidgetFrame } from '../../../../components/Widget/WidgetFrame';
import { EntityEditGetQuery, EntityTypesQuery } from '../../../../gen/operations';

type EntityDialogProps = {
  className: string
  title: string
  loading?: boolean
  initialValues?: { [key: string]: string }
  onCommit: (values: Map<string, string>) => void
}

const EntityDialog: React.FC<EntityDialogProps> = props => {
  const entTypesQ = useQuery<EntityTypesQuery>(EntityTypes);
  const dialogCtx = useDialog();
  let entTypes: string[] = [];

  if (entTypesQ.error) {
    // TODO: error dialog
    throw entTypesQ.error;
  }

  if (entTypesQ.data) {
    entTypes = entTypesQ.data.unitTypeFind.map(e => e.name);
  }

  const loading = entTypesQ.loading || (props.loading ?? false);

  const value = (key: string) => {
    if (!props.initialValues) return undefined;
    return props.initialValues[key];
  }

  const entType = value('ent-type') ? entTypes.indexOf(value('ent-type')!) : 0;

  const onCommit = (values: Map<string, string>) => {
    props.onCommit(values);
    dialogCtx.closeDialog();
  }
  const onCommitErrors = (errors: Map<string, string[]>) => {

  }


  return (
    <WidgetFrame className={props.className} title={props.title} role="modal" isLoading={loading}>
      <Form onCommit={onCommit} onCommitErrors={onCommitErrors}>
        <TextInput id="ent-name" label="Entity name" validators={[notEmpty]} value={value('ent-name')}></TextInput>
        <TextInput id="ent-desc" label="Entity description" value={value('ent-desc')}></TextInput>
        <Select id="ent-type" label="Entity type" items={entTypes} currentIndex={entType}></Select>
        <Row><Spacer /><Button title="Cancel" variant="rectangle" onClick={dialogCtx.closeDialog}>Cancel</Button><FormCommitButton title="Save" variant="rectangle" role="primary">Save</FormCommitButton></Row>
      </Form>
    </WidgetFrame>
  )
}



export type EditEntityDialogProps = {
  entityId: number
}

export const EditEntityDialog: React.FC<EditEntityDialogProps> = props => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery<EntityEditGetQuery>(EntityEditGet, {
    variables: {
      id: props.entityId
    }
  });
  let initialValues: { [key: string]: string } | undefined;

  if (error) {
    // TODO: error dialog
    // throw error;
    console.error(error);
  }

  if (data) {
    const e = data.unitFind[0];

    if (e) {
      initialValues = {
        'ent-name': e.name,
        'ent-desc': e.description ?? '',
        'ent-type': e.unitType.name
      }
    } else {
      // TODO: error dialog
      throw 'Could not load entity with id: ' + props.entityId;
    }
  }

  const onCommit = (values: Map<string, string>) => {
    // client.mutate<EditEntityMutation>({
    //   mutation: EditEntity,
    //   variables: {
    //     id: '',
    //     data: {
    //       name: values.get('ent-name'),
    //       description: values.get('ent-description'),
    //       type: values.get('ent-type')
    //     }
    //   }
    // }).then((result) => {

    // }, (err) => {
    //   throw err;
    // });
  }

  return <EntityDialog 
    className="edit-entity-dialog"
    title="Edit entity"
    loading={loading}
    initialValues={initialValues}
    onCommit={onCommit}></EntityDialog>
}

export type NewEntityDialogProps = {}

export const NewEntityDialog: React.FC<NewEntityDialogProps> = props => {
  const onCommit = (values: Map<string, string>) => {
    // const result = useMutation<
  }
  return <EntityDialog className="new-entity-dialog" onCommit={onCommit} title="New entity"></EntityDialog>
}