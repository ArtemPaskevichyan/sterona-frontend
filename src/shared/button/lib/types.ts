export enum UIButtonStates {
  Default,
  Outlined,
  Disabled,
  Primary,
  Danger,
}

export type UIButtonProps = {
  /**
   * Type of button appearance (shown in stories)
   */
  type?: UIButtonStates;
  /**
   * Defines if button has minimal width or not
   */
  short?: boolean;
};

export type UIButtonSlots = {
  /**
   * Content of the button
   */
  default(): any;
};
