<script setup lang="ts">
import { ref } from "vue";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIInput } from "@/shared/input";
import { UIPasswordInput } from "@/features/passwordInput";
import { UILink } from "@/shared/link";
import { LoadingWall } from "@/widgets/loadingWall";

const email = ref("");
const password = ref("");

const isLoading = ref(false);

function signin() {}
</script>

<template>
  <section class="form">
    <h2>Вход</h2>
    <UIInput
      v-model:value="email"
      :type="'email'"
      :placeholder="'Почта'"
    />
    <UIPasswordInput
      v-model:value="password"
      :placeholder="'Пароль'"
    />
    <UIButton
      :type="UIButtonStates.Primary"
      @click="signin"
    >
      Войти
    </UIButton>
    <UILink>Забыли пароль</UILink>
  </section>
  <!--  <teleport to="#authForm">-->
  <!--    <LoadingWall v-if="isLoading" />-->
  <!--  </teleport>-->
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 256px;

  button {
    margin-top: 10px;
  }

  .link {
    margin-top: 10px;
  }
}

h2 {
  color: var(--text-black);
  font-size: 24px;
  font-weight: var(--bold-font-weight);
  margin: 0;
  padding: 0;
}
</style>
