<script lang="ts" setup>
import {
  getGuestMessageById,
  formatMessageTime,
} from "@/data/guestMessages";

definePageMeta({
  layout: "custom",
});

const route = useRoute();
const id = String(route.params.id ?? "");
const message = getGuestMessageById(id);

if (!message) {
  throw createError({
    statusCode: 404,
    statusMessage: "留言不存在",
  });
}

useHead({
  title: `${message.userName} 的留言 | copyman blog`,
  description: message.content.slice(0, 120),
});
</script>

<template>
  <div
    class="flex h-full w-full flex-col bg-white transition-colors dark:bg-zinc-900 md:pt-6"
  >
    <div class="w-full p-6 rounded-[6px]">
      <div class="flex items-start gap-4 border-b border-dashed pb-6">
        <div
          class="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5] ring-1 ring-[#eee] md:h-20 md:w-20 dark:bg-zinc-800 dark:ring-zinc-600"
        >
          <img
            class="w-full h-full object-cover"
            :src="message.avatar"
            :alt="message.userName"
          />
        </div>
        <div class="flex flex-col gap-1 min-w-0">
          <div
            class="text-[22px] md:text-[28px] font-bold leading-tight text-[#333]"
          >
            {{ message.userName }}
          </div>
          <div class="italic font-thin text-[16px] text-[#999]">
            {{ formatMessageTime(message.createdAt) }}
          </div>
        </div>
      </div>
      <div
        class="mt-8 text-[15px] md:text-[16px] text-[#666] leading-[1.85] whitespace-pre-wrap"
      >
        {{ message.content }}
      </div>
      <div class="mt-10 pt-6 border-t border-[#f1f1f1]">
        <NuxtLink
          to="/message"
          class="text-[14px] text-primary hover:underline"
        >
          ← 返回留言列表
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
