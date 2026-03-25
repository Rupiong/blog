import aboutAvatar from "@/assets/images/about_avatar.jpg";
import wechatAvatar from "@/assets/images/common/wechat.jpg";

export interface GuestMessage {
  id: string;
  userName: string;
  avatar: string;
  createdAt: string;
  content: string;
}

const avatars = [aboutAvatar, wechatAvatar];

const raw: Array<
  Omit<GuestMessage, "avatar"> & { avatarIndex?: number }
> = [
  {
    id: "1",
    userName: "Rupiong",
    avatarIndex: 0,
    createdAt: "2025-03-18T14:32:00+08:00",
    content:
      "博客排版很舒服，配色也克制。期待后面多写一点工程化与实践向的文章，已订阅。",
  },
  {
    id: "2",
    userName: "路过访客",
    avatarIndex: 1,
    createdAt: "2025-03-19T09:05:00+08:00",
    content:
      "从知乎摸过来的，关于页写得很真诚。想问下 Nuxt 与 Vite 在生产环境你们一般怎么做缓存与拆分？",
  },
  {
    id: "3",
    userName: "前端练习生",
    avatarIndex: 0,
    createdAt: "2025-03-20T21:18:00+08:00",
    content:
      "文章列表的 hover 动效很自然。我自己也在用 Tailwind，想参考一下你们 header 透明滚动的实现思路。",
  },
  {
    id: "4",
    userName: "NightOwl",
    avatarIndex: 1,
    createdAt: "2025-03-22T11:47:00+08:00",
    content: "留言板有了就更像个人站点了，支持一下。祝更新顺利。",
  },
];

export const guestMessages: GuestMessage[] = raw.map((item, index) => ({
  ...item,
  avatar: avatars[(item.avatarIndex ?? index) % avatars.length],
}));

export function getGuestMessageById(id: string) {
  return guestMessages.find((m) => m.id === id);
}

export function formatMessageTime(iso: string) {
  return new Date(iso).toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
