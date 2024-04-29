export type UIDropdownProps = {
  /**
   * v-model. If dropdown opened or not
   */
  isOpened: boolean;
  /**
   * Defines if dropdown window short or full-length
   */
  short?: boolean;
};

export type UIDropdownSlots = {
  /**
   * Content of the dropdown. Usually it is List Items
   */
  default(): any;
};
