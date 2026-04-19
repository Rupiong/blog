<template>
  <div class="w-full h-full bg-white dark:bg-black p-6">
    <ContentInner>
      <div class="flex w-full flex-col items-center justify-center gap-6">
        <div class="w-full flex flex-col gap-4">
          <div
            class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[14px] text-[#999]">分类</span>
              <button
                type="button"
                class="rounded-full border px-3 py-1 text-[12px] leading-none transition"
                :class="
                  categoryId == null
                    ? 'border-primary text-primary'
                    : 'border-[#ddd] text-[#999] hover:border-primary hover:text-primary dark:border-zinc-600'
                "
                @click="setCategory(undefined)"
              >
                全部
              </button>
              <button
                v-for="c in categories"
                :key="c.id"
                type="button"
                class="rounded-full border px-3 py-1 text-[12px] leading-none transition"
                :class="
                  categoryId === c.id
                    ? 'border-primary text-primary'
                    : 'border-[#ddd] text-[#999] hover:border-primary hover:text-primary dark:border-zinc-600'
                "
                @click="setCategory(c.id)"
              >
                {{ c.name }}
              </button>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[14px] text-[#999] shrink-0">时间</span>
              <select
                v-model="sortOrder"
                class="rounded-md border border-[#ddd] bg-white px-2 py-1 text-[13px] text-[#333] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              >
                <option value="desc">最新优先</option>
                <option value="asc">最早优先</option>
              </select>
            </div>
          </div>
          <p class="text-[12px] text-[#bbb]">
            按日期范围筛选依赖后端接口，当前仅支持列表内按发布时间排序。
          </p>
        </div>

        <div v-if="pending" class="py-12 text-[#999]">加载中…</div>
        <div v-else-if="error" class="py-12 text-error">
          {{ error.message || "文章列表加载失败" }}
        </div>
        <template v-else>
          <NuxtLink
            v-for="item in sortedList"
            :key="String(item.id)"
            :to="`/article/article_${item.id}`"
            class="group flex w-full cursor-pointer flex-col gap-2 border-b border-[#f1f1f1] pb-10 last:border-none dark:border-[#333]"
          >
            <div
              class="line-clamp-2 text-[22px] font-bold text-[#333] group-hover:text-primary dark:text-[#999]"
            >
              {{ item.title }}
            </div>
            <div
              class="flex justify-between text-[18px] font-thin italic text-[#999] dark:text-[#666]"
            >
              <div>{{ formatMeta(item) }}</div>
            </div>
          </NuxtLink>
          <div v-if="!sortedList.length" class="py-12 text-[#999]">
            暂无文章
          </div>
          <div
            v-if="totalPages > 1"
            class="flex w-full items-center justify-center gap-4 pt-4"
          >
            <button
              type="button"
              class="rounded border border-[#ddd] px-3 py-1 text-[14px] disabled:opacity-40 dark:border-zinc-600"
              :disabled="page <= 1"
              @click="page--"
            >
              上一页
            </button>
            <span class="text-[14px] text-[#999]">
              {{ page }} / {{ totalPages }}
            </span>
            <button
              type="button"
              class="rounded border border-[#ddd] px-3 py-1 text-[14px] disabled:opacity-40 dark:border-zinc-600"
              :disabled="page >= totalPages"
              @click="page++"
            >
              下一页
            </button>
          </div>
        </template>
      </div>
    </ContentInner>
  </div>
</template>

<script setup lang="ts">
import index_bg from "@/assets/images/index_bg.jpeg";
import {
  fetchPublicArticleList,
  fetchPublicCategories,
  type ArticleListItem,
  type PublicCategoryRecord,
} from "@/api/article";

definePageMeta({
  layout: "custom-full",
  showSiderBar: true,
  title: "文章列表",
  slogan: "按分类与时间浏览文章",
  headerBgUrl: index_bg,
});

useHead({
  title: "文章列表 — copyman blog",
});

const route = useRoute();
const router = useRouter();

const categoryId = computed(() => {
  const q = route.query.category;
  const raw = Array.isArray(q) ? q[0] : q;
  if (raw == null || raw === "") return undefined;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : undefined;
});

const page = ref(1);
const pageSize = ref(20);
const sortOrder = ref<"desc" | "asc">("desc");

const { data: categoriesData } = await useAsyncData("public-categories", () =>
  fetchPublicCategories(),
);

const categories = computed<PublicCategoryRecord[]>(
  () => categoriesData.value ?? [],
);

const { data, error, pending } = await useAsyncData(
  "public-articles-articles-page",
  () =>
    fetchPublicArticleList({
      page: page.value,
      pageSize: pageSize.value,
      ...(categoryId.value != null
        ? { category_ids: String(categoryId.value) }
        : {}),
    }),
  { watch: [page, pageSize, categoryId] },
);

const rawList = computed(() => data.value?.list ?? []);
const total = computed(() => data.value?.total ?? 0);

const sortedList = computed(() => {
  const arr = [...rawList.value];
  arr.sort((a, b) => {
    const ta = a.created_at || 0;
    const tb = b.created_at || 0;
    return sortOrder.value === "desc" ? tb - ta : ta - tb;
  });
  return arr;
});

const totalPages = computed(() => {
  const t = total.value;
  const ps = pageSize.value;
  if (t <= 0) return 1;
  return Math.max(1, Math.ceil(t / ps));
});

watch(categoryId, () => {
  page.value = 1;
});

function setCategory(id: number | undefined) {
  router.replace({
    path: "/articles",
    query: id != null ? { category: String(id) } : {},
  });
}

const dayjs = useDayjs();

function formatMeta(item: ArticleListItem) {
  const parts: string[] = [];
  if (item.user?.name) parts.push(item.user.name);
  if (item.created_at) {
    const d =
      item.created_at < 1e12
        ? dayjs.unix(item.created_at)
        : dayjs(item.created_at);
    parts.push(
      d.isValid() ? d.format("YYYY年MM月DD日") : String(item.created_at),
    );
  }
  return parts.length ? parts.join(" · ") : "";
}
</script>
