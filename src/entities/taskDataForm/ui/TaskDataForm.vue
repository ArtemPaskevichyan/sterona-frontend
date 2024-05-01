<script setup lang="ts">
import { reactive, ref, watch } from "vue";

import type { TaskDataFormProps, TaskDataFormEmits } from "../lib/types";
import type { TaskModel, TaskStatus } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

import { UITextarea } from "@/shared/textarea";
import { UIListItem } from "@/shared/list";
import { TeamInlineCircles } from "@/entities/team";
import { UIInput } from "@/shared/input";
import { UIDropdown } from "@/shared/dropdown";
import { UIRadioButton } from "@/shared/radio";
import { UICalendar } from "@/shared/calendar";
import { TeamMembersCheckboxList } from "@/features/teamMembersList";

const model = defineModel<TaskModel>("model", { required: true });
const props = defineProps<TaskDataFormProps>();
const emit = defineEmits<TaskDataFormEmits>();

const taskTitle = ref("");
const taskDescription = ref("");

type PickableStatus = TaskStatus & { picked: boolean };
const pickableStatuses = ref<PickableStatus[]>(
  props.statuses.map((e) => ({
    ...e,
    picked: model.value.status.identifier === e.identifier,
  })),
);
const isTaskStatusPickOpened = ref(false);
function updateStatus(target: PickableStatus) {
  for (let s of pickableStatuses.value) {
    if (s.identifier !== target.identifier) s.picked = false;
  }
  model.value.status = target;
}

type SelectableMember = Member & { selected: boolean };
let taskMembersIdKeys: { [key: number]: Member } = {};
for (let m of model.value.members) {
  taskMembersIdKeys[m.id] = m;
}
let selectableMembersInitial: SelectableMember[] = [];
for (let m of props.possibleMembers) {
  selectableMembersInitial.push({
    ...m,
    selected: taskMembersIdKeys[m.id] !== undefined,
  });
}
const selectableTaskMembers = ref<SelectableMember[]>(selectableMembersInitial);
const isTaskMembersPickOpened = ref(false);
function updateTaskMembers(member: SelectableMember) {
  let taskMembers: Member[] = [];
  for (let m of selectableTaskMembers.value) {
    if (m.id == member.id) m.selected = member.selected;
    if (m.selected) taskMembers.push(m);
  }
  model.value.members = taskMembers;
}

const taskStartFormattedDate = ref("");
const isTaskStartDatePickOpened = ref(false);
function updateStartDate({
  date,
  formattedDate,
}: {
  date: Date;
  formattedDate: string;
}) {
  model.value.creationDate = date;
  taskStartFormattedDate.value = formattedDate;
}

const taskEndFormattedDate = ref("");
const isTaskEndDatePickOpened = ref(false);
function updateEndDate({
  date,
  formattedDate,
}: {
  date: Date;
  formattedDate: string;
}) {
  model.value.closeDate = date;
  taskEndFormattedDate.value = formattedDate;
}

const taskTitleErrorMessage = ref("");

function validate(): boolean {
  if (taskTitle.value.length == 0) {
    taskTitleErrorMessage.value = "Нужно ввести название";
    return false;
  }
  return true;
}
emit("providedValidationCallback", validate);

watch(taskTitle, () => {
  taskTitleErrorMessage.value = "";
});

watch(isTaskStatusPickOpened, () => {
  if (isTaskStatusPickOpened.value === true) {
    setTimeout(() => {
      emit("doNotStopClickUpdated", true);
    });
  } else {
    setTimeout(() => {
      emit("doNotStopClickUpdated", false);
    });
  }
});

watch(isTaskMembersPickOpened, () => {
  if (isTaskMembersPickOpened.value === true) {
    setTimeout(() => {
      emit("doNotStopClickUpdated", true);
    });
  } else {
    setTimeout(() => {
      emit("doNotStopClickUpdated", false);
    });
  }
});

watch(isTaskStartDatePickOpened, () => {
  if (isTaskStartDatePickOpened.value === true) {
    setTimeout(() => {
      emit("doNotStopClickUpdated", true);
    });
  } else {
    setTimeout(() => {
      emit("doNotStopClickUpdated", false);
    });
  }
});

watch(isTaskEndDatePickOpened, () => {
  if (isTaskEndDatePickOpened.value === true) {
    setTimeout(() => {
      emit("doNotStopClickUpdated", true);
    });
  } else {
    setTimeout(() => {
      emit("doNotStopClickUpdated", false);
    });
  }
});
</script>

