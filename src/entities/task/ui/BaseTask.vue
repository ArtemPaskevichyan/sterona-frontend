<script setup lang="ts">
import type { TaskModel } from "@/shared/types/task";
import { StatusToColor } from "@/shared/types/task";
import { TeamInlineCircles } from "@/entities/team";
import { UIProgressBarSlim } from "@/shared/progress";
import { computed, ref } from "vue";
import { TooltipWrapper } from "@/shared/tooltip";
import type { BaseTaskEmits } from "../lib/types";

const props = defineProps<{ model: TaskModel }>();
const emit = defineEmits<BaseTaskEmits>();

const showProgressBarTooltip = ref(false);

const daysLeft = computed(() => {
  return Math.ceil(
    (props.model.closeDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
});
const daysLeftLabel = computed(() => {
  if (daysLeft.value > 0) {
    if (10 < daysLeft.value % 100 && daysLeft.value % 100 < 20)
      return `Остось ${daysLeft.value} дней`;
    if (daysLeft.value % 10 == 1) return `Остался ${daysLeft.value} день`;
    if (daysLeft.value % 10 == 0) return `Осталось ${daysLeft.value} дней`;
    if (daysLeft.value % 10 < 5) return `Осталось ${daysLeft.value} дня`;
    if (daysLeft.value % 10 >= 5) return `Осталось ${daysLeft.value} дней`;
  } else if (daysLeft.value < 0) {
    if (10 < -daysLeft.value % 100 && -daysLeft.value % 100 < 20)
      return `Просрочено на ${-daysLeft.value} дней`;
    if (-daysLeft.value % 10 == 1)
      return `Просрочено на ${-daysLeft.value} день`;
    if (-daysLeft.value % 10 == 0)
      return `Просрочено на ${-daysLeft.value} дней`;
    if (-daysLeft.value % 10 < 5) return `Просрочено на ${-daysLeft.value} дня`;
    if (-daysLeft.value % 10 >= 5)
      return `Просрочено на ${-daysLeft.value} дней`;
  }
  return "Дедлайн сегодня";
});
const progress = computed(() => {
  return Math.min(
    1,
    (Date.now() - props.model.creationDate.getTime()) /
      (props.model.closeDate.getTime() - props.model.creationDate.getTime()),
  );
});
const taskColor = computed(() => {
  // @ts-ignore
  return StatusToColor[props.model.status].background ?? "--task-grey";
});
</script>

<template>
  <div
    class="baseTask"
    :style="{ '--task-color': `var(${taskColor})` }"
  >
    <div class="baseTask__titleBlock">
      {{ model.name }}
    </div>
    <div class="baseTask__controls">
      <TeamInlineCircles
        :members="props.model.members"
        :shown-members-count="3"
        class="baseTask__team"
        @extend="emit('showTeam', model.members)"
      />
      <TooltipWrapper
        :show-tooltip="showProgressBarTooltip"
        :label="daysLeftLabel"
        @mouseenter="showProgressBarTooltip = true"
        @mouseleave="showProgressBarTooltip = false"
      >
        <UIProgressBarSlim
          :progress="progress"
          :danger-border="0.75"
          class="baseTask__progressBar"
        />
      </TooltipWrapper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.baseTask {
  --task-color: #f3f3f3;
  width: 258px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  padding: 6px 14px 6px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border-left: 6px solid var(--task-color);
  color: var(--text-black);

  &__titleBlock {
    font-size: var(--default-font-size);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &__controls {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__team {
    flex-shrink: 0;
    flex-grow: 1;
  }

  &__progressBar {
    width: 94px;
    flex-shrink: 0;
  }
}
</style>
