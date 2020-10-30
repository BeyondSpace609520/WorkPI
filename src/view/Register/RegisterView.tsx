import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Map } from 'immutable';
import './RegisterView.scss';
import { Form, notEmpty, FormCommitButton } from "../../components/Input/Form";
import { TextInput } from "../../components/Input/TextInput";
import { Row } from "../../components/Layout/Row";
import { Spacer } from "../../components/Layout/Spacer";
import { WidgetFrame } from "../../components/Widget/WidgetFrame";
import { WidgetView } from "../../components/Widget/WidgetView";
import Register from './Register.graphql';
import { RegisterMutation } from "../../gen/operations";
import { useMutation } from "@apollo/client";

const RegisterWidget: React.FC = props => {
  const [registerMutation, { data, error }] = useMutation<RegisterMutation>(Register);

  if (error) {
    console.error(error);
  }

  const onCommit = (values: Map<string, string>) => {
    registerMutation({ variables: {
      email: values.get('email'),
      password: values.get('pw')
    }}).then((result) => {
      if (result.errors || !result.data) {
        alert('Could not register.');
        return;
      }

      alert('yay')
    })
  }
  const onCommitErrors = (errors: Map<string, string[]>) => {

  }

  return <WidgetFrame className="register-widget" title={'Register'}>
    <Form onCommit={onCommit} onCommitErrors={onCommitErrors}>
      <p>User details</p>
      <TextInput id="email" label="Email" validators={[notEmpty]}></TextInput>
      <TextInput id="pw" password label="Password" validators={[notEmpty]}></TextInput>
      <Row>
        <Spacer />
        {/* <Button title="Cancel" variant="rectangle" onClick={dialogCtx.closeDialog}>Cancel</Button> */}
        <FormCommitButton title="Save" variant="rectangle" role="primary">Register</FormCommitButton>
      </Row>
    </Form>
  </WidgetFrame>
}


export type RegisterViewProps = {

}

export const RegisterView: React.FC<RegisterViewProps> = props => {


  return (
    <WidgetView>
      <RegisterWidget></RegisterWidget>
    </WidgetView>
  )
}
