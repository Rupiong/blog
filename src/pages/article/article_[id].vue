<script lang="ts" setup>
import { fetchPublicArticleDetail } from "@/api/article";

definePageMeta({
  layout: "custom",
});

const route = useRoute();
const id = computed(() => String(route.params.id ?? ""));

const { data: article, error, pending } = await useAsyncData(
  () => `public-article-${id.value}`,
  () => fetchPublicArticleDetail(id.value),
  { watch: [id] }
);

const dayjs = useDayjs();
const metaLine = computed(() => {
  const a = article.value;
  if (!a) return "";
  const dateStr =
    a.created_at != null && a.created_at !== 0
      ? (() => {
          const d =
            a.created_at < 1e12 ? dayjs.unix(a.created_at) : dayjs(a.created_at);
          return d.isValid() ? d.format("YYYY年MM月DD日") : "";
        })()
      : "";
  const authorStr = a.user?.name ?? "";
  if (authorStr && dateStr) return `${authorStr} · ${dateStr}`;
  return authorStr || dateStr;
});

watch(
  article,
  (a) => {
    if (a?.title) {
      useHead({ title: `${a.title} — copyman blog` });
    }
  },
  { immediate: true }
);
</script>
<template>
  <div class="w-full flex flex-col justify-start items-center md:mt-6">
    <div class="w-full py-6 px-6 rounded-[6px]">
      <div v-if="pending" class="text-[#999] py-12">加载中…</div>
      <div v-else-if="error" class="text-error py-12">
        {{ error.message || "文章加载失败" }}
      </div>
      <template v-else-if="article">
        <div v-if="article.tags?.length" class="flex flex-wrap items-center gap-2">
          <div
            v-for="tag in article.tags"
            :key="tag"
            class="rounded-full border bg-white p-2 text-[12px] leading-none dark:border-zinc-600 dark:bg-zinc-800"
          >
            {{ tag }}
          </div>
        </div>
        <div
          class="mt-4 text-[30px] font-bold leading-[1.2] text-[#333] dark:text-zinc-100 md:text-[52px]"
        >
          {{ article.title }}
        </div>
        <!-- <div
          v-if="article.summary"
          class="text-[22px] md:text-[32px] mt-2 text-[#666]"
        >
          {{ article.summary }}
        </div> -->
        <div
          v-if="metaLine"
          class="italic font-thin text-[18px] mt-2 border-b border-dashed pb-6 text-[#999]"
        >
          {{ metaLine }}
        </div>
        <div class="w-full  mt-8 min-h-[120px] ">
          <ClientOnly>
            <VditorPreview :content="article.content ?? ''" />
            <template #fallback>
              <div class="text-[#999]">渲染正文…</div>
            </template>
          </ClientOnly>
        </div>
        <!-- <Comment /> -->
      </template>
    </div>
  </div>
</template>
