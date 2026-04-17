import { v as $e, D as ut, E as yt, l as ct, F as gt, w as mt, i as at, G as ze } from './server.mjs';
import { x as parseQuery, l as hasProtocol, f as joinURL, y as withTrailingSlash, z as withoutTrailingSlash } from '../nitro/nitro.mjs';

function f(l2) {
  const d2 = l2.componentName || "NuxtLink";
  function c2(e2) {
    return "string" == typeof e2 && e2.startsWith("#");
  }
  function f2(r2) {
    var _a, _b, _c;
    const n2 = ut(), i2 = ct(), d3 = $e.computed(() => !!$e.unref(r2.target) && "_self" !== $e.unref(r2.target)), f3 = $e.computed(() => {
      const t2 = $e.unref(r2.to) || $e.unref(r2.href) || "";
      return "string" == typeof t2 && hasProtocol(t2, { acceptRelative: true });
    }), p2 = $e.resolveComponent("RouterLink"), m = p2 && "string" != typeof p2 ? p2.useLink : void 0, g = $e.computed(() => {
      if ($e.unref(r2.external)) return true;
      const t2 = $e.unref(r2.to) || $e.unref(r2.href) || "";
      return "object" != typeof t2 && ("" === t2 || f3.value);
    }), y = $e.computed(() => {
      const t2 = $e.unref(r2.to) || $e.unref(r2.href) || "";
      return g.value ? t2 : (function(e2, t3, r3) {
        const a2 = r3 != null ? r3 : l2.trailingSlash;
        if (!e2 || "append" !== a2 && "remove" !== a2) return e2;
        if ("string" == typeof e2) return h(e2, a2);
        const u2 = "path" in e2 && void 0 !== e2.path ? e2.path : t3(e2).path;
        return { ...e2, name: void 0, path: h(u2, a2) };
      })(t2, n2.resolve, $e.unref(r2.trailingSlash));
    }), q = g.value ? void 0 : m == null ? void 0 : m({ ...r2, to: y, viewTransition: $e.unref(r2.viewTransition) }), x = $e.computed(() => {
      var _a2, _b2, _c2;
      const t2 = (_a2 = $e.unref(r2.trailingSlash)) != null ? _a2 : l2.trailingSlash;
      if (!y.value || f3.value || c2(y.value)) return y.value;
      if (g.value) {
        const e2 = "object" == typeof y.value && "path" in y.value ? gt(y.value) : y.value;
        return h("object" == typeof e2 ? n2.resolve(e2).href : e2, t2);
      }
      return "object" == typeof y.value ? (_c2 = (_b2 = n2.resolve(y.value)) == null ? void 0 : _b2.href) != null ? _c2 : null : h(joinURL(i2.app.baseURL, y.value), t2);
    });
    return { to: y, hasTarget: d3, isAbsoluteUrl: f3, isExternal: g, href: x, isActive: (_a = q == null ? void 0 : q.isActive) != null ? _a : $e.computed(() => y.value === n2.currentRoute.value.path), isExactActive: (_b = q == null ? void 0 : q.isExactActive) != null ? _b : $e.computed(() => y.value === n2.currentRoute.value.path), route: (_c = q == null ? void 0 : q.route) != null ? _c : $e.computed(() => n2.resolve(y.value)), async navigate(t2) {
      await mt(x.value, { replace: $e.unref(r2.replace), external: g.value || d3.value });
    } };
  }
  return $e.defineComponent({ name: d2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: f2, setup(a2, { slots: u2 }) {
    const o2 = ut(), { to: s2, href: v2, navigate: d3, isExternal: p2, hasTarget: h2, isAbsoluteUrl: m } = f2(a2);
    $e.shallowRef(false);
    async function g(e2 = at()) {
    }
    return () => {
      var _a;
      if (!p2.value && !h2.value && !c2(s2.value)) {
        const t3 = { ref: void 0, to: s2.value, activeClass: a2.activeClass || l2.activeClass, exactActiveClass: a2.exactActiveClass || l2.exactActiveClass, replace: a2.replace, ariaCurrentValue: a2.ariaCurrentValue, custom: a2.custom };
        return a2.custom || (t3.rel = a2.rel || void 0), $e.h($e.resolveComponent("RouterLink"), t3, u2.default);
      }
      const t2 = a2.target || null, n2 = ((...e2) => e2.find((e3) => void 0 !== e3))(a2.noRel ? "" : a2.rel, l2.externalRelAttribute, m.value || h2.value ? "noopener noreferrer" : "") || null;
      return a2.custom ? u2.default ? u2.default({ href: v2.value, navigate: d3, prefetch: g, get route() {
        if (!v2.value) return;
        const e2 = new URL(v2.value, "http://localhost");
        return { path: e2.pathname, fullPath: e2.pathname, get query() {
          return parseQuery(e2.search);
        }, hash: e2.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: v2.value };
      }, rel: n2, target: t2, isExternal: p2.value || h2.value, isActive: false, isExactActive: false }) : null : $e.h("a", { ref: void 0, href: v2.value || null, rel: n2, target: t2, onClick: async (e2) => {
        if (!p2.value && !h2.value) {
          e2.preventDefault();
          try {
            const e3 = yt(v2.value);
            return await (a2.replace ? o2.replace(e3) : o2.push(e3));
          } finally {
          }
        }
      } }, (_a = u2.default) == null ? void 0 : _a.call(u2));
    };
  } });
}
const p = f(ze);
function h(e2, t2) {
  const r2 = "append" === t2 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e2) && !e2.startsWith("http") ? e2 : r2(e2, true);
}

export { p };
//# sourceMappingURL=nuxt-link-CY5yg3Nc.mjs.map
