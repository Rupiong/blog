<template>
  <div class="w-full">
    <template v-for="(item, index) in list" :key="index">
      <div class="w-full flex flex-col gap-2 border-t pt-2 border-dashed">
        <div class="w-full flex gap-2 justify-between">
          <div
            class="w-10 h-10 bg-[#ccc] rounded-full overflow-hidden shrink-0"
          ></div>
          <div class="w-full">
            <div class="w-full h-10 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2">
                  <div class="font-bold leading-none">
                    {{ item.nickname }}
                  </div>
                  <div class="text-[12px] font-thin leading-none">
                    {{ item.time }}
                  </div>
                </div>
              </div>
              <div
                class="text-[12px] font-thin flex items-center gap-2"
                v-if="!isReply"
              >
                <Icon
                  class="text-[18px]"
                  :name="
                    item.isLike
                      ? 'icon-park-solid:like'
                      : 'icon-park-outline:like'
                  "
                />
                <Icon class="text-[18px]" name="uiw:message" />
              </div>
            </div>
            <div
              v-if="isReply"
              class="text-[12px] flex items-center gap-1 mb-1"
            >
              <div class="text-[#999]">回复</div>
              <div class="text-primary">@{{ item.author }}</div>
            </div>
            <div>{{ item.content }}</div>
            <div class="mt-2">
              <CommentReply :list="item.replyData" isReply />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => {
      return [];
    },
  },
  isReply: {
    type: Boolean,
    default: false,
  },
});
</script>
