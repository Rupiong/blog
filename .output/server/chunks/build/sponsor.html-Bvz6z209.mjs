import Qe from './Icon-DHwYHweU.mjs';
import { v as $e, s as kr } from './server.mjs';
import { s as s$1 } from './wechat-DbvjJH5c.mjs';
import { s } from './v3-B4umo1cC.mjs';
import './index-Ovb55fQk.mjs';
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

const d = $e.defineComponent({ __name: "sponsor.html", __ssrInlineRender: true, setup: (d2) => (s({ title: "\u8D5E\u52A9\u652F\u6301 | copyman blog", description: "\u901A\u8FC7\u5FAE\u4FE1\u6216\u652F\u4ED8\u5B9D\u8D5E\u52A9\u672C\u7AD9\uFF0C\u652F\u6301\u72EC\u7ACB\u535A\u5BA2\u4E0E\u5185\u5BB9\u521B\u4F5C\u3002" }), (n2, d3, l2, i) => {
  const p = Qe;
  d3(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "flex flex-col gap-10 p-3 bg-white" }, i))}><section class="flex flex-col gap-4 border-b border-dashed pb-10"><h2 class="text-[20px] font-bold text-[#333]">\u4E3A\u4EC0\u4E48\u8D5E\u52A9</h2><div class="text-[14px] text-[#666] leading-[2] space-y-3"><p> \u7EF4\u62A4\u8FD9\u4E2A\u535A\u5BA2\u9700\u8981\u65F6\u95F4\u4E0E\u670D\u52A1\u5668\u3001\u57DF\u540D\u7B49\u6210\u672C\u3002\u5982\u679C\u4F60\u5728\u8FD9\u91CC\u8BFB\u5230\u4E86\u5BF9\u4F60\u6709\u7528\u7684\u6587\u5B57\uFF0C\u613F\u610F\u7528\u4E00\u676F\u5496\u5561\u7684\u4EF7\u683C\u8868\u793A\u652F\u6301\uFF0C\u6211\u4F1A\u975E\u5E38\u611F\u6FC0\u3002 </p><p> \u8D5E\u52A9\u5B8C\u5168\u81EA\u613F\uFF0C\u91D1\u989D\u968F\u610F\uFF1B\u6240\u6709\u5FC3\u610F\u90FD\u4F1A\u7528\u4E8E\u7AD9\u70B9\u7684\u7A33\u5B9A\u8FD0\u884C\u4E0E\u5185\u5BB9\u66F4\u65B0\u3002\u65E0\u6CD5\u63D0\u4F9B\u53D1\u7968\u6216\u5546\u4E1A\u56DE\u62A5\uFF0C\u53EA\u662F\u4E00\u4EFD\u5BF9\u72EC\u7ACB\u521B\u4F5C\u7684\u9F13\u52B1\u3002 </p><p class="text-[13px] text-[#999]"> \u626B\u7801\u540E\u8BF7\u6838\u5BF9\u6536\u6B3E\u65B9\u4FE1\u606F\uFF0C\u8C28\u9632\u8BC8\u9A97\u3002\u611F\u8C22\u4F60\u7684\u4FE1\u4EFB\u3002 </p></div></section><section class="flex flex-col gap-6"><h2 class="text-[20px] font-bold text-[#333]">\u6536\u6B3E\u65B9\u5F0F</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto w-full"><div class="flex flex-col items-center gap-4 p-6 rounded-lg bg-[#fafafa]"><div class="flex items-center gap-2 text-[15px] font-semibold text-[#333]">`), d3(kr.ssrRenderComponent(p, { name: "ic:baseline-wechat", class: "text-[#07c160] text-xl" }, null, l2)), d3(` \u5FAE\u4FE1\u652F\u4ED8 </div><div class="w-100 h-100 shrink-0 rounded-md overflow-hidden bg-white ring-1 ring-[#eee] p-2"><img${kr.ssrRenderAttr("src", $e.unref(s$1))} alt="\u5FAE\u4FE1\u6536\u6B3E\u7801" class="w-full h-full object-contain"></div><p class="text-[12px] text-[#999] text-center">\u6253\u5F00\u5FAE\u4FE1\u626B\u4E00\u626B</p></div><div class="flex flex-col items-center gap-4 p-6 rounded-lg bg-[#fafafa]"><div class="flex items-center gap-2 text-[15px] font-semibold text-[#333]">`), d3(kr.ssrRenderComponent(p, { name: "simple-icons:alipay", class: "text-[#1677ff] text-xl" }, null, l2)), d3(` \u652F\u4ED8\u5B9D </div><div class="w-100 h-100 shrink-0 rounded-md overflow-hidden bg-white ring-1 ring-[#eee] p-2"><img${kr.ssrRenderAttr("src", $e.unref(s$1))} alt="\u652F\u4ED8\u5B9D\u6536\u6B3E\u7801" class="w-full h-full object-contain"></div><p class="text-[12px] text-[#999] text-center">\u6253\u5F00\u652F\u4ED8\u5B9D\u626B\u4E00\u626B</p></div></div></section></div>`);
}) }), l = d.setup;
d.setup = (e2, o2) => {
  const t2 = $e.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/sponsor.html.vue"), l ? l(e2, o2) : void 0;
};

export { d as default };
//# sourceMappingURL=sponsor.html-Bvz6z209.mjs.map
