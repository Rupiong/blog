import { v as $e, i as at, j as qe, k as St, o as mr, l as ct } from './server.mjs';
import { debounce } from 'perfect-debounce';

function i(...n2) {
  var _a, _b, _c, _d, _e, _f, _g;
  const o2 = "string" == typeof n2[n2.length - 1] ? n2.pop() : void 0;
  (function(e2, t2) {
    if ("string" == typeof e2) return false;
    if ("object" == typeof e2 && null !== e2) return false;
    if ("function" == typeof e2 && "function" == typeof t2) return false;
    return true;
  })(n2[0], n2[1]) && n2.unshift(o2);
  let [i2, f2, y2 = {}] = n2;
  const p2 = $e.computed(() => $e.toValue(i2));
  if ("string" != typeof p2.value) throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if ("function" != typeof f2) throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const b2 = at();
  function m2() {
    var _a2;
    const t2 = { cause: "initial", dedupe: y2.dedupe };
    return ((_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2._init) || (t2.cachedData = y2.getCachedData(p2.value, b2, { cause: "initial" }), b2._asyncData[p2.value] = (function(t3, n3, o3, i3, c2) {
      var _a3, _b2;
      (_b2 = (_a3 = t3.payload._errors)[n3]) != null ? _b2 : _a3[n3] = qe.errorValue;
      const l2 = i3.getCachedData !== d, f3 = o3, y3 = i3.deep ? $e.ref : $e.shallowRef, p3 = null != c2, b3 = t3.hook("app:data:refresh", async (e2) => {
        e2 && !e2.includes(n3) || await m3.execute({ cause: "refresh:hook" });
      }), m3 = { data: y3(p3 ? c2 : i3.default()), pending: $e.shallowRef(!p3), error: $e.toRef(t3.payload._errors, n3), status: $e.shallowRef("idle"), execute: (...o4) => {
        var _a4, _b3;
        const [s2, c3] = o4, u2 = s2 && void 0 === c3 && "object" == typeof s2 ? s2 : {};
        if (t3._asyncDataPromises[n3] && ("defer" === (l3 = (_a4 = u2.dedupe) != null ? _a4 : i3.dedupe) || false === l3)) return t3._asyncDataPromises[n3];
        var l3;
        if ("initial" === u2.cause || t3.isHydrating) {
          const e2 = "cachedData" in u2 ? u2.cachedData : i3.getCachedData(n3, t3, { cause: (_b3 = u2.cause) != null ? _b3 : "refresh:manual" });
          if (null != e2) return t3.payload.data[n3] = m3.data.value = e2, m3.error.value = qe.errorValue, m3.status.value = "success", Promise.resolve(e2);
        }
        m3.pending.value = true, m3._abortController && m3._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError")), m3._abortController = new AbortController(), m3.status.value = "pending";
        const d2 = new AbortController(), y4 = new Promise((e2, a2) => {
          var _a5, _b4;
          try {
            const r2 = (_a5 = u2.timeout) != null ? _a5 : i3.timeout, n4 = (function(e3, t4, a3) {
              var _a6, _b5, _c3;
              const r3 = e3.filter((e4) => !!e4);
              if ("number" == typeof a3 && a3 >= 0) {
                const e4 = (_a6 = AbortSignal.timeout) == null ? void 0 : _a6.call(AbortSignal, a3);
                e4 && r3.push(e4);
              }
              if (AbortSignal.any) return AbortSignal.any(r3);
              const n5 = new AbortController();
              for (const s3 of r3) if (s3.aborted) {
                const e4 = (_b5 = s3.reason) != null ? _b5 : new DOMException("Aborted", "AbortError");
                try {
                  n5.abort(e4);
                } catch {
                  n5.abort();
                }
                return n5.signal;
              }
              const o5 = () => {
                var _a7;
                const e4 = r3.find((e5) => e5.aborted), t5 = (_a7 = e4 == null ? void 0 : e4.reason) != null ? _a7 : new DOMException("Aborted", "AbortError");
                try {
                  n5.abort(t5);
                } catch {
                  n5.abort();
                }
              };
              for (const s3 of r3) (_c3 = s3.addEventListener) == null ? void 0 : _c3.call(s3, "abort", o5, { once: true, signal: t4 });
              return n5.signal;
            })([(_b4 = m3._abortController) == null ? void 0 : _b4.signal, u2 == null ? void 0 : u2.signal], d2.signal, r2);
            if (n4.aborted) {
              const e3 = n4.reason;
              return void a2(e3 instanceof Error ? e3 : new DOMException(String(e3 != null ? e3 : "Aborted"), "AbortError"));
            }
            return n4.addEventListener("abort", () => {
              const e3 = n4.reason;
              a2(e3 instanceof Error ? e3 : new DOMException(String(e3 != null ? e3 : "Aborted"), "AbortError"));
            }, { once: true, signal: d2.signal }), Promise.resolve(f3(t3, { signal: n4 })).then(e2, a2);
          } catch (r2) {
            a2(r2);
          }
        }).then(async (e2) => {
          let r2 = e2;
          i3.transform && (r2 = await i3.transform(e2)), i3.pick && (r2 = (function(e3, t4) {
            const a2 = {};
            for (const r3 of t4) a2[r3] = e3[r3];
            return a2;
          })(r2, i3.pick)), t3.payload.data[n3] = r2, m3.data.value = r2, m3.error.value = qe.errorValue, m3.status.value = "success";
        }).catch((a2) => {
          var _a5;
          return t3._asyncDataPromises[n3] && t3._asyncDataPromises[n3] !== y4 || ((_a5 = m3._abortController) == null ? void 0 : _a5.signal.aborted) ? t3._asyncDataPromises[n3] : "undefined" != typeof DOMException && a2 instanceof DOMException && "AbortError" === a2.name ? (m3.status.value = "idle", t3._asyncDataPromises[n3]) : (m3.error.value = St(a2), m3.data.value = $e.unref(i3.default()), void (m3.status.value = "error"));
        }).finally(() => {
          m3.pending.value = false, d2.abort(), delete t3._asyncDataPromises[n3];
        });
        return t3._asyncDataPromises[n3] = y4, t3._asyncDataPromises[n3];
      }, _execute: debounce((...e2) => m3.execute(...e2), 0, { leading: true }), _default: i3.default, _deps: 0, _init: true, _hash: void 0, _off: () => {
        var _a4;
        b3(), ((_a4 = t3._asyncData[n3]) == null ? void 0 : _a4._init) && (t3._asyncData[n3]._init = false), l2 || $e.nextTick(() => {
          var _a5;
          ((_a5 = t3._asyncData[n3]) == null ? void 0 : _a5._init) || (u(t3, n3), m3.execute = () => Promise.resolve(), m3.data.value = qe.value);
        });
      } };
      return m3;
    })(b2, p2.value, f2, y2, t2.cachedData)), () => b2._asyncData[p2.value].execute(t2);
  }
  (_a = y2.server) != null ? _a : y2.server = true, (_b = y2.default) != null ? _b : y2.default = l, (_c = y2.getCachedData) != null ? _c : y2.getCachedData = d, (_d = y2.lazy) != null ? _d : y2.lazy = false, (_e = y2.immediate) != null ? _e : y2.immediate = true, (_f = y2.deep) != null ? _f : y2.deep = qe.deep, (_g = y2.dedupe) != null ? _g : y2.dedupe = "cancel", y2._functionName, b2._asyncData[p2.value];
  const h2 = m2();
  b2._asyncData[p2.value]._deps++;
  if (false !== y2.server && b2.payload.serverRendered && y2.immediate) {
    const t2 = h2();
    $e.getCurrentInstance() ? $e.onServerPrefetch(() => t2) : b2.hook("app:created", async () => {
      await t2;
    });
  }
  const v2 = { data: c(() => {
    var _a2;
    return (_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2.data;
  }), pending: c(() => {
    var _a2;
    return (_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2.pending;
  }), status: c(() => {
    var _a2;
    return (_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2.status;
  }), error: c(() => {
    var _a2;
    return (_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2.error;
  }), refresh: (...e2) => {
    var _a2;
    if (!((_a2 = b2._asyncData[p2.value]) == null ? void 0 : _a2._init)) {
      return m2()();
    }
    return b2._asyncData[p2.value].execute(...e2);
  }, execute: (...e2) => v2.refresh(...e2), clear: () => {
    const e2 = b2._asyncData[p2.value];
    if (e2 == null ? void 0 : e2._abortController) try {
      e2._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
    } finally {
      e2._abortController = void 0;
    }
    u(b2, p2.value);
  } }, _ = Promise.resolve(b2._asyncDataPromises[p2.value]).then(() => v2);
  return Object.assign(_, v2), Object.defineProperties(_, { then: { enumerable: true, value: _.then.bind(_) }, catch: { enumerable: true, value: _.catch.bind(_) }, finally: { enumerable: true, value: _.finally.bind(_) } }), _;
}
function c(t2) {
  return $e.computed({ get: () => {
    var _a;
    return (_a = t2()) == null ? void 0 : _a.value;
  }, set(e2) {
    const a2 = t2();
    a2 && (a2.value = e2);
  } });
}
function u(e2, t2) {
  t2 in e2.payload.data && (e2.payload.data[t2] = void 0), t2 in e2.payload._errors && (e2.payload._errors[t2] = qe.errorValue), e2._asyncData[t2] && (e2._asyncData[t2].data.value = void 0, e2._asyncData[t2].error.value = qe.errorValue, e2._asyncData[t2].pending.value = false, e2._asyncData[t2].status.value = "idle"), t2 in e2._asyncDataPromises && (e2._asyncDataPromises[t2] = void 0);
}
const l = () => qe.value, d = (e2, t2, a2) => t2.isHydrating ? t2.payload.data[e2] : "refresh:manual" !== a2.cause && "refresh:hook" !== a2.cause ? t2.static.data[e2] : void 0;
const f = "__apiFetchClient";
function y() {
  const e2 = at(), a2 = e2[f];
  if (a2) return a2;
  const r2 = ct(), o2 = (r2.public.apiUrl || "/basic-api").replace(/\/$/, "") || "/basic-api";
  const s2 = $fetch.create({ baseURL: o2, timeout: 3e4 });
  async function i2(e3, t2) {
    try {
      return await s2(e3, t2);
    } catch (a3) {
      if (a3 && "object" == typeof a3 && "data" in a3) {
        const e4 = a3.data;
        if (e4 && "object" == typeof e4 && null !== e4 && "message" in e4) {
          const t3 = e4.message;
          if ("string" == typeof t3 && t3) throw new Error(t3);
        }
      }
      throw a3;
    }
  }
  return e2[f] = i2, i2;
}
function p(e2) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!e2 || "object" != typeof e2) return { id: "", title: "" };
  const t2 = e2;
  return { id: t2.id, title: String((_a = t2.title) != null ? _a : ""), summary: (_c = (_b = t2.summary) != null ? _b : t2.description) != null ? _c : t2.excerpt, createdAt: (_e = (_d = t2.createdAt) != null ? _d : t2.created_at) != null ? _e : t2.createTime, updatedAt: (_f = t2.updatedAt) != null ? _f : t2.updated_at, author: (_h = (_g = t2.author) != null ? _g : t2.authorName) != null ? _h : t2.author_name };
}
function b(e2) {
  if (null == e2 || "object" != typeof e2) return e2;
  const t2 = e2;
  return "data" in t2 && null != t2.data && !("id" in t2) ? t2.data : e2;
}
async function m(e2) {
  const t2 = y();
  return (function(e3) {
    var _a, _b, _c, _d, _e, _f, _g;
    const t3 = b(e3);
    if (null == t3) return { list: [], total: 0 };
    if (Array.isArray(t3)) return { list: t3.map(p), total: t3.length };
    if ("object" == typeof t3) {
      const e4 = t3, a2 = (_d = (_c = (_b = (_a = e4.items) != null ? _a : e4.list) != null ? _b : e4.records) != null ? _c : e4.rows) != null ? _d : Array.isArray(e4.data) ? e4.data : void 0, r2 = Array.isArray(a2) ? a2 : [], n2 = Number((_g = (_f = (_e = e4.total) != null ? _e : e4.totalCount) != null ? _f : e4.count) != null ? _g : r2.length) || r2.length;
      return { list: r2.map(p), total: n2 };
    }
    return { list: [], total: 0 };
  })(await t2("/public/articles", { query: e2 != null ? e2 : {} }));
}
async function h(e2) {
  const t2 = y();
  return (function(e3) {
    var _a, _b, _c, _d, _e;
    const t3 = b(e3), a2 = p(t3);
    if (!t3 || "object" != typeof t3) return a2;
    const r2 = t3, n2 = r2.tags;
    return { ...a2, content: (_c = (_b = (_a = r2.content) != null ? _a : r2.body) != null ? _b : r2.html) != null ? _c : r2.markdown, tags: Array.isArray(n2) ? n2.map((e4) => String(e4)) : void 0, author: (_e = (_d = r2.author) != null ? _d : r2.authorName) != null ? _e : r2.author_name };
  })(await t2(`/public/articles/${e2}`));
}
function v() {
  return mr;
}

export { h, i, m, v };
//# sourceMappingURL=dayjs-B33OFvKA.mjs.map
