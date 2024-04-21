import type { TaskModel } from "@/entities/task/lib/types";

export type BaseBoardColumnProps = {
  /**
   * Title in column header
   */
  title: string;
  /**
   * Status code for tasks in this column. For example 'Todo'
   */
  status: string;
  /**
   * v-model. Tasks in this column
   */
  tasks: TaskModel[];
};
