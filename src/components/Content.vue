<template>
  <div
    ref="contentEl"
    class="w-full h-full flex flex-col items-center gap-6"
    :style="{ minHeight: windowHeight + 'px' }"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { height: windowHeight } = useWindowSize();
</script>
