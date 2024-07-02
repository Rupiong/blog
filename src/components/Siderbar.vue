<template>
  <div class="w-full flex flex-col gap-10">
    <div class="w-full flex flex-col gap-2">
      <div
        class="font-thin text-[16px] text-[#999] leading-none border-b border-dashed pb-2 mb-2"
      >
        ABOUT ME
      </div>
      <div class="w-full flex flex-col gap-2">
        <div class="w-full h-[220px] bg-[#ccc] rounded-md overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/about_avatar.jpg"
          />
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-[18px] font-bold text-[#333]">@小黄花</span>
          <span class="text-[14px] text-[#666]">前端开发工程师</span>
        </div>
        <div class="italic text-[#999] text-[14px]">
          -- 他不过是泛黄没人理采的花朵。
        </div>
        <div class="flex items-center justify-between mt-2">
          <APopover>
            <template #content>
              <div class="w-full flex justify-center">
                <img
                  class="w-40 object-cover"
                  src="@/assets/images/common/wechat.jpg"
                />
              </div>
            </template>
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="ic:baseline-wechat" />
            </div>
          </APopover>
          <APopover>
            <template #content>
              <div class="w-full h-40 bg-[#ccc]"></div>
            </template>
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="fa6-brands:weibo" />
            </div>
          </APopover>
          <NuxtLink to="https://github.com/Rupiong" target="_blank">
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="akar-icons:github-fill" />
            </div>
          </NuxtLink>
          <APopover>
            <template #content>
              <div class="w-full h-40 bg-[#ccc]"></div>
            </template>
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="material-symbols:mail-rounded" />
            </div>
          </APopover>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-2">
      <div
        class="font-thin text-[16px] text-[#999] leading-none border-b border-dashed pb-2 mb-2"
      >
        FEATURED TAGS
      </div>
      <div class="w-full flex flex-row gap-2 flex-wrap">
        <div
          class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"
        >
          知乎
        </div>
        <div
          class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"
        >
          笔记
        </div>
        <div
          class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"
        >
          UX/UI
        </div>
        <div
          class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"
        >
          计算计理论
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
