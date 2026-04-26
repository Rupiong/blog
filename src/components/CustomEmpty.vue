<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <img
      :src="imageSrc"
      :alt="altText"
      class="max-h-[200px] w-auto max-w-full object-contain dark:opacity-90"
    />
    <p
      v-if="description"
      class="text-center text-[14px] text-[#999] dark:text-zinc-500"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import emptyDefault from "@/assets/images/empty_default.png";
import emptyArticle from "@/assets/images/empty_article.png";
import emptyMessage from "@/assets/images/empty_message.png";

const props = withDefaults(
  defineProps<{
    type?: "default" | "article" | "message";
    description?: string;
  }>(),
  {
    type: "default",
  },
);

const imageMap = {
  default: emptyDefault,
  article: emptyArticle,
  message: emptyMessage,
} as const;

const imageSrc = computed(() => imageMap[props.type]);

const altText = computed(() => {
  switch (props.type) {
    case "article":
      return "暂无留言";
    case "message":
      return "暂无留言";
    default:
      return "暂无内容";
  }
});
</script>
