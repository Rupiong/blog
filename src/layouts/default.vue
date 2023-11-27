<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
const { $onReachBottom } = useNuxtApp();
$onReachBottom(() => {
  console.log("到达底部");
});

const viewport = useViewport();
// watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
//   console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
// })

const route = useRoute();

const headerBgRef = ref(null);
const headerConfig = ref({
  isLucency: true,
  colorClass: "text-white",
});
const { stop } = useIntersectionObserver(
  headerBgRef,
  ([{ isIntersecting }], observerElement) => {
    headerConfig.value.isLucency = isIntersecting;
    headerConfig.value.colorClass = isIntersecting
      ? "text-white"
      : "text-black";
  },
  { threshold: 0 }
);
</script>

<template>
  <div class="w-full h-full relative">
    <div class="w-full relative">
      <Header
        :isLucency="headerConfig.isLucency"
        :colorClass="headerConfig.colorClass"
      />
      <Content class="w-full">
        <div
          ref="headerBgRef"
          class="relative w-full h-[680px] md:h-[480px] bg-[#ccc] flex flex-col justify-center items-center bg-cover bg-center overflow-hidden text-primary"
        >
          <div class="text-[38px] lg:text-[56px] font-bold z-10">
            {{ route.meta.title }}
          </div>
          <div class="z-10 text-[14px] font-thin">
            「{{ route.meta.slogan }}」
          </div>
          <img
            class="w-full h-full absolute object-cover brightness-50"
            :src="route.meta.headerBgUrl"
          />
        </div>
        <div class="w-full mt-[-90px] z-10 flex justify-center">
          <ContentInner>
            <div class="w-full bg-white rounded-md p-6 lg:p-16">
              <slot />
            </div>
            <div
              v-if="route.meta.showSiderBar"
              class="w-[300px] h-fit shrink-0 bg-white rounded-md p-10 sticky top-20 hidden lg:block"
            >
              <Siderbar />
            </div>
          </ContentInner>
        </div>
      </Content>
      <Footer v-if="viewport.isGreaterOrEquals('md')" class="mt-6" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
