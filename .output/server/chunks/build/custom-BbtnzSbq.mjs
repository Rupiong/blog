import { K, J, t as te } from './ContentInner-7JU-5FcA.mjs';
import { v as $e, u as Ln, s as Pr } from './server.mjs';
import './nuxt-link-BfTR7asS.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './Icon-QwMdsGlg.mjs';
import './index-DLMHE0JN.mjs';
import './_plugin-vue_export-helper-BCo6x5W8.mjs';
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

const l = $e.defineComponent({ __name: "custom", __ssrInlineRender: true, setup: (l2) => (Ln(), (t2, l3, d2, r) => {
  const p = K, i = J, m = te;
  l3(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "w-full h-full flex flex-col" }, r))}>`), l3(Pr.ssrRenderComponent(p, { key: "22", isLucency: false, colorClass: "text-black", isFixed: false }, null, d2)), l3('<div class="w-full flex-1 flex flex-col items-start justify-start">'), l3(Pr.ssrRenderComponent(i, null, { default: $e.withCtx((e2, o2, s2, l4) => {
    if (!o2) return [$e.createVNode(m, null, { default: $e.withCtx(() => [$e.renderSlot(t2.$slots, "default")]), _: 3 })];
    o2(Pr.ssrRenderComponent(m, null, { default: $e.withCtx((e3, o3, s3, l5) => {
      if (!o3) return [$e.renderSlot(t2.$slots, "default")];
      Pr.ssrRenderSlot(t2.$slots, "default", {}, null, o3, s3, l5);
    }), _: 3 }, s2, l4));
  }), _: 3 }, d2)), l3("</div></div>");
}) }), d = l.setup;
l.setup = (e2, o2) => {
  const s2 = $e.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue"), d ? d(e2, o2) : void 0;
};

export { l as default };
//# sourceMappingURL=custom-BbtnzSbq.mjs.map
