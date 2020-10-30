import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import './UserAvatar.scss';
import { GetUserAvatarInfo } from './UserAvatar.graphql';
import { useQuery } from '@apollo/client';
import { GetUserAvatarInfoQuery } from '../../../gen/operations';
import { LoginDialog } from '../../../view/Login/LoginView';
import { createDialog } from '../../Dialog/Dialog';
import { useDialogTarget } from '../../Dialog/DialogTarget/DialogTarget';

export type UserAvatarProps = {

}

export const UserAvatar: React.FC<UserAvatarProps> = props => {
  const userAvatarQuery = useQuery<GetUserAvatarInfoQuery>(GetUserAvatarInfo);
  const user = userAvatarQuery.data?.me;
  const avatarRef = useRef<HTMLDivElement>(null);
  const dialogCtrl = useDialogTarget();

  useEffect(() => {
    const url = 'placeholder';
    const token = localStorage.getItem('token');
    const response = fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    response.then(r => {
      if (!r.ok) return;
      r.blob().then(blob => {
        const imgUrl = URL.createObjectURL(blob);

      });
    })
  }, [user]);

  const login = () => {
    dialogCtrl.showDialog(createDialog(<LoginDialog></LoginDialog>));
  }

  return <div className="workpi-user-avatar">
    { user ? <>
    <div className="user-name">{user.lastName}</div>
      <div ref={avatarRef} className="avatar"></div>
      </> : 
      // <FontAwesomeIcon icon={['fas', 'user']}></FontAwesomeIcon>
      <div className="login-btn" onClick={login}>Login <FontAwesomeIcon icon={['fas', 'sign-in-alt']}></FontAwesomeIcon></div>
    }
  </div>
}