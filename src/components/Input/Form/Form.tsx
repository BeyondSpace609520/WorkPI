
import React, { useContext, useEffect, useState } from 'react';
import { Map } from 'immutable';

// export type FormElementProps = {
//   id: string
// }

// export type FormElement<T> = (props: FormElementProps & T) => React.ReactElement;

export type ValueReaderResult = { valid: true, value: string } | { valid: false, errors: string[] }

export type ValueReader = () => ValueReaderResult;

/** A form context controls a form. */
export type FormContext = {
  // updateValue: (id: string, value: string) => void
  // setValidator: (id: string, validator: FormValidator) => void
  /** Register a value reader with this form. Usually this is done inside a form input component.
   * When commit is called on this form context all registered value readers are called
   * to collect the value of the registered components.
   */
  register: (id: string, valueReader: ValueReader) => void
  /** Unregister a previously registered value reader. */
  unregister: (id: string) => void
  /** Collect all values from the registered form input components using the value readers. */
  commit: () => boolean
}

const _FormContext = React.createContext<FormContext>(undefined!)

/** The useForm hook gets the form context object for the current form. */

export function useForm(): FormContext {
  return useContext(_FormContext);
}

export type FormProps = {
  /** Function to call when commit is called on this form's context. Gives all current values from form input compontents. */
  onCommit: (values: Map<string, string>) => void
  /** Function to call when commit is called on this form's context, but an form input component did not pass validation. */
  onCommitErrors: (errors: Map<string, string[]>) => void
  /** The form context object for this form. */
  ctx?: React.MutableRefObject<FormContext | null>
}


/** A form is a container for input elements. It is used to get the values of 
 * all contained form input elements. If the input elements have associated input validation
 * procedures, the input values are first validated using these procedures.
 * 
 * Components inside a form can use the useForm() hook to get a FormContext object of the current context.

 */

export const Form: React.FC<FormProps> = props => {
  // const [valueReaders, setValueReaders] = useState(Map<string, ValueReader>())
  const valueReaders: {[key: string]: ValueReader} = {};
  const ctx: FormContext = {
    register: (id, reader) => {
      // setValueReaders(valueReaders.set(id, reader));
      valueReaders[id] = reader;
    },
    unregister: (id) => {
      // setValueReaders(valueReaders.delete(id));
      delete valueReaders[id];
    },
    commit: () => {
      let errors: {[key: string]: string[]} = {};
      let values: {[key: string]: string} = {};

      Object.entries(valueReaders).forEach(([id, reader]) => {
        const result = reader();
        if (result.valid) {
          values[id] = result.value;
        } else {
          errors[id] = result.errors;
        }
      });

      if (Object.keys(errors).length > 0) {
        props.onCommitErrors(Map(errors));
        return false;
      } else {
        props.onCommit(Map(values));
        return true;
      }
    }
  }
  useEffect(() => {
    if (props.ctx) {
      props.ctx.current = ctx;
    }
  }, [props.ctx]);
  return <_FormContext.Provider value={ctx}>{ props.children }</_FormContext.Provider>
}
