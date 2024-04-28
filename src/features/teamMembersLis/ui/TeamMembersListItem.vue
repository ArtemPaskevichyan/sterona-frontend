<script setup lang="ts">
import { UIListItem } from "@/shared/list";
import type {
  TeamMemberListItemProps,
  TeamMemberListItemSlots,
} from "../lib/types";

defineProps<TeamMemberListItemProps>();
defineSlots<TeamMemberListItemSlots>();
</script>

<template>
  <UIListItem class="teamMember">
    <div class="teamMember__content">
      <span class="teamMember__image">{{ model.name[0] ?? "U" }}</span>
      <span class="teamMember__name">{{ model.name }}</span>
      <span class="teamMember__role">{{ model.role }}</span>
    </div>
    <slot name="control"></slot>
  </UIListItem>
</template>

<style scoped lang="scss">
.teamMember {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }

  &__image {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--element-gray);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__name {
    font-size: var(--default-font-size);
    color: var(--text-black);
  }

  &__role {
    font-size: var(--default-font-size);
    color: var(--text-gray);
  }
}
</style>
