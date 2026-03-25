<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div>
    <Header
      key="22"
      :isLucency="false"
      colorClass="text-black"
      :isFixed="false"
    />
    <div class="w-full h-full overflow-y-auto flex flex-col items-start justify-start">
      <Content>
        <ContentInner>
          <slot />
        </ContentInner>
      </Content>
    </div>
    <Footer v-if="viewport.isGreaterOrEquals('md')" class="mt-6" />
  </div>
</template>

<style scoped></style>
