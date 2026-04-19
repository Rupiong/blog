<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-y-auto">
    <Header
      key="22"
      :isLucency="false"
      colorClass="text-black !shadow-none"
      :isFixed="false"
    />
    <div class="w-full flex-1 flex flex-col items-start justify-start">
      <Content>
        <!-- <ContentInner> -->
          <slot />
        <!-- </ContentInner> -->
      </Content>
    </div>
  </div>
</template>

<style scoped></style>
