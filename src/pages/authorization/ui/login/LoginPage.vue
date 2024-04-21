<script setup lang="ts">
import { LoginForm } from "@/widgets/loginForm";
import { UILink } from "@/shared/link";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="authBlock">
    <h4>
      <span>Sterona</span> – корпоративный<br />
      таск-трекер
    </h4>
    <LoginForm />
    <div class="links">
      <UILink @click="router.push({ name: 'registration' })">
        Регистрация
      </UILink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.authBlock {
  height: 100%;
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h4 {
  margin: 0;
  padding: 0;
  color: var(--text-gray);
  font-size: 18px;
  font-weight: var(--semi-bold-font-weight);
  width: fit-content;

  span {
    color: var(--theme-color-light);
  }
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
