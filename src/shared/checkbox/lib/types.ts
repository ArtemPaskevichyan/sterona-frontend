export type UICheckboxProps = {
  /**
   * Title right to the checkbox
   */
  title?: string;
  /**
   * v-model. Checked or not
   */
  value: boolean;
};

export type UICheckboxEmits = {
  /**
   * Emits when value is changed. Gives value as param.
   */
  (e: "updated", value: boolean): void;
};
