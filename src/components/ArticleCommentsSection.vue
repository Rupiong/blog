<template>
  <div id="article-comments" class="mt-12 w-full flex flex-col gap-10 border-t border-[#f1f1f1] pt-10 dark:border-zinc-700">
    <div>
      <h2 class="mb-6 text-[16px] font-bold text-[#333] dark:text-zinc-100">
        文章留言
      </h2>
      <div v-if="pending" class="py-8 text-center text-[#999] dark:text-zinc-500">
        加载中…
      </div>
      <div v-else-if="error" class="py-8 text-center text-error">
        {{ error.message || "留言加载失败" }}
      </div>
      <template v-else-if="displayComments.length">
        <div
          v-for="(item, index) in displayComments"
          :key="item.id"
          class="group flex w-full gap-4 text-left"
          :class="
            index < displayComments.length - 1
              ? 'border-b border-[#f1f1f1] pb-8 dark:border-zinc-700'
              : 'pb-2'
          "
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f5f5f5] ring-1 ring-[#eee] md:h-14 md:w-14 dark:bg-zinc-800 dark:ring-zinc-600"
          >
            <Icon name="ic:baseline-person" class="text-5xl text-[#ddd]" />
          </div>
          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <div
              class="flex flex-wrap items-baseline justify-between gap-2 text-[14px] font-thin italic text-[#999]"
            >
              <span class="font-bold not-italic text-[#333] dark:text-zinc-100">
                {{ item.userName }}
              </span>
              <span>{{ formatMessageTime(item.createdAt) }}</span>
            </div>
            <div class="text-[14px] leading-relaxed text-[#666] dark:text-zinc-300">
              {{ item.content }}
            </div>
          </div>
        </div>
      </template>
      <div v-else class="py-8">
        <AEmpty class="w-fit" description="暂无留言，来当第一个吧。" />
      </div>

      <div
        v-if="!pending && !error && commentTotal > pageSize"
        class="mt-8 flex w-full justify-center"
      >
        <APagination
          v-model:current="currentPage"
          :total="commentTotal"
          :page-size="pageSize"
          :show-size-changer="false"
        />
      </div>
    </div>

    <GuestMessageForm
      email-code-purpose="comment"
      section-title="发表评论"
      footer-hint="留言经审核后公开展示。"
      success-message="留言成功"
      :show-section-top-border="false"
      :submit-message="submitArticleComment"
      @success="onCommentSubmitted"
    />
  </div>
</template>

<script setup lang="ts">
import {
  fetchPublicArticleComments,
  postPublicArticleComment,
  type PostPublicSiteMessageBody,
} from "@/api/guestMessage";
import { formatMessageTime } from "@/data/guestMessages";

const props = defineProps<{
  articleId: string;
}>();

const pageSize = 10;
const currentPage = ref(1);

const articleIdRef = toRef(props, "articleId");

watch(articleIdRef, () => {
  currentPage.value = 1;
});

const { data, error, pending, refresh } = await useAsyncData(
  () => `article-comments-${articleIdRef.value}-${currentPage.value}`,
  () =>
    fetchPublicArticleComments(articleIdRef.value, {
      page: currentPage.value,
      pageSize,
    }),
  { watch: [articleIdRef, currentPage] },
);

const commentTotal = computed(() => data.value?.meta.total ?? 0);

const displayComments = computed(() => {
  const rows = data.value?.data ?? [];
  return rows.map((r) => ({
    id: r.id,
    userName: r.guest_name,
    content: r.content,
    createdAt: r.created_at,
  }));
});

function submitArticleComment(body: PostPublicSiteMessageBody) {
  return postPublicArticleComment(articleIdRef.value, body);
}

async function onCommentSubmitted() {
  currentPage.value = 1;
  await refresh();
}
</script>
