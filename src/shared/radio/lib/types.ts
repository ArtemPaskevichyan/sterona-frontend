export type UIRadioButtonProps = {
  /**
   * Label right to the button
   */
  title: string;
  /**
   * v-model. Checked or not
   */
  value: boolean;
};

export type UIRadioButtonEmits = {
  /**
   * Emits when value is changed. Gives value as param.
   */
  (e: "updated", value: boolean): void;
};
