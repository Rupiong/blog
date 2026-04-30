<template>
  <div class="w-full flex-1 h-full bg-white dark:bg-black p-6">
    <ContentInner>
      <div class="flex w-full flex-col items-center  gap-6">
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
                    : 'border-[#ddd] text-[#999] active:border-primary active:text-primary sm:hover:border-primary sm:hover:text-primary dark:border-zinc-600'
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
                    : 'border-[#ddd] text-[#999] active:border-primary active:text-primary sm:hover:border-primary sm:hover:text-primary dark:border-zinc-600'
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
        </div>

        <div v-if="pending" class="py-12 text-[#999]">加载中…</div>
        <div v-else-if="error" class="py-12 text-error">
          {{ error.message || "文章列表加载失败" }}
        </div>
        <template v-else>
          <div
            v-for="group in yearGroups"
            :key="group.year"
            class="flex w-full flex-col gap-4"
          >
            <h2
              class="border-b border-[#eee] pb-2 text-[28px] font-semibold text-[#333] dark:border-zinc-700 dark:text-zinc-200"
            >
              {{ group.year }} 年
            </h2>
            <NuxtLink
              v-for="item in sortedInYear(group.data)"
              :key="`${group.year}-${item.id}`"
              :to="`/article/article_${item.id}`"
              class="group flex flex-col sm:flex-row  sm:items-center w-full cursor-pointer gap-2 border-b border-dashed border-[#f1f1f1] pb-8 last:border-none dark:border-[#333]"
            >
              <div
                class="flex-1 line-clamp-2 text-[18px] font-bold text-[#333] group-active:text-primary sm:group-hover:text-primary dark:text-[#999]"
              >
                {{ item.title }}
              </div>
              <div
                class="flex justify-between text-[14px] font-thin italic text-[#999] dark:text-[#666]"
              >
                <div>{{ formatMeta(item) }}</div>
              </div>
            </NuxtLink>
          </div>
          <div v-if="!yearGroups.length" class="py-12">
            <CustomEmpty type="default" description="暂无文章" />
          </div>
        </template>
      </div>
    </ContentInner>
  </div>
</template>

<script setup lang="ts">
import index_bg from "@/assets/images/index_bg.jpeg";
import {
  fetchPublicArticlesByYear,
  fetchPublicCategories,
  type ArticleListItem,
  type PublicCategoryRecord,
} from "@/api/article";

definePageMeta({
  layout: "custom-full",
  showSiderBar: true,
  title: "文章列表",
  slogan: "按年份与分类浏览文章",
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

const sortOrder = ref<"desc" | "asc">("desc");

/** 与接口约定一致：并行拉取最近若干公历年，页面按年份分块展示 */
const ARCHIVE_YEAR_SPAN = 12;
const MIN_YEAR = 1970;

async function loadArticlesGroupedByYear(): Promise<
  { year: number; data: ArticleListItem[] }[]
> {
  const current = new Date().getFullYear();
  const years = Array.from({ length: ARCHIVE_YEAR_SPAN }, (_, i) => current - i).filter(
    (y) => y >= MIN_YEAR,
  );
  const category_ids =
    categoryId.value != null ? String(categoryId.value) : undefined;
  const chunks = await Promise.all(
    years.map((year) =>
      fetchPublicArticlesByYear({
        year,
        ...(category_ids ? { category_ids } : {}),
      }),
    ),
  );
  const byYear = new Map<number, ArticleListItem[]>();
  for (const groups of chunks) {
    for (const g of groups) {
      const cur = byYear.get(g.year) ?? [];
      byYear.set(g.year, cur.concat(g.data));
    }
  }
  return [...byYear.entries()]
    .map(([year, data]) => ({ year, data }))
    .filter((g) => g.data.length > 0)
    .sort((a, b) => b.year - a.year);
}

const archiveAsyncKey = computed(
  () => `public-articles-by-year-${categoryId.value ?? "all"}`,
);

const { data: categoriesData } = await useAsyncData("public-categories", () =>
  fetchPublicCategories(),
);

const categories = computed<PublicCategoryRecord[]>(
  () => categoriesData.value ?? [],
);

const { data, error, pending } = await useAsyncData(
  archiveAsyncKey,
  () => loadArticlesGroupedByYear(),
);

const yearGroups = computed(() => data.value ?? []);

function sortedInYear(items: ArticleListItem[]) {
  const arr = [...items];
  arr.sort((a, b) => {
    const ta = a.created_at || 0;
    const tb = b.created_at || 0;
    return sortOrder.value === "desc" ? tb - ta : ta - tb;
  });
  return arr;
}

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
