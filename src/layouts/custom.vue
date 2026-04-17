<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-hidden">
    <Header
      key="22"
      :isLucency="false"
      colorClass="text-black"
      :isFixed="false"
    />
    <div class="w-full flex-1 flex flex-col items-start justify-start overflow-hidden ">
      <Content>
        <ContentInner>
          <slot />
        </ContentInner>
      </Content>
    </div>
    <!-- <Footer v-if="viewport.isGreaterOrEquals('md')" class="mt-6" /> -->
  </div>
</template>

<style scoped></style>
