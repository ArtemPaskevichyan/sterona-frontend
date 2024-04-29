export type UIModalSlot = {
  /**
   * Content of modal
   */
  default(): any;
};

export type UIModalProps = {
  /**
   * v-model. Is model opened
   */
  isOpened: boolean;
  /**
   * Close modal when click out of modal content
   */
  closeOnClickOutside?: boolean;
  /**
   * Title in the modal header. Automatically renders cross button
   */
  title?: string;
  /**
   * Needs to turn off stopPropagation on modal content.
   * Usually uses when there are elements, that adds "click" event listener on body, such as UIDropdown
   */
  dontStopClick?: boolean;
};
