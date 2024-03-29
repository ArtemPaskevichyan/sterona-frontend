export type UIPasswordInputProps = {
  /**
   * Html placeholder. Text, displayed in empty input
   */
  placeholder?: string;
  /**
   * Inputted text (v-model)
   */
  value: string;
  /**
   * Has error
   */
  error?: boolean;
};

export type UIPasswordEmits = {
  (e: "update:value", value: string): void;
};
