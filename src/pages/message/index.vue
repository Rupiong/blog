<template>
  <div
    class="flex h-full w-full flex-1 flex-col gap-6 bg-white p-10 transition-colors dark:bg-zinc-900"
  >
    <ContentInner>
      <div class="w-full flex flex-col gap-10">
        <div v-if="pending" class="py-12 text-center text-[#999] dark:text-zinc-500">
          加载中…
        </div>
        <div
          v-else-if="error"
          class="py-12 text-center text-error"
        >
          {{ error.message || "留言列表加载失败" }}
        </div>
        <template v-else-if="paginatedGuestMessages.length">
        <NuxtLink
          v-for="(item, index) in paginatedGuestMessages"
          :key="item.id"
          :to="`/message/message_${item.id}`"
          class="group flex w-full cursor-pointer gap-4 text-left"
          :class="
            index < paginatedGuestMessages.length - 1
              ? 'border-b border-[#f1f1f1] pb-10 dark:border-zinc-700'
              : 'pb-10'
          "
        >
          <div
            class="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5] ring-1 ring-[#eee] md:h-14 md:w-14 dark:bg-zinc-800 dark:ring-zinc-600 flex items-center justify-center"
          >
          <Icon name="ic:baseline-person" class="text-5xl text-[#ddd]" />
          </div>
          <div class="flex flex-col gap-2 min-w-0 flex-1">
            <div
              class="flex flex-wrap items-baseline justify-between gap-2 text-[14px] text-[#999] italic font-thin"
            >
              <span
                class="text-[#333] not-italic font-bold group-hover:text-primary transition-colors"
              >
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
        </template>
        <div v-else class="py-12">
          <AEmpty description="暂无留言，来当第一个吧。" />
        </div>

        <div
          v-if="!pending && !error && guestMessageTotal > guestMessagePageSize"
          class="flex w-full justify-center border-b border-[#f1f1f1] pb-10 dark:border-zinc-700"
        >
          <APagination
            v-model:current="currentPage"
            :total="guestMessageTotal"
            :page-size="guestMessagePageSize"
            :show-size-changer="false"
          />
        </div>

        <GuestMessageForm
          :submit-message="postPublicSiteMessage"
          success-message="留言已提交"
          @success="onGuestMessageSubmitted"
        />
      </div>
    </ContentInner>

  </div>
</template>

<script setup lang="ts">
import {
  fetchPublicSiteMessages,
  postPublicSiteMessage,
} from "@/api/guestMessage";
import message_bg from "@/assets/images/index_bg.jpeg";
import defaultGuestAvatar from "@/assets/images/about_avatar.jpg";
import { formatMessageTime } from "@/data/guestMessages";

const guestMessagePageSize = 10;
const currentPage = ref(1);

const { data, error, pending, refresh } = await useAsyncData(
  "public-site-messages",
  () =>
    fetchPublicSiteMessages({
      page: currentPage.value,
      pageSize: guestMessagePageSize,
    }),
  { watch: [currentPage] },
);

const guestMessageTotal = computed(() => data.value?.meta.total ?? 0);

const paginatedGuestMessages = computed(() => {
  const rows = data.value?.data ?? [];
  return rows.map((r) => ({
    id: r.id,
    userName: r.guest_name,
    content: r.content,
    createdAt: r.created_at,
    avatar: defaultGuestAvatar,
  }));
});

definePageMeta({
  layout: "custom-full",
  showSiderBar: true,
  title: "留言板",
  slogan: "有空的话，留下一句话吧",
  headerBgUrl: message_bg,
});

useHead({
  title: "留言板 | copyman blog",
  meta: [{ name: "description", content: "访客留言与互动" }],
});

async function onGuestMessageSubmitted() {
  currentPage.value = 1;
  await refresh();
}
</script>
