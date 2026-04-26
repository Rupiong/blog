<template>
  <div
    :class="[
      'top-0 z-20 w-full flex items-center justify-between py-4 px-3 md:px-6 border-b transition ease-in-out duration-300',
      props.isFixed ? 'fixed' : 'sticky',
      props.isLucency
        ? 'bg-white/0 border-white/5'
        : 'border-[#f1f1f1] bg-white/70 shadow-sm shadow-[#f5f5f5] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-zinc-950',
      props.colorClass,
      !props.isLucency ? 'dark:text-zinc-100' : '',
    ]"
  >
    <div
      class="font-bold text-[18px] active:text-primary sm:hover:text-primary"
    >
      <NuxtLink to="/">
        <img v-if="!props.isLucency" src="@/assets/images/logo_copyman.png" alt="logo" class="h-12" />
        <img v-else src="@/assets/images/logo_copyman_tran.png" alt="logo" class="h-12" />
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2 sm:gap-3">
      <div class="hidden sm:flex items-center">
        <div class="flex items-center gap-3 text-[14px]">
          <div v-for="(item, index) in menuList" :key="index">
            <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
          </div>
        </div>
      </div>
      <NuxtLink
        to="https://github.com/Rupiong"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition active:bg-black/5 dark:active:bg-white/10 sm:hover:bg-black/5 sm:dark:hover:bg-white/10"
        :class="
          props.isLucency
            ? 'text-white'
            : 'text-zinc-800 dark:text-zinc-200'
        "
        aria-label="在 GitHub 上查看"
      >
        <Icon name="akar-icons:github-fill" class="text-[20px]" />
      </NuxtLink>
      <button
        type="button"
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition active:bg-black/5 dark:active:bg-white/10 sm:hover:bg-black/5 sm:dark:hover:bg-white/10"
        :class="
          props.isLucency
            ? 'text-white'
            : 'text-zinc-800 dark:text-zinc-200'
        "
        aria-label="切换浅色 / 深色主题"
        @click="toggleTheme"
      >
        <Icon
          :name="
            isDark
              ? 'material-symbols:light-mode-outline'
              : 'material-symbols:dark-mode-outline'
          "
          class="text-[20px]"
        />
      </button>
      <div
        class="flex h-9 w-9 cursor-pointer items-center justify-center sm:hidden"
        @click="chooseMenuHandler"
      >
        <Icon name="material-symbols:dehaze-rounded" class="text-[22px]" />
      </div>
    </div>
  </div>
  <van-popup
    v-model:show="showMenuPop"
    closeable
    position="right"
    :style="{ width: '70%', height: '100%', opacity: 0.9 }"
  >
    <div
      class="flex h-full w-full flex-col gap-6 bg-white p-6 pt-20 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <div
        class="w-full"
        v-for="(item, index) in menuList"
        :key="index"
        @click="goPage(item)"
      >
        <div class="w-full flex items-center justify-between">
          <div class="text-sm">{{ item.name }}</div>
          <Icon name="ep:arrow-right" class="text-xs" />
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script setup lang="ts">
import themeSetting from "@/setting/theme";

const isDark = useDark({
  initialValue: themeSetting.theme,
});

function toggleTheme() {
  isDark.value = !isDark.value;
}

const props = defineProps({
  //是否为固定布局
  isFixed: {
    type: Boolean,
    default: true,
  },
  //是否透明
  isLucency: {
    type: Boolean,
    default: true,
  },
  colorClass: {
    type: String,
    default: "text-white",
  },
});

const menuList = ref([
  { name: "首页", url: "/" },
  { name: "文章列表", url: "/articles" },
  { name: "关于我", url: "/about.html" },
  { name: "留言", url: "/message" },
  { name: "赞助", url: "/sponsor.html" },
]);

const showMenuPop = ref(false);
function chooseMenuHandler() {
  showMenuPop.value = true;
}
async function goPage(item: { name: string; url: string }) {
  await navigateTo(item.url);
  showMenuPop.value = false;
}
</script>
