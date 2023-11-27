<template>
  <div class="w-full flex flex-col gap-10">
    <!-- 评论表单区域 -->
    <div>
      <div></div>
    </div>
    <!-- 评论展示区域 -->
    <div class="w-full flex flex-col gap-4">
      <div class="w-full flex items-center justify-between">
        <div>6条评论</div>
        <Icon class="text-[20px]" name="ep:refresh-right" />
      </div>
      <div class="w-full">
        <CommentReply :list="mockData" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommentReply from "./CommentReply.vue";
const mockData = [
  {
    avatar: "",
    nickname: "张三",
    time: "2023-10-31",
    isLike: true,
    content: "666",
    replyData: [
      {
        author: "张三",
        avatar: "",
        nickname: "张三",
        time: "2023-10-31",
        isLike: true,
        content: "666",
      },
    ],
  },
  {
    avatar: "",
    nickname: "张三",
    time: "2023-10-31",
    isLike: false,
    content: "666",
    replyData: [
      {
        author: "张三",
        avatar: "",
        nickname: "张三",
        time: "2023-10-31",
        isLike: true,
        content: "666",
      },
    ],
  },
];
</script>
