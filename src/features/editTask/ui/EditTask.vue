<script setup lang="ts">
import { TaskDataForm } from "@/entities/taskDataForm";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIModal } from "@/shared/modal";
import type { EditTaskProps, EditTaskEmits } from "../lib/type";
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
      title="Добавить задачу"
      :dont-stop-click="dontStopClickOnModal"
    >
      <div class="createTask__content">
        <TaskDataForm
          v-if="isOpened"
          v-model:model="targetTask"
          class="createTask__form"
          :statuses="statuses"
          :possible-members="possibleMembers"
          @do-not-stop-click-updated="updateStopClick"
          @provided-validation-callback="setValidation"
        />
        <UIButton
          class="createTask__createButton"
          :type="UIButtonStates.Primary"
          @click="applyChanges"
        >
          Сохранить
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
