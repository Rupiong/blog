import Qe from './Icon-QwMdsGlg.mjs';
import { v as $e, s as Pr } from './server.mjs';
import './index-DLMHE0JN.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './_plugin-vue_export-helper-BCo6x5W8.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'node:stream';

const n = $e.defineComponent({ __name: "CommentReply", __ssrInlineRender: true, props: { list: { type: Array, default: () => [] }, isReply: { type: Boolean, default: false } }, setup: (i2) => (o2, d2, l2, r2) => {
  const p = Qe, a = n;
  d2(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "w-full" }, r2))}><!--[-->`), Pr.ssrRenderList(i2.list, (e2, s2) => {
    d2(`<div class="w-full flex flex-col gap-2 border-t pt-2 border-dashed"><div class="w-full flex gap-2 justify-between"><div class="w-10 h-10 bg-[#ccc] rounded-full overflow-hidden shrink-0"></div><div class="w-full"><div class="w-full h-10 flex items-center justify-between"><div class="flex items-center gap-2"><div class="flex items-center gap-2"><div class="font-bold leading-none">${Pr.ssrInterpolate(e2.nickname)}</div><div class="text-[12px] font-thin leading-none">${Pr.ssrInterpolate(e2.time)}</div></div></div>`), i2.isReply ? d2("<!---->") : (d2('<div class="text-[12px] font-thin flex items-center gap-2">'), d2(Pr.ssrRenderComponent(p, { class: "text-[18px]", name: e2.isLike ? "icon-park-solid:like" : "icon-park-outline:like" }, null, l2)), d2(Pr.ssrRenderComponent(p, { class: "text-[18px]", name: "uiw:message" }, null, l2)), d2("</div>")), d2("</div>"), i2.isReply ? d2(`<div class="text-[12px] flex items-center gap-1 mb-1"><div class="text-[#999]">\u56DE\u590D</div><div class="text-primary">@${Pr.ssrInterpolate(e2.author)}</div></div>`) : d2("<!---->"), d2(`<div>${Pr.ssrInterpolate(e2.content)}</div><div class="mt-2">`), d2(Pr.ssrRenderComponent(a, { list: e2.replyData, isReply: "" }, null, l2)), d2("</div></div></div></div>");
  }), d2("<!--]--></div>");
} }), i = n.setup;
n.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Comment/CommentReply.vue"), i ? i(e2, t2) : void 0;
};
const o = $e.defineComponent({ __name: "Comment", __ssrInlineRender: true, setup(i2) {
  const o2 = [{ avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666", replyData: [{ author: "\u5F20\u4E09", avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666" }] }, { avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: false, content: "666", replyData: [{ author: "\u5F20\u4E09", avatar: "", nickname: "\u5F20\u4E09", time: "2023-10-31", isLike: true, content: "666" }] }];
  return (i3, d2, l2, r2) => {
    const p = Qe;
    d2(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "w-full flex flex-col gap-10" }, r2))}><div><div></div></div><div class="w-full flex flex-col gap-4"><div class="w-full flex items-center justify-between"><div>6\u6761\u8BC4\u8BBA</div>`), d2(Pr.ssrRenderComponent(p, { class: "text-[20px]", name: "ep:refresh-right" }, null, l2)), d2('</div><div class="w-full">'), d2(Pr.ssrRenderComponent(n, { list: o2 }, null, l2)), d2("</div></div></div>");
  };
} }), d = o.setup;
o.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Comment/Comment.vue"), d ? d(e2, t2) : void 0;
};
const l = $e.defineComponent({ __name: "article_[id]", __ssrInlineRender: true, setup: (e2) => (e3, n2, i2, d2) => {
  const l2 = o;
  n2(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "w-full flex flex-col justify-center items-center md:mt-6" }, d2))}><div class="w-full p-6 rounded-[6px]"><div class="flex items-center gap-2"><div class="leading-none p-2 rounded-full border text-[12px] bg-white"> \u77E5\u4E4E </div><div class="leading-none p-2 rounded-full border text-[12px] bg-white"> \u77E5\u4E4E </div><div class="leading-none p-2 rounded-full border text-[12px] bg-white"> \u77E5\u4E4E </div></div><div class="text-[30px] md:text-[52px] font-bold leading-[1.2] text-[#333]"> React Hooks \u662F\u5426\u53EF\u4EE5\u6539\u4E3A\u7528\u7C7B\u4F3C Vue 3 Composition API \u7684\u65B9\u5F0F\u5B9E\u73B0\uFF1F </div><div class="text-[22px] md:text-[32px] mt-2 text-[#666]"> Thinking in React vs. Thinking in Vue </div><div class="italic font-thin text-[18px] mt-2 border-b border-dashed pb-6 text-[#999]"> Posted by Hux on April 3, 2020 </div><div></div>`), n2(Pr.ssrRenderComponent(l2, null, null, i2)), n2("</div></div>");
} }), r = l.setup;
l.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("pages/article/article_[id].vue"), r ? r(e2, t2) : void 0;
};

export { l as default };
//# sourceMappingURL=article__id_-BJxgq0CF.mjs.map
