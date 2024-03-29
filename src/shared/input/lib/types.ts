export type UIInputProps = {
  /**
   * Html placeholder. Text, displayed in empty input
   */
  placeholder?: string;
  /**
   * Inputted text (v-model)
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

export type UIInputEmits = {
  (e: "update:value", value: string): void;
};
