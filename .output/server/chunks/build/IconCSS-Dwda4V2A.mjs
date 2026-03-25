import { v as $e, s as Pr } from './server.mjs';
import { s, c } from './index-DLMHE0JN.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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

const u = $e.defineComponent({ __name: "IconCSS", __ssrInlineRender: true, props: { name: { type: String, required: true }, size: { type: String, default: "" } }, setup(t2) {
  const u2 = s(), p2 = t2, i2 = $e.computed(() => {
    var _a, _b;
    return ((_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[p2.name]) ? u2.nuxtIcon.aliases[p2.name] : p2.name;
  }), d = $e.computed(() => c(i2.value)), r = $e.computed(() => {
    var _a, _b;
    const e2 = (_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url;
    if (e2) try {
      new URL(e2);
    } catch (n2) {
      return;
    }
    return `url('${e2 || "https://api.iconify.design"}/${d.value.prefix}/${d.value.name}.svg')`;
  }), m = $e.computed(() => {
    var _a, _b, _c;
    if (!p2.size && "boolean" == typeof ((_a = u2.nuxtIcon) == null ? void 0 : _a.size) && !((_b = u2.nuxtIcon) == null ? void 0 : _b.size)) return;
    const e2 = p2.size || ((_c = u2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
    return String(Number(e2)) === e2 ? `${e2}px` : e2;
  });
  return (o2, s2, t3, u3) => {
    const p3 = { style: { ":--d9b4f2e8": r.value } };
    s2(`<span${Pr.ssrRenderAttrs($e.mergeProps({ style: { width: m.value, height: m.value } }, u3, p3))} data-v-a8551b7c></span>`);
  };
} }), p = u.setup;
u.setup = (n2, o2) => {
  const s2 = $e.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_sass@1.98.0_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@6.0.2_/node_modules/nuxt-icon/dist/runtime/IconCSS.vue"), p ? p(n2, o2) : void 0;
};
const i = o(u, [["__scopeId", "data-v-a8551b7c"]]);

export { i as default };
//# sourceMappingURL=IconCSS-Dwda4V2A.mjs.map
