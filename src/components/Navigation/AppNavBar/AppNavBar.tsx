import React, { useEffect, useRef } from 'react';
import './AppNavBar.scss';
import { useMediaQuery } from 'react-responsive';
import { theme } from '../../../theme/workpi';
import { useRouteMatch, Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { MenuItem, NavMenuItem } from '../../Menu/Menu';
import { ContextMenuItem, useContextMenu } from '../../Menu/ContextMenu/ContextMenu';
import { useUserCtx } from '../../../hooks/UserHook';

export type AppNavBarProps = {
  items: NavMenuItem[]
}

type MenuItemProps = {
  label: string
  path: string
  basePath?: string
}

const NavMenuItemCmp: React.FC<MenuItemProps> = props => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const tracerRef = useRef<HTMLDivElement>(null);
  const cn = [
    'item',
    location.pathname.startsWith(props.path) ? 'active' : ''
  ].join(' ');

  useEffect(() => {
    if (!tracerRef.current || !containerRef.current) return;

    const tracer = tracerRef.current;
    const container = containerRef.current;
    const onMouseMove = (ev: MouseEvent) => {
      tracer.style.top = `${ev.offsetY}px`;
      tracer.style.left = `${ev.offsetX}px`;
    }

    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  return (
    <div className={cn}>
      <div ref={containerRef}>
        <div ref={tracerRef} className="tracer"></div>
        <div className="name">
          {props.path ? <Link className="no-underline" to={props.path}>{props.label}</Link> : <span>{props.label}</span>}
        </div>
      </div>
    </div>
  )
}

/** The top-most application naviagtion bar.
 * Must be placed inside a BrowserRouter.
 */

export const AppNavBar: React.FC<React.PropsWithChildren<AppNavBarProps>> = props => {
  // const isSmallScreen = useMediaQuery({ query: theme.smallScreenThreshold });
  const ctxMenu = useContextMenu();
  const userCtx = useUserCtx();
  const hist = useHistory();
  const showMobileMenu = (ev: React.MouseEvent) => {
    ctxMenu.showAtPos(ev.clientX, ev.clientY, props.items.map<ContextMenuItem>(item => {
      return {
        id: item.id,
        label: item.label,
        onTrigger: () => {
          hist.push(item.path);
        }
      }
    }))
  }
  
  const makeMenuItem = (item: NavMenuItem) =>
    <NavMenuItemCmp key={item.id} label={item.label} path={item.path} basePath={item.basePath}></NavMenuItemCmp>



  const items = props.items.filter(item => item.requireAuth ? userCtx : true).map(makeMenuItem);
  // if (isSmallScreen) {
  //   return <div className="workpi-menu">
  //     <div className="logo"></div>
  //     <div className="spacer"></div>
  //     <div className="menu-button"><i className="fas fa-bars"></i></div>
  //   </div>
  // }

  return <div className="workpi-app-nav-bar">
    <div className="logo"></div>
    <div className="spacer"></div>
    <div className="items">
      {items}
    </div>
    <div className="actions">
      {props.children}
    </div>
    <div className="menu-button" onClick={showMobileMenu}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>
  </div>
}