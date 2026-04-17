<template>
  <div
    ref="contentEl"
    class="w-full flex-1 flex flex-col items-center gap-6 overflow-hidden "
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { height: windowHeight } = useWindowSize();
</script>
