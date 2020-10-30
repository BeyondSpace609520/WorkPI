import React from 'react';
import './App.scss';
import { Router, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { InvitationsView } from './view/Employee/MyWorkPi/Invitations/InvitationsView';
import { MenuItem } from './components/Menu/Menu';
import { MaintainanceView } from './view/Maintainance/MaintainanceView';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

import { LoginView } from './view/Login/LoginView';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RegisterView } from './view/Register/RegisterView';
import { UserContext } from './hooks/UserHook';
import { UserAvatar } from './components/Display/UserAvatar/UserAvatar';
import { ContextMenuTarget } from './components/Menu/ContextMenu/ContextMenu';
import { AuthRoute } from './components/Navigation/AuthRoute/AuthRoute';
import { DialogTargetContainer } from './components/Dialog';
import { AppNavBar } from './components/Navigation/AppNavBar';
import { GoogleAuth } from './components/Auth/GoogleAuth';

library.add(fas, fab as any);

const App: React.FC<{}> = props => {
  const menu: MenuItem[] = [
    { id: 'myworkpi', label: 'My WorkPi', path: '/myworkpi' },
    { id: 'maint', label: 'Maintainance', path: '/maintainance' }
  ];

  return (
    <ContextMenuTarget >
      <DialogTargetContainer>
        <UserContext>
          <div className="App">
            <BrowserRouter>
              <AppNavBar items={menu}>
                <UserAvatar></UserAvatar>
              </AppNavBar>
              <Switch>
                <Route path="/auth/googlecallback"><GoogleAuth></GoogleAuth></Route>
                <AuthRoute path="/myworkpi/invitations"><InvitationsView></InvitationsView></AuthRoute>
                <AuthRoute path="/myworkpi"><Redirect to="/myworkpi/invitations"></Redirect></AuthRoute>
                <AuthRoute path="/maintainance"><MaintainanceView></MaintainanceView></AuthRoute>
                <Route path="/login"><LoginView></LoginView></Route>
                <Route path="/register"><RegisterView></RegisterView></Route>
                <Route>
                  <div>404 not found</div>
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </UserContext>
      </DialogTargetContainer>
    </ContextMenuTarget>
  );
}

export default App;
