import { v as $e, e as Vr } from './server.mjs';

function t(n2) {
  const t2 = $e.inject(n2, null);
  if (t2) {
    const n3 = $e.getCurrentInstance(), { link: r2, unlink: i2, internalChildren: o2 } = t2;
    r2(n3);
    return { parent: t2, index: $e.computed(() => o2.indexOf(n3)) };
  }
  return { parent: null, index: $e.ref(-1) };
}
var r, i, o = (e2, n2) => {
  const t2 = e2.indexOf(n2);
  return -1 === t2 ? e2.findIndex((e3) => void 0 !== n2.key && null !== n2.key && e3.type === n2.type && e3.key === n2.key) : t2;
};
function c(n2, t2, r2) {
  const i2 = (function(n3) {
    const t3 = [], r3 = (n4) => {
      Array.isArray(n4) && n4.forEach((n5) => {
        var i3;
        $e.isVNode(n5) && (t3.push(n5), (null == (i3 = n5.component) ? void 0 : i3.subTree) && (t3.push(n5.component.subTree), r3(n5.component.subTree.children)), n5.children && r3(n5.children));
      });
    };
    return r3(n3), t3;
  })(n2.subTree.children);
  r2.sort((e2, n3) => o(i2, e2.vnode) - o(i2, n3.vnode));
  const c2 = r2.map((e2) => e2.proxy);
  t2.sort((e2, n3) => c2.indexOf(e2) - c2.indexOf(n3));
}
function u(n2) {
  const t2 = $e.reactive([]), r2 = $e.reactive([]), i2 = $e.getCurrentInstance();
  return { children: t2, linkChildren: (o2) => {
    $e.provide(n2, Object.assign({ link: (e2) => {
      e2.proxy && (r2.push(e2), t2.push(e2.proxy), c(i2, t2, r2));
    }, unlink: (e2) => {
      const n3 = r2.indexOf(e2);
      t2.splice(n3, 1), r2.splice(n3, 1);
    }, children: t2, internalChildren: r2 }, o2));
  } };
}
function a() {
  return r || (r = $e.ref(0), i = $e.ref(0)), { width: r, height: i };
}
var s = /scroll|auto|overlay/i;
function l(e2) {
  return "HTML" !== e2.tagName && "BODY" !== e2.tagName && 1 === e2.nodeType;
}
function d(e2, n2 = void 0) {
  let t2 = e2;
  for (; t2 && t2 !== n2 && l(t2); ) {
    const { overflowY: e3 } = (void 0).getComputedStyle(t2);
    if (s.test(e3)) return t2;
    t2 = t2.parentNode;
  }
  return n2;
}
var f = /* @__PURE__ */ Symbol("van-field");
function p(n2) {
  const t2 = $e.inject(f, null);
  t2 && !t2.customValue.value && (t2.customValue.value = n2, $e.watch(n2, () => {
    t2.resetValidation(), t2.validateWithTrigger("onChange");
  }));
}
function v(t2) {
  const r2 = $e.getCurrentInstance();
  r2 && Vr(r2.proxy, t2);
}

export { a, d, p, t, u, v };
//# sourceMappingURL=use-expose-BAq2jfff.mjs.map
