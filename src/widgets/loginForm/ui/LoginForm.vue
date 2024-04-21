<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIInput } from "@/shared/input";
import { UIPasswordInput } from "@/features/passwordInput";
import { UILink } from "@/shared/link";
import { LoadingWall } from "@/widgets/loadingWall";

import { signinRequest } from "@/widgets/loginForm/api/LoginAPI";

const isMounted = ref(false);

const username = ref("");
const password = ref("");

const isLoading = ref(false);

onMounted(() => {
  isMounted.value = true;
});

const errorMessages = reactive({
  username: "",
  password: "",
});

function previousValidation() {
  let hasError = false;

  if (username.value === "") {
    errorMessages.username = "Введите логин";
    hasError = true;
  }
  if (password.value === "") {
    errorMessages.password = "Введите пароль";
    hasError = true;
  }

  if (hasError) throw "invalid form";
}

function signin() {
  try {
    previousValidation();
  } catch (error) {
    console.error(error);
    return;
  }

  signinRequest({ password: password.value, username: username.value })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <section class="form">
    <h2>Вход</h2>
    <UIInput
      v-model:value="username"
      :error="errorMessages.username.length != 0"
      :placeholder="
        errorMessages.username.length == 0 ? 'Логин' : errorMessages.username
      "
    />
    <UIPasswordInput
      v-model:value="password"
      :error="errorMessages.password.length != 0"
      :placeholder="
        errorMessages.password.length == 0 ? 'Пароль' : errorMessages.password
      "
    />
    <UIButton
      :type="UIButtonStates.Primary"
      @click="signin"
    >
      Войти
    </UIButton>
    <UILink>Забыли пароль</UILink>
  </section>
  <teleport
    v-if="isMounted"
    to="#authForm"
  >
    <LoadingWall v-if="isLoading" />
  </teleport>
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
