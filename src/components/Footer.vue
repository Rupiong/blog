<template>
  <div
    ref="footerEl"
    :class="[
      'w-full flex items-center justify-between bg-[#333] px-4 py-2 text-white',
      { 'absolute bottom-0': seFixed },
    ]"
  >
    <div>Copyman</div>
    <div class="text-[14px]">Copyright © Copyman Blog 2023</div>
    <!-- <div>right</div> -->
  </div>
</template>
<script setup lang="ts">
import { useElementBounding, useWindowSize } from "@vueuse/core";
const footerEl = ref(null);
const { height: windowHeight } = useWindowSize();
const { x, y, top, right, bottom, left, width, height } =
  useElementBounding(footerEl);
const seFixed = computed(
  () => windowHeight.value > bottom.value + height.value
);
</script>
