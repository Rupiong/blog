import { p } from './nuxt-link-BfTR7asS.mjs';
import { v as $e, s as Pr } from './server.mjs';
import { n, i as i$1 } from './guestMessages-CoPNsCWv.mjs';
import { s } from './v3-B9vmg-ps.mjs';
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
import './about_avatar-ckWlnmAu.mjs';
import './wechat-DbvjJH5c.mjs';

const i = $e.defineComponent({ __name: "index", __ssrInlineRender: true, setup: (i2) => (s({ title: "\u7559\u8A00\u677F | copyman blog", description: "\u8BBF\u5BA2\u7559\u8A00\u4E0E\u4E92\u52A8" }), (r2, i3, l2, d) => {
  const a = p;
  i3(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "flex-1 w-full h-full flex flex-col gap-6 p-3 bg-white" }, d))}><!--[-->`), Pr.ssrRenderList($e.unref(n), (e2) => {
    i3(Pr.ssrRenderComponent(a, { key: e2.id, to: `/message/message_${e2.id}`, class: "flex w-full gap-4 border-b last:border-none border-[#f1f1f1] pb-10 group cursor-pointer text-left" }, { default: $e.withCtx((t2, r3, i4, l3) => {
      if (!r3) return [$e.createVNode("div", { class: "w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-[#f5f5f5] ring-1 ring-[#eee]" }, [$e.createVNode("img", { class: "w-full h-full object-cover", src: e2.avatar, alt: e2.userName }, null, 8, ["src", "alt"])]), $e.createVNode("div", { class: "flex flex-col gap-2 min-w-0 flex-1" }, [$e.createVNode("div", { class: "flex flex-wrap items-baseline justify-between gap-2 text-[14px] text-[#999] italic font-thin" }, [$e.createVNode("span", { class: "text-[#333] not-italic font-bold group-hover:text-primary transition-colors" }, $e.toDisplayString(e2.userName), 1), $e.createVNode("span", null, $e.toDisplayString($e.unref(i$1)(e2.createdAt)), 1)]), $e.createVNode("div", { class: "text-[14px] text-[#666] group-hover:underline decoration-solid decoration-[#999] line-clamp-3 leading-relaxed" }, $e.toDisplayString(e2.content), 1)])];
      r3(`<div class="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-[#f5f5f5] ring-1 ring-[#eee]"${l3}><img class="w-full h-full object-cover"${Pr.ssrRenderAttr("src", e2.avatar)}${Pr.ssrRenderAttr("alt", e2.userName)}${l3}></div><div class="flex flex-col gap-2 min-w-0 flex-1"${l3}><div class="flex flex-wrap items-baseline justify-between gap-2 text-[14px] text-[#999] italic font-thin"${l3}><span class="text-[#333] not-italic font-bold group-hover:text-primary transition-colors"${l3}>${Pr.ssrInterpolate(e2.userName)}</span><span${l3}>${Pr.ssrInterpolate($e.unref(i$1)(e2.createdAt))}</span></div><div class="text-[14px] text-[#666] group-hover:underline decoration-solid decoration-[#999] line-clamp-3 leading-relaxed"${l3}>${Pr.ssrInterpolate(e2.content)}</div></div>`);
    }), _: 2 }, l2));
  }), i3("<!--]--></div>");
}) }), l = i.setup;
i.setup = (e2, o2) => {
  const t2 = $e.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/message/index.vue"), l ? l(e2, o2) : void 0;
};

export { i as default };
//# sourceMappingURL=index-dxi1U9ro.mjs.map
