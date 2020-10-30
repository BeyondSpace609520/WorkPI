import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import GridLayout from "react-grid-layout";
import { theme } from '../../../theme/workpi';
import { uuidv4 } from '../../../util';
import './WidgetContainer.scss';



/**
 * A widget is a special component that can be placed inside a WidgetContainer.
 */

export type Widget = {
  id: string
  component: React.ReactElement
  x: number
  y: number
  width: number
  height: number
  resizable: boolean
  draggable: boolean
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
}

/**
 * 
 * @param component The widget component to render.
 * @param width The width (in grid container units) of the widget.
 * @param height The height (in grid container units) of the widget.
 * @param options 
 */

export function buildWidget(
  component: React.ReactElement | (() => React.ReactElement),
  width: number,
  height: number,
  options?: {
    resizable?: boolean,
    draggable?: boolean,
    minWidth?: number,
    minHeight?: number,
    maxWidth?: number,
    maxHeight?: number,
  }
): () => Widget {
  return function() {
    return {
      id: uuidv4(),
      component: typeof component === 'function' ? component() : component,
      x: 0,
      y: 0,
      width,
      height,
      resizable: options?.resizable ?? true,
      draggable: options?.draggable ?? true,
      minWidth: options?.minWidth ?? 1,
      maxWidth: options?.maxWidth,
      minHeight: options?.minHeight ?? 1,
      maxHeight: options?.maxHeight,
    };
  }
}

/**
 * Set the position inside the container.
 * @param x The x position of the widget inside the container.
 * @param y The y position of the widget inside the container.
 * @param builder 
 */

export function emplaceWidget(x: number, y: number, builder: () => Widget): Widget {
  const w = builder();
  w.x = x;
  w.y = y;
  return w;
}


function generateLayout(widgets: Widget[], cols: number): GridLayout.Layout[] {
  const toLayout: (w: Widget) => GridLayout.Layout = w => {
    console.log('foo', w)
    return {
      i: w.id,
      x: w.x,
      y: w.y,
      w: w.width,
      h: w.height,
      minW: w.minWidth,
      minH: w.minHeight,
      maxW: w.maxWidth,
      maxH: w.maxHeight,
      isDraggable: false,//w.draggable,
      isResizable: false//w.resizable
    };
  };

  return widgets.map(toLayout);
}

function validateLayout(layout: GridLayout.Layout[], cols: number): GridLayout.Layout[] {
  return layout.map(l => {
    return {
      i: l.i,
      x: l.x + l.w > cols ? 0 : l.x,
      y: l.y,
      w: l.w,
      h: l.h,
      minW: l.minW,
      minH: l.minH,
      maxW: l.maxW,
      maxH: l.maxH,
      isDraggable: l.isDraggable,
      isResizable: l.isResizable
    };
  })
}


export type WidgetContainerProps = {
  /** Identifier for this container. Used to persist the layout. */
  id: string
  /** List of widget to be rendered inside the container. */
  widgets: Widget[]
  /** The minimum size (in pixels) that represents a single grid unit. */
  unitSize: number
}

export const WidgetContainer: React.FC<WidgetContainerProps> = props => {
  const [width, setWidth] = useState(0);
  const [cols, setCols] = useState(0);
  const [layout, setLayout] = useState<GridLayout.Layout[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateSize() {
      setWidth(ref.current?.offsetWidth ?? 0);
      setCols(Math.floor( (ref.current?.offsetWidth ?? 0) / props.unitSize ));
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    // set the initial layout
    const storedLayout = undefined;// window.localStorage.getItem('layout-' + props.id);
    setLayout(storedLayout ? JSON.parse(storedLayout) : generateLayout(props.widgets, cols));


    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, []);
  
  if (cols === 0) return <div ref={ref} className="workpi-grid-layout"></div>
  const validatedLayout = validateLayout(layout, cols);
  const onLayoutChange = (l: GridLayout.Layout[]) => {
    setLayout(l);
    window.localStorage.setItem('layout-' + props.id, JSON.stringify(l));
  }


  return (
    <div ref={ref} className="workpi-widget-container">
      { width > theme.smallScreenThreshold ? 
      <GridLayout layout={validatedLayout} 
        cols={cols} rowHeight={props.unitSize} width={width} margin={[40, 40]} onLayoutChange={onLayoutChange}>
          { props.widgets.map(w => <div key={w.id}>{w.component}</div>) }
      </GridLayout> :
      <div>
        { props.widgets.map(w => <div key={w.id}>{w.component}</div>) }
      </div>
    }
    </div>
  )
}