/**
 * ----------------------------------------
 * FORM type
 */

export interface InputElement extends Element {
  value: string;
}

export interface CheckboxElement extends Element {
  checked: boolean;
  click: () => void;
}
