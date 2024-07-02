<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <NuxtLink
      :to="'article/article_' + item"
      class="flex flex-col gap-2 border-b last:border-none border-[#f1f1f1] pb-10 group cursor-pointer"
      v-for="item in 10"
      :key="item"
    >
      <div
        class="text-[22px] text-[#333] font-bold group-hover:text-primary line-clamp-2"
      >
        作为一个前端，看不懂@黄玄 的几乎每一个回答，只有我自己吗？
      </div>
      <div
        class="text-[14px] text-[#666] group-hover:underline decoration-solid decoration-[#999] line-clamp-3"
      >
        雪碧（doodlewind）邀请我给《JavaScript 二十年》 写的推荐序。 JavaScript
        常常被戏称为一门偶然成功的玩具语言。而实际上，它出身名门，更是成长在聚光灯之下。纵观历史，有资格被标准化的编程语言甚少，它因此成为多方角力的战场，却也有幸同时得到业界与学界先驱的亲传。时至今日，我们甚至难言是它背负了太多妥协，还是这些妥协才成就了它呢。以史为鉴，或许你会有自己的
      </div>
      <div
        class="flex justify-between text-[18px] text-[#999] italic font-thin"
      >
        <div>Posted by Hux on April 10, 2021</div>
      </div>
    </NuxtLink>
  </div>
  <div class="flex justify-center" v-if="viewport.isGreaterOrEquals('md')">
    <a-pagination v-model:current="current" :total="50" show-less-items />
  </div>
</template>
<script setup lang="ts">
import index_bg from "@/assets/images/index_bg.jpeg";
definePageMeta({
  showSiderBar: true,
  title: "Copyman Blog",
  slogan: "天一亮時間就不屬於我了",
  headerBgUrl: index_bg,
});
useHead({
  title: "copyman blog",
  ogTitle: "我的神奇网站",
  description: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
const viewport = useViewport();
const current = ref(2);

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
  console.log(viewport.breakpoint, "viewport");
  console.log(viewport.breakpointValue("xs"), "mobile val");
  console.log(viewport.isGreaterOrEquals("md"), "xl isLessThan");
});
</script>
