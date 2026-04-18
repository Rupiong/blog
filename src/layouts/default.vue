<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import GlitchText from "@/components/GlitchText.vue";
import FadeContent from "@/components/FadeContent.vue";
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
  { threshold: 0 },
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
          class="relative w-full h-[680px] md:h-[480px] bg-[#ccc] flex flex-col justify-center items-center overflow-hidden text-primary"
        >
          <div class="text-[38px] lg:text-[56px] font-bold z-10">
            <FadeContent
              :blur="true"
              :duration="1000"
              :delay="300"
              :threshold="0.1"
              :initial-opacity="0"
              easing="ease-out"
              class-name="my-fade-content"
            >
              <div class="flex flex-col items-center justify-center">
                <GlitchText
                  :children="route.meta?.title as string"
                  :speed="2"
                  :enable-shadows="true"
                  :enable-on-hover="false"
                  className="text-[38px] lg:text-[88px] font-bold opacity-80"
                />
                <div class="z-10 text-[16px] font-thin">
                  「{{ route.meta.slogan }}」
                </div>
              </div>
            </FadeContent>
          </div>

          <img
            class="header-bg-img w-full h-full absolute object-cover scale-110"
            :src="route.meta.headerBgUrl"
          />
        </div>
        <div class="w-full mt-[-90px] z-10 flex justify-center">
          <ContentInner>
            <div class="w-full bg-white lg:rounded-md p-6 lg:p-16">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes header-bg-reveal {
  from {
    filter: brightness(1) blur(10px);
  }
  to {
    filter: brightness(0.4) blur(0);
  }
}

.header-bg-img {
  animation: header-bg-reveal 1s ease-out 300ms forwards;
}
</style>
