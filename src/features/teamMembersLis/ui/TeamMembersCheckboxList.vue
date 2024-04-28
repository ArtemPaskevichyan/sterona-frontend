<script setup lang="ts">
import TeamMembersListItem from "./TeamMembersListItem.vue";
import { UICheckbox } from "@/shared/checkbox";
import type {
  TeamMemberCheckboxListProps,
  TeamMemberCheckboxListEmits,
} from "../lib/types";

defineProps<TeamMemberCheckboxListProps>();
const emit = defineEmits<TeamMemberCheckboxListEmits>();
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
