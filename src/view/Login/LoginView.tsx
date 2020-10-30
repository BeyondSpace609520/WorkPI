import React, { useEffect, useRef } from 'react';
import { createDialog, useDialog } from '../../components/Dialog/Dialog';
import { useDialogTarget } from '../../components/Dialog/DialogTarget/DialogTarget';
import { Form, FormContext } from '../../components/Input/Form/Form';
import { FormCommitButton } from '../../components/Input/Form/FormCommitButton';

import { WidgetFrame } from '../../components/Widget/WidgetFrame/WidgetFrame';
import { Map } from 'immutable';
import './LoginView.scss';
import { notEmpty } from '../../components/Input/Form/Validators';
import { TextInput } from '../../components/Input/TextInput/TextInput';
import { Button } from '../../components/Input/Button/Button';
import { ActionButton } from '../../components/Input/ActionButton/ActionButton';
import { Column } from '../../components/Layout/Column/Column';
import { Row } from '../../components/Layout/Row/Row';
import { Spacer } from '../../components/Layout/Spacer/Spacer';
// import '../../assets/linkedin/Retina/Sign-In-Small---Default.png';
import Login from './Login.graphql';
import { useMutation } from '@apollo/client';
import { LoginMutation } from '../../gen/operations';

export const LoginDialog: React.FC = props => {
  const dialogCtx = useDialog();
  const formCtx = useRef<FormContext>(null);
  const [loginMutation, { data, error }] = useMutation<LoginMutation>(Login);

  if (error) {
    console.error(error);
  }

  const onCommit = (values: Map<string, string>) => {

    loginMutation({ variables: {
      email: values.get('email'),
      password: values.get('pw')
    }}).then((result) => {
      if (result.errors || !result.data) {
        alert('Could not login.');
        return;
      }

      const token = result.data.userLogin.token;
      window.localStorage.setItem('token', token);

      dialogCtx.closeDialog();
    })
  }
  const onCommitErrors = (errors: Map<string, string[]>) => {

  }

  const login = () => {
    if (!formCtx.current) console.log('no form ctx');
    formCtx.current?.commit();
  }

  const googleLogin = () => {
    window.location.href = 'http://workpi.dreamlogics.com/auth/google';
  }

  const linkedInLogin = () => {
    window.location.href = 'http://workpi.dreamlogics.com/auth/linkedin';
  }

  return <WidgetFrame className="workpi-login-dialog" title="Login" role="modal" titleBar="none" bottom={
    <Row>
      <Spacer />
      <Button title="Cancel" variant="rectangle" onClick={dialogCtx.closeDialog}>Cancel</Button>
      <Button title="Login" variant="rectangle" role="primary" onClick={login}>Login</Button>
    </Row>
  }>
    <Form ctx={formCtx} onCommit={onCommit} onCommitErrors={onCommitErrors}>
      <TextInput id="email" label="Email" validators={[notEmpty]}></TextInput>
      <TextInput id="pw" password label="Password" validators={[notEmpty]}></TextInput>

    </Form>




    <Row align='center'>
      <Column>
        <p><a href="/register">I don't have an account.</a></p>
        <p><a href="/pw-reset">I forgot my password.</a></p>
      </Column>
      <Spacer />
      <ActionButton icon={['fab', 'google']} title="Login with Google" onClick={googleLogin}></ActionButton>
      <div className="linkedin-btn"><ActionButton icon={['fab', 'linkedin']} title="Login with LinkedIn" onClick={linkedInLogin}></ActionButton></div>
    </Row>
    {/* <hr/>
    <Row justify="space-between">
      <div className="google-btn">TODO google</div>
      <div className="linkedin-btn"></div>
    </Row> */}
  </WidgetFrame>
}

export const LoginView: React.FC = props => {
  const dialogCtrl = useDialogTarget();
  useEffect(() => {
    dialogCtrl.showDialog(createDialog(<LoginDialog></LoginDialog>));
  }, []);
  return <div></div>
}

export const NoAuthView: React.FC = props => {
  const dialogCtrl = useDialogTarget();
  useEffect(() => {
    dialogCtrl.showDialog(createDialog(<LoginDialog></LoginDialog>));
  }, []);
  return <div>(placeholder)<br/>You are not authorized to view this page.<br/>Please login.</div>
}