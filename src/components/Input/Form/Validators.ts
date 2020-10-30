
export type ValidationResult = true | string;
export type InputValidator = (value: string) => ValidationResult;

export function notEmpty(v: string): ValidationResult {
  return true;
  return !v ? 'Field must not be empty.' : true;
}