import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IsAuthedQuery } from '../../../gen/operations';
import { NoAuthView } from '../../../view/Login/LoginView';
import IsAuthed from './AuthRoute.graphql';

/** A route that checks if the user is logged in. Otherwise show the no-auth view. */

export const AuthRoute: React.FC<RouteProps> = props => {
  const query = useQuery<IsAuthedQuery>(IsAuthed);
  const isAuthed = query.data?.me?.active ?? false;
  return isAuthed
    ? <Route {...props}></Route>
    : <NoAuthView></NoAuthView>
    // : <Redirect to="/login"></Redirect>
}