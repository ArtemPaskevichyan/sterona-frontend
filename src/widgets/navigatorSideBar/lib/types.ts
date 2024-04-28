export type NavigatorListItemProps = {
  /**
   * Label in the list item
   */
  title: string;
  /**
   * Name of the route to navigate
   */
  target: string;
  /**
   * Defines if list item does current page.
   */
  isActive?: boolean;
};

export type NavigatorListItemSlots = {
  /**
   * Icon at left of the list item title. Usually a svg
   */
  icon(): any;
};
