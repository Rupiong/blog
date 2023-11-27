<template>
  <div
    :class="[
      'top-0 z-20 w-full flex items-center justify-between py-4 px-6 border-b transition ease-in-out duration-300',
      props.isFixed ? 'fixed' : 'sticky',
      props.isLucency
        ? 'bg-white/0 border-white/5'
        : 'bg-white/70 border-[#f1f1f1] shadow-sm shadow-[#f5f5f5]    backdrop-blur-sm',
      props.colorClass,
    ]"
  >
    <div class="font-bold text-[18px] hover:text-primary">
      <NuxtLink to="/">Copyman</NuxtLink>
    </div>
    <div class="hidden sm:flex items-center mr-4">
      <div class="flex items-center gap-4 text-[14px]">
        <div v-for="(item, index) in menuList" :key="index">
          <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
        </div>
        <!-- <div
          class="flex items-center gap-2 bg-black p-2 rounded-full text-white"
        >
          <Icon name="uiw:search" />
        </div> -->
      </div>
    </div>
    <div class="block sm:hidden" @click="chooseMenuHandler">
      <Icon name="material-symbols:dehaze-rounded" />
    </div>
  </div>
  <van-popup
    v-model:show="showMenuPop"
    closeable
    position="right"
    :style="{ width: '70%', height: '100%' }"
  >
    <div class="w-full h-full p-6 pt-14 flex flex-col gap-6">
      <div
        class="w-full"
        v-for="(item, index) in menuList"
        :key="index"
        @click="goPage(item)"
      >
        <div class="w-full flex items-center justify-between">
          <div>{{ item.name }}</div>
          <Icon name="ep:arrow-right" />
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script setup lang="ts">
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
  { name: "关于我", url: "/about.html" },
  { name: "留言" },
  { name: "赞助" },
]);

const showMenuPop = ref(false);
function chooseMenuHandler() {
  showMenuPop.value = true;
}
async function goPage(item) {
  await navigateTo(item.url);
  showMenuPop.value = false;
}
</script>
