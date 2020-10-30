import React, { useEffect, useState } from 'react';
import { useForm } from '../Form/Form';
import './TextInput.scss';
import { InputValidator } from '../Form/Validators';

export type TextInputProps = {
  /** Label to display above the input field. */
  label?: string
  /** Unique identifier for this form input. */
  id: string
  /** Text to display when this input has no value. */
  placeholder?: string
  /** When true, characters are obfuscated. */
  password?: boolean
  /** Validator procedures to use when commit is called on a form context or the value was changed.
   *  Sets the error state if the value is invalid.
   */
  validators?: InputValidator[]
  /** Should the value be checked while typing. */
  validateWhileTyping?: boolean
  /** The initial value to use. */
  value?: string
  /** Callback function to call when the value was changed by the user. */
  onChange?: (value: string) => void
}

function className(hasError: boolean/*isFocused: boolean*/): string {
  return [
    'workpi-text-input',
    hasError ? 'has-error' : '',
    //isFocused ? 'focused' : ''
  ].join(' ');
}

function inputType(password?: boolean): string {
  return password ? 'password' : 'text';
}

function handleChange(props: TextInputProps, setState: (v: string) => void) {
  return (ev: React.ChangeEvent<HTMLInputElement>) => {
    setState(ev.target.value);
    if (props.onChange) {
      props.onChange(ev.target.value);
    }
  }
}

/** A text input component which can be used as a form element. */

export const TextInput: React.FC<TextInputProps> = props => {
  const formCtx = useForm();
  // const [isFocused, setFocusedState] = useState(false);
  const [value, setCurrentValue] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const hasError = errors.length > 0;

  const makeError = (e: string) => <div key={e}>{e}</div>

  const checkErrors = (value: string) => {
    if (props.validators) {
      const errors = props.validators.map(v => {
        const r = v(value);
        return r === true ? null : r;
      }).filter(r => r !== null) as string[];
      if (errors.length > 0) {
        setErrors(errors);
        return errors;
      }
    }

    setErrors([]);
    return;
  }

  const setValue = (value: string) => {
    if (props.validateWhileTyping === true) {
      checkErrors(value);
    }
    setCurrentValue(value);
  }

  // if (!isFocused && value !== '') {
  //   setFocusedState(true);
  // }

  // const setFocused = (v: boolean) => {
  //   if (value !== '') return;
  //   setFocusedState(v);
  // }

  useEffect(() => {
    if (!formCtx) return;
    formCtx.register(props.id, () => {
      const e = checkErrors(value);

      if (e) {
        return { valid: false, errors: errors };
      }

      console.log(`value of textinput ${props.id} is ${value}`)

      return { valid: true, value };
    })

    return () => {
      formCtx.unregister(props.id);
    }
  }, [formCtx, value]);

  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return <div className={className(hasError)}>
    {props.label ? <div className="label">{props.label}</div> : null}
    <div className="input-container"><input type={inputType(props.password)} placeholder={props.placeholder} onChange={handleChange(props, setValue)} value={value}></input>
      {hasError ? <div className="error">{errors.map(makeError)}</div> : null}
    </div>
  </div>
  // return (
  //   <div className={className(isFocused)}>
  //     <input type={inputType(props.password)} placeholder={props.placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={handleChange(props, setValue)} value={value}></input>
  //     <div className="label">{props.label}</div>
  //   </div>
  // )
}

export const TextInputGroup: React.FC = props => <div className="workpi-text-input-group">{props.children}</div>