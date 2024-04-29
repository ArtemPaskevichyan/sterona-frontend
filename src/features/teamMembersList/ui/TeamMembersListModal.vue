<script setup lang="ts">
import { UIModal } from "@/shared/modal";
import { onMounted, ref } from "vue";
import type { TeamMembersListModalProps } from "../lib/types";
import { TeamMembersList } from "@/features/teamMembersList";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
defineProps<TeamMembersListModalProps>();

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <Teleport
    v-if="isLoaded"
    to="#modal"
  >
    <UIModal
      v-model:is-opened="isOpened"
      :title="title"
      :close-on-click-outside="true"
    >
      <TeamMembersList :members="members" />
    </UIModal>
  </Teleport>
</template>

<style scoped lang="scss"></style>
