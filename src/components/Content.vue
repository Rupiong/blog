<template>
  <div
    ref="contentEl"
    class="w-full flex-1 flex flex-col items-start justify-start gap-6 overflow-w-hidden"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { height: windowHeight } = useWindowSize();
</script>
