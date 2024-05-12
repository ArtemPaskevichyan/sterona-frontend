<script setup lang="ts">
import { TaskDataForm } from "@/entities/taskDataForm";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIModal } from "@/shared/modal";
import type { EditTaskProps, EditTaskEmits } from "../lib/types";
import { onMounted, ref, watch } from "vue";
import type { Task } from "@/shared/types/task";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
const props = defineProps<EditTaskProps>();
const emit = defineEmits<EditTaskEmits>();

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});

const targetTask = ref<Task>({ ...props.task });

const dontStopClickOnModal = ref(false);
function updateStopClick(value: boolean) {
  dontStopClickOnModal.value = value;
}

let validation: (() => boolean) | undefined;
function setValidation(v: () => boolean) {
  validation = v;
}

function applyChanges() {
  if (validation === undefined) return;
  if (!validation()) return;
  emit("updated", targetTask.value);
  isOpened.value = false;
}

function deleteTask() {
  emit("deleted", props.task.id);
  isOpened.value = false;
}

watch(isOpened, () => {
  if (isOpened.value === true) {
    targetTask.value = { ...props.task };
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
      title="Изменить задачу"
      :dont-stop-click="dontStopClickOnModal"
    >
      <div class="editTask__content">
        <TaskDataForm
          v-if="isOpened"
          v-model:model="targetTask"
          class="editTask__form"
          :statuses="statuses"
          :possible-members="possibleMembers"
          @do-not-stop-click-updated="updateStopClick"
          @provided-validation-callback="setValidation"
        />
        <div class="editTask__controls">
          <UIButton
            :type="UIButtonStates.Danger"
            @click="deleteTask"
          >
            Удалить задачу
          </UIButton>
          <UIButton
            :type="UIButtonStates.Primary"
            @click="applyChanges"
          >
            Сохранить
          </UIButton>
        </div>
      </div>
    </UIModal>
  </Teleport>
</template>

<style scoped lang="scss">
.editTask {
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__form {
    flex-grow: 1;
  }

  &__controls {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-left: auto;
  }
}
</style>
