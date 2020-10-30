import React, { useContext, useEffect, useRef, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { patchObject } from '../../../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContextMenu.scss';
import { act } from 'react-dom/test-utils';

export type ContextMenuItem = {
  /** Unique id for the menu item. */
  id: string
  /** The text displayed. */
  label: string
  /** An icon displayed in front of the label text. */
  icon?: IconProp
  /** The function to call if the user clicks on the menu item. */
  onTrigger?: () => void
}

type Orientation = 'nw' | 'sw' | 'ne' | 'se'

type ShowAtPosOptions = {
  /** Function to call when menu is closed. */
  onClose?: () => void
  /** The corner from which to open the menu at the given position. */
  orientation?: Orientation
  /** The width of the menu items in px. */
  width?: number
  /** The index of the item that should be put in the center. */
  currentIndex?: number
}

export type ContextMenuController = {
  /**
   * Show a context menu at the given x, y position.
   * The position should be relative to the client. (clientX, clientY)
   */
  showAtPos: (x: number, y: number, menu: ContextMenuItem[], options?: ShowAtPosOptions) => void
}

type ContextMenuControllerPrivate = ContextMenuController & {
  close: () => void
}

const ContextMenuCtx = React.createContext<ContextMenuControllerPrivate>({
  showAtPos: (x, y, menu) => console.log('ContextMenuCtx::showAtPos', x, y),
  close: () => { }
})


/**
 * React hook the get the ContextMenuController for the current ContextMenuTarget.
 */
export function useContextMenu(): ContextMenuController {
  return useContext(ContextMenuCtx);
}

type ContextMenuProps = {
  pos: { x: number, y: number }
  menu: ContextMenuItem[]
  active: boolean
  orientation?: Orientation
  width?: number
  currentIndex?: number
}

/** The menu component used inside the ContextMenuTarget container. */

const ContextMenu: React.FC<ContextMenuProps> = props => {
  const ref = useRef<HTMLDivElement>(null);
  const ctxMenuController = useContext(ContextMenuCtx);
  // const style: React.CSSProperties = {
  //   top: props.pos.y,
  //   left: props.pos.x
  // }
  const items = props.menu.map(item => {
    const action = () => {
      ctxMenuController.close()
      if (item.onTrigger) {
        item.onTrigger()
      }
    }
    return <div key={item.id} onClick={action}>
      {item.icon ? <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon> : null}
      <span>{item.label}</span>
    </div>
  })

  useEffect(() => {
    if (!ref.current) return;
    const child = ref.current.children.item(0);
    if (!child) return;
    
    const height = parseFloat(getComputedStyle(child).height)
      + parseFloat(getComputedStyle(child).paddingTop)
      + parseFloat(getComputedStyle(child).paddingBottom);

    const parent = ref.current.parentElement;
    const parentWidth = parent!.clientWidth;
    const parentHeight = parent!.clientHeight;
    const menuWidth = ref.current.clientWidth;
    const menuHeight = ref.current.clientHeight;

    let leftRight = props.orientation?.endsWith('w') ? 1 : 0;
    let topBottom = props.orientation?.startsWith('n') ? 1 : 0;


    if (menuWidth + props.pos.x > parentWidth) {
      leftRight = 1;
    }

    if (menuHeight + props.pos.y > parentHeight) {
      topBottom = 1;
    }

    let topDelta = 0;
    if (props.currentIndex && props.currentIndex >= 0 && props.currentIndex < props.menu.length) {
      // setting an index resets the orientation to top
      topBottom = 0;
      topDelta = height * props.currentIndex;
    }

    ref.current.style.left = (leftRight === 0 ? props.pos.x : props.pos.x - menuWidth) + 'px';
    ref.current.style.top = ((topBottom === 0 ? props.pos.y : props.pos.y - menuHeight) - topDelta) + 'px';
    ref.current.style.transformOrigin = `${leftRight * 100}% ${topBottom * 100}%`;
    ref.current.style.width = props.width ? props.width + 'px' : 'auto';
  }, []);

  const className = 'workpi-context-menu' + (props.active ? ' active' : '');

  return <div ref={ref} className={className}>
    {items}
  </div>
}

type MenuCall = {
  menu: ContextMenuItem[]
  pos: { x: number, y: number }
  onClose?: () => void
  orientation?: Orientation
  width?: number
  currentIndex?: number
}

export type ContextMenuTargetProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * The ContextMenuTarget is the container in which the context menu is to be displayed
 * and provides the menu context enabling the use of the useContextMenu() hook.
 */

export const ContextMenuTarget: React.FC<ContextMenuTargetProps> = props => {
  const [menuCall, setMenuCall] = useState<MenuCall>();
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controller: ContextMenuControllerPrivate = {
    showAtPos: (x, y, menu, options) => {
      if (!containerRef.current) throw 'Context menu target not rendered.';
      const { onClose, orientation, width, currentIndex } = options ?? {};
      const containerPos = containerRef.current.getBoundingClientRect();
      setMenuCall({
        menu,
        pos: { x: x /*- containerPos.x*/, y: y /*- containerPos.y*/ },
        onClose,
        orientation,
        width,
        currentIndex
      })
      setTimeout(() => {
        setActive(true);
      }, 10);
    },
    close: () => {
      setActive(false);
      if (menuCall?.onClose) {
        menuCall.onClose();
      }
      setTimeout(() => {
        setMenuCall(undefined);
      }, 200);
    }
  }
  return <ContextMenuCtx.Provider value={controller}>
    <div ref={containerRef} {...props}>
      {props.children}
      {menuCall ?
        <div className="workpi-context-menu-back" onClick={controller.close}>
          <ContextMenu 
            pos={menuCall.pos}
            menu={menuCall.menu}
            active={active}
            orientation={menuCall.orientation}
            width={menuCall.width}
            currentIndex={menuCall.currentIndex}></ContextMenu>
        </div> : null}
    </div>
  </ContextMenuCtx.Provider>
}