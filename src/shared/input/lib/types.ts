export type UIInputProps = {
  /**
   * Html placeholder. Text, displayed in empty input
   */
  placeholder?: string;
  /**
   * v-model. Inputted text
   */
  value: string;
  /**
   * Html input type
   */
  type?: string;
  /**
   * Has error
   */
  error?: boolean;
};

export type UIInputSlots = {
  /**
   * for button (like "clear" or "show/hide password")
   */
  button(): any;
};
