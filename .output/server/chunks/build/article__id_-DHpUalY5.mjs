import { v as $e, g as dt, s as kr, h as Mn } from './server.mjs';
import Qe from './Icon-DHwYHweU.mjs';
import { i, h, v as v$1 } from './dayjs-B33OFvKA.mjs';
import { s } from './v3-B4umo1cC.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'node:stream';
import './index-Ovb55fQk.mjs';
import 'perfect-debounce';

const a = $e.defineComponent({ __name: "CommentReply", __ssrInlineRender: true, props: { list: { type: Array, default: () => [] }, isReply: { type: Boolean, default: false } }, setup: (s2) => (n2, o2, d2, r2) => {
  const l2 = Qe, p2 = a;
  o2(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "w-full" }, r2))}><!--[-->`), kr.ssrRenderList(s2.list, (e2, n3) => {
    o2(`<div class="w-full flex flex-col gap-2 border-t pt-2 border-dashed"><div class="w-full flex gap-2 justify-between"><div class="w-10 h-10 bg-[#ccc] rounded-full overflow-hidden shrink-0"></div><div class="w-full"><div class="w-full h-10 flex items-center justify-between"><div class="flex items-center gap-2"><div class="flex items-center gap-2"><div class="font-bold leading-none">${kr.ssrInterpolate(e2.nickname)}</div><div class="text-[12px] font-thin leading-none">${kr.ssrInterpolate(e2.time)}</div></div></div>`), s2.isReply ? o2("<!---->") : (o2('<div class="text-[12px] font-thin flex items-center gap-2">'), o2(kr.ssrRenderComponent(l2, { class: "text-[18px]", name: e2.isLike ? "icon-park-solid:like" : "icon-park-outline:like" }, null, d2)), o2(kr.ssrRenderComponent(l2, { class: "text-[18px]", name: "uiw:message" }, null, d2)), o2("</div>")), o2("</div>"), s2.isReply ? o2(`<div class="text-[12px] flex items-center gap-1 mb-1"><div class="text-[#999]">\u56DE\u590D</div><div class="text-primary">@${kr.ssrInterpolate(e2.author)}</div></div>`) : o2("<!---->"), o2(`<div>${kr.ssrInterpolate(e2.content)}</div><div class="mt-2">`), o2(kr.ssrRenderComponent(p2, { list: e2.replyData, isReply: "" }, null, d2)), o2("</div></div></div></div>");
  }), o2("<!--]--></div>");
} }), p = a.setup;
a.setup = (t2, s2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Comment/CommentReply.vue"), p ? p(t2, s2) : void 0;
};
const u = [{ avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666", replyData: [{ author: "\u5F20\u4E09", avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666" }] }, { avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: false, content: "666", replyData: [{ author: "\u5F20\u4E09", avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666" }] }];
const m = $e.defineComponent({ __name: "Comment", __ssrInlineRender: true, setup(s2) {
  const n2 = u.map((e2) => ({ ...e2, replyData: e2.replyData.map((e3) => ({ ...e3 })) }));
  return (s3, o2, d2, r2) => {
    const l2 = Qe;
    o2(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "w-full flex flex-col gap-10" }, r2))}><div><div></div></div><div class="w-full flex flex-col gap-4"><div class="w-full flex items-center justify-between"><div>6\u6761\u8BC4\u8BBA</div>`), o2(kr.ssrRenderComponent(l2, { class: "text-[20px]", name: "ep:refresh-right" }, null, d2)), o2('</div><div class="w-full">'), o2(kr.ssrRenderComponent(a, { list: $e.unref(n2) }, null, d2)), o2("</div></div></div>");
  };
} }), c = m.setup;
m.setup = (t2, s2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Comment/Comment.vue"), c ? c(t2, s2) : void 0;
};
const x = $e.defineComponent({ __name: "article_[id]", __ssrInlineRender: true, async setup(i2) {
  let a2, p2;
  const u2 = dt(), c2 = $e.computed(() => {
    var _a;
    return String((_a = u2.params.id) != null ? _a : "");
  }), { data: x2, error: v2, pending: f } = ([a2, p2] = $e.withAsyncContext(() => i(() => `public-article-${c2.value}`, () => h(c2.value), { watch: [c2] })), a2 = await a2, p2(), a2), g = v$1(), h$1 = $e.computed(() => {
    var _a, _b;
    const e2 = x2.value;
    if (!e2) return "";
    const t2 = e2.createdAt ? g(e2.createdAt).isValid() ? g(e2.createdAt).format("YYYY\u5E74MM\u6708DD\u65E5") : e2.createdAt : "";
    return e2.author && t2 ? `${e2.author} \xB7 ${t2}` : (_b = (_a = e2.author) != null ? _a : t2) != null ? _b : "";
  });
  return $e.watch(x2, (e2) => {
    (e2 == null ? void 0 : e2.title) && s({ title: `${e2.title} \u2014 copyman blog` });
  }, { immediate: true }), (s2, i3, o2, d2) => {
    var _a;
    const r2 = Mn, l2 = m;
    i3(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "w-full flex flex-col justify-center items-center md:mt-6" }, d2))}><div class="w-full p-6 rounded-[6px]">`), $e.unref(f) ? i3('<div class="text-[#999] py-12">\u52A0\u8F7D\u4E2D\u2026</div>') : $e.unref(v2) ? i3(`<div class="text-error py-12">${kr.ssrInterpolate($e.unref(v2).message || "\u6587\u7AE0\u52A0\u8F7D\u5931\u8D25")}</div>`) : $e.unref(x2) ? (i3("<!--[-->"), ((_a = $e.unref(x2).tags) == null ? void 0 : _a.length) ? (i3('<div class="flex flex-wrap items-center gap-2"><!--[-->'), kr.ssrRenderList($e.unref(x2).tags, (e2) => {
      i3(`<div class="leading-none p-2 rounded-full border text-[12px] bg-white">${kr.ssrInterpolate(e2)}</div>`);
    }), i3("<!--]--></div>")) : i3("<!---->"), i3(`<div class="text-[30px] md:text-[52px] font-bold leading-[1.2] text-[#333] mt-4">${kr.ssrInterpolate($e.unref(x2).title)}</div>`), $e.unref(x2).summary ? i3(`<div class="text-[22px] md:text-[32px] mt-2 text-[#666]">${kr.ssrInterpolate($e.unref(x2).summary)}</div>`) : i3("<!---->"), $e.unref(h$1) ? i3(`<div class="italic font-thin text-[18px] mt-2 border-b border-dashed pb-6 text-[#999]">${kr.ssrInterpolate($e.unref(h$1))}</div>`) : i3("<!---->"), i3('<div class="mt-8 min-h-[120px]">'), i3(kr.ssrRenderComponent(r2, null, { fallback: $e.withCtx((t2, s3, n2, i4) => {
      if (!s3) return [$e.createVNode("div", { class: "text-[#999]" }, "\u6E32\u67D3\u6B63\u6587\u2026")];
      s3(`<div class="text-[#999]"${i4}>\u6E32\u67D3\u6B63\u6587\u2026</div>`);
    }) }, o2)), i3("</div>"), i3(kr.ssrRenderComponent(l2, null, null, o2)), i3("<!--]-->")) : i3("<!---->"), i3("</div></div>");
  };
} }), v = x.setup;
x.setup = (t2, s2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("pages/article/article_[id].vue"), v ? v(t2, s2) : void 0;
};

export { x as default };
//# sourceMappingURL=article__id_-DHpUalY5.mjs.map
