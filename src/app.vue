<script setup lang="ts">
</script>

<template>
  <div
    class="w-full min-h-full h-fit flex flex-col bg-[#f5f5f5] text-neutral-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100"
  >
    <NuxtLayout class="w-full flex-1 h-full flex flex-col">
      <!--  在页面导航上显示进度条	-->
      <NuxtLoadingIndicator />
      <NuxtPage />
      <van-back-top z-index="99" class="z-99 !bg-primary"/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
#__nuxt,
html,
body {
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100dvh;
}

html.dark,
html.dark body {
  color-scheme: dark;
}
</style>
