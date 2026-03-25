import { p } from './nuxt-link-BfTR7asS.mjs';
import { s as Pr, v as $e } from './server.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { s as s$1 } from './v3-B9vmg-ps.mjs';
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

const s = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, status: { type: Number, default: 404 }, statusText: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(o2) {
  const s2 = o2;
  return s$1({ title: `${s2.status} - ${s2.statusText} | ${s2.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r2, s3, a2, i2) => {
    const u = p;
    s3(`<div${Pr.ssrRenderAttrs($e.mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, i2))} data-v-aa7ceaaf><div class="fixed left-0 right-0 spotlight z-10" data-v-aa7ceaaf></div><div class="max-w-520px text-center z-20" data-v-aa7ceaaf><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-aa7ceaaf>${Pr.ssrInterpolate(o2.status)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-aa7ceaaf>${Pr.ssrInterpolate(o2.description)}</p><div class="flex items-center justify-center w-full" data-v-aa7ceaaf>`), s3(Pr.ssrRenderComponent(u, { to: "/", class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md" }, { default: $e.withCtx((e2, r3, s4, a3) => {
      if (!r3) return [$e.createTextVNode($e.toDisplayString(o2.backHome), 1)];
      r3(`${Pr.ssrInterpolate(o2.backHome)}`);
    }), _: 1 }, a2)), s3("</div></div></div>");
  };
} }, a = s.setup;
s.setup = (e2, t2) => {
  const o2 = $e.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vitejs+devtools@0.1.11_@pnpm+logger@1001.0.1_db0@0.3_e7157340399356fd330e905b2a6d1642/node_modules/nuxt/dist/app/components/error-404.vue"), a ? a(e2, t2) : void 0;
};
const i = o(s, [["__scopeId", "data-v-aa7ceaaf"]]);

export { i as default };
//# sourceMappingURL=error-404-B6rZgpzB.mjs.map
