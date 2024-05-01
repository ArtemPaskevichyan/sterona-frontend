import type { TaskModel, TaskStatus } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

export type TaskDataFormProps = {
  /**
   * All available statuses for this task
   */
  statuses: TaskStatus[];
  /**
   * v-model. Model of the task
   */
  model: TaskModel;
  /**
   * An array of possible members of this task
   */
  possibleMembers: Member[];
};

export type TaskDataFormEmits = {
  /**
   * Emits when user opened some window witch listens document click to close
   * @param e – name of emit
   * @param value – stop click in or not
   */
  (e: "doNotStopClickUpdated", value: boolean): void;
  /**
   * Emits when component is created. Provides a callback for data validation.
   * @param e – name of emit
   * @param callback – function that checks if inputted data is correct and returns true if it is and false else
   */
  (e: "providedValidationCallback", callback: () => boolean): void;
};
