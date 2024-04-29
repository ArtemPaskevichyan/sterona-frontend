<script setup lang="ts">
import TeamMembersListItem from "./TeamMembersListItem.vue";
import { UICheckbox } from "@/shared/checkbox";
import type {
  TeamMembersCheckboxListProps,
  TeamMembersCheckboxListEmits,
} from "../lib/types";

defineProps<TeamMembersCheckboxListProps>();
const emit = defineEmits<TeamMembersCheckboxListEmits>();
</script>

<template>
  <TeamMembersListItem
    v-for="member in members"
    :key="member.id"
    :model="member"
  >
    <template v-slot:control>
      <UICheckbox
        v-model:value="member.selected"
        @updated="emit('updated', member)"
      />
    </template>
  </TeamMembersListItem>
</template>

<style scoped lang="scss"></style>
