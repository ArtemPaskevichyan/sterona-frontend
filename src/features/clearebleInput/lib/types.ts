export type UIClearableInputProps = {
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
