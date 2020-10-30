import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MenuItem } from "../../components/Menu/Menu";
import { NavBar } from "../../components/Navigation/NavBar";
import { EntitiesView } from "./Entities/EntitiesView";


export type MaintainanceViewProps = {

}

export const MaintainanceView: React.FC<MaintainanceViewProps> = props => {
  const menu: MenuItem[] = [
    { id: 'maintainance-ents', label: 'Entities', path: '/maintainance/entities' },
    { id: 'maintainance-indicators', label: 'Indicators', path: '/maintainance/indicators' },
    { id: 'maintainance-measurements', label: 'Measurements', path: '/maintainance/measurements' },
    { id: 'maintainance-scales', label: 'Scales', path: '/maintainance/scales' },
    { id: 'maintainance-loc', label: 'Locations', path: '/maintainance/locations' },
    { id: 'maintainance-rel', label: 'Relations', path: '/maintainance/relations' },
  ]

  return (
    <>
    <NavBar items={menu}></NavBar>
    <Switch>
      <Route path="/maintainance/entities"><EntitiesView></EntitiesView></Route>
      <Route path="/maintainance"><Redirect to="/maintainance/entities"></Redirect></Route>
    </Switch>
    </>
  )
}
