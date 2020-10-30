import React, { useContext, useRef, useState } from 'react';
import { uuidv4 } from '../../../util';
import { Map } from 'immutable';
import './DialogTarget.scss';

// export type DialogInit = (onWillCloseDialog: () => void) => void

export type Dialog = {
  element: React.ReactElement
}

export type DialogBuilder = (closeDialog: (onBeforeClose: () => void) => void) => Dialog;

export type DialogTargetController = {
  showDialog: (builder: DialogBuilder) => void
}

/**
 * React hook to get the current dialog controller.
 */
export function useDialogTarget(): DialogTargetController {
  return useContext(DialogTargetContext);
}


const DialogTargetContext = React.createContext<DialogTargetController>({
  showDialog: (builder) => { }
});



export type DialogTargetContainerProps = {};

/**
 * Target container where dialogs are shown.
 * 
 * Child components can use the useDialogTarget() hook to get the DialogTargetController object,
 * which can be used to show a dialog.
 */
export const DialogTargetContainer: React.FC<DialogTargetContainerProps> = props => {
  const [dialogMap, setDialogMap] = useState<Map<string, Dialog>>(Map());
  const dialogContainerRef = useRef<HTMLDivElement>(null);
  const dialogCtx: DialogTargetController = {
    showDialog: (builder) => {
      const id = uuidv4();
      const closeDialog = (onBeforeClose: () => void) => {
        onBeforeClose();
        if (dialogMap.count() <= 1) {
          // also fade bg
          dialogContainerRef.current!.style.animationName = 'HideDialogBg';
        }
        setTimeout(() => {
          setDialogMap(dialogMap.delete(id));
        }, 150);
      }
      setDialogMap(dialogMap.set(id, builder(closeDialog)));
    }
  };
  const dialogs = dialogMap.valueSeq().toArray().map(d => d.element);

  return <DialogTargetContext.Provider value={dialogCtx}>
    <div className="workpi-dialog-target-container">
      {props.children}
      { dialogs.length > 0 ? <div ref={dialogContainerRef} className="workpi-dialog-target">{dialogs}</div> : null }
    </div>
  </DialogTargetContext.Provider>
}