import React from 'react';
import './NavBar.scss';
import { useLocation, Link } from 'react-router-dom';
import { MenuItem } from '../../Menu/Menu';


export type NavBarProps = {
  /** Navigation menu items to display. */
  items: MenuItem[]
}

export const NavBar: React.FC<NavBarProps> = props => {
  let location = useLocation();
  const makeMenuItem = (item: MenuItem) => {
    const getItemClassName = () => [
      'item',
      location.pathname.startsWith(item.path) ? 'active' : ''
    ].join(' ')
  return <div className={getItemClassName()} key={item.id}><Link to={item.path}>{item.label}</Link></div>
  }
  return (
  <div className="workpi-navbar">{ props.items.map(makeMenuItem) }</div>
  )
}