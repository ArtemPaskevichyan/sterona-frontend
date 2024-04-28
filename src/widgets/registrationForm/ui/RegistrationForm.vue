<script setup lang="ts">
import { onMounted, ref, watch, reactive } from "vue";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIInput } from "@/shared/input";
import { UIPasswordInput } from "@/features/passwordInput";
import { LoadingWall } from "@/widgets/loadingWall";

import { signupRequest } from "../api/RegistrationAPI";
import type { AxiosError } from "axios";
import type { SignUpModel } from "../lib/types";

const isMounted = ref(false);

const email = ref("");
const password = ref("");
const passwordAgain = ref("");
const username = ref("");

const isLoading = ref(false);

onMounted(() => {
  isMounted.value = true;
});

const errorMessages = reactive({
  email: "",
  username: "",
  password: "",
  passwordAgain: "",
});

function previousValidation() {
  let hasError = false;

  if (username.value === "") {
    errorMessages.username = "Введите логин";
    hasError = true;
  }
  if (email.value === "") {
    errorMessages.email = "Введите email";
    hasError = true;
  }
  if (password.value === "") {
    errorMessages.password = "Введите пароль";
    hasError = true;
  }
  if (passwordAgain.value === "") {
    errorMessages.passwordAgain = "Введите пароль снова";
    hasError = true;
  }

  if (password.value != passwordAgain.value) {
    errorMessages.password = "Пароли отличаются";
    errorMessages.passwordAgain = "Пароли отличаются";
    hasError = true;
  }

  if (hasError) throw "invalid form";
}

watch(username, () => {
  errorMessages.username = "";
});
watch(email, () => {
  errorMessages.email = "";
});
watch(password, () => {
  if (errorMessages.password == "Пароли отличаются")
    errorMessages.passwordAgain = "";
  errorMessages.password = "";
});
watch(passwordAgain, () => {
  if (errorMessages.passwordAgain == "Пароли отличаются")
    errorMessages.password = "";
  errorMessages.passwordAgain = "";
});

function signup() {
  isLoading.value = true;
  try {
    previousValidation();
  } catch (error) {
    console.error(error);
    return;
  }

  isLoading.value = true;
  signupRequest({
    email: email.value,
    password: password.value,
    username: username.value,
  })
    .then(() => {})
    .catch((error: AxiosError) => {
      const errorData: SignUpModel = (error.response?.data ??
        Object) as SignUpModel;
      if ("email" in errorData) {
        errorMessages.email = errorData.email[0];
      }
      if ("password" in errorData) {
        errorMessages.password = errorData.password[0];
      }
      if ("username" in errorData) {
        errorMessages.username = errorData.username[0];
      }
      console.error(errorData);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <section class="form">
    <h2>Регистрация</h2>
    <UIInput
      v-model:value="username"
      :error="errorMessages.username.length != 0"
      :type="'text'"
      :placeholder="
        errorMessages.username.length == 0
          ? 'Придумайте логин'
          : errorMessages.username
      "
    />
    <UIInput
      v-model:value="email"
      :error="errorMessages.email.length != 0"
      :type="'email'"
      :placeholder="
        errorMessages.email.length == 0 ? 'Почта' : errorMessages.email
      "
    />
    <UIPasswordInput
      v-model:value="password"
      :error="errorMessages.password.length != 0"
      :placeholder="
        errorMessages.password.length == 0 ? 'Пароль' : errorMessages.password
      "
    />
    <UIPasswordInput
      v-model:value="passwordAgain"
      :error="errorMessages.passwordAgain.length != 0"
      :placeholder="
        errorMessages.passwordAgain.length == 0
          ? 'Повторите пароль'
          : errorMessages.passwordAgain
      "
    />

    <UIButton
      :type="UIButtonStates.Primary"
      @click="signup"
    >
      Создать аккаунт
    </UIButton>
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
}

h2 {
  color: var(--text-black);
  font-size: 24px;
  font-weight: var(--bold-font-weight);
  margin: 0;
  padding: 0;
}
</style>
