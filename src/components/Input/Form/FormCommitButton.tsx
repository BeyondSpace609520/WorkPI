import React from 'react';
import { patchObject } from '../../../util';
import { Button, ButtonProps } from '../Button/Button';
import { useForm } from './Form';


/** A button that commits the current form. */

export const FormCommitButton: React.FC<ButtonProps> = props => {
  const formCtx = useForm();
  const pProps = patchObject(props, {
    onClick: () => {
      formCtx.commit();
      if (props.onClick) {
        props.onClick();
      }
    }
  });

  return <Button {...pProps}></Button>
}