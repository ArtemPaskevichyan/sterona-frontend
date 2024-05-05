import { type Task, type TaskModel, TaskStatuses } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";
import type { BoardParameters } from "@/shared/types/board";

export type TaskModelJSON = {
  name: string;
  description: string;
  status: string;
  priority: number;
  creationDate: number;
  closeDate: number;
  members: MemberJSON[];
};

export type TaskJSON = TaskModelJSON & {
  id: number;
};

export type BoardJSON = {
  id: number;
  name: string;
};

export type MemberJSON = {
  id: number;
  username: string;
  role: string;
  // imageURL: string;
};

export function taskToJSON(task: Task): TaskJSON {
  return {
    ...taskModelToJSON(task),
    id: task.id,
  };
}

export function parseJSONTask(task: TaskJSON): Task {
  return {
    ...parseJSONTaskModel(task),
    id: task.id,
  };
}

export function taskModelToJSON(task: TaskModel): TaskModelJSON {
  return {
    closeDate: task.closeDate,
    creationDate: task.creationDate,
    description: task.description,
    members: task.members.map((m) => memberToJSON(m)),
    name: task.name,
    priority: task.priority,
    status: task.status.identifier,
  };
}

export function parseJSONTaskModel(task: TaskModelJSON): TaskModel {
  //@ts-ignore
  const taskStatus = TaskStatuses[task.status];
  if (taskStatus === undefined) throw "undefined task status";
  if (task.priority < 0 || task.priority > 3) throw "incorrect priority";

  return {
    closeDate: task.closeDate,
    creationDate: task.creationDate,
    description: task.description,
    members: task.members.map((m) => parseJSONMember(m)),
    name: task.name,
    priority: task.priority as 0 | 1 | 2 | 3,
    status: taskStatus,
  };
}

export function memberToJSON(member: Member): MemberJSON {
  return {
    ...member,
    username: member.name,
  };
}

export function parseJSONMember(member: MemberJSON): Member {
  return {
    ...member,
    name: member.username,
  };
}

export function boardToJSON(board: BoardParameters): BoardJSON {
  return board;
}

export function parseJSONBoard(board: BoardJSON): BoardParameters {
  return board;
}
