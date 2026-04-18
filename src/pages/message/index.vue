<template>
  <div
    class="flex h-full w-full flex-1 flex-col gap-6 bg-white p-3 transition-colors dark:bg-zinc-900"
  >
    <NuxtLink
      v-for="item in guestMessages"
      :key="item.id"
      :to="`/message/message_${item.id}`"
      class="group flex w-full cursor-pointer gap-4 border-b border-[#f1f1f1] pb-10 text-left last:border-none dark:border-zinc-700"
    >
      <div
        class="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5] ring-1 ring-[#eee] md:h-14 md:w-14 dark:bg-zinc-800 dark:ring-zinc-600"
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
