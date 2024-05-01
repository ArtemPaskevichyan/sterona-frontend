<script setup lang="ts">
import { watch, nextTick } from "vue";
import type { UICalendarProps, UICalendarEmits } from "../lib/types";
import AirDatepicker, { type AirDatepickerOptions } from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeRu from "air-datepicker/locale/ru";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
defineProps<UICalendarProps>();
const emit = defineEmits<UICalendarEmits>();

const calendarOptions: AirDatepickerOptions = {
  locale: localeRu,
  inline: false,
  classes: "uiCalendar__instance",
  onSelect({ date, formattedDate }) {
    date = Array.isArray(date) ? date[0] : date;
    formattedDate = Array.isArray(formattedDate)
      ? formattedDate[0]
      : formattedDate;
    emit("selected", { date, formattedDate });
  },
};

let calendarInstance: AirDatepicker | undefined;
watch(isOpened, () => {
  if (isOpened.value === true) {
    nextTick().then(() => {
      calendarInstance = new AirDatepicker(".uiCalendar", calendarOptions);
    });
    setTimeout(() => {
      document.addEventListener(
        "click",
        () => {
          isOpened.value = false;
        },
        { once: true },
      );
    });
  } else {
    calendarInstance = undefined;
  }
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpened"
      class="uiCalendar"
      @click.stop
    ></div>
  </Transition>
</template>

<style scoped lang="scss">
.uiCalendar {
  position: absolute;
  top: calc(100% + 4px);
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s all;
}

.fade-enter-to,
.fade-leave-from {
  transform-origin: top left;
}

.fade-enter-from,
.fade-leave-to {
  transform-origin: top left;
  scale: 0.9;
  opacity: 0;
}
</style>

<style lang="scss">
.air-datepicker.-inline-.uiCalendar__instance {
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: absolute;
}

.air-datepicker-cell {
  border-radius: 6px;
}

.air-datepicker-nav--action {
  border-radius: 6px;
}

.air-datepicker-nav--title {
  border-radius: 6px;
}
</style>
