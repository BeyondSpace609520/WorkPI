import React, { useContext } from 'react';
import GetUser from './UserHook.graphql';

export type UserCtx = {
  id: number
  firstName: string
  middleName: string
  lastName: string
  email: string
  active: boolean
} | undefined

const _UserContext = React.createContext<UserCtx>(undefined);

export function useUserCtx(): UserCtx {
  return useContext(_UserContext);
}

export const UserContext: React.FC<{}> = props => {
  const ctx: UserCtx = undefined

  return <_UserContext.Provider value={ctx}>{props.children}</_UserContext.Provider>;
}