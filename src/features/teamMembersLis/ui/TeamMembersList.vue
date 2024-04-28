<script setup lang="ts">
import TeamMembersListItem from "./TeamMembersListItem.vue";
import type { TeamMemberListProps } from "../lib/types";

defineProps<TeamMemberListProps>();
</script>

<template>
  <TeamMembersListItem
    v-for="member in members"
    :key="member.id"
    :model="member"
  />
</template>

<style scoped lang="scss"></style>
