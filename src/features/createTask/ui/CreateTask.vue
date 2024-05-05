<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { CreateTaskProps, CreateTaskEmits } from "../lib/types";
import type { TaskModel } from "@/shared/types/task";
import { UIButton, UIButtonStates } from "@/shared/button";
import { TaskDataForm } from "@/entities/taskDataForm";
import { UIModal } from "@/shared/modal";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
const props = defineProps<CreateTaskProps>();
const emit = defineEmits<CreateTaskEmits>();

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});

function getTaskTemplate(): TaskModel {
  return {
    closeDate:
      new Date(new Date().toDateString()).getTime() + 1000 * 60 * 60 * 24,
    creationDate: new Date(new Date().toDateString()).getTime(),
    description: "",
    members: [],
    name: "",
    priority: 0,
    status: props.status,
  };
}
const taskTemplate: TaskModel = getTaskTemplate();
const newTask = ref<TaskModel>({ ...taskTemplate });

const dontStopClickOnModal = ref(false);

function updateStopClick(value: boolean) {
  dontStopClickOnModal.value = value;
}

let validation: (() => boolean) | undefined;
function setValidation(v: () => boolean) {
  validation = v;
}

function saveTask() {
  if (validation === undefined) return;
  if (!validation()) return;
  emit("created", newTask.value);
  isOpened.value = false;
}

watch(isOpened, () => {
  if (isOpened.value === true) {
    newTask.value = getTaskTemplate();
  }
});
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
      <div class="createTask__content">
        <TaskDataForm
          v-if="isOpened"
          v-model:model="newTask"
          class="createTask__form"
          :statuses="statuses"
          :possible-members="possibleMembers"
          @do-not-stop-click-updated="updateStopClick"
          @provided-validation-callback="setValidation"
        />
        <UIButton
          class="createTask__createButton"
          :type="UIButtonStates.Primary"
          @click="saveTask"
        >
          Создать
        </UIButton>
      </div>
    </UIModal>
  </Teleport>
</template>

<style scoped lang="scss">
.createTask {
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__form {
    flex-grow: 1;
  }

  &__createButton {
    margin-left: auto;
  }
}
</style>
