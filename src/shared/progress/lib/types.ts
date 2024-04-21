export type UIProgressBarProps = {
  /**
   * Title of the bar
   */
  title: string;
  /**
   * Progress value of the bar in 0..1
   */
  progress: number;
  /**
   * Value when bar goes red in 0..1
   */
  dangerBorder?: number;
};

export type UIProgressBarSlimProps = {
  /**
   * Progress value of the bar in 0..1
   */
  progress: number;
  /**
   * Value when bar goes red in 0..1
   */
  dangerBorder?: number;
};
