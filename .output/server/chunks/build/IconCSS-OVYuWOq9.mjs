import { _ as Li, v as $e, s as kr } from './server.mjs';
import { s, c } from './index-Ovb55fQk.mjs';
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

const u = $e.defineComponent({ __name: "IconCSS", __ssrInlineRender: true, props: { name: { type: String, required: true }, size: { type: String, default: "" } }, setup(o2) {
  const u2 = s(), d2 = o2, i2 = $e.computed(() => {
    var _a, _b;
    return ((_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[d2.name]) ? u2.nuxtIcon.aliases[d2.name] : d2.name;
  }), p = $e.computed(() => c(i2.value)), m = $e.computed(() => {
    var _a, _b;
    const e2 = (_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url;
    if (e2) try {
      new URL(e2);
    } catch (n2) {
      return;
    }
    return `url('${e2 || "https://api.iconify.design"}/${p.value.prefix}/${p.value.name}.svg')`;
  }), r = $e.computed(() => {
    var _a, _b, _c;
    if (!d2.size && "boolean" == typeof ((_a = u2.nuxtIcon) == null ? void 0 : _a.size) && !((_b = u2.nuxtIcon) == null ? void 0 : _b.size)) return;
    const e2 = d2.size || ((_c = u2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
    return String(Number(e2)) === e2 ? `${e2}px` : e2;
  });
  return (o3, s2, t2, u3) => {
    const d3 = { style: { ":--v2d37eda5": m.value } };
    s2(`<span${kr.ssrRenderAttrs($e.mergeProps({ style: { width: r.value, height: r.value } }, u3, d3))} data-v-4f1c292b></span>`);
  };
} }), d = u.setup;
u.setup = (n2, o2) => {
  const s2 = $e.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_@types+node@25.6.0_jiti@2.6.1_sass@1.98.0_te_3c4fa1bf27ed2ba8e278bc748b510121/node_modules/nuxt-icon/dist/runtime/IconCSS.vue"), d ? d(n2, o2) : void 0;
};
const i = Li(u, [["__scopeId", "data-v-4f1c292b"]]);

export { i as default };
//# sourceMappingURL=IconCSS-OVYuWOq9.mjs.map
