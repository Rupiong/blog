import { p } from './nuxt-link-CY5yg3Nc.mjs';
import Qe from './Icon-DHwYHweU.mjs';
import { v as $e, l as ct, s as kr, w as mt, _ as Li, A as Yr, C as Si, e as Wr, t as ei, b as zr, n as qr, a as ni, c as mi, B as gi, z as ii, x as Jr, y as Kr, I as ki } from './server.mjs';
import { v, d, a } from './use-expose-BAq2jfff.mjs';

function C(e2) {
  return !!$e.getCurrentScope() && ($e.onScopeDispose(e2), true);
}
function S(e2) {
  return "function" == typeof e2 ? e2() : $e.unref(e2);
}
"undefined" != typeof WorkerGlobalScope && (WorkerGlobalScope);
const k = (e2) => null != e2, O = Object.prototype.toString, R = () => {
};
function N(e2, t2 = true, n2) {
  $e.getCurrentInstance() ? $e.onMounted(e2, n2) : t2 ? e2() : $e.nextTick(e2);
}
function A(e2) {
  var t2;
  const o2 = S(e2);
  return null != (t2 = null == o2 ? void 0 : o2.$el) ? t2 : o2;
}
const T = void 0;
function L(...e2) {
  let t2, n2, r2, s2;
  if ("string" == typeof e2[0] || Array.isArray(e2[0]) ? ([n2, r2, s2] = e2, t2 = T) : [t2, n2, r2, s2] = e2, !t2) return R;
  Array.isArray(n2) || (n2 = [n2]), Array.isArray(r2) || (r2 = [r2]);
  const a2 = [], l2 = () => {
    a2.forEach((e3) => e3()), a2.length = 0;
  }, i2 = $e.watch(() => [A(t2), S(s2)], ([e3, t3]) => {
    if (l2(), !e3) return;
    const o2 = (s3 = t3, "[object Object]" === O.call(s3) ? { ...t3 } : t3);
    var s3;
    a2.push(...n2.flatMap((t4) => r2.map((n3) => ((e4, t5, o3, n4) => (e4.addEventListener(t5, o3, n4), () => e4.removeEventListener(t5, o3, n4)))(e3, t4, n3, o2))));
  }, { immediate: true, flush: "post" }), c2 = () => {
    i2(), l2();
  };
  return C(c2), c2;
}
function B(e2) {
  const t2 = (function() {
    const e3 = $e.ref(false), t3 = $e.getCurrentInstance();
    return t3 && $e.onMounted(() => {
      e3.value = true;
    }, t3), e3;
  })();
  return $e.computed(() => (t2.value, Boolean(e2())));
}
function E(e2, t2, n2 = {}) {
  const { root: r2, rootMargin: s2 = "0px", threshold: a2 = 0.1, window: l2 = T, immediate: i2 = true } = n2, c2 = B(() => l2 && "IntersectionObserver" in l2), u2 = $e.computed(() => {
    const t3 = S(e2);
    return (Array.isArray(t3) ? t3 : [t3]).map(A).filter(k);
  });
  let d2 = R;
  const v2 = $e.ref(i2), f2 = c2.value ? $e.watch(() => [u2.value, A(r2), v2.value], ([e3, o2]) => {
    if (d2(), !v2.value) return;
    if (!e3.length) return;
    const n3 = new IntersectionObserver(t2, { root: A(o2), rootMargin: s2, threshold: a2 });
    e3.forEach((e4) => e4 && n3.observe(e4)), d2 = () => {
      n3.disconnect(), d2 = R;
    };
  }, { immediate: i2, flush: "post" }) : R, p2 = () => {
    d2(), f2(), v2.value = false;
  };
  return C(p2), { isSupported: c2, isActive: v2, pause() {
    d2(), v2.value = false;
  }, resume() {
    v2.value = true;
  }, stop: p2 };
}
function V(e2 = {}) {
  const { window: t2 = T, initialWidth: n2 = Number.POSITIVE_INFINITY, initialHeight: r2 = Number.POSITIVE_INFINITY, listenOrientation: s2 = true, includeScrollbar: a2 = true } = e2, l2 = $e.ref(n2), i2 = $e.ref(r2), c2 = () => {
    t2 && (a2 ? (l2.value = t2.innerWidth, i2.value = t2.innerHeight) : (l2.value = t2.document.documentElement.clientWidth, i2.value = t2.document.documentElement.clientHeight));
  };
  if (c2(), N(c2), L("resize", c2, { passive: true }), s2) {
    const e3 = (function(e4, t3 = {}) {
      const { window: n3 = T } = t3, r3 = B(() => n3 && "matchMedia" in n3 && "function" == typeof n3.matchMedia);
      let s3;
      const a3 = $e.ref(false), l3 = (e5) => {
        a3.value = e5.matches;
      }, i3 = () => {
        s3 && ("removeEventListener" in s3 ? s3.removeEventListener("change", l3) : s3.removeListener(l3));
      }, c3 = $e.watchEffect(() => {
        r3.value && (i3(), s3 = n3.matchMedia(S(e4)), "addEventListener" in s3 ? s3.addEventListener("change", l3) : s3.addListener(l3), a3.value = s3.matches);
      });
      return C(() => {
        c3(), i3(), s3 = void 0;
      }), a3;
    })("(orientation: portrait)");
    $e.watch(e3, () => c2());
  }
  return { width: l2, height: i2 };
}
a();
const z = { show: Boolean, zIndex: qr, overlay: ei, duration: qr, teleport: [String, Object], lockScroll: ei, lazyRender: ei, beforeClose: Function, overlayProps: Object, overlayStyle: Object, overlayClass: zr, transitionAppear: Boolean, closeOnClickOverlay: ei };
let P = 0;
const $ = "van-overflow-hidden";
function _(e2, t2) {
  const n2 = (function() {
    const e3 = $e.ref(0), t3 = $e.ref(0), n3 = $e.ref(0), r3 = $e.ref(0), s2 = $e.ref(0), a2 = $e.ref(0), l2 = $e.ref(""), i2 = $e.ref(true), c2 = () => {
      n3.value = 0, r3.value = 0, s2.value = 0, a2.value = 0, l2.value = "", i2.value = true;
    };
    return { move: (o2) => {
      const c3 = o2.touches[0];
      var u2, d2;
      n3.value = (c3.clientX < 0 ? 0 : c3.clientX) - e3.value, r3.value = c3.clientY - t3.value, s2.value = Math.abs(n3.value), a2.value = Math.abs(r3.value), (!l2.value || s2.value < 10 && a2.value < 10) && (l2.value = (u2 = s2.value) > (d2 = a2.value) ? "horizontal" : d2 > u2 ? "vertical" : ""), i2.value && (s2.value > 5 || a2.value > 5) && (i2.value = false);
    }, start: (o2) => {
      c2(), e3.value = o2.touches[0].clientX, t3.value = o2.touches[0].clientY;
    }, reset: c2, startX: e3, startY: t3, deltaX: n3, deltaY: r3, offsetX: s2, offsetY: a2, direction: l2, isVertical: () => "vertical" === l2.value, isHorizontal: () => "horizontal" === l2.value, isTap: i2 };
  })(), r2 = (t3) => {
    n2.move(t3);
    const o2 = n2.deltaY.value > 0 ? "10" : "01", r3 = d(t3.target, e2.value), { scrollHeight: s2, offsetHeight: a2, scrollTop: l2 } = r3;
    let i2 = "11";
    0 === l2 ? i2 = a2 >= s2 ? "00" : "01" : l2 + a2 >= s2 && (i2 = "10"), "11" === i2 || !n2.isVertical() || parseInt(i2, 2) & parseInt(o2, 2) || (function(e3) {
      ("boolean" != typeof e3.cancelable || e3.cancelable) && e3.preventDefault(), ((e4) => {
        e4.stopPropagation();
      })(e3);
    })(t3);
  };
  $e.watch(t2, (e3) => {
    e3 ? ((void 0).addEventListener("touchstart", n2.start), (void 0).addEventListener("touchmove", r2, { passive: false }), P || (void 0).body.classList.add($), P++) : P && ((void 0).removeEventListener("touchstart", n2.start), (void 0).removeEventListener("touchmove", r2), P--, P || (void 0).body.classList.remove($));
  });
}
function j(e2) {
  const t2 = $e.ref(false);
  return $e.watch(e2, (e3) => {
    e3 && (t2.value = e3);
  }, { immediate: true }), (e3) => () => t2.value ? e3() : null;
}
const D = /* @__PURE__ */ Symbol(), M = () => {
  var e2;
  const { scopeId: t2 } = (null == (e2 = $e.getCurrentInstance()) ? void 0 : e2.vnode) || {};
  return t2 ? { [t2]: "" } : null;
}, [H, Y] = mi("overlay"), F = { show: Boolean, zIndex: qr, duration: qr, className: zr, lockScroll: ei, lazyRender: ei, customStyle: Object, teleport: [String, Object] };
const X = gi($e.defineComponent({ name: H, inheritAttrs: false, props: F, setup(e2, { attrs: t2, slots: n2 }) {
  const r2 = $e.ref(), s2 = j(() => e2.show || !e2.lazyRender)(() => {
    var s3;
    const a2 = Wr(ii(e2.zIndex), e2.customStyle);
    return Yr(e2.duration) && (a2.animationDuration = `${e2.duration}s`), $e.withDirectives($e.createVNode("div", $e.mergeProps({ ref: r2, style: a2, class: [Y(), e2.className] }, t2), [null == (s3 = n2.default) ? void 0 : s3.call(n2)]), [[$e.vShow, e2.show]]);
  });
  return () => {
    const t3 = $e.createVNode($e.Transition, { name: "van-fade", appear: true }, { default: s2 });
    return e2.teleport ? $e.createVNode($e.Teleport, { to: e2.teleport }, { default: () => [t3] }) : t3;
  };
} })), W = Wr({}, z, { round: Boolean, position: ni("center"), closeIcon: ni("cross"), closeable: Boolean, transition: String, iconPrefix: String, closeOnPopstate: Boolean, closeIconPosition: ni("top-right"), destroyOnClose: Boolean, safeAreaInsetTop: Boolean, safeAreaInsetBottom: Boolean }), [G, q] = mi("popup");
var K = $e.defineComponent({ name: G, inheritAttrs: false, props: W, emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"], setup(e2, { emit: t2, attrs: s2, slots: a2 }) {
  let l2;
  const i2 = $e.ref(), u2 = $e.ref(), v2 = j(() => e2.show || !e2.lazyRender), f2 = $e.computed(() => {
    const t3 = { zIndex: i2.value };
    if (Yr(e2.duration)) {
      t3["center" === e2.position ? "animationDuration" : "transitionDuration"] = `${e2.duration}s`;
    }
    return t3;
  }), h2 = () => {
    l2 && (function(e3, { args: t3 = [], done: o2, canceled: s3, error: a3 }) {
      if (e3) {
        const l3 = e3.apply(null, t3);
        Jr(l3) ? l3.then((e4) => {
          e4 ? o2() : s3 && s3();
        }).catch(a3 || Kr) : l3 ? o2() : s3 && s3();
      } else o2();
    })(e2.beforeClose, { done() {
      l2 = false, t2("close"), t2("update:show", false);
    } });
  }, x2 = (o2) => {
    t2("clickOverlay", o2), e2.closeOnClickOverlay && h2();
  }, y2 = () => {
    if (e2.overlay) {
      const t3 = Wr({ show: e2.show, class: e2.overlayClass, zIndex: i2.value, duration: e2.duration, customStyle: e2.overlayStyle, role: e2.closeOnClickOverlay ? "button" : void 0, tabindex: e2.closeOnClickOverlay ? 0 : void 0 }, e2.overlayProps);
      return $e.createVNode(X, $e.mergeProps(t3, M(), { onClick: x2 }), { default: a2["overlay-content"] });
    }
  }, w2 = (e3) => {
    t2("clickCloseIcon", e3), h2();
  }, b2 = () => {
    if (e2.closeable) return $e.createVNode(ki, { role: "button", tabindex: 0, name: e2.closeIcon, class: [q("close-icon", e2.closeIconPosition), "van-haptics-feedback"], classPrefix: e2.iconPrefix, onClick: w2 }, null);
  };
  let g2;
  const C2 = () => {
    g2 && clearTimeout(g2), g2 = setTimeout(() => {
      t2("opened");
    });
  }, S2 = () => t2("closed"), k2 = (e3) => t2("keydown", e3), O2 = v2(() => {
    var t3;
    const { destroyOnClose: n2, round: r2, position: l3, safeAreaInsetTop: i3, safeAreaInsetBottom: c2, show: d2 } = e2;
    if (d2 || !n2) return $e.withDirectives($e.createVNode("div", $e.mergeProps({ ref: u2, style: f2.value, role: "dialog", tabindex: 0, class: [q({ round: r2, [l3]: l3 }), { "van-safe-area-top": i3, "van-safe-area-bottom": c2 }], onKeydown: k2 }, s2, M()), [null == (t3 = a2.default) ? void 0 : t3.call(a2), b2()]), [[$e.vShow, d2]]);
  }), R2 = () => {
    const { position: t3, transition: n2, transitionAppear: r2 } = e2, s3 = "center" === t3 ? "van-fade" : `van-popup-slide-${t3}`;
    return $e.createVNode($e.Transition, { name: n2 || s3, appear: r2, onAfterEnter: C2, onAfterLeave: S2 }, { default: O2 });
  };
  return $e.watch(() => e2.show, (n2) => {
    n2 && !l2 && (l2 || (l2 = true, i2.value = void 0 !== e2.zIndex ? +e2.zIndex : Si(), t2("open")), 0 === s2.tabindex && $e.nextTick(() => {
      var e3;
      null == (e3 = u2.value) || e3.focus();
    })), !n2 && l2 && (l2 = false, t2("close"));
  }), v({ popupRef: u2 }), _(u2, () => e2.show && e2.lockScroll), $e.provide(D, () => e2.show), () => e2.teleport ? $e.createVNode($e.Teleport, { to: e2.teleport }, { default: () => [y2(), R2()] }) : $e.createVNode($e.Fragment, null, [y2(), R2()]);
} });
const U = $e.defineComponent({ __name: "Header", __ssrInlineRender: true, props: { isFixed: { type: Boolean, default: true }, isLucency: { type: Boolean, default: true }, colorClass: { type: String, default: "text-white" } }, setup(n2) {
  const r2 = ct(), s2 = n2, a2 = $e.ref([{ name: "\u5173\u4E8E\u6211", url: "/about.html" }, { name: "\u7559\u8A00", url: "/message" }, { name: "\u8D5E\u52A9", url: "/sponsor.html" }]), l2 = $e.ref(false);
  return (n3, i2, c2, u2) => {
    const d2 = p, v2 = Qe, f2 = K;
    i2(`<!--[--><div class="${kr.ssrRenderClass(["top-0 z-20 w-full flex items-center justify-between py-4 px-6 border-b transition ease-in-out duration-300", s2.isFixed ? "fixed" : "sticky", s2.isLucency ? "bg-white/0 border-white/5" : "bg-white/70 border-[#f1f1f1] shadow-sm shadow-[#f5f5f5]    backdrop-blur-sm", s2.colorClass])}"><div class="font-bold text-[18px] hover:text-primary">`), i2(kr.ssrRenderComponent(d2, { to: "/" }, { default: $e.withCtx((e2, t2, n4, s3) => {
      var _a, _b, _c, _d;
      if (!t2) return [$e.createTextVNode($e.toDisplayString((_b = (_a = $e.unref(r2)) == null ? void 0 : _a.public) == null ? void 0 : _b.siteTitle), 1)];
      t2(`${kr.ssrInterpolate((_d = (_c = $e.unref(r2)) == null ? void 0 : _c.public) == null ? void 0 : _d.siteTitle)}`);
    }), _: 1 }, c2)), i2('</div><div class="hidden sm:flex items-center mr-4"><div class="flex items-center gap-4 text-[14px]"><!--[-->'), kr.ssrRenderList($e.unref(a2), (e2, t2) => {
      i2("<div>"), i2(kr.ssrRenderComponent(d2, { to: e2.url }, { default: $e.withCtx((t3, n4, r3, s3) => {
        if (!n4) return [$e.createTextVNode($e.toDisplayString(e2.name), 1)];
        n4(`${kr.ssrInterpolate(e2.name)}`);
      }), _: 2 }, c2)), i2("</div>");
    }), i2('<!--]--></div></div><div class="block sm:hidden">'), i2(kr.ssrRenderComponent(v2, { name: "material-symbols:dehaze-rounded" }, null, c2)), i2("</div></div>"), i2(kr.ssrRenderComponent(f2, { show: $e.unref(l2), "onUpdate:show": (e2) => $e.isRef(l2) ? l2.value = e2 : null, closeable: "", position: "right", style: { width: "70%", height: "100%" } }, { default: $e.withCtx((e2, t2, n4, r3) => {
      if (!t2) return [$e.createVNode("div", { class: "w-full h-full p-6 pt-14 flex flex-col gap-6" }, [($e.openBlock(true), $e.createBlock($e.Fragment, null, $e.renderList($e.unref(a2), (e3, t3) => ($e.openBlock(), $e.createBlock("div", { class: "w-full", key: t3, onClick: (t4) => (async function(e4) {
        await mt(e4.url), l2.value = false;
      })(e3) }, [$e.createVNode("div", { class: "w-full flex items-center justify-between" }, [$e.createVNode("div", null, $e.toDisplayString(e3.name), 1), $e.createVNode(v2, { name: "ep:arrow-right" })])], 8, ["onClick"]))), 128))])];
      t2(`<div class="w-full h-full p-6 pt-14 flex flex-col gap-6"${r3}><!--[-->`), kr.ssrRenderList($e.unref(a2), (e3, o2) => {
        t2(`<div class="w-full"${r3}><div class="w-full flex items-center justify-between"${r3}><div${r3}>${kr.ssrInterpolate(e3.name)}</div>`), t2(kr.ssrRenderComponent(v2, { name: "ep:arrow-right" }, null, n4, r3)), t2("</div></div>");
      }), t2("<!--]--></div>");
    }), _: 1 }, c2)), i2("<!--]-->");
  };
} }), J = U.setup;
U.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Header.vue"), J ? J(e2, t2) : void 0;
};
const Q = $e.defineComponent({ __name: "Content", __ssrInlineRender: true, setup: (e2) => (V(), (e3, t2, n2, r2) => {
  t2(`<div${kr.ssrRenderAttrs($e.mergeProps({ ref: "contentEl", class: "w-full flex-1 flex flex-col items-center gap-6" }, r2))}>`), kr.ssrRenderSlot(e3.$slots, "default", {}, null, t2, n2), t2("</div>");
}) }), Z = Q.setup;
Q.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/Content.vue"), Z ? Z(e2, t2) : void 0;
};
const ee = {};
const te = ee.setup;
ee.setup = (e2, t2) => {
  const n2 = $e.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/ContentInner.vue"), te ? te(e2, t2) : void 0;
};
const oe = Li(ee, [["ssrRender", function(e2, t2, n2, r2) {
  t2(`<div${kr.ssrRenderAttrs($e.mergeProps({ class: "max-w-[1080px] mx-auto flex-1 md:w-[1080px] flex gap-4" }, r2))}>`), kr.ssrRenderSlot(e2.$slots, "default", {}, null, t2, n2), t2("</div>");
}]]);

export { E, Q, U, oe as o };
//# sourceMappingURL=ContentInner-Bc3XF6z4.mjs.map
