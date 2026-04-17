import Qe from './Icon-DHwYHweU.mjs';
import { v as $e, s as kr, p as Zr, e as Wr, b as zr, n as qr, t as ei, c as mi, d as ti, f as ri, I as ki, m as si, a as ni } from './server.mjs';
import { t, v, p, u } from './use-expose-BAq2jfff.mjs';
import { a } from './about_avatar-ckWlnmAu.mjs';
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

const [x, k] = mi("checkbox-group"), V = { max: qr, shape: ni("round"), disabled: Boolean, iconSize: qr, direction: String, modelValue: si(), checkedColor: String }, C = Symbol(x);
$e.defineComponent({ name: x, props: V, emits: ["change", "update:modelValue"], setup(e2, { emit: o2, slots: n2 }) {
  const { children: t2, linkChildren: s2 } = u(C), a2 = (e3) => o2("update:modelValue", e3);
  return $e.watch(() => e2.modelValue, (e3) => o2("change", e3)), v({ toggleAll: (e3 = {}) => {
    "boolean" == typeof e3 && (e3 = { checked: e3 });
    const { checked: o3, skipDisabled: l2 } = e3, n3 = t2.filter((e4) => !!e4.props.bindGroup && (e4.props.disabled && l2 ? e4.checked.value : null != o3 ? o3 : !e4.checked.value)).map((e4) => e4.name);
    a2(n3);
  } }), p(() => e2.modelValue), s2({ props: e2, updateValue: a2 }), () => {
    var o3;
    return $e.createVNode("div", { class: k([e2.direction]) }, [null == (o3 = n2.default) ? void 0 : o3.call(n2)]);
  };
} });
const _ = { name: zr, disabled: Boolean, iconSize: qr, modelValue: zr, checkedColor: String, labelPosition: String, labelDisabled: Boolean };
var w = $e.defineComponent({ props: Wr({}, _, { bem: ti(Function), role: String, shape: String, parent: Object, checked: Boolean, bindGroup: ei, indeterminate: { type: Boolean, default: null } }), emits: ["click", "toggle"], setup(e2, { emit: o2, slots: n2 }) {
  const t2 = $e.ref(), s2 = (o3) => {
    if (e2.parent && e2.bindGroup) return e2.parent.props[o3];
  }, a2 = $e.computed(() => {
    if (e2.parent && e2.bindGroup) {
      const o3 = s2("disabled") || e2.disabled;
      if ("checkbox" === e2.role) {
        const l2 = s2("modelValue").length, n3 = s2("max");
        return o3 || n3 && l2 >= +n3 && !e2.checked;
      }
      return o3;
    }
    return e2.disabled;
  }), i2 = $e.computed(() => s2("direction")), d2 = $e.computed(() => {
    const o3 = e2.checkedColor || s2("checkedColor");
    if (o3 && (e2.checked || e2.indeterminate) && !a2.value) return { borderColor: o3, backgroundColor: o3 };
  }), r2 = $e.computed(() => e2.shape || s2("shape") || "round"), p2 = (l2) => {
    const { target: n3 } = l2, s3 = t2.value, i3 = s3 === n3 || (null == s3 ? void 0 : s3.contains(n3));
    a2.value || !i3 && e2.labelDisabled || o2("toggle"), o2("click", l2);
  }, m2 = () => {
    var o3, i3;
    const { bem: p3, checked: m3, indeterminate: g3 } = e2, b2 = e2.iconSize || s2("iconSize");
    return $e.createVNode("div", { ref: t2, class: p3("icon", [r2.value, { disabled: a2.value, checked: m3, indeterminate: g3 }]), style: "dot" !== r2.value ? { fontSize: ri(b2) } : { width: ri(b2), height: ri(b2), borderColor: null == (o3 = d2.value) ? void 0 : o3.borderColor } }, [n2.icon ? n2.icon({ checked: m3, disabled: a2.value }) : "dot" !== r2.value ? $e.createVNode(ki, { name: g3 ? "minus" : "success", style: d2.value }, null) : $e.createVNode("div", { class: p3("icon--dot__icon"), style: { backgroundColor: null == (i3 = d2.value) ? void 0 : i3.backgroundColor } }, null)]);
  }, g2 = () => {
    const { checked: o3 } = e2;
    if (n2.default) return $e.createVNode("span", { class: e2.bem("label", [e2.labelPosition, { disabled: a2.value }]) }, [n2.default({ checked: o3, disabled: a2.value })]);
  };
  return () => {
    const o3 = "left" === e2.labelPosition ? [g2(), m2()] : [m2(), g2()];
    return $e.createVNode("div", { role: e2.role, class: e2.bem([{ disabled: a2.value, "label-disabled": e2.labelDisabled }, i2.value]), tabindex: a2.value ? void 0 : 0, "aria-checked": e2.checked, onClick: p2 }, [o3]);
  };
} });
const [j, y] = mi("checkbox"), S = Wr({}, _, { shape: String, bindGroup: ei, indeterminate: { type: Boolean, default: null } });
var R = $e.defineComponent({ name: j, props: S, emits: ["change", "update:modelValue"], setup(e2, { emit: o2, slots: n2 }) {
  const { parent: t2 } = t(C), s2 = $e.computed(() => t2 && e2.bindGroup ? -1 !== t2.props.modelValue.indexOf(e2.name) : !!e2.modelValue), a2 = (l2 = !s2.value) => {
    t2 && e2.bindGroup ? ((o3) => {
      const { name: l3 } = e2, { max: n3, modelValue: s3 } = t2.props, a3 = s3.slice();
      if (o3) n3 && a3.length >= +n3 || a3.includes(l3) || (a3.push(l3), e2.bindGroup && t2.updateValue(a3));
      else {
        const o4 = a3.indexOf(l3);
        -1 !== o4 && (a3.splice(o4, 1), e2.bindGroup && t2.updateValue(a3));
      }
    })(l2) : o2("update:modelValue", l2), null !== e2.indeterminate && o2("change", l2);
  };
  return $e.watch(() => e2.modelValue, (l2) => {
    null === e2.indeterminate && o2("change", l2);
  }), v({ toggle: a2, props: e2, checked: s2 }), p(() => e2.modelValue), () => $e.createVNode(w, $e.mergeProps({ bem: y, role: "checkbox", parent: t2, checked: s2.value, onToggle: a2 }, e2), Zr(n2, ["default", "icon"]));
} });
const U = $e.defineComponent({ __name: "about.html", __ssrInlineRender: true, setup(o2) {
  const n2 = [{ name: "Vue.js", icon: "logos:vue" }, { name: "Pinia", icon: "logos:pinia" }, { name: "Vite", icon: "logos:vitejs" }, { name: "JavaScript", icon: "logos:javascript" }, { name: "CSS3", icon: "logos:css-3" }, { name: "HTML5", icon: "logos:html-5" }, { name: "webpack", icon: "logos:webpack" }, { name: "Typescript", icon: "logos:typescript-icon" }, { name: "Photoshop", icon: "logos:adobe-photoshop" }, { name: "Illustrator", icon: "logos:adobe-illustrator" }, { name: "Indesign", icon: "logos:adobe-indesign" }, { name: "Git", icon: "logos:git-icon" }, { name: "Php", icon: "logos:php-alt" }, { name: "Nuxt.js", icon: "logos:nuxt-icon" }, { name: "axios.js", icon: "logos:axios" }, { name: "naive UI", icon: "logos:naiveui" }, { name: "element UI", icon: "logos:element" }, { name: "MySQL", icon: "logos:mysql" }, { name: "tailwindcss", icon: "logos:tailwindcss-icon" }, { name: "React.js", icon: "logos:react" }], t2 = $e.ref(true);
  return (o3, s2, a2, i2) => {
    const d2 = Qe, r2 = R;
    s2(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "flex flex-col gap-10" }, i2))}><div class="flex flex-col gap-2 border-b pb-10 border-dashed"><div class="text-[14px] text-[#666] flex items-center gap-4"><div class="w-32 h-40 bg-[#ccc] shrink-0 rounded-md overflow-hidden"><img class="w-full h-full object-cover"${kr.ssrRenderAttr("src", a)}></div><div class="mt-2 leading-[2]"> Hey\uFF0C\u6211\u662F\u9EC4\u88D5\u5E73\uFF08Rupiong\uFF09\uFF0C\u4E00\u4E2A\u7565\u61C2\u7F16\u7A0B\u548C\u8BBE\u8BA1\u7684\u659C\u6746\u9752\u5E74\u300219\u5E74\u6BD5\u4E1A\u4E8E\u9F99\u5CA9\u5B66\u9662\u91C7\u77FF\u5DE5\u7A0B\u4E13\u4E1A,\u901A\u8FC7\u81EA\u5B66,\u5148\u540E\u4ECE\u4E8B\u8FC7\u5E73\u9762\u8BBE\u8BA1\u3001UI\u8BBE\u8BA1\u3001\u7F16\u7A0B\u65B9\u9762\u7684\u5DE5\u4F5C,\u76EE\u524D\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u3002 </div></div></div><div class="flex flex-col gap-2"><div class="text-[20px] font-bold text-[#33]">\u804C\u4E1A\u6280\u80FD</div><div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap"><!--[-->`), kr.ssrRenderList(n2, (e2, o4) => {
      s2('<div class="flex items-center gap-2 border w-fit text-white p-1 rounded-full bg-black cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:drop-shadow-lg hover:text-primary"><div class="w-8 h-8 bg-white p-1.5 rounded-full flex items-center justify-center">'), s2(kr.ssrRenderComponent(d2, { class: "w-full h-full leading-none", name: e2.icon }, null, a2)), s2(`</div><div class="font-bold mr-2 leading-none text-[12px]">${kr.ssrInterpolate(e2.name)}</div></div>`);
    }), s2('<!--]--></div></div><div class="flex flex-col gap-2"><div class="text-[20px] font-bold text-[#33]">\u5174\u8DA3\u7231\u597D</div><div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap"><ul class="list-decimal ml-3"><li>\u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F</li><li>\u6253\u6253\u82F1\u96C4\u8054\u76DF</li><li>\u4E0A\u73ED\u6478\u9C7C\u542C\u97F3\u4E50</li><li>\u4E1A\u4F59\u6E38\u6CF3\u7231\u597D\u8005</li><li>\u6E56\u4EBA\u603B\u51A0\u519B</li><li>\u80A1\u5E02\u7684\u5C0F\u97ED\u83DC</li></ul></div></div><div class="flex flex-col gap-2"><div class="text-[20px] font-bold text-[#33]">Todo List (2023\u5E74)</div><div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap"><ul class="flex flex-col gap-4 list-decimal ml-3"><li>'), s2(kr.ssrRenderComponent(r2, { shape: "square", modelValue: $e.unref(t2), "onUpdate:modelValue": (e2) => $e.isRef(t2) ? t2.value = e2 : null, "label-position": "left" }, { default: $e.withCtx((e2, o4, n3, t3) => {
      if (!o4) return [$e.createTextVNode(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ")];
      o4(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ");
    }), _: 1 }, a2)), s2("</li><li>"), s2(kr.ssrRenderComponent(r2, { shape: "square", modelValue: $e.unref(t2), "onUpdate:modelValue": (e2) => $e.isRef(t2) ? t2.value = e2 : null, "label-position": "left" }, { default: $e.withCtx((e2, o4, n3, t3) => {
      if (!o4) return [$e.createTextVNode(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ")];
      o4(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ");
    }), _: 1 }, a2)), s2("</li><li>"), s2(kr.ssrRenderComponent(r2, { shape: "square", modelValue: $e.unref(t2), "onUpdate:modelValue": (e2) => $e.isRef(t2) ? t2.value = e2 : null, "label-position": "left" }, { default: $e.withCtx((e2, o4, n3, t3) => {
      if (!o4) return [$e.createTextVNode(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ")];
      o4(" \u7814\u7A76\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u3002 ");
    }), _: 1 }, a2)), s2("</li></ul></div></div></div>");
  };
} }), D = U.setup;
U.setup = (e2, o2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("pages/about.html.vue"), D ? D(e2, o2) : void 0;
};

export { U as default };
//# sourceMappingURL=about.html-C-9MZyq0.mjs.map
