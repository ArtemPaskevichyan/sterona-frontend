<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { UIInput } from "@/shared/input";
import { UIModal } from "@/shared/modal";
import { UITextarea } from "@/shared/textarea";
import type { Member } from "@/shared/types/team";
import { TeamInlineCircles } from "@/entities/team";
import type { CreateTaskProps } from "../lib/types";
import type { TaskStatus } from "@/shared/types/task";
import { UIDropdown } from "@/shared/dropdown";
import { UIListItem } from "@/shared/list";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
const props = defineProps<CreateTaskProps>();

const taskTitle = ref("");
const taskDescription = ref("");

const taskStatus = ref<TaskStatus>(props.status);
const isTaskStatusPickOpened = ref(false);

const taskMembers = ref<Member[]>([]);
const isTaskMembersPickOpened = ref(false);

const taskStartDate = ref(0);
const isTaskStartDatePickOpened = ref(false);

const taskEndDate = ref(0);
const isTaskEndDatePickOpened = ref(false);

const errorMessage = reactive({
  taskTitle: "",
  taskDescription: "",
  taskStatus: "",
  taskMembers: "",
  taskStartDate: "",
  taskEndDate: "",
});

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});

watch(isTaskStatusPickOpened, () => {
  if (isTaskStatusPickOpened.value === true) {
    setTimeout(() => {
      dontStopClickOnModal.value = true;
    });
  } else {
    setTimeout(() => {
      dontStopClickOnModal.value = false;
    });
  }
});

const dontStopClickOnModal = ref(false);
</script>

<template>
  <Teleport
    v-if="isLoaded"
    to="#modal"
  >
    <UIModal
      v-model:is-opened="isOpened"
      title="Добавить задачу"
      :dont-stop-click="dontStopClickOnModal"
    >
      <UIInput
        v-model:value="taskTitle"
        :placeholder="'Название задачи'"
      />
      <UITextarea
        v-model:value="taskDescription"
        :placeholder="'Описание задачи'"
      ></UITextarea>
      <div
        class="createTask__paramRow"
        @click="isTaskStatusPickOpened = !isTaskStatusPickOpened"
      >
        <span class="createTask__paramTitle">Колонка:</span>
        <span
          class="createTask__status"
          :style="{
            '--accent-color': `var(${taskStatus.background})`,
          }"
          >{{ taskStatus.title }}</span
        >
        <UIDropdown v-model:is-opened="isTaskStatusPickOpened">
          <UIListItem
            v-for="(s, index) in statuses"
            :key="index"
          >
            <span
              class="createTask__status"
              :style="{
                '--accent-color': `var(${s.background})`,
              }"
              >{{ s.title }}</span
            >
          </UIListItem>
        </UIDropdown>
      </div>
      <div class="createTask__paramRow">
        <span class="createTask__paramTitle">Исполнители:</span>
        <TeamInlineCircles
          v-if="taskMembers.length > 0"
          :members="taskMembers"
          :shown-members-count="3"
        />
        <span
          v-else
          class="createTask__paramPlaceholder"
        >
          Не выбрано
        </span>
      </div>
      <div class="createTask__paramRow">
        <span class="createTask__paramTitle">Дата начала:</span>
        <span class="createTask__status">To-Do</span>
      </div>
      <div class="createTask__paramRow">
        <span class="createTask__paramTitle">Дата конца:</span>
        <span class="createTask__status">To-Do</span>
      </div>
    </UIModal>
  </Teleport>
</template>

<style scoped lang="scss">
textarea {
  margin-top: 12px;
  margin-bottom: 20px;
}

.createTask {
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

  &__paramRow {
    position: relative;
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
  }
}
</style>
