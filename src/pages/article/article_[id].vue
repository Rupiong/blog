<script lang="ts" setup>
// setPageLayout("custom");
definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="w-full flex flex-col justify-center items-center md:mt-6">
    <div class="w-full p-6 rounded-[6px]">
      <!-- 头部标签 -->
      <div class="flex items-center gap-2">
        <div class="leading-none p-2 rounded-full border text-[12px] bg-white">
          知乎
        </div>
        <div class="leading-none p-2 rounded-full border text-[12px] bg-white">
          知乎
        </div>
        <div class="leading-none p-2 rounded-full border text-[12px] bg-white">
          知乎
        </div>
      </div>
      <!-- 头部标题 -->
      <div
        class="text-[30px] md:text-[52px] font-bold leading-[1.2] text-[#333]"
      >
        React Hooks 是否可以改为用类似 Vue 3 Composition API 的方式实现？
      </div>
      <!-- 副标题 -->
      <div class="text-[22px] md:text-[32px] mt-2 text-[#666]">
        Thinking in React vs. Thinking in Vue
      </div>
      <!-- 时间、作者 -->
      <div
        class="italic font-thin text-[18px] mt-2 border-b border-dashed pb-6 text-[#999]"
      >
        Posted by Hux on April 3, 2020
      </div>
      <!-- 文章内容 -->
      <div></div>
      <Comment />
    </div>
  </div>
</template>
