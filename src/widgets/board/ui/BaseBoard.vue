<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

import BaseBoardColumn from "./BaseBoardColumn.vue";
import { TeamInlineCircles, MockMembers } from "@/entities/team";
import { UIButton, UIButtonStates } from "@/shared/button";
import { TeamMembersListModal } from "@/features/teamMembersList";

import {
  type Task,
  type TaskModel,
  type TaskStatus,
  TaskStatuses,
} from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

import { BoardWebSocketProvider } from "@/widgets/board/api/webSockets";
import {
  type BoardJSON,
  parseJSONBoard,
  parseJSONTask,
  type TaskJSON,
  taskModelToJSON,
} from "@/shared/types/serverJSON";
import { taskToJSON } from "@/shared/types/serverJSON";
import type { BoardParameters } from "@/shared/types/board";

const boardParameters = reactive<BoardParameters>({ id: 1, name: "" });
const boardMembers = ref<Member[]>(MockMembers);

const addTaskHandler = (taskJSON: TaskJSON) => {
  const task = parseJSONTask(taskJSON);
  console.log(task);
  boardModel[task.status.identifier].push(task);
};

const getTasksHandler = (tasksJSON: { tasks: TaskJSON[] }) => {
  for (let taskJSON of tasksJSON.tasks) {
    addTaskHandler(taskJSON);
  }
};

const updateBoardHandler = (boardData: BoardJSON) => {
  const parsedBoard = parseJSONBoard(boardData);
  for (let k in boardParameters) {
    //@ts-ignore
    boardParameters[k] = parsedBoard[k];
  }
};

const updateTaskHandler = (taskJSON: TaskJSON) => {
  const task = parseJSONTask(taskJSON);
  updateTask(task);
};

const socketProvider = new BoardWebSocketProvider({
  boardId: 1,
  onReceive: {
    "add.task": addTaskHandler,
    "hello.board": updateBoardHandler,
    "delete.task": undefined,
    "hello.tasks": getTasksHandler,
    "update.board": updateBoardHandler,
    "update.task": updateTaskHandler,
  },
});

const boardModel = reactive<{ [key: string]: Task[] }>({
  Todo: [],
  InProgress: [],
  Blocked: [],
  Done: [],
});

const isComponentLoaded = ref(false);

const showModal = ref(false);
const inModalMembers = ref<Member[]>([]);
function showTeam(members: Member[]) {
  inModalMembers.value = members;
  showModal.value = true;
}

function getTaskById(taskId: number): Task | null {
  for (let taskCollection of Object.values(boardModel)) {
    for (let t of taskCollection) {
      if (t.id === taskId) return t;
    }
  }
  return null;
}

function changeTaskStatus(task: Task, status: TaskStatus) {
  for (let taskCollection of Object.values(boardModel)) {
    for (let i in taskCollection) {
      if (taskCollection[i].id === task.id) {
        taskCollection.splice(parseInt(i), 1);
      }
    }
  }
  task.status = status;
  boardModel[status.identifier].push(task);
}

function updateTask(updatedTask: Task) {
  let task = getTaskById(updatedTask.id);
  if (task === null) return;
  let statusChanged = false;

  for (let key of Object.keys(task)) {
    if (key === "status") statusChanged = true;
    //@ts-ignore
    task[key] = updatedTask[key];
  }

  if (statusChanged) changeTaskStatus(task, task.status);
}

function sendAddTask(task: TaskModel) {
  socketProvider.addTask(taskModelToJSON(task));
}

function sendTaskUpdate(task: Task) {
  socketProvider.updateTask(taskToJSON(task));
}

onMounted(() => {
  isComponentLoaded.value = true;
});
</script>

<template>
  <div class="baseBoard">
    <div class="baseBoard__header">
      <span class="baseBoard__title">{{ boardParameters.name }}</span>
      <div class="baseBoard__controls">
        <TeamInlineCircles
          :members="boardMembers"
          :shown-members-count="3"
          @extend="showTeam"
        />
        <UIButton
          :type="UIButtonStates.Default"
          square
          title="Параметры доски"
        >
          <svg
            width="16"
            height="4"
            viewBox="0 0 16 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z"
              fill="currentColor"
            />
            <path
              d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2Z"
              fill="currentColor"
            />
            <path
              d="M16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 0 14 0C15.1046 0 16 0.89543 16 2Z"
              fill="currentColor"
            />
          </svg>
        </UIButton>
        <UIButton
          :type="UIButtonStates.Default"
          square
          title="Поделиться ссылкой на доску"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66699 8V13.3333C2.66699 13.687 2.80747 14.0261 3.05752 14.2761C3.30756 14.5262 3.6467 14.6667 4.00033 14.6667H12.0003C12.3539 14.6667 12.6931 14.5262 12.9431 14.2761C13.1932 14.0261 13.3337 13.687 13.3337 13.3333V8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6663 3.99992L7.99967 1.33325L5.33301 3.99992"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 1.33325V9.99992"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </UIButton>
      </div>
    </div>
    <div class="baseBoard__columns">
      <BaseBoardColumn
        v-for="status in TaskStatuses"
        :key="status.identifier"
        :status="status"
        :tasks="boardModel[status.identifier]"
        :board-members="boardMembers"
        @task-dropped="(task: Task) => sendTaskUpdate({ ...task, status })"
        @task-updated="sendTaskUpdate"
        @task-created="sendAddTask"
      />
    </div>
  </div>
  <TeamMembersListModal
    v-model:is-opened="showModal"
    title="Команда"
    :members="inModalMembers"
  />
</template>

<style scoped lang="scss">
.baseBoard {
  translate: -1px 0;
  display: inline-block;

  &__header {
    border: 1px solid var(--element-gray);
    border-bottom: none;
    padding: 6px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: var(--text-black);
    font-size: var(--large-font-size);
  }

  &__columns {
    display: flex;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: flex-end;
    flex-shrink: 0;
    width: 200px;
  }

  .teamInlineCircles {
    flex-shrink: 0;
    width: 58px;
  }
}
</style>
