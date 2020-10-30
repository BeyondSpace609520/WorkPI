
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { DialogBuilder, Dialog, useDialogTarget } from './DialogTarget/DialogTarget';


export type DialogContext = {
  closeDialog: () => void
}

const _DialogContext = createContext<DialogContext>({
  closeDialog: () => {}
})

export function useDialog(): DialogContext {
  return useContext(_DialogContext);
}

export type DialogProps = {
  closeDialog: (onBeforeClose: () => void) => void
}

export const DialogFrame: React.FC<DialogProps> = props => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const ctx: DialogContext = {
    closeDialog: () => {
      props.closeDialog(() => {
        if (!dialogRef.current) return;
        dialogRef.current!.style.animationName = 'HideDialog';
      })
    }
  }


  return <_DialogContext.Provider value={ctx}><div ref={dialogRef} className="workpi-dialog">
    {props.children}
  </div></_DialogContext.Provider>
}

/** Create a dialog builder from the given element. */

export function createDialog(element: React.ReactElement): DialogBuilder {
  return (closeDialog) => {
    const e = <DialogFrame closeDialog={closeDialog}>{element}</DialogFrame>
    const d: Dialog = {
      element: e
    }
    return d;
  }
}