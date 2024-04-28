<script setup lang="ts">
import NavigatorListItem from "@/widgets/navigatorSideBar/ui/NavigatorListItem.vue";
import { UIClearableInput } from "@/features/clearebleInput";
import { onBeforeMount, ref, watch } from "vue";
import { icons } from "@/widgets/navigatorSideBar/lib/icons";
import { useRouter } from "vue-router";

const searchText = ref("");
const links: {
  title: string;
  target: string;
  icon: string;
  isActive?: boolean;
}[] = [
  {
    title: "Профиль",
    target: "",
    icon: icons.profile,
  },
  {
    title: "Мои задачи",
    target: "",
    icon: icons.tasks,
  },
  {
    title: "Уведомления",
    target: "",
    icon: icons.notifications,
  },
  {
    title: "Создать организацию",
    target: "",
    icon: icons.createOrganization,
  },
];

onBeforeMount(() => {
  for (let l of links) {
    if (l.target === useRouter.name) {
      l.isActive = true;
      break;
    }
  }
});

watch(searchText, () => {});
</script>

<template>
  <section class="navigator">
    <div class="navigator__header">
      <div class="navigator__headerLabels">
        <img
          src="../assets/steronaLogo.png"
          height="56"
          width="56"
          alt="logo"
        />
        <h3 class="navigator__headerTitle">Sterona</h3>
      </div>
      <UIClearableInput
        v-model:value="searchText"
        placeholder="Поиск доски"
      />
    </div>
    <div class="navigator__links">
      <NavigatorListItem
        v-for="(l, index) in links"
        :key="index"
        :title="l.title"
        :target="l.target"
      >
        <template v-slot:icon>
          <span
            class="navigator__linkIcon"
            v-html="l.icon"
          ></span>
        </template>
      </NavigatorListItem>
    </div>
    <div class="navigator__boards"></div>
  </section>
</template>

<style scoped lang="scss">
.navigator {
  width: 250px;
  box-sizing: border-box;
  padding: 66px 24px;
  background: var(--default-background-color);
  border-right: 1px solid var(--element-gray);

  &__header {
    margin-bottom: 60px;
  }

  &__headerLabels {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    img {
      width: 28px;
      height: 28px;
    }
  }

  &__headerTitle {
    margin: 0;
    font-size: var(--large-font-size);
    font-weight: var(--semi-bold-font-weight);
  }

  &__linkIcon {
    display: flex;
  }
}
</style>
