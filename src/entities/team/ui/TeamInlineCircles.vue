<script setup lang="ts">
import type { Member } from "@/shared/types/team";
import type {
  TeamInlineCirclesEmits,
  TeamInlineCirclesProps,
} from "../lib/types";
import { TooltipWrapper } from "@/shared/tooltip";
import { computed, watch, ref, reactive } from "vue";

const props = defineProps<TeamInlineCirclesProps>();
const emit = defineEmits<TeamInlineCirclesEmits>();

const isExpandTooltipShown = ref(false);
type MemberWithTooltip = Member & { tooltipShown?: boolean };
const membersWithTooltips = ref<MemberWithTooltip[]>([]);
const membersRaw = computed(() => {
  updateTooltipsArray();
  return props.members;
});
const members = ref(membersRaw);
function updateTooltipsArray() {
  membersWithTooltips.value = props.members.map((e) => ({
    ...e,
    tooltipShown: false,
  }));
}

const membersHidden = computed(() => {
  return props.members.length - props.shownMembersCount;
});
const membersHiddenLabel = computed(() => {
  if (10 < membersHidden.value % 100 && membersHidden.value % 100 < 20)
    return `Еще ${membersHidden.value} участников`;
  if (membersHidden.value % 10 == 1)
    return `Еще ${membersHidden.value} участник`;
  if (membersHidden.value % 10 == 0)
    return `Еще ${membersHidden.value} участников`;
  if (membersHidden.value % 10 < 5)
    return `Еще ${membersHidden.value} участника`;
  if (membersHidden.value % 10 >= 5)
    return `Еще ${membersHidden.value} участников`;
  return "";
});
</script>

<template>
  <span
    class="teamInlineCircles"
    :style="{ '--members': shownMembersCount }"
  >
    <TooltipWrapper
      v-if="membersHidden > 0"
      :label="membersHiddenLabel"
      :show-tooltip="isExpandTooltipShown"
    >
      <span
        class="teamInlineCircles__circle teamInlineCircles__circle-expand"
        @mouseenter="isExpandTooltipShown = true"
        @mouseleave="isExpandTooltipShown = false"
        @click="emit('extend', props.members)"
      >
        ...
      </span>
    </TooltipWrapper>
    <TooltipWrapper
      v-for="(member, index) in members
        .slice(0, props.shownMembersCount)
        .reverse()"
      :key="member.id"
      :label="member.name"
      :show-tooltip="membersWithTooltips[index]?.tooltipShown ?? false"
      @mouseenter="membersWithTooltips[index].tooltipShown = true"
      @mouseleave="membersWithTooltips[index].tooltipShown = false"
    >
      <span class="teamInlineCircles__circle">
        {{ member.name[0] }}
      </span>
    </TooltipWrapper>
  </span>
</template>

<style scoped lang="scss">
.teamInlineCircles {
  --size: 22px;
  --halfSize: 11px;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--halfSize));
  grid-auto-rows: auto;

  &__circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid var(--default-background-color);
    box-sizing: border-box;
    background-color: var(--element-gray);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s transform;
    pointer-events: all;

    &-expand {
      cursor: pointer;
    }
  }

  .uiTooltipWrapper {
    transition: 0.3s transform;
  }

  .uiTooltipWrapper:hover {
    .teamInlineCircles__circle {
      transform: translateY(-6px);

      &-expand {
        filter: brightness(0.95);
      }
    }

    & ~ .uiTooltipWrapper {
      transform: translateX(9px);
    }
  }
}
</style>
