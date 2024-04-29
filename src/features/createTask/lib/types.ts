import type { TaskStatus } from "@/shared/types/task";

export type CreateTaskProps = {
  /**
   * All available statuses for this task
   */
  statuses: TaskStatus[];
  /**
   * Status of this task
   */
  status: TaskStatus;
};
