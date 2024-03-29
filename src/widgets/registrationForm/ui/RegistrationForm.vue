<script setup lang="ts">
import { ref } from "vue";
import { UIButton, UIButtonStates } from "@/shared/button";
import { UIInput } from "@/shared/input";
import { UIPasswordInput } from "@/features/passwordInput";
import { LoadingWall } from "@/widgets/loadingWall";

import { signupRequest } from "../api/RegistrationAPI";

const email = ref("");
const password = ref("");
const passwordAgain = ref("");
const username = ref("");

const mock = {
  username: "qwe",
  email: "hui@mail.ru",
  password: "123123hui",
};

const isLoading = ref(false);

function previousValidation() {}

function signup() {
  previousValidation();

  // signupRequest({
  //   email: email.value,
  //   password: password.value,
  //   username: username.value,
  // })
  signupRequest(mock)
    .then((response) => {})
    .catch((error) => {});
}
</script>

<template>
  <section class="form">
    <h2>Регистрация</h2>
    <UIInput
      v-model:value="username"
      :type="'text'"
      :placeholder="'Придумайте логин'"
    />
    <UIInput
      v-model:value="email"
      :type="'email'"
      :placeholder="'Почта'"
    />
    <UIPasswordInput
      v-model:value="password"
      :placeholder="'Пароль'"
    />
    <UIPasswordInput
      v-model:value="passwordAgain"
      :placeholder="'Повторите пароль'"
    />

    <UIButton
      :type="UIButtonStates.Primary"
      @click="signup"
    >
      Создать аккаунт
    </UIButton>
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
}

h2 {
  color: var(--text-black);
  font-size: 24px;
  font-weight: var(--bold-font-weight);
  margin: 0;
  padding: 0;
}
</style>
