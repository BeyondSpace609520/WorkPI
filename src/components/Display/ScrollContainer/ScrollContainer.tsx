import React, { useState } from 'react';


export const ScrollContainer: React.FC = props => {
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollerPos, setScrollerPos] = useState(0);
  const onScroll = (ev: React.UIEvent) => {

  }
  const onMouseDownScroller = (ev: React.MouseEvent) => {

  }
  const onMouseMoveScroller = (ev: React.MouseEvent) => {

  }
  const onMouseUpScroller = (ev: React.MouseEvent) => {

  }
  return <div className="workpi-scrollcontainer">
    <div className="workpi-scrollcontainer-content" onScroll={onScroll}>{props.children}</div>
    <div className="workpi-scrollcontainer-scrollbar">
    <div className="workpi-scrollcontainer-scrollbar-scroller" 
      onMouseDown={onMouseDownScroller}
      onMouseMove={onMouseMoveScroller}
      onMouseUp={onMouseUpScroller}
      ></div>
    </div>
  </div>
}