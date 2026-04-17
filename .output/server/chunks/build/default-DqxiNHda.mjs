import { E as E$1, U as U$1, Q as Q$1, o as oe$1 } from './ContentInner-Bc3XF6z4.mjs';
import Qe from './Icon-DHwYHweU.mjs';
import { p } from './nuxt-link-CY5yg3Nc.mjs';
import { v as $e$1, i as at, u as Hn, g as dt, s as kr, _ as Li } from './server.mjs';
import { a } from './about_avatar-ckWlnmAu.mjs';
import { s } from './wechat-DbvjJH5c.mjs';
import { t as te$1, M as et, D as Dn, b, i, x as xi, H as Hn$1, k as N, a as a$1, P as ie$1, d as vn, N as Ni, Z as Z$1, Y as Y$1, q as q$1, X as X$1, g as gi, e as cr, W as W$1, Q as oe$2, m as _i, U as U$2, y as yn, z as cn, E as xo, L as Hi } from './firstNotUndefined-B1644V9y.mjs';
import './use-expose-BAq2jfff.mjs';
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

const E = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], M = (e2, t2, o2, r2, n2) => {
  const a2 = e2 / 2, l2 = a2, i2 = 1 * o2 / Math.sqrt(2), s2 = a2 - o2 * (1 - 1 / Math.sqrt(2)), p2 = a2 - t2 * (1 / Math.sqrt(2)), d2 = o2 * (Math.sqrt(2) - 1) + t2 * (1 / Math.sqrt(2)), c2 = 2 * a2 - p2, u2 = d2, f2 = 2 * a2 - i2, m2 = s2, g2 = 2 * a2 - 0, v2 = l2, h2 = a2 * Math.sqrt(2) + o2 * (Math.sqrt(2) - 2), b2 = o2 * (Math.sqrt(2) - 1);
  return { pointerEvents: "none", width: e2, height: e2, overflow: "hidden", "&::after": { content: '""', position: "absolute", width: h2, height: h2, bottom: 0, insetInline: 0, margin: "auto", borderRadius: { _skip_check_: true, value: `0 0 ${t2}px 0` }, transform: "translateY(50%) rotate(-135deg)", boxShadow: n2, zIndex: 0, background: "transparent" }, "&::before": { position: "absolute", bottom: 0, insetInlineStart: 0, width: e2, height: e2 / 2, background: r2, clipPath: { _multi_value_: true, value: [`polygon(${b2}px 100%, 50% ${b2}px, ${2 * a2 - b2}px 100%, ${b2}px 100%)`, `path('M 0 ${l2} A ${o2} ${o2} 0 0 0 ${i2} ${s2} L ${p2} ${d2} A ${t2} ${t2} 0 0 1 ${c2} ${u2} L ${f2} ${m2} A ${o2} ${o2} 0 0 0 ${g2} ${v2} Z')`] }, content: '""' } };
};
function U(e2, t2) {
  return E.reduce((o2, r2) => {
    const n2 = e2[`${r2}-1`], a2 = e2[`${r2}-3`], l2 = e2[`${r2}-6`], i2 = e2[`${r2}-7`];
    return a$1(a$1({}, o2), t2(r2, { lightColor: n2, lightBorderColor: a2, darkColor: l2, textColor: i2 }));
  }, {});
}
const K = new xo("antZoomIn", { "0%": { transform: "scale(0.2)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), X = new xo("antZoomOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.2)", opacity: 0 } }), W = new xo("antZoomBigIn", { "0%": { transform: "scale(0.8)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), Z = new xo("antZoomBigOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.8)", opacity: 0 } }), F = new xo("antZoomUpIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 0%" } }), H = new xo("antZoomUpOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 0%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 } }), Y = { zoom: { inKeyframes: K, outKeyframes: X }, "zoom-big": { inKeyframes: W, outKeyframes: Z }, "zoom-big-fast": { inKeyframes: W, outKeyframes: Z }, "zoom-left": { inKeyframes: new xo("antZoomLeftIn", { "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "0% 50%" } }), outKeyframes: new xo("antZoomLeftOut", { "0%": { transform: "scale(1)", transformOrigin: "0% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 } }) }, "zoom-right": { inKeyframes: new xo("antZoomRightIn", { "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "100% 50%" } }), outKeyframes: new xo("antZoomRightOut", { "0%": { transform: "scale(1)", transformOrigin: "100% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 } }) }, "zoom-up": { inKeyframes: F, outKeyframes: H }, "zoom-down": { inKeyframes: new xo("antZoomDownIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 100%" } }), outKeyframes: new xo("antZoomDownOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 100%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 } }) } }, q = (e2, t2) => {
  const { antCls: o2 } = e2, r2 = `${o2}-${t2}`, { inKeyframes: n2, outKeyframes: a2 } = Y[t2];
  return [Hi(r2, n2, a2, "zoom-big-fast" === t2 ? e2.motionDurationFast : e2.motionDurationMid), { [`
        ${r2}-enter,
        ${r2}-appear
      `]: { transform: "scale(0)", opacity: 0, animationTimingFunction: e2.motionEaseOutCirc, "&-prepare": { transform: "none" } }, [`${r2}-leave`]: { animationTimingFunction: e2.motionEaseInOutCirc } }];
}, G = { adjustX: 1, adjustY: 1 }, J = [0, 0], Q = { left: { points: ["cr", "cl"], overflow: G, offset: [-4, 0], targetOffset: J }, right: { points: ["cl", "cr"], overflow: G, offset: [4, 0], targetOffset: J }, top: { points: ["bc", "tc"], overflow: G, offset: [0, -4], targetOffset: J }, bottom: { points: ["tc", "bc"], overflow: G, offset: [0, 4], targetOffset: J }, topLeft: { points: ["bl", "tl"], overflow: G, offset: [0, -4], targetOffset: J }, leftTop: { points: ["tr", "tl"], overflow: G, offset: [-4, 0], targetOffset: J }, topRight: { points: ["br", "tr"], overflow: G, offset: [0, -4], targetOffset: J }, rightTop: { points: ["tl", "tr"], overflow: G, offset: [4, 0], targetOffset: J }, bottomRight: { points: ["tr", "br"], overflow: G, offset: [0, 4], targetOffset: J }, rightBottom: { points: ["bl", "br"], overflow: G, offset: [4, 0], targetOffset: J }, bottomLeft: { points: ["tl", "bl"], overflow: G, offset: [0, 4], targetOffset: J }, leftBottom: { points: ["br", "bl"], overflow: G, offset: [-4, 0], targetOffset: J } }, ee = { prefixCls: String, id: String, overlayInnerStyle: cr.any }, te = $e$1.defineComponent({ compatConfig: { MODE: 3 }, name: "TooltipContent", props: ee, setup(e2, t2) {
  let { slots: o2 } = t2;
  return () => {
    var t3;
    return $e$1.createVNode("div", { class: `${e2.prefixCls}-inner`, id: e2.id, role: "tooltip", style: e2.overlayInnerStyle }, [null === (t3 = o2.overlay) || void 0 === t3 ? void 0 : t3.call(o2)]);
  };
} });
function oe() {
}
const re = $e$1.defineComponent({ compatConfig: { MODE: 3 }, name: "Tooltip", inheritAttrs: false, props: { trigger: cr.any.def(["hover"]), defaultVisible: { type: Boolean, default: void 0 }, visible: { type: Boolean, default: void 0 }, placement: cr.string.def("right"), transitionName: String, animation: cr.any, afterVisibleChange: cr.func.def(() => {
}), overlayStyle: { type: Object, default: void 0 }, overlayClassName: String, prefixCls: cr.string.def("rc-tooltip"), mouseEnterDelay: cr.number.def(0.1), mouseLeaveDelay: cr.number.def(0.1), getPopupContainer: Function, destroyTooltipOnHide: { type: Boolean, default: false }, align: cr.object.def(() => ({})), arrowContent: cr.any.def(null), tipId: String, builtinPlacements: cr.object, overlayInnerStyle: { type: Object, default: void 0 }, popupVisible: { type: Boolean, default: void 0 }, onVisibleChange: Function, onPopupAlign: Function, arrow: { type: Boolean, default: true } }, setup(e2, t2) {
  let { slots: o2, attrs: r2, expose: n2 } = t2;
  const a2 = $e$1.shallowRef(), i2 = () => {
    const { prefixCls: t3, tipId: r3, overlayInnerStyle: n3 } = e2;
    return [e2.arrow ? $e$1.createVNode("div", { class: `${t3}-arrow`, key: "arrow" }, [U$2(o2, e2, "arrowContent")]) : null, $e$1.createVNode(te, { key: "content", prefixCls: t3, id: r3, overlayInnerStyle: n3 }, { overlay: o2.overlay })];
  };
  n2({ getPopupDomNode: () => a2.value.getPopupDomNode(), triggerDOM: a2, forcePopupAlign: () => {
    var e3;
    return null === (e3 = a2.value) || void 0 === e3 ? void 0 : e3.forcePopupAlign();
  } });
  const s2 = $e$1.shallowRef(false), p2 = $e$1.shallowRef(false);
  return $e$1.watchEffect(() => {
    const { destroyTooltipOnHide: t3 } = e2;
    if ("boolean" == typeof t3) s2.value = t3;
    else if (t3 && "object" == typeof t3) {
      const { keepParent: e3 } = t3;
      s2.value = true === e3, p2.value = false === e3;
    }
  }), () => {
    const { overlayClassName: t3, trigger: n3, mouseEnterDelay: d2, mouseLeaveDelay: c2, overlayStyle: u2, prefixCls: f2, afterVisibleChange: g2, transitionName: v2, animation: h2, placement: w2, align: y2, destroyTooltipOnHide: x2, defaultVisible: $2 } = e2, C2 = (function(e3, t4) {
      var o3 = {};
      for (var r3 in e3) Object.prototype.hasOwnProperty.call(e3, r3) && t4.indexOf(r3) < 0 && (o3[r3] = e3[r3]);
      if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
        var n4 = 0;
        for (r3 = Object.getOwnPropertySymbols(e3); n4 < r3.length; n4++) t4.indexOf(r3[n4]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, r3[n4]) && (o3[r3[n4]] = e3[r3[n4]]);
      }
      return o3;
    })(e2, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), O2 = a$1({}, C2);
    void 0 !== e2.visible && (O2.popupVisible = e2.visible);
    const k2 = a$1(a$1(a$1({ popupClassName: t3, prefixCls: f2, action: n3, builtinPlacements: Q, popupPlacement: w2, popupAlign: y2, afterPopupVisibleChange: g2, popupTransitionName: v2, popupAnimation: h2, defaultPopupVisible: $2, destroyPopupOnHide: s2.value, autoDestroy: p2.value, mouseLeaveDelay: c2, popupStyle: u2, mouseEnterDelay: d2 }, O2), r2), { onPopupVisibleChange: e2.onVisibleChange || oe, onPopupAlign: e2.onPopupAlign || oe, ref: a2, arrow: !!e2.arrow, popup: i2() });
    return $e$1.createVNode(_i, k2, { default: o2.default });
  };
} }), ne = () => ({ trigger: [String, Array], open: { type: Boolean, default: void 0 }, visible: { type: Boolean, default: void 0 }, placement: String, color: String, transitionName: String, overlayStyle: oe$2(), overlayInnerStyle: oe$2(), overlayClassName: String, openClassName: String, prefixCls: String, mouseEnterDelay: Number, mouseLeaveDelay: Number, getPopupContainer: Function, arrowPointAtCenter: { type: Boolean, default: void 0 }, arrow: { type: [Boolean, Object], default: true }, autoAdjustOverflow: { type: [Boolean, Object], default: void 0 }, destroyTooltipOnHide: { type: Boolean, default: void 0 }, align: oe$2(), builtinPlacements: oe$2(), children: Array, onVisibleChange: Function, "onUpdate:visible": Function, onOpenChange: Function, "onUpdate:open": Function }), ae = { adjustX: 1, adjustY: 1 }, le = { adjustX: 0, adjustY: 0 }, ie = [0, 0];
function se(e2) {
  return "boolean" == typeof e2 ? e2 ? ae : le : a$1(a$1({}, le), e2);
}
const pe = E.map((e2) => `${e2}-inverse`);
function de(e2, t2) {
  const o2 = (function(e3) {
    return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? E.includes(e3) : [...pe, ...E].includes(e3);
  })(t2), r2 = b({ [`${e2}-${t2}`]: t2 && o2 }), n2 = {}, a2 = {};
  return t2 && !o2 && (n2.background = t2, a2["--antd-arrow-background-color"] = t2), { className: r2, overlayStyle: n2, arrowStyle: a2 };
}
function ce(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return e2.map((e3) => `${t2}${e3}`).join(",");
}
function ue(e2, t2) {
  const { componentCls: o2, sizePopupArrow: r2, marginXXS: n2, borderRadiusXS: a2, borderRadiusOuter: l2, boxShadowPopoverArrow: i2 } = e2, { colorBg: s2, showArrowCls: p2, contentRadius: d2 = e2.borderRadiusLG, limitVerticalRadius: c2 } = t2, { dropdownArrowOffsetVertical: u2, dropdownArrowOffset: f2 } = (function(e3) {
    const { sizePopupArrow: t3, contentRadius: o3, borderRadiusOuter: r3, limitVerticalRadius: n3 } = e3, a3 = t3 / 2 - Math.ceil(r3 * (Math.sqrt(2) - 1)), l3 = (o3 > 12 ? o3 + 2 : 12) - a3;
    return { dropdownArrowOffset: l3, dropdownArrowOffsetVertical: n3 ? 8 - a3 : l3 };
  })({ sizePopupArrow: r2, contentRadius: d2, borderRadiusOuter: l2, limitVerticalRadius: c2 }), g2 = r2 / 2 + n2;
  return { [o2]: { [`${o2}-arrow`]: [a$1(a$1({ position: "absolute", zIndex: 1, display: "block" }, M(r2, a2, l2, s2, i2)), { "&:before": { background: s2 } })], [[`&-placement-top ${o2}-arrow`, `&-placement-topLeft ${o2}-arrow`, `&-placement-topRight ${o2}-arrow`].join(",")]: { bottom: 0, transform: "translateY(100%) rotate(180deg)" }, [`&-placement-top ${o2}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(100%) rotate(180deg)" }, [`&-placement-topLeft ${o2}-arrow`]: { left: { _skip_check_: true, value: f2 } }, [`&-placement-topRight ${o2}-arrow`]: { right: { _skip_check_: true, value: f2 } }, [[`&-placement-bottom ${o2}-arrow`, `&-placement-bottomLeft ${o2}-arrow`, `&-placement-bottomRight ${o2}-arrow`].join(",")]: { top: 0, transform: "translateY(-100%)" }, [`&-placement-bottom ${o2}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(-100%)" }, [`&-placement-bottomLeft ${o2}-arrow`]: { left: { _skip_check_: true, value: f2 } }, [`&-placement-bottomRight ${o2}-arrow`]: { right: { _skip_check_: true, value: f2 } }, [[`&-placement-left ${o2}-arrow`, `&-placement-leftTop ${o2}-arrow`, `&-placement-leftBottom ${o2}-arrow`].join(",")]: { right: { _skip_check_: true, value: 0 }, transform: "translateX(100%) rotate(90deg)" }, [`&-placement-left ${o2}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(100%) rotate(90deg)" }, [`&-placement-leftTop ${o2}-arrow`]: { top: u2 }, [`&-placement-leftBottom ${o2}-arrow`]: { bottom: u2 }, [[`&-placement-right ${o2}-arrow`, `&-placement-rightTop ${o2}-arrow`, `&-placement-rightBottom ${o2}-arrow`].join(",")]: { left: { _skip_check_: true, value: 0 }, transform: "translateX(-100%) rotate(-90deg)" }, [`&-placement-right ${o2}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(-100%) rotate(-90deg)" }, [`&-placement-rightTop ${o2}-arrow`]: { top: u2 }, [`&-placement-rightBottom ${o2}-arrow`]: { bottom: u2 }, [ce(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((e3) => e3 + ":not(&-arrow-hidden)"), p2)]: { paddingBottom: g2 }, [ce(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((e3) => e3 + ":not(&-arrow-hidden)"), p2)]: { paddingTop: g2 }, [ce(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((e3) => e3 + ":not(&-arrow-hidden)"), p2)]: { paddingRight: { _skip_check_: true, value: g2 } }, [ce(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((e3) => e3 + ":not(&-arrow-hidden)"), p2)]: { paddingLeft: { _skip_check_: true, value: g2 } } } };
}
const fe = (e2) => {
  const { componentCls: t2, tooltipMaxWidth: o2, tooltipColor: r2, tooltipBg: n2, tooltipBorderRadius: a2, zIndexPopup: l2, controlHeight: i2, boxShadowSecondary: s2, paddingSM: p2, paddingXS: d2, tooltipRadiusOuter: c2 } = e2;
  return [{ [t2]: a$1(a$1(a$1(a$1({}, cn(e2)), { position: "absolute", zIndex: l2, display: "block", "&": [{ width: "max-content" }, { width: "intrinsic" }], maxWidth: o2, visibility: "visible", "&-hidden": { display: "none" }, "--antd-arrow-background-color": n2, [`${t2}-inner`]: { minWidth: i2, minHeight: i2, padding: `${p2 / 2}px ${d2}px`, color: r2, textAlign: "start", textDecoration: "none", wordWrap: "break-word", backgroundColor: n2, borderRadius: a2, boxShadow: s2 }, [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: { [`${t2}-inner`]: { borderRadius: Math.min(a2, 8) } }, [`${t2}-content`]: { position: "relative" } }), U(e2, (e3, o3) => {
    let { darkColor: r3 } = o3;
    return { [`&${t2}-${e3}`]: { [`${t2}-inner`]: { backgroundColor: r3 }, [`${t2}-arrow`]: { "--antd-arrow-background-color": r3 } } };
  })), { "&-rtl": { direction: "rtl" } }) }, ue(yn(e2, { borderRadiusOuter: c2 }), { colorBg: "var(--antd-arrow-background-color)", showArrowCls: "", contentRadius: a2, limitVerticalRadius: true }), { [`${t2}-pure`]: { position: "relative", maxWidth: "none" } }];
}, me = te$1($e$1.defineComponent({ compatConfig: { MODE: 3 }, name: "ATooltip", inheritAttrs: false, props: N(a$1(a$1({}, ne()), { title: cr.any }), { trigger: "hover", align: {}, placement: "top", mouseEnterDelay: 0.1, mouseLeaveDelay: 0.1, arrowPointAtCenter: false, autoAdjustOverflow: true }), slots: Object, setup(e2, t2) {
  let { slots: o2, emit: r2, attrs: n2, expose: a2 } = t2;
  const { prefixCls: i2, getPopupContainer: s2, direction: p2, rootPrefixCls: d2 } = Dn("tooltip", e2), c2 = $e$1.computed(() => {
    var t3;
    return null !== (t3 = e2.open) && void 0 !== t3 ? t3 : e2.visible;
  }), u2 = $e$1.ref(Ni([e2.open, e2.visible])), f2 = $e$1.ref();
  let g2;
  $e$1.watch(c2, (e3) => {
    Z$1.cancel(g2), g2 = Z$1(() => {
      u2.value = !!e3;
    });
  });
  const v2 = () => {
    var t3;
    const r3 = null !== (t3 = e2.title) && void 0 !== t3 ? t3 : o2.title;
    return !r3 && 0 !== r3;
  }, h2 = (e3) => {
    const t3 = v2();
    void 0 === c2.value && (u2.value = !t3 && e3), t3 || (r2("update:visible", e3), r2("visibleChange", e3), r2("update:open", e3), r2("openChange", e3));
  };
  a2({ getPopupDomNode: () => f2.value.getPopupDomNode(), open: u2, forcePopupAlign: () => {
    var e3;
    return null === (e3 = f2.value) || void 0 === e3 ? void 0 : e3.forcePopupAlign();
  } });
  const b2 = $e$1.computed(() => {
    var t3;
    const { builtinPlacements: o3, autoAdjustOverflow: r3, arrow: n3, arrowPointAtCenter: a3 } = e2;
    let l2 = a3;
    return "object" == typeof n3 && (l2 = null !== (t3 = n3.pointAtCenter) && void 0 !== t3 ? t3 : a3), o3 || (function(e3) {
      const { arrowWidth: t4 = 4, horizontalArrowShift: o4 = 16, verticalArrowShift: r4 = 8, autoAdjustOverflow: n4, arrowPointAtCenter: a4 } = e3, l3 = { left: { points: ["cr", "cl"], offset: [-4, 0] }, right: { points: ["cl", "cr"], offset: [4, 0] }, top: { points: ["bc", "tc"], offset: [0, -4] }, bottom: { points: ["tc", "bc"], offset: [0, 4] }, topLeft: { points: ["bl", "tc"], offset: [-(o4 + t4), -4] }, leftTop: { points: ["tr", "cl"], offset: [-4, -(r4 + t4)] }, topRight: { points: ["br", "tc"], offset: [o4 + t4, -4] }, rightTop: { points: ["tl", "cr"], offset: [4, -(r4 + t4)] }, bottomRight: { points: ["tr", "bc"], offset: [o4 + t4, 4] }, rightBottom: { points: ["bl", "cr"], offset: [4, r4 + t4] }, bottomLeft: { points: ["tl", "bc"], offset: [-(o4 + t4), 4] }, leftBottom: { points: ["br", "cl"], offset: [-4, r4 + t4] } };
      return Object.keys(l3).forEach((e4) => {
        l3[e4] = a4 ? a$1(a$1({}, l3[e4]), { overflow: se(n4), targetOffset: ie }) : a$1(a$1({}, Q[e4]), { overflow: se(n4) }), l3[e4].ignoreShake = true;
      }), l3;
    })({ arrowPointAtCenter: l2, autoAdjustOverflow: r3 });
  }), w2 = (e3) => e3 || "" === e3, y2 = (e3) => {
    const t3 = e3.type;
    if ("object" == typeof t3 && e3.props && ((true === t3.__ANT_BUTTON || "button" === t3) && w2(e3.props.disabled) || true === t3.__ANT_SWITCH && (w2(e3.props.disabled) || w2(e3.props.loading)) || true === t3.__ANT_RADIO && w2(e3.props.disabled))) {
      const { picked: t4, omitted: o3 } = ((e4, t5) => {
        const o4 = {}, r4 = a$1({}, e4);
        return t5.forEach((t6) => {
          e4 && t6 in e4 && (o4[t6] = e4[t6], delete r4[t6]);
        }), { picked: o4, omitted: r4 };
      })(W$1(e3), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), r3 = a$1(a$1({ display: "inline-block" }, t4), { cursor: "not-allowed", lineHeight: 1, width: e3.props && e3.props.block ? "100%" : void 0 }), n3 = a$1(a$1({}, o3), { pointerEvents: "none" }), a3 = gi(e3, { style: n3 }, true);
      return $e$1.createVNode("span", { style: r3, class: `${i2.value}-disabled-compatible-wrapper` }, [a3]);
    }
    return e3;
  }, O2 = () => {
    var t3, r3;
    return null !== (t3 = e2.title) && void 0 !== t3 ? t3 : null === (r3 = o2.title) || void 0 === r3 ? void 0 : r3.call(o2);
  }, P2 = (e3, t3) => {
    const o3 = b2.value, r3 = Object.keys(o3).find((e4) => {
      var r4, n3;
      return o3[e4].points[0] === (null === (r4 = t3.points) || void 0 === r4 ? void 0 : r4[0]) && o3[e4].points[1] === (null === (n3 = t3.points) || void 0 === n3 ? void 0 : n3[1]);
    });
    if (r3) {
      const o4 = e3.getBoundingClientRect(), n3 = { top: "50%", left: "50%" };
      r3.indexOf("top") >= 0 || r3.indexOf("Bottom") >= 0 ? n3.top = o4.height - t3.offset[1] + "px" : (r3.indexOf("Top") >= 0 || r3.indexOf("bottom") >= 0) && (n3.top = -t3.offset[1] + "px"), r3.indexOf("left") >= 0 || r3.indexOf("Right") >= 0 ? n3.left = o4.width - t3.offset[0] + "px" : (r3.indexOf("right") >= 0 || r3.indexOf("Left") >= 0) && (n3.left = -t3.offset[0] + "px"), e3.style.transformOrigin = `${n3.left} ${n3.top}`;
    }
  }, T2 = $e$1.computed(() => de(i2.value, e2.color)), I2 = $e$1.computed(() => n2["data-popover-inject"]), [z2, L2] = ((e3, t3) => vn("Tooltip", (e4) => {
    if (false === (null == t3 ? void 0 : t3.value)) return [];
    const { borderRadius: o3, colorTextLightSolid: r3, colorBgDefault: n3, borderRadiusOuter: a3 } = e4, l2 = yn(e4, { tooltipMaxWidth: 250, tooltipColor: r3, tooltipBorderRadius: o3, tooltipBg: n3, tooltipRadiusOuter: a3 > 4 ? 4 : a3 });
    return [fe(l2), q(e4, "zoom-big-fast")];
  }, (e4) => {
    let { zIndexPopupBase: t4, colorBgSpotlight: o3 } = e4;
    return { zIndexPopup: t4 + 70, colorBgDefault: o3 };
  })(e3))(i2, $e$1.computed(() => !I2.value));
  return () => {
    var t3, r3;
    const { openClassName: a3, overlayClassName: g3, overlayStyle: w3, overlayInnerStyle: $2 } = e2;
    let C2 = null !== (r3 = Y$1(null === (t3 = o2.default) || void 0 === t3 ? void 0 : t3.call(o2))) && void 0 !== r3 ? r3 : null;
    C2 = 1 === C2.length ? C2[0] : C2;
    let k2 = u2.value;
    if (void 0 === c2.value && v2() && (k2 = false), !C2) return null;
    const _2 = y2(q$1(C2) && !X$1(C2) ? C2 : $e$1.createVNode("span", null, [C2])), j2 = b({ [a3 || `${i2.value}-open`]: true, [_2.props && _2.props.class]: _2.props && _2.props.class }), S2 = b(g3, { [`${i2.value}-rtl`]: "rtl" === p2.value }, T2.value.className, L2.value), D2 = a$1(a$1({}, T2.value.overlayStyle), $2), I3 = T2.value.arrowStyle, E2 = a$1(a$1(a$1({}, n2), e2), { prefixCls: i2.value, arrow: !!e2.arrow, getPopupContainer: null == s2 ? void 0 : s2.value, builtinPlacements: b2.value, visible: k2, ref: f2, overlayClassName: S2, overlayStyle: a$1(a$1({}, I3), w3), overlayInnerStyle: D2, onVisibleChange: h2, onPopupAlign: P2, transitionName: xi(d2.value, "zoom-big-fast", e2.transitionName) });
    return z2($e$1.createVNode(re, E2, { default: () => [u2.value ? gi(_2, { class: j2 }) : _2], arrowContent: () => $e$1.createVNode("span", { class: `${i2.value}-arrow-content` }, null), overlay: O2 }));
  };
} })), ge = (e2) => {
  const { componentCls: t2, popoverBg: o2, popoverColor: r2, width: n2, fontWeightStrong: a2, popoverPadding: l2, boxShadowSecondary: i2, colorTextHeading: s2, borderRadiusLG: p2, zIndexPopup: d2, marginXS: c2, colorBgElevated: u2 } = e2;
  return [{ [t2]: a$1(a$1({}, cn(e2)), { position: "absolute", top: 0, left: { _skip_check_: true, value: 0 }, zIndex: d2, fontWeight: "normal", whiteSpace: "normal", textAlign: "start", cursor: "auto", userSelect: "text", "--antd-arrow-background-color": u2, "&-rtl": { direction: "rtl" }, "&-hidden": { display: "none" }, [`${t2}-content`]: { position: "relative" }, [`${t2}-inner`]: { backgroundColor: o2, backgroundClip: "padding-box", borderRadius: p2, boxShadow: i2, padding: l2 }, [`${t2}-title`]: { minWidth: n2, marginBottom: c2, color: s2, fontWeight: a2 }, [`${t2}-inner-content`]: { color: r2 } }) }, ue(e2, { colorBg: "var(--antd-arrow-background-color)" }), { [`${t2}-pure`]: { position: "relative", maxWidth: "none", [`${t2}-content`]: { display: "inline-block" } } }];
}, ve = (e2) => {
  const { componentCls: t2 } = e2;
  return { [t2]: E.map((o2) => {
    const r2 = e2[`${o2}-6`];
    return { [`&${t2}-${o2}`]: { "--antd-arrow-background-color": r2, [`${t2}-inner`]: { backgroundColor: r2 }, [`${t2}-arrow`]: { background: "transparent" } } };
  }) };
}, he = (e2) => {
  const { componentCls: t2, lineWidth: o2, lineType: r2, colorSplit: n2, paddingSM: a2, controlHeight: l2, fontSize: i2, lineHeight: s2, padding: p2 } = e2, d2 = l2 - Math.round(i2 * s2), c2 = d2 / 2, u2 = d2 / 2 - o2, f2 = p2;
  return { [t2]: { [`${t2}-inner`]: { padding: 0 }, [`${t2}-title`]: { margin: 0, padding: `${c2}px ${f2}px ${u2}px`, borderBottom: `${o2}px ${r2} ${n2}` }, [`${t2}-inner-content`]: { padding: `${a2}px ${f2}px` } } };
}, be = vn("Popover", (e2) => {
  const { colorBgElevated: t2, colorText: o2, wireframe: r2 } = e2, n2 = yn(e2, { popoverBg: t2, popoverColor: o2, popoverPadding: 12 });
  return [ge(n2), ve(n2), r2 && he(n2), q(n2, "zoom-big")];
}, (e2) => {
  let { zIndexPopupBase: t2 } = e2;
  return { zIndexPopup: t2 + 30, width: 177 };
}), we = te$1($e$1.defineComponent({ compatConfig: { MODE: 3 }, name: "APopover", inheritAttrs: false, props: N(a$1(a$1({}, ne()), { content: ie$1(), title: ie$1() }), a$1(a$1({}, { trigger: "hover", align: {}, placement: "top", mouseEnterDelay: 0.1, mouseLeaveDelay: 0.1, arrowPointAtCenter: false, autoAdjustOverflow: true }), { trigger: "hover", placement: "top", mouseEnterDelay: 0.1, mouseLeaveDelay: 0.1 })), setup(e2, t2) {
  let { expose: o2, slots: r2, attrs: n2 } = t2;
  const a2 = $e$1.ref();
  et(void 0 === e2.visible), o2({ getPopupDomNode: () => {
    var e3, t3;
    return null === (t3 = null === (e3 = a2.value) || void 0 === e3 ? void 0 : e3.getPopupDomNode) || void 0 === t3 ? void 0 : t3.call(e3);
  } });
  const { prefixCls: i2, configProvider: s2 } = Dn("popover", e2), [p2, d2] = be(i2), c2 = $e$1.computed(() => s2.getPrefixCls()), u2 = () => {
    var t3, o3;
    const { title: n3 = Y$1(null === (t3 = r2.title) || void 0 === t3 ? void 0 : t3.call(r2)), content: a3 = Y$1(null === (o3 = r2.content) || void 0 === o3 ? void 0 : o3.call(r2)) } = e2, s3 = !!(Array.isArray(n3) ? n3.length : n3), p3 = !!(Array.isArray(a3) ? a3.length : n3);
    return s3 || p3 ? $e$1.createVNode($e$1.Fragment, null, [s3 && $e$1.createVNode("div", { class: `${i2.value}-title` }, [n3]), $e$1.createVNode("div", { class: `${i2.value}-inner-content` }, [a3])]) : null;
  };
  return () => {
    const t3 = b(e2.overlayClassName, d2.value);
    return p2($e$1.createVNode(me, i(i(i({}, Hn$1(e2, ["title", "content"])), n2), {}, { prefixCls: i2.value, ref: a2, overlayClassName: t3, transitionName: xi(c2.value, "zoom-big", e2.transitionName), "data-popover-inject": true }), { title: u2, default: r2.default }));
  };
} })), ye = {};
const xe = ye.setup;
ye.setup = (e2, t2) => {
  const o2 = $e$1.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/Siderbar.vue"), xe ? xe(e2, t2) : void 0;
};
const $e = Li(ye, [["ssrRender", function(e2, t2, o2, r2) {
  const i2 = we, p2 = Qe, d2 = p;
  t2(`<div${kr.ssrRenderAttrs($e$1.mergeProps({ class: "w-full flex flex-col gap-10" }, r2))}><div class="w-full flex flex-col gap-2"><div class="font-thin text-[16px] text-[#999] leading-none border-b border-dashed pb-2 mb-2"> ABOUT ME </div><div class="w-full flex flex-col gap-2"><div class="w-full h-[220px] bg-[#ccc] rounded-md overflow-hidden"><img class="w-full h-full object-cover"${kr.ssrRenderAttr("src", a)}></div><div class="flex items-center justify-between gap-2"><span class="text-[18px] font-bold text-[#333]">@\u5C0F\u9EC4\u82B1</span><span class="text-[14px] text-[#666]">\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08</span></div><div class="italic text-[#999] text-[14px]"> -- \u4ED6\u4E0D\u8FC7\u662F\u6CDB\u9EC4\u6CA1\u4EBA\u7406\u91C7\u7684\u82B1\u6735\u3002 </div><div class="flex items-center justify-between mt-2">`), t2(kr.ssrRenderComponent(i2, null, { content: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-full flex justify-center" }, [$e$1.createVNode("img", { class: "w-40 object-cover", src: s })])];
    t3(`<div class="w-full flex justify-center"${r3}><img class="w-40 object-cover"${kr.ssrRenderAttr("src", s)}${r3}></div>`);
  }), default: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer" }, [$e$1.createVNode(p2, { class: "text-white", name: "ic:baseline-wechat" })])];
    t3(`<div class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"${r3}>`), t3(kr.ssrRenderComponent(p2, { class: "text-white", name: "ic:baseline-wechat" }, null, o3, r3)), t3("</div>");
  }), _: 1 }, o2)), t2(kr.ssrRenderComponent(i2, null, { content: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-full h-40 bg-[#ccc]" })];
    t3(`<div class="w-full h-40 bg-[#ccc]"${r3}></div>`);
  }), default: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer" }, [$e$1.createVNode(p2, { class: "text-white", name: "fa6-brands:weibo" })])];
    t3(`<div class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"${r3}>`), t3(kr.ssrRenderComponent(p2, { class: "text-white", name: "fa6-brands:weibo" }, null, o3, r3)), t3("</div>");
  }), _: 1 }, o2)), t2(kr.ssrRenderComponent(d2, { to: "https://github.com/Rupiong", target: "_blank" }, { default: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer" }, [$e$1.createVNode(p2, { class: "text-white", name: "akar-icons:github-fill" })])];
    t3(`<div class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"${r3}>`), t3(kr.ssrRenderComponent(p2, { class: "text-white", name: "akar-icons:github-fill" }, null, o3, r3)), t3("</div>");
  }), _: 1 }, o2)), t2(kr.ssrRenderComponent(i2, null, { content: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-full h-40 bg-[#ccc]" })];
    t3(`<div class="w-full h-40 bg-[#ccc]"${r3}></div>`);
  }), default: $e$1.withCtx((e3, t3, o3, r3) => {
    if (!t3) return [$e$1.createVNode("div", { class: "w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer" }, [$e$1.createVNode(p2, { class: "text-white", name: "material-symbols:mail-rounded" })])];
    t3(`<div class="w-10 h-10 bg-[#404040] rounded-full flex items-center justify-center hover:bg-primary cursor-pointer"${r3}>`), t3(kr.ssrRenderComponent(p2, { class: "text-white", name: "material-symbols:mail-rounded" }, null, o3, r3)), t3("</div>");
  }), _: 1 }, o2)), t2('</div></div></div><div class="w-full flex flex-col gap-2"><div class="font-thin text-[16px] text-[#999] leading-none border-b border-dashed pb-2 mb-2"> FEATURED TAGS </div><div class="w-full flex flex-row gap-2 flex-wrap"><div class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"> \u77E5\u4E4E </div><div class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"> \u7B14\u8BB0 </div><div class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"> UX/UI </div><div class="border rounded-full leading-none px-3 py-1 text-[12px] text-[#999]"> \u8BA1\u7B97\u8BA1\u7406\u8BBA </div></div></div></div>');
}]]), Ce = $e$1.defineComponent({ __name: "default", __ssrInlineRender: true, setup(n2) {
  const { $onReachBottom: a2 } = at();
  a2(() => {
  }), Hn();
  const i2 = dt(), u2 = $e$1.ref(null), f2 = $e$1.ref({ isLucency: true, colorClass: "text-white" });
  return E$1(u2, ([{ isIntersecting: e2 }], t2) => {
    f2.value.isLucency = e2, f2.value.colorClass = e2 ? "text-white" : "text-black";
  }, { threshold: 0 }), (e2, n3, a3, p2) => {
    const d2 = U$1, c2 = Q$1, m2 = oe$1, g2 = $e;
    n3(`<div${kr.ssrRenderAttrs($e$1.mergeProps({ class: "w-full h-full relative" }, p2))}><div class="w-full relative">`), n3(kr.ssrRenderComponent(d2, { isLucency: $e$1.unref(f2).isLucency, colorClass: $e$1.unref(f2).colorClass }, null, a3)), n3(kr.ssrRenderComponent(c2, { class: "w-full" }, { default: $e$1.withCtx((t2, o2, r2, n4) => {
      if (!o2) return [$e$1.createVNode("div", { ref_key: "headerBgRef", ref: u2, class: "relative w-full h-[680px] md:h-[480px] bg-[#ccc] flex flex-col justify-center items-center overflow-hidden text-primary" }, [$e$1.createVNode("div", { class: "text-[38px] lg:text-[56px] font-bold z-10" }, $e$1.toDisplayString($e$1.unref(i2).meta.title), 1), $e$1.createVNode("div", { class: "z-10 text-[14px] font-thin" }, " \u300C" + $e$1.toDisplayString($e$1.unref(i2).meta.slogan) + "\u300D ", 1), $e$1.createVNode("img", { class: "w-full h-full absolute object-cover brightness-50", src: $e$1.unref(i2).meta.headerBgUrl }, null, 8, ["src"])], 512), $e$1.createVNode("div", { class: "w-full mt-[-90px] z-10 flex justify-center" }, [$e$1.createVNode(m2, null, { default: $e$1.withCtx(() => [$e$1.createVNode("div", { class: "w-full bg-white lg:rounded-md p-6 lg:p-16" }, [$e$1.renderSlot(e2.$slots, "default")]), $e$1.unref(i2).meta.showSiderBar ? ($e$1.openBlock(), $e$1.createBlock("div", { key: 0, class: "w-[300px] h-fit shrink-0 bg-white rounded-md p-10 sticky top-20 hidden lg:block" }, [$e$1.createVNode(g2)])) : $e$1.createCommentVNode("", true)]), _: 3 })])];
      o2(`<div class="relative w-full h-[680px] md:h-[480px] bg-[#ccc] flex flex-col justify-center items-center overflow-hidden text-primary"${n4}><div class="text-[38px] lg:text-[56px] font-bold z-10"${n4}>${kr.ssrInterpolate($e$1.unref(i2).meta.title)}</div><div class="z-10 text-[14px] font-thin"${n4}> \u300C${kr.ssrInterpolate($e$1.unref(i2).meta.slogan)}\u300D </div><img class="w-full h-full absolute object-cover brightness-50"${kr.ssrRenderAttr("src", $e$1.unref(i2).meta.headerBgUrl)}${n4}></div><div class="w-full mt-[-90px] z-10 flex justify-center"${n4}>`), o2(kr.ssrRenderComponent(m2, null, { default: $e$1.withCtx((t3, o3, r3, n5) => {
        if (!o3) return [$e$1.createVNode("div", { class: "w-full bg-white lg:rounded-md p-6 lg:p-16" }, [$e$1.renderSlot(e2.$slots, "default")]), $e$1.unref(i2).meta.showSiderBar ? ($e$1.openBlock(), $e$1.createBlock("div", { key: 0, class: "w-[300px] h-fit shrink-0 bg-white rounded-md p-10 sticky top-20 hidden lg:block" }, [$e$1.createVNode(g2)])) : $e$1.createCommentVNode("", true)];
        o3(`<div class="w-full bg-white lg:rounded-md p-6 lg:p-16"${n5}>`), kr.ssrRenderSlot(e2.$slots, "default", {}, null, o3, r3, n5), o3("</div>"), $e$1.unref(i2).meta.showSiderBar ? (o3(`<div class="w-[300px] h-fit shrink-0 bg-white rounded-md p-10 sticky top-20 hidden lg:block"${n5}>`), o3(kr.ssrRenderComponent(g2, null, null, r3, n5)), o3("</div>")) : o3("<!---->");
      }), _: 3 }, r2, n4)), o2("</div>");
    }), _: 3 }, a3)), n3("</div></div>");
  };
} }), Oe = Ce.setup;
Ce.setup = (e2, t2) => {
  const o2 = $e$1.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), Oe ? Oe(e2, t2) : void 0;
};

export { Ce as default };
//# sourceMappingURL=default-DqxiNHda.mjs.map
