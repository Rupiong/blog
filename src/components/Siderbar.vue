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
          <span class="text-[18px] font-bold text-[#333]">@Copyman</span>
          <span class="text-[14px] text-[#666]">前端开发工程师</span>
        </div>
        <!-- <div class="italic text-[#999] text-[14px]">
          -- 他不过是泛黄没人理采的花朵。
        </div> -->
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
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center active:bg-primary sm:hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="ic:baseline-wechat" />
            </div>
          </APopover>
          <NuxtLink
            to="https://www.zhihu.com/people/huang-yu-ping-28-13"
            target="_blank"
          >
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center active:bg-primary sm:hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white text-2xl" name="fa6-brands:zhihu" />
            </div>
          </NuxtLink>

          <NuxtLink to="https://github.com/Rupiong" target="_blank">
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center active:bg-primary sm:hover:bg-primary cursor-pointer"
            >
              <Icon class="text-white" name="akar-icons:github-fill" />
            </div>
          </NuxtLink>
          <APopover>
            <template #content>
              <div class="w-full p-4">83470005@qq.com</div>
            </template>
            <div
              class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center active:bg-primary sm:hover:bg-primary cursor-pointer"
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
      <div v-if="pendingCats" class="text-[12px] text-[#999]">标签加载中…</div>
      <div v-else class="w-full flex flex-row gap-2 flex-wrap">
        <template v-if="categories.length">
          <NuxtLink
            v-for="c in categories"
            :key="c.id"
            :to="{ path: '/articles', query: { category: String(c.id) } }"
            class="border rounded-full leading-none px-3 py-1 text-[12px] transition active:border-primary active:text-primary sm:hover:border-primary sm:hover:text-primary"
            :class="
              isTagActive(c.id)
                ? 'border-primary text-primary'
                : 'text-[#999]'
            "
          >
            {{ c.name }}
          </NuxtLink>
        </template>
        <AEmpty
          v-else
          class="!my-2 !py-1 [&_.ant-empty-image]:max-h-14 [&_.ant-empty-image_svg]:max-h-14"
          description="暂无分类"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { fetchPublicCategories, type PublicCategoryRecord } from "@/api/article";

const route = useRoute();

const { data: categoriesData, pending: pendingCats } = await useAsyncData(
  "public-categories",
  () => fetchPublicCategories(),
);

const categories = computed<PublicCategoryRecord[]>(
  () => categoriesData.value ?? [],
);

function isTagActive(id: number) {
  const q = route.query.category;
  const raw = Array.isArray(q) ? q[0] : q;
  return String(id) === String(raw ?? "");
}
</script>
