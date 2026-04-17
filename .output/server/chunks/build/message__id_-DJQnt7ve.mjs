import { p as p$1 } from './nuxt-link-CY5yg3Nc.mjs';
import { v as $e, g as dt, k as St, s as kr } from './server.mjs';
import { r, i } from './guestMessages-CoPNsCWv.mjs';
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
import './about_avatar-ckWlnmAu.mjs';
import './wechat-DbvjJH5c.mjs';

const p = $e.defineComponent({ __name: "message_[id]", __ssrInlineRender: true, setup(p2) {
  var _a;
  const u2 = dt(), a = String((_a = u2.params.id) != null ? _a : ""), m = r(a);
  if (!m) throw St({ statusCode: 404, statusMessage: "\u7559\u8A00\u4E0D\u5B58\u5728" });
  return s({ title: `${m.userName} \u7684\u7559\u8A00 | copyman blog`, description: m.content.slice(0, 120) }), (t2, o2, d2, i2) => {
    const p3 = p$1;
    o2(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "w-full h-full bg-white flex flex-col md:pt-6" }, i2))}><div class="w-full p-6 rounded-[6px]"><div class="flex items-start gap-4 border-b border-dashed pb-6"><div class="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full overflow-hidden bg-[#f5f5f5] ring-1 ring-[#eee]"><img class="w-full h-full object-cover"${kr.ssrRenderAttr("src", $e.unref(m).avatar)}${kr.ssrRenderAttr("alt", $e.unref(m).userName)}></div><div class="flex flex-col gap-1 min-w-0"><div class="text-[22px] md:text-[28px] font-bold leading-tight text-[#333]">${kr.ssrInterpolate($e.unref(m).userName)}</div><div class="italic font-thin text-[16px] text-[#999]">${kr.ssrInterpolate($e.unref(i)($e.unref(m).createdAt))}</div></div></div><div class="mt-8 text-[15px] md:text-[16px] text-[#666] leading-[1.85] whitespace-pre-wrap">${kr.ssrInterpolate($e.unref(m).content)}</div><div class="mt-10 pt-6 border-t border-[#f1f1f1]">`), o2(kr.ssrRenderComponent(p3, { to: "/message", class: "text-[14px] text-primary hover:underline" }, { default: $e.withCtx((e2, t3, o3, n2) => {
      if (!t3) return [$e.createTextVNode(" \u2190 \u8FD4\u56DE\u7559\u8A00\u5217\u8868 ")];
      t3(" \u2190 \u8FD4\u56DE\u7559\u8A00\u5217\u8868 ");
    }), _: 1 }, d2)), o2("</div></div></div>");
  };
} }), u = p.setup;
p.setup = (e2, t2) => {
  const o2 = $e.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/message/message_[id].vue"), u ? u(e2, t2) : void 0;
};

export { p as default };
//# sourceMappingURL=message__id_-DJQnt7ve.mjs.map
