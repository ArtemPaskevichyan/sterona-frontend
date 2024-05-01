export type UICalendarProps = {
  /**
   * v-model. Defines if calendar is opened
   */
  isOpened: boolean;
};

export type UICalendarEmits = {
  /**
   * Calls when user selects a date
   * @param e – name of emit
   * @param date – selected date
   */
  (
    e: "selected",
    date: {
      date: Date;
      formattedDate: string;
    },
  ): void;
};
