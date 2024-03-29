<script setup lang="ts"></script>

<template>
  <div class="auth">
    <div class="auth__content">
      <section
        id="authForm"
        class="auth__form"
      >
        <RouterView></RouterView>
      </section>
      <section class="auth__pattern">
        <img
          src="../../assets/authPattern.jpg"
          alt="Sterona"
        />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth {
  width: 100%;
  min-height: 100dvh;
  background: var(--theme-color-light);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background: var(--default-background-color);
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: clamp(800px, 80%, 1200px);
  }

  &__form {
    padding: 44px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  &__pattern {
    height: min(782px, 90vh);
    max-width: 833px;
    min-width: 50%;

    img {
      height: 100%;
      width: 100%;
      position: relative;
      object-fit: cover;
      object-position: right top;
    }
  }
}
</style>
