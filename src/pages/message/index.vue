<template>
  <div class="flex-1 w-full h-full flex flex-col  gap-6 p-3 bg-white">
    <NuxtLink
      v-for="item in guestMessages"
      :key="item.id"
      :to="`/message/message_${item.id}`"
      class="flex w-full gap-4 border-b last:border-none border-[#f1f1f1] pb-10 group cursor-pointer text-left"
    >
      <div
        class="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-[#f5f5f5] ring-1 ring-[#eee]"
      >
        <img
          class="w-full h-full object-cover"
          :src="item.avatar"
          :alt="item.userName"
        />
      </div>
      <div class="flex flex-col gap-2 min-w-0 flex-1">
        <div
          class="flex flex-wrap items-baseline justify-between gap-2 text-[14px] text-[#999] italic font-thin"
        >
          <span class="text-[#333] not-italic font-bold group-hover:text-primary transition-colors">
            {{ item.userName }}
          </span>
          <span>{{ formatMessageTime(item.createdAt) }}</span>
        </div>
        <div
          class="text-[14px] text-[#666] group-hover:underline decoration-solid decoration-[#999] line-clamp-3 leading-relaxed"
        >
          {{ item.content }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import message_bg from "@/assets/images/index_bg.jpeg";
import { guestMessages, formatMessageTime } from "@/data/guestMessages";

definePageMeta({
  layout: "custom",
  showSiderBar: true,
  title: "留言板",
  slogan: "有空的话，留下一句话吧",
  headerBgUrl: message_bg,
});

useHead({
  title: "留言板 | copyman blog",
  description: "访客留言与互动",
});
</script>