<template>
  <div>
    <UIInput
      v-model:value="taskTitle"
      :placeholder="
        taskTitleErrorMessage ? taskTitleErrorMessage : 'Название задачи'
      "
      :error="!!taskTitleErrorMessage"
    />
    <UITextarea
      v-model:value="taskDescription"
      :placeholder="'Описание задачи'"
    ></UITextarea>
    <div class="taskDataForm__paramDropdownHolder">
      <div
        class="taskDataForm__paramRow"
        @click="isTaskStatusPickOpened = !isTaskStatusPickOpened"
      >
        <span class="taskDataForm__paramTitle">Колонка:</span>
        <span
          class="taskDataForm__status"
          :style="{
            '--accent-color': `var(${model.status.background})`,
          }"
        >
          {{ model.status.title }}
        </span>
      </div>
      <UIDropdown v-model:is-opened="isTaskStatusPickOpened">
        <UIListItem
          v-for="(s, index) in pickableStatuses"
          :key="index"
          class="taskDataForm__statusRow"
        >
          <span
            class="taskDataForm__status"
            :style="{
              '--accent-color': `var(${s.background})`,
            }"
            >{{ s.title }}</span
          >
          <UIRadioButton
            v-model:value="s.picked"
            @updated="() => updateStatus(s)"
          />
        </UIListItem>
      </UIDropdown>
    </div>
    <div class="taskDataForm__paramDropdownHolder">
      <div
        class="taskDataForm__paramRow"
        @click="isTaskMembersPickOpened = !isTaskMembersPickOpened"
      >
        <span class="taskDataForm__paramTitle">Исполнители:</span>
        <TeamInlineCircles
          v-if="model.members.length > 0"
          class="taskDataForm__members"
          :members="model.members"
          :shown-members-count="3"
        />
        <span
          v-else
          class="taskDataForm__paramPlaceholder"
        >
          Не выбрано
        </span>
      </div>
      <UIDropdown v-model:is-opened="isTaskMembersPickOpened">
        <TeamMembersCheckboxList
          :members="selectableTaskMembers"
          @updated="updateTaskMembers"
        />
      </UIDropdown>
    </div>
    <div class="taskDataForm__paramDropdownHolder">
      <div
        class="taskDataForm__paramRow"
        @click="isTaskStartDatePickOpened = !isTaskStartDatePickOpened"
      >
        <span class="taskDataForm__paramTitle">Дата начала:</span>
        <span
          class="taskDataForm__date"
          :class="{ picked: taskStartFormattedDate }"
        >
          {{ taskStartFormattedDate ? taskStartFormattedDate : "Не выбрано" }}
        </span>
      </div>
      <UICalendar
        v-model:is-opened="isTaskStartDatePickOpened"
        @selected="updateStartDate"
      />
    </div>
    <div class="taskDataForm__paramDropdownHolder">
      <div
        class="taskDataForm__paramRow"
        @click="isTaskEndDatePickOpened = !isTaskEndDatePickOpened"
      >
        <span class="taskDataForm__paramTitle">Дата конца:</span>
        <span
          class="taskDataForm__date"
          :class="{ picked: taskEndFormattedDate }"
        >
          {{ taskEndFormattedDate ? taskEndFormattedDate : "Не выбрано" }}
        </span>
      </div>
      <UICalendar
        v-model:is-opened="isTaskEndDatePickOpened"
        @selected="updateEndDate"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
textarea {
  margin-top: 12px;
  margin-bottom: 20px;
}

.taskDataForm {
  &__paramTitle {
    font-size: var(--default-font-size);
    color: var(--text-black);
    width: 120px;
    margin-right: 12px;
  }

  &__paramPlaceholder {
    font-size: var(--default-font-size);
    color: var(--text-gray);
  }

  &__paramDropdownHolder {
    position: relative;
  }

  &__paramRow {
    height: 27px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    width: 100%;
    cursor: pointer;
    border-radius: 6px;
    padding: 0 12px;
    box-sizing: border-box;
    transition: 0.1s background-color;

    &:hover {
      background-color: var(--element-light-gray);
    }
  }

  &__status {
    background-color: var(--accent-color);
    box-sizing: border-box;
    padding: 2px 12px;
    border-radius: 6px;
    margin-right: auto;
  }

  &__members {
    flex-grow: 1;
  }

  &__date {
    font-size: var(--default-font-size);
    color: var(--text-gray);

    &.picked {
      color: var(--theme-color);
    }
  }
}
</style>
