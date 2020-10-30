
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useContextMenu } from '../../Menu/ContextMenu';
import './Select.scss';
import { useForm } from '../Form/Form';

export type SelectProps = {
  label?: string
  id: string
  placeholder?: string
  currentIndex?: number
  items: string[]
  onChange?: (value: string) => void
}

export const Select: React.FC<SelectProps> = props => {
  const formCtx = useForm();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValueState] = useState('');
  const ctxMenu = useContextMenu();
  const dropdownClass = 
    'workpi-select' +
    (isOpen ? ' active' : '');

  const setValue = (value: string) => {
    setValueState(value);
    if (props.onChange) {
      props.onChange(value);
    }
  }
  
  useEffect(() => {
    formCtx.register(props.id, () => {
      // if (props.validators) {
      //   const errors = props.validators.map(v => {
      //     const r = v(value);
      //     return r === true ? null : r;
      //   }).filter(r => r !== null) as string[];
      //   if (errors.length > 0) {
      //     setErrors(errors);
      //     return { valid: false, errors: errors };
      //   }
      // }

      // setErrors([]);
      return { valid: true, value };
    })
  });

  useEffect(() => {
    if (props.currentIndex !== undefined) {
      setValue(props.items[props.currentIndex] ?? '');
    }
  }, [props.items]);

  const openMenu = (ev: React.MouseEvent) => {
    if (!dropdownRef.current) return;
    const e = dropdownRef.current;
    const r = e.getBoundingClientRect();
    const currentIndex = Math.max(props.items.indexOf(value), 0);
    setIsOpen(true);
    ctxMenu.showAtPos(r.left + r.width - 32, r.top, props.items.map(item => {
      //ctxMenu.showAtPos(ev.clientX, ev.clientY, props.items.map(item => {
      return {
        id: item,
        label: item,
        onTrigger: () => setValue(item)
      }
    }), {
      width: e.clientWidth,
      onClose: () => {
        setIsOpen(false);
      },
      orientation: 'sw',
      currentIndex
    })
  }

  return <div className={dropdownClass}>
    {props.label ? <div className="label">{props.label}</div> : null}
    <div ref={dropdownRef} onClick={openMenu} className="workpi-select-field">
      <div className="workpi-select-field-value">
      <input type="text" placeholder={props.placeholder} readOnly={true} value={value}></input>
      </div>
      <div className="workpi-select-field-btn">
        <FontAwesomeIcon icon={['fas', 'caret-down']}></FontAwesomeIcon>
      </div>
    </div>
  </div>
}