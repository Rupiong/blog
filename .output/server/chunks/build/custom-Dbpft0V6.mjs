import { U, Q, o as oe } from './ContentInner-Bc3XF6z4.mjs';
import { v as $e, u as Hn, s as kr } from './server.mjs';
import './nuxt-link-CY5yg3Nc.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './Icon-DHwYHweU.mjs';
import './index-Ovb55fQk.mjs';
import './use-expose-BAq2jfff.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'node:stream';

const d = $e.defineComponent({ __name: "custom", __ssrInlineRender: true, setup: (d2) => (Hn(), (t2, d3, l2, r) => {
  const i = U, p = Q, m = oe;
  d3(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "w-full h-full flex flex-col" }, r))}>`), d3(kr.ssrRenderComponent(i, { key: "22", isLucency: false, colorClass: "text-black", isFixed: false }, null, l2)), d3('<div class="w-full flex-1 flex flex-col items-start justify-start">'), d3(kr.ssrRenderComponent(p, null, { default: $e.withCtx((e2, o2, s2, d4) => {
    if (!o2) return [$e.createVNode(m, null, { default: $e.withCtx(() => [$e.renderSlot(t2.$slots, "default")]), _: 3 })];
    o2(kr.ssrRenderComponent(m, null, { default: $e.withCtx((e3, o3, s3, d5) => {
      if (!o3) return [$e.renderSlot(t2.$slots, "default")];
      kr.ssrRenderSlot(t2.$slots, "default", {}, null, o3, s3, d5);
    }), _: 3 }, s2, d4));
  }), _: 3 }, l2)), d3("</div></div>");
}) }), l = d.setup;
d.setup = (e2, o2) => {
  const s2 = $e.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue"), l ? l(e2, o2) : void 0;
};

export { d as default };
//# sourceMappingURL=custom-Dbpft0V6.mjs.map
