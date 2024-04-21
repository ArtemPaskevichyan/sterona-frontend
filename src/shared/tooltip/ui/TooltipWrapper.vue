<script setup lang="ts">
import { computed, ref } from "vue";

import UITooltip from "./UITooltip.vue";
import {
  TooltipDirection,
  type TooltipWrapperProps,
  type TooltipWrapperSlots,
} from "../lib/types";

const props = defineProps<TooltipWrapperProps>();
defineSlots<TooltipWrapperSlots>();

const tooltipWrapperElement = ref<HTMLElement | null>(null);
const tooltipElementRef = ref<typeof UITooltip | null>(null);
const tooltipDirection = ref<TooltipDirection>(TooltipDirection.Right);

const innerShowTooltip = computed(() => {
  beforeShowTooltip();
  return props.showTooltip;
});

function beforeShowTooltip() {
  if (tooltipWrapperElement.value && tooltipElementRef.value) {
    console.log(
      "TooltipWrapper:",
      tooltipWrapperElement.value.getBoundingClientRect(),
    );
    console.log(
      "Toolip:",
      (tooltipElementRef.value.$el as HTMLElement).getBoundingClientRect(),
    );
    const { width: twidth, height: theight } = (
      tooltipElementRef.value.$el as HTMLElement
    ).getBoundingClientRect();
    const {
      x: cx,
      y: cy,
      width: cwidth,
      height: cheight,
    } = tooltipWrapperElement.value.getBoundingClientRect();
    const [screenWidth, screenHeight] = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ];
    console.log(screenWidth, screenHeight);
    let showInLeft = false;
    let showInRight = false;
    let showInBottom = false;
    let showInTop = false;

    if (
      screenWidth - (cx + cwidth) > twidth &&
      cy + cheight / 2 > theight / 2 &&
      screenHeight - (cy - cheight / 2) > theight / 2
    ) {
      showInRight = true;
    }
    if (
      cx > twidth &&
      cy + cheight / 2 > theight / 2 &&
      screenHeight - (cy - cheight / 2) > theight / 2
    ) {
      showInLeft = true;
    }
    if (
      cy > theight &&
      cx + cwidth / 2 >= twidth / 2 &&
      screenWidth - (cx + cwidth / 2) >= twidth / 2
    ) {
      showInTop = true;
    }
    if (
      screenHeight - (cy + cheight) &&
      cx + cwidth / 2 >= twidth / 2 &&
      screenWidth - (cx + cwidth / 2) >= twidth / 2
    ) {
      showInBottom = true;
    }

    console.log(
      `Show in bottom: ${showInBottom}`,
      `Show in right: ${showInRight}`,
      `Show in left: ${showInLeft}`,
      `Show in top: ${showInTop}`,
    );

    if (showInBottom) tooltipDirection.value = TooltipDirection.Bottom;
    else if (showInRight) tooltipDirection.value = TooltipDirection.Right;
    else if (showInLeft) tooltipDirection.value = TooltipDirection.Left;
    else if (showInTop) tooltipDirection.value = TooltipDirection.Top;
    else tooltipDirection.value = TooltipDirection.Bottom;
  }
}
</script>

<template>
  <span
    ref="tooltipWrapperElement"
    class="uiTooltipWrapper"
  >
    <slot></slot>
    <UITooltip
      v-if="innerShowTooltip"
      ref="tooltipElementRef"
      :label="props.label"
      :direction="tooltipDirection"
    />
  </span>
</template>

<style scoped lang="scss">
.uiTooltipWrapper {
  position: relative;
  display: inline-block;
  width: fit-content;
}

.uiTooltip {
  position: absolute;
}
</style>
