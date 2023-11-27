<script setup lang="ts"></script>

<template>
  <div class="w-full h-full">
    <NuxtLayout>
      <!--  在页面导航上显示进度条	-->
      <NuxtLoadingIndicator />
      <NuxtPage />
      <van-back-top />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
#__nuxt,
html,
body {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f5f5f5;
  // border: 1px solid green;
}
</style>
