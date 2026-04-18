<template>
  <div
    v-if="isHtml"
    class="vditor-reset article-html max-w-none"
    v-html="content"
  />
  <div v-else ref="previewEl" class="vditor-reset max-w-none dark:text-[#ccc]" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    content: string;
    format?: "auto" | "markdown" | "html";
  }>(),
  { format: "auto" },
);

const previewEl = ref<HTMLDivElement | null>(null);

const isHtml = computed(() => {
  if (props.format === "html") return true;
  if (props.format === "markdown") return false;
  const t = (props.content ?? "").trim();
  if (!t) return false;
  return /^<[\w!]/.test(t) && /<\/[a-z][\w-]*>/i.test(t);
});

let previewToken = 0;

async function renderMarkdown() {
  if (isHtml.value || !import.meta.client) return;
  const el = previewEl.value;
  const md = props.content ?? "";
  if (!el) return;
  if (!md.trim()) {
    el.innerHTML = "";
    return;
  }
  const token = ++previewToken;
  const Vditor = (await import("vditor")).default;

  await import("vditor/dist/index.css");
  if (token !== previewToken) return;
  el.innerHTML = "";
  await Vditor.preview(el, md, {
    theme: { current: "light" },
    hljs: { style: "github" },
    mode: "light",
  });
}

watch(
  () => [props.content, isHtml.value, props.format] as const,
  () => {
    if (!isHtml.value) void renderMarkdown();
  },
  { flush: "post" },
);

onBeforeUnmount(() => {
  previewToken++;
});

watch(
  previewEl,
  (el) => {
    if (el && !isHtml.value) void renderMarkdown();
  },
  { flush: "post" },
);
</script>

<style scoped>
.article-html :deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
