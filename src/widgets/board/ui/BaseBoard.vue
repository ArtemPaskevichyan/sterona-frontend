<script setup lang="ts">
import BaseBoardColumn from "./BaseBoardColumn.vue";
import { MockTaskModel } from "@/entities/task";
import { TeamInlineCircles, MockMembers } from "@/entities/team";
import type { Member } from "@/shared/types/team";
import { UIButton, UIButtonStates } from "@/shared/button";
import { onMounted, ref, reactive, watch } from "vue";
import { TeamMembersListModal } from "@/features/teamMembersList";
import { type Task, type TaskStatus, TaskStatuses } from "@/shared/types/task";

const title = ref("Board Title");
const boardMembers = ref<Member[]>(MockMembers);

let taskIdGenerator = 0;
const boardModel = reactive<{ [key: string]: Task[] }>({
  Todo: [MockTaskModel, MockTaskModel, MockTaskModel, MockTaskModel].map(
    (e) => ({
      ...e,
      status: TaskStatuses.Todo,
      id: ++taskIdGenerator,
    }),
  ),
  InProgress: [MockTaskModel, MockTaskModel].map((e) => ({
    ...e,
    status: TaskStatuses.InProgress,
    id: ++taskIdGenerator,
  })),
  Blocked: [MockTaskModel].map((e) => ({
    ...e,
    status: TaskStatuses.Blocked,
    id: ++taskIdGenerator,
  })),
  Done: [MockTaskModel, MockTaskModel, MockTaskModel, MockTaskModel].map(
    (e) => ({
      ...e,
      status: TaskStatuses.Done,
      id: ++taskIdGenerator,
    }),
  ),
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

function handleTaskDropped(status: TaskStatus, task: Task) {
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
  for (let k of Object.keys(task)) {
    //@ts-ignore
    task[k] = updatedTask[k];
  }
  console.log(boardModel);
}

onMounted(() => {
  isComponentLoaded.value = true;
});
</script>

<template>
  <div class="baseBoard">
    <div class="baseBoard__header">
      <span class="baseBoard__title">{{ title }}</span>
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
        :status="TaskStatuses.Todo"
        :tasks="boardModel.Todo"
        :board-members="boardMembers"
        @task-dropped="
          (task: Task) => handleTaskDropped(TaskStatuses.Todo, task)
        "
        @task-updated="updateTask"
      />
      <BaseBoardColumn
        :status="TaskStatuses.InProgress"
        :tasks="boardModel.InProgress"
        :board-members="boardMembers"
        @task-dropped="
          (task: Task) => handleTaskDropped(TaskStatuses.InProgress, task)
        "
        @task-updated="updateTask"
      />
      <BaseBoardColumn
        :status="TaskStatuses.Blocked"
        :tasks="boardModel.Blocked"
        :board-members="boardMembers"
        @task-dropped="
          (task: Task) => handleTaskDropped(TaskStatuses.Blocked, task)
        "
        @task-updated="updateTask"
      />
      <BaseBoardColumn
        :status="TaskStatuses.Done"
        :tasks="boardModel.Done"
        :board-members="boardMembers"
        @task-dropped="
          (task: Task) => handleTaskDropped(TaskStatuses.Done, task)
        "
        @task-updated="updateTask"
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
