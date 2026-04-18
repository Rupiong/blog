<template>
  <div class="flex flex-col items-center justify-center gap-6 w-full">
    <div v-if="pending" class="text-[#999] py-12">加载中…</div>
    <div v-else-if="error" class="text-error py-12">
      {{ error.message || "文章列表加载失败" }}
    </div>
    <template v-else>
      <NuxtLink
        v-for="item in list"
        :key="String(item.id)"
        :to="`/article/article_${item.id}`"
        class="flex flex-col gap-2 border-b last:border-none border-[#f1f1f1] dark:border-[#333] pb-10 group cursor-pointer w-full"
      >
        <div
          class="text-[22px] text-[#333] dark:text-[#999] font-bold group-hover:text-primary line-clamp-2"
        >
          {{ item.title }}
        </div>
        <!-- <div
          v-if="item.summary"
          class="text-[14px] text-[#666] group-hover:underline decoration-solid decoration-[#999] line-clamp-3"
        >
          {{ item.summary }}
        </div> -->
        <!-- <VditorPreview :content="item.summary ?? ''" /> -->
        <div
          class="flex justify-between text-[18px] text-[#999] dark:text-[#666] italic font-thin"
        >
          <div>{{ formatMeta(item) }}</div>
        </div>
      </NuxtLink>
      <div v-if="!list.length" class="text-[#999] py-12">暂无文章</div>
    </template>
  </div>
</template>
<script setup lang="ts">
import index_bg from "@/assets/images/index_bg.jpeg";
import { fetchPublicArticleList, type ArticleListItem } from "@/api/article";

definePageMeta({
  showSiderBar: true,
  title: "Copyman Blog",
  slogan: "天一亮時間就不屬於我了",
  headerBgUrl: index_bg,
});

useHead({
  title: "copyman blog",
  meta: [
    { property: "og:title", content: "我的神奇网站" },
    {
      name: "description",
      content: "这是我的神奇网站，让我来告诉你关于它的一切。",
    },
    {
      property: "og:description",
      content: "这是我的神奇网站，让我来告诉你关于它的一切。",
    },
    { property: "og:image", content: "https://example.com/image.png" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

const viewport = useViewport();
const page = ref(1);
const pageSize = ref(100);

const { data, error, pending } = await useAsyncData(
  () => `public-articles-${page.value}-${pageSize.value}`,
  () => fetchPublicArticleList({ page: page.value, pageSize: pageSize.value }),
  { watch: [page, pageSize] }
);

const list = computed(() => data.value?.list ?? []);
const total = computed(() => data.value?.total ?? 0);

const dayjs = useDayjs();

function formatMeta(item: ArticleListItem) {
  const parts: string[] = [];
  if (item.user?.name) parts.push(item.user.name);
  if (item.created_at) {
    const d =
      item.created_at < 1e12
        ? dayjs.unix(item.created_at)
        : dayjs(item.created_at);
    parts.push(d.isValid() ? d.format("YYYY年MM月DD日") : String(item.created_at));
  }
  return parts.length ? parts.join(" · ") : "";
}

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
  console.log(viewport.breakpoint, "viewport");
  console.log(viewport.breakpointValue("xs"), "mobile val");
  console.log(viewport.isGreaterOrEquals("md"), "xl isLessThan");
});
</script>
