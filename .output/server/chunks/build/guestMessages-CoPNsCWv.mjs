import { a } from './about_avatar-ckWlnmAu.mjs';
import { s } from './wechat-DbvjJH5c.mjs';

const e = [a, s], n = [{ id: "1", userName: "Rupiong", avatarIndex: 0, createdAt: "2025-03-18T14:32:00+08:00", content: "\u535A\u5BA2\u6392\u7248\u5F88\u8212\u670D\uFF0C\u914D\u8272\u4E5F\u514B\u5236\u3002\u671F\u5F85\u540E\u9762\u591A\u5199\u4E00\u70B9\u5DE5\u7A0B\u5316\u4E0E\u5B9E\u8DF5\u5411\u7684\u6587\u7AE0\uFF0C\u5DF2\u8BA2\u9605\u3002" }, { id: "2", userName: "\u8DEF\u8FC7\u8BBF\u5BA2", avatarIndex: 1, createdAt: "2025-03-19T09:05:00+08:00", content: "\u4ECE\u77E5\u4E4E\u6478\u8FC7\u6765\u7684\uFF0C\u5173\u4E8E\u9875\u5199\u5F97\u5F88\u771F\u8BDA\u3002\u60F3\u95EE\u4E0B Nuxt \u4E0E Vite \u5728\u751F\u4EA7\u73AF\u5883\u4F60\u4EEC\u4E00\u822C\u600E\u4E48\u505A\u7F13\u5B58\u4E0E\u62C6\u5206\uFF1F" }, { id: "3", userName: "\u524D\u7AEF\u7EC3\u4E60\u751F", avatarIndex: 0, createdAt: "2025-03-20T21:18:00+08:00", content: "\u6587\u7AE0\u5217\u8868\u7684 hover \u52A8\u6548\u5F88\u81EA\u7136\u3002\u6211\u81EA\u5DF1\u4E5F\u5728\u7528 Tailwind\uFF0C\u60F3\u53C2\u8003\u4E00\u4E0B\u4F60\u4EEC header \u900F\u660E\u6EDA\u52A8\u7684\u5B9E\u73B0\u601D\u8DEF\u3002" }, { id: "4", userName: "NightOwl", avatarIndex: 1, createdAt: "2025-03-22T11:47:00+08:00", content: "\u7559\u8A00\u677F\u6709\u4E86\u5C31\u66F4\u50CF\u4E2A\u4EBA\u7AD9\u70B9\u4E86\uFF0C\u652F\u6301\u4E00\u4E0B\u3002\u795D\u66F4\u65B0\u987A\u5229\u3002" }].map((a2, t2) => {
  var _a;
  return { ...a2, avatar: e[((_a = a2.avatarIndex) != null ? _a : t2) % e.length] };
});
function r(a2) {
  return n.find((t2) => t2.id === a2);
}
function i(a2) {
  return new Date(a2).toLocaleString("zh-CN", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export { i, n, r };
//# sourceMappingURL=guestMessages-CoPNsCWv.mjs.map
