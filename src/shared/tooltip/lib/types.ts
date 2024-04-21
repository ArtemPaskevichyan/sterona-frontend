export type TooltipWrapperProps = {
  /**
   * Label of the tooltip
   */
  label: string;
  showTooltip: boolean;
};

export type TooltipWrapperSlots = {
  /**
   * Content, which is target of the tooltip
   */
  default(): any;
};

export type TooltipProps = {
  /**
   * Label of the tooltip
   */
  label: string;
  /**
   * Direction where tooltip will be rendered related to tooltipWrapper
   */
  direction: TooltipDirection;
};

export enum TooltipDirection {
  Top,
  Right,
  Bottom,
  Left,
}
