import { v as $e$1, l as ot, E as kn, s as Pr } from './server.mjs';
import { s, c as c$1 } from './index-DLMHE0JN.mjs';
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

const c = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), a = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), l = Object.freeze({ ...c, ...a });
Object.freeze({ ...l, body: "", hidden: false });
const u = Object.freeze({ width: null, height: null }), f = Object.freeze({ ...u, ...a });
const p = /[\s,]+/;
function d(e2, t2) {
  t2.split(p).forEach((t3) => {
    switch (t3.trim()) {
      case "horizontal":
        e2.hFlip = true;
        break;
      case "vertical":
        e2.vFlip = true;
    }
  });
}
function h(e2, t2 = 0) {
  const n2 = e2.replace(/^-?[0-9.]*/, "");
  function o2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if ("" === n2) {
    const t3 = parseInt(e2);
    return isNaN(t3) ? 0 : o2(t3);
  }
  if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case "%":
        t3 = 25;
        break;
      case "deg":
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? o2(i2) : 0);
    }
  }
  return t2;
}
const g = /(-?[0-9.]*[0-9]+[0-9.]*)/g, m = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function b(e2, t2, n2) {
  if (1 === t2) return e2;
  if (n2 = n2 || 100, "number" == typeof e2) return Math.ceil(e2 * t2 * n2) / n2;
  if ("string" != typeof e2) return e2;
  const o2 = e2.split(g);
  if (null === o2 || !o2.length) return e2;
  const i2 = [];
  let r2 = o2.shift(), s2 = m.test(r2);
  for (; ; ) {
    if (s2) {
      const e3 = parseFloat(r2);
      isNaN(e3) ? i2.push(r2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(r2);
    if (r2 = o2.shift(), void 0 === r2) return i2.join("");
    s2 = !s2;
  }
}
const v = /\sid="(\S+)"/g, x = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16);
let y = 0;
const w = { ...f, inline: false }, k = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": true, role: "img" }, j = { display: "inline-block" }, _ = { backgroundColor: "currentColor" }, O = { backgroundColor: "transparent" }, S = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" }, I = { webkitMask: _, mask: _, background: O };
for (const Ge in I) {
  const e2 = I[Ge];
  for (const t2 in S) e2[Ge + t2] = S[t2];
}
const F = {};
function E(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? "px" : "");
}
["horizontal", "vertical"].forEach((e2) => {
  const t2 = e2.slice(0, 1) + "Flip";
  F[e2 + "-flip"] = t2, F[e2.slice(0, 1) + "-flip"] = t2, F[e2 + "Flip"] = t2;
});
const z = (t2, n2) => {
  const o2 = (function(e2, t3) {
    const n3 = { ...e2 };
    for (const o3 in t3) {
      const e3 = t3[o3], i3 = typeof e3;
      o3 in u ? (null === e3 || e3 && ("string" === i3 || "number" === i3)) && (n3[o3] = e3) : i3 === typeof n3[o3] && (n3[o3] = "rotate" === o3 ? e3 % 4 : e3);
    }
    return n3;
  })(w, n2), i2 = { ...k }, r2 = n2.mode || "svg", s2 = {}, c2 = n2.style, a2 = "object" != typeof c2 || c2 instanceof Array ? {} : c2;
  for (let e2 in n2) {
    const t3 = n2[e2];
    if (void 0 !== t3) switch (e2) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        o2[e2] = true === t3 || "true" === t3 || 1 === t3;
        break;
      case "flip":
        "string" == typeof t3 && d(o2, t3);
        break;
      case "color":
        s2.color = t3;
        break;
      case "rotate":
        "string" == typeof t3 ? o2[e2] = h(t3) : "number" == typeof t3 && (o2[e2] = t3);
        break;
      case "ariaHidden":
      case "aria-hidden":
        true !== t3 && "true" !== t3 && delete i2["aria-hidden"];
        break;
      default: {
        const n3 = F[e2];
        n3 ? true !== t3 && "true" !== t3 && 1 !== t3 || (o2[n3] = true) : void 0 === w[e2] && (i2[e2] = t3);
      }
    }
  }
  const p2 = (function(e2, t3) {
    const n3 = { ...l, ...e2 }, o3 = { ...f, ...t3 }, i3 = { left: n3.left, top: n3.top, width: n3.width, height: n3.height };
    let r3 = n3.body;
    [n3, o3].forEach((e3) => {
      const t4 = [], n4 = e3.hFlip, o4 = e3.vFlip;
      let s4, c4 = e3.rotate;
      switch (n4 ? o4 ? c4 += 2 : (t4.push("translate(" + (i3.width + i3.left).toString() + " " + (0 - i3.top).toString() + ")"), t4.push("scale(-1 1)"), i3.top = i3.left = 0) : o4 && (t4.push("translate(" + (0 - i3.left).toString() + " " + (i3.height + i3.top).toString() + ")"), t4.push("scale(1 -1)"), i3.top = i3.left = 0), c4 < 0 && (c4 -= 4 * Math.floor(c4 / 4)), c4 %= 4, c4) {
        case 1:
          s4 = i3.height / 2 + i3.top, t4.unshift("rotate(90 " + s4.toString() + " " + s4.toString() + ")");
          break;
        case 2:
          t4.unshift("rotate(180 " + (i3.width / 2 + i3.left).toString() + " " + (i3.height / 2 + i3.top).toString() + ")");
          break;
        case 3:
          s4 = i3.width / 2 + i3.left, t4.unshift("rotate(-90 " + s4.toString() + " " + s4.toString() + ")");
      }
      c4 % 2 == 1 && (i3.left !== i3.top && (s4 = i3.left, i3.left = i3.top, i3.top = s4), i3.width !== i3.height && (s4 = i3.width, i3.width = i3.height, i3.height = s4)), t4.length && (r3 = (function(e4, t5, n5) {
        const o5 = (function(e5, t6 = "defs") {
          let n6 = "";
          const o6 = e5.indexOf("<" + t6);
          for (; o6 >= 0; ) {
            const i5 = e5.indexOf(">", o6), r5 = e5.indexOf("</" + t6);
            if (-1 === i5 || -1 === r5) break;
            const s5 = e5.indexOf(">", r5);
            if (-1 === s5) break;
            n6 += e5.slice(i5 + 1, r5).trim(), e5 = e5.slice(0, o6).trim() + e5.slice(s5 + 1);
          }
          return { defs: n6, content: e5 };
        })(e4);
        return i4 = o5.defs, r4 = t5 + o5.content + n5, i4 ? "<defs>" + i4 + "</defs>" + r4 : r4;
        var i4, r4;
      })(r3, '<g transform="' + t4.join(" ") + '">', "</g>"));
    });
    const s3 = o3.width, c3 = o3.height, a3 = i3.width, u2 = i3.height;
    let p3, d2;
    null === s3 ? (d2 = null === c3 ? "1em" : "auto" === c3 ? u2 : c3, p3 = b(d2, a3 / u2)) : (p3 = "auto" === s3 ? a3 : s3, d2 = null === c3 ? b(p3, u2 / a3) : "auto" === c3 ? u2 : c3);
    const h2 = {}, g3 = (e3, t4) => {
      /* @__PURE__ */ ((e4) => "unset" === e4 || "undefined" === e4 || "none" === e4)(t4) || (h2[e3] = t4.toString());
    };
    g3("width", p3), g3("height", d2);
    const m3 = [i3.left, i3.top, a3, u2];
    return h2.viewBox = m3.join(" "), { attributes: h2, viewBox: m3, body: r3 };
  })(t2, o2), g2 = p2.attributes;
  if (o2.inline && (s2.verticalAlign = "-0.125em"), "svg" === r2) {
    i2.style = { ...s2, ...a2 }, Object.assign(i2, g2);
    let t3 = 0, o3 = n2.id;
    return "string" == typeof o3 && (o3 = o3.replace(/-/g, "_")), i2.innerHTML = (function(e2, t4 = x) {
      const n3 = [];
      let o4;
      for (; o4 = v.exec(e2); ) n3.push(o4[1]);
      if (!n3.length) return e2;
      const i3 = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
      return n3.forEach((n4) => {
        const o5 = "function" == typeof t4 ? t4(n4) : t4 + (y++).toString(), r3 = n4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e2 = e2.replace(new RegExp('([#;"])(' + r3 + ')([")]|\\.[a-z])', "g"), "$1" + o5 + i3 + "$3");
      }), e2 = e2.replace(new RegExp(i3, "g"), "");
    })(p2.body, o3 ? () => o3 + "ID" + t3++ : "iconifyVue"), $e$1.h("svg", i2);
  }
  const { body: m2, width: S2, height: I2 } = t2, z2 = "mask" === r2 || "bg" !== r2 && -1 !== m2.indexOf("currentColor"), C2 = (function(e2, t3) {
    let n3 = -1 === e2.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const o3 in t3) n3 += " " + o3 + '="' + t3[o3] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n3 + ">" + e2 + "</svg>";
  })(m2, { ...g2, width: S2 + "", height: I2 + "" });
  var L2;
  return i2.style = { ...s2, "--svg": (L2 = C2, 'url("' + (function(e2) {
    return "data:image/svg+xml," + (function(e3) {
      return e3.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
    })(e2);
  })(L2) + '")'), width: E(g2.width), height: E(g2.height), ...j, ...z2 ? _ : O, ...a2 }, $e$1.h("span", i2);
}, C = /* @__PURE__ */ Object.create(null), L = $e$1.defineComponent({ inheritAttrs: false, render() {
  const e2 = this.$attrs, t2 = e2.icon, n2 = "string" == typeof t2 ? C[t2] : "object" == typeof t2 ? t2 : null;
  return null === n2 || "object" != typeof n2 || "string" != typeof n2.body ? this.$slots.default ? this.$slots.default() : null : z({ ...l, ...n2 }, e2);
} }), T = /^[a-z0-9]+(-[a-z0-9]+)*$/, A = (e2, t2, n2, o2 = "") => {
  const i2 = e2.split(":");
  if ("@" === e2.slice(0, 1)) {
    if (i2.length < 2 || i2.length > 3) return null;
    o2 = i2.shift().slice(1);
  }
  if (i2.length > 3 || !i2.length) return null;
  if (i2.length > 1) {
    const e3 = i2.pop(), n3 = i2.pop(), r3 = { provider: i2.length > 0 ? i2[0] : o2, prefix: n3, name: e3 };
    return t2 && !M(r3) ? null : r3;
  }
  const r2 = i2[0], s2 = r2.split("-");
  if (s2.length > 1) {
    const e3 = { provider: o2, prefix: s2.shift(), name: s2.join("-") };
    return t2 && !M(e3) ? null : e3;
  }
  if (n2 && "" === o2) {
    const e3 = { provider: o2, prefix: "", name: r2 };
    return t2 && !M(e3, n2) ? null : e3;
  }
  return null;
}, M = (e2, t2) => !!e2 && !(!(t2 && "" === e2.prefix || e2.prefix) || !e2.name), $ = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), R = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), D = Object.freeze({ ...$, ...R }), N = Object.freeze({ ...D, body: "", hidden: false });
function U(e2, t2) {
  const n2 = (function(e3, t3) {
    const n3 = {};
    !e3.hFlip != !t3.hFlip && (n3.hFlip = true), !e3.vFlip != !t3.vFlip && (n3.vFlip = true);
    const o2 = ((e3.rotate || 0) + (t3.rotate || 0)) % 4;
    return o2 && (n3.rotate = o2), n3;
  })(e2, t2);
  for (const o2 in N) o2 in R ? o2 in e2 && !(o2 in n2) && (n2[o2] = R[o2]) : o2 in t2 ? n2[o2] = t2[o2] : o2 in e2 && (n2[o2] = e2[o2]);
  return n2;
}
function P(e2, t2, n2) {
  const o2 = e2.icons, i2 = e2.aliases || /* @__PURE__ */ Object.create(null);
  let r2 = {};
  function s2(e3) {
    r2 = U(o2[e3] || i2[e3], r2);
  }
  return s2(t2), n2.forEach(s2), U(e2, r2);
}
function q(e2, t2) {
  const n2 = [];
  if ("object" != typeof e2 || "object" != typeof e2.icons) return n2;
  e2.not_found instanceof Array && e2.not_found.forEach((e3) => {
    t2(e3, null), n2.push(e3);
  });
  const o2 = (function(e3) {
    const t3 = e3.icons, n3 = e3.aliases || /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ Object.create(null);
    return Object.keys(t3).concat(Object.keys(n3)).forEach(function e4(i2) {
      if (t3[i2]) return o3[i2] = [];
      if (!(i2 in o3)) {
        o3[i2] = null;
        const t4 = n3[i2] && n3[i2].parent, r2 = t4 && e4(t4);
        r2 && (o3[i2] = [t4].concat(r2));
      }
      return o3[i2];
    }), o3;
  })(e2);
  for (const i2 in o2) {
    const r2 = o2[i2];
    r2 && (t2(i2, P(e2, i2, r2)), n2.push(i2));
  }
  return n2;
}
const B = { provider: "", aliases: {}, not_found: {}, ...$ };
function H(e2, t2) {
  for (const n2 in t2) if (n2 in e2 && typeof e2[n2] != typeof t2[n2]) return false;
  return true;
}
const V = /* @__PURE__ */ Object.create(null);
function Q(e2, t2) {
  const n2 = V[e2] || (V[e2] = /* @__PURE__ */ Object.create(null));
  return n2[t2] || (n2[t2] = /* @__PURE__ */ (function(e3, t3) {
    return { provider: e3, prefix: t3, icons: /* @__PURE__ */ Object.create(null), missing: /* @__PURE__ */ new Set() };
  })(e2, t2));
}
function G(e2, t2) {
  return (function(e3) {
    if ("object" != typeof e3 || null === e3) return null;
    const t3 = e3;
    if ("string" != typeof t3.prefix || !e3.icons || "object" != typeof e3.icons) return null;
    if (!H(e3, B)) return null;
    const n2 = t3.icons;
    for (const i2 in n2) {
      const e4 = n2[i2];
      if (!i2 || "string" != typeof e4.body || !H(e4, N)) return null;
    }
    const o2 = t3.aliases || /* @__PURE__ */ Object.create(null);
    for (const i2 in o2) {
      const e4 = o2[i2], t4 = e4.parent;
      if (!i2 || "string" != typeof t4 || !n2[t4] && !o2[t4] || !H(e4, N)) return null;
    }
    return t3;
  })(t2) ? q(t2, (t3, n2) => {
    n2 ? e2.icons[t3] = n2 : e2.missing.add(t3);
  }) : [];
}
let J = false;
function K(e2) {
  return "boolean" == typeof e2 && (J = e2), J;
}
function W(e2) {
  const t2 = "string" == typeof e2 ? A(e2, true, J) : e2;
  if (t2) {
    const e3 = Q(t2.provider, t2.prefix), n2 = t2.name;
    return e3.icons[n2] || (e3.missing.has(n2) ? null : void 0);
  }
}
const X = Object.freeze({ width: null, height: null }), Y = Object.freeze({ ...X, ...R }), Z = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ee = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function te(e2, t2, n2) {
  if (1 === t2) return e2;
  if (n2 = n2 || 100, "number" == typeof e2) return Math.ceil(e2 * t2 * n2) / n2;
  if ("string" != typeof e2) return e2;
  const o2 = e2.split(Z);
  if (null === o2 || !o2.length) return e2;
  const i2 = [];
  let r2 = o2.shift(), s2 = ee.test(r2);
  for (; ; ) {
    if (s2) {
      const e3 = parseFloat(r2);
      isNaN(e3) ? i2.push(r2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(r2);
    if (r2 = o2.shift(), void 0 === r2) return i2.join("");
    s2 = !s2;
  }
}
const ne = /\sid="(\S+)"/g, oe = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16);
let ie = 0;
const re = /* @__PURE__ */ Object.create(null);
function se(e2) {
  return re[e2] || re[""];
}
function ce(e2) {
  let t2;
  if ("string" == typeof e2.resources) t2 = [e2.resources];
  else if (t2 = e2.resources, !(t2 instanceof Array && t2.length)) return null;
  return { resources: t2, path: e2.path || "/", maxURL: e2.maxURL || 500, rotate: e2.rotate || 750, timeout: e2.timeout || 5e3, random: true === e2.random, index: e2.index || 0, dataAfterTimeout: false !== e2.dataAfterTimeout };
}
const ae = /* @__PURE__ */ Object.create(null), le = ["https://api.simplesvg.com", "https://api.unisvg.com"], ue = [];
for (; le.length > 0; ) 1 === le.length || Math.random() > 0.5 ? ue.push(le.shift()) : ue.push(le.pop());
function fe(e2, t2) {
  const n2 = ce(t2);
  return null !== n2 && (ae[e2] = n2, true);
}
function pe(e2) {
  return ae[e2];
}
ae[""] = ce({ resources: ["https://api.iconify.design"].concat(ue) });
let de = (() => {
  let e2;
  try {
    if (e2 = fetch, "function" == typeof e2) return e2;
  } catch (t2) {
  }
})();
const he = { prepare: (e2, t2, n2) => {
  const o2 = [], i2 = (function(e3, t3) {
    const n3 = pe(e3);
    if (!n3) return 0;
    let o3;
    if (n3.maxURL) {
      let e4 = 0;
      n3.resources.forEach((t4) => {
        const n4 = t4;
        e4 = Math.max(e4, n4.length);
      });
      const i3 = t3 + ".json?icons=";
      o3 = n3.maxURL - e4 - n3.path.length - i3.length;
    } else o3 = 0;
    return o3;
  })(e2, t2), r2 = "icons";
  let s2 = { type: r2, provider: e2, prefix: t2, icons: [] }, c2 = 0;
  return n2.forEach((n3, a2) => {
    c2 += n3.length + 1, c2 >= i2 && a2 > 0 && (o2.push(s2), s2 = { type: r2, provider: e2, prefix: t2, icons: [] }, c2 = n3.length), s2.icons.push(n3);
  }), o2.push(s2), o2;
}, send: (e2, t2, n2) => {
  if (!de) return void n2("abort", 424);
  let o2 = (function(e3) {
    if ("string" == typeof e3) {
      const t3 = pe(e3);
      if (t3) return t3.path;
    }
    return "/";
  })(t2.provider);
  switch (t2.type) {
    case "icons": {
      const e3 = t2.prefix, n3 = t2.icons.join(",");
      o2 += e3 + ".json?" + new URLSearchParams({ icons: n3 }).toString();
      break;
    }
    case "custom": {
      const e3 = t2.uri;
      o2 += "/" === e3.slice(0, 1) ? e3.slice(1) : e3;
      break;
    }
    default:
      return void n2("abort", 400);
  }
  let i2 = 503;
  de(e2 + o2).then((e3) => {
    const t3 = e3.status;
    if (200 === t3) return i2 = 501, e3.json();
    setTimeout(() => {
      n2(/* @__PURE__ */ (function(e4) {
        return 404 === e4;
      })(t3) ? "abort" : "next", t3);
    });
  }).then((e3) => {
    "object" == typeof e3 && null !== e3 ? setTimeout(() => {
      n2("success", e3);
    }) : setTimeout(() => {
      404 === e3 ? n2("abort", e3) : n2("next", i2);
    });
  }).catch(() => {
    n2("next", i2);
  });
} };
function ge(e2, t2) {
  e2.forEach((e3) => {
    const n2 = e3.loaderCallbacks;
    n2 && (e3.loaderCallbacks = n2.filter((e4) => e4.id !== t2));
  });
}
let me = 0;
var be = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
function ve(e2, t2, n2, o2) {
  const i2 = e2.resources.length, r2 = e2.random ? Math.floor(Math.random() * i2) : e2.index;
  let s2;
  if (e2.random) {
    let t3 = e2.resources.slice(0);
    for (s2 = []; t3.length > 1; ) {
      const e3 = Math.floor(Math.random() * t3.length);
      s2.push(t3[e3]), t3 = t3.slice(0, e3).concat(t3.slice(e3 + 1));
    }
    s2 = s2.concat(t3);
  } else s2 = e2.resources.slice(r2).concat(e2.resources.slice(0, r2));
  const c2 = Date.now();
  let a2, l2 = "pending", u2 = 0, f2 = null, p2 = [], d2 = [];
  function h2() {
    f2 && (clearTimeout(f2), f2 = null);
  }
  function g2() {
    "pending" === l2 && (l2 = "aborted"), h2(), p2.forEach((e3) => {
      "pending" === e3.status && (e3.status = "aborted");
    }), p2 = [];
  }
  function m2(e3, t3) {
    t3 && (d2 = []), "function" == typeof e3 && d2.push(e3);
  }
  function b2() {
    l2 = "failed", d2.forEach((e3) => {
      e3(void 0, a2);
    });
  }
  function v2() {
    p2.forEach((e3) => {
      "pending" === e3.status && (e3.status = "aborted");
    }), p2 = [];
  }
  function x2() {
    if ("pending" !== l2) return;
    h2();
    const o3 = s2.shift();
    if (void 0 === o3) return p2.length ? void (f2 = setTimeout(() => {
      h2(), "pending" === l2 && (v2(), b2());
    }, e2.timeout)) : void b2();
    const i3 = { status: "pending", resource: o3, callback: (t3, n3) => {
      !(function(t4, n4, o4) {
        const i4 = "success" !== n4;
        switch (p2 = p2.filter((e3) => e3 !== t4), l2) {
          case "pending":
            break;
          case "failed":
            if (i4 || !e2.dataAfterTimeout) return;
            break;
          default:
            return;
        }
        if ("abort" === n4) return a2 = o4, void b2();
        if (i4) return a2 = o4, void (p2.length || (s2.length ? x2() : b2()));
        if (h2(), v2(), !e2.random) {
          const n5 = e2.resources.indexOf(t4.resource);
          -1 !== n5 && n5 !== e2.index && (e2.index = n5);
        }
        l2 = "completed", d2.forEach((e3) => {
          e3(o4);
        });
      })(i3, t3, n3);
    } };
    p2.push(i3), u2++, f2 = setTimeout(x2, e2.rotate), n2(o3, t2, i3.callback);
  }
  return "function" == typeof o2 && d2.push(o2), setTimeout(x2), function() {
    return { startTime: c2, payload: t2, status: l2, queriesSent: u2, queriesPending: p2.length, subscribe: m2, abort: g2 };
  };
}
function xe(e2) {
  const t2 = { ...be, ...e2 };
  let n2 = [];
  function o2() {
    n2 = n2.filter((e3) => "pending" === e3().status);
  }
  return { query: function(e3, i2, r2) {
    const s2 = ve(t2, e3, i2, (e4, t3) => {
      o2(), r2 && r2(e4, t3);
    });
    return n2.push(s2), s2;
  }, find: function(e3) {
    return n2.find((t3) => e3(t3)) || null;
  }, setIndex: (e3) => {
    t2.index = e3;
  }, getIndex: () => t2.index, cleanup: o2 };
}
function ye() {
}
const we = /* @__PURE__ */ Object.create(null);
function ke(e2, t2, n2) {
  let o2, i2;
  if ("string" == typeof e2) {
    const t3 = se(e2);
    if (!t3) return n2(void 0, 424), ye;
    i2 = t3.send;
    const r2 = (function(e3) {
      if (!we[e3]) {
        const t4 = pe(e3);
        if (!t4) return;
        const n3 = { config: t4, redundancy: xe(t4) };
        we[e3] = n3;
      }
      return we[e3];
    })(e2);
    r2 && (o2 = r2.redundancy);
  } else {
    const t3 = ce(e2);
    if (t3) {
      o2 = xe(t3);
      const n3 = se(e2.resources ? e2.resources[0] : "");
      n3 && (i2 = n3.send);
    }
  }
  return o2 && i2 ? o2.query(t2, i2, n2)().abort : (n2(void 0, 424), ye);
}
function je() {
}
function _e(e2) {
  e2.iconsLoaderFlag || (e2.iconsLoaderFlag = true, setTimeout(() => {
    e2.iconsLoaderFlag = false, (function(e3) {
      e3.pendingCallbacksFlag || (e3.pendingCallbacksFlag = true, setTimeout(() => {
        e3.pendingCallbacksFlag = false;
        const t2 = e3.loaderCallbacks ? e3.loaderCallbacks.slice(0) : [];
        if (!t2.length) return;
        let n2 = false;
        const o2 = e3.provider, i2 = e3.prefix;
        t2.forEach((t3) => {
          const r2 = t3.icons, s2 = r2.pending.length;
          r2.pending = r2.pending.filter((t4) => {
            if (t4.prefix !== i2) return true;
            const s3 = t4.name;
            if (e3.icons[s3]) r2.loaded.push({ provider: o2, prefix: i2, name: s3 });
            else {
              if (!e3.missing.has(s3)) return n2 = true, true;
              r2.missing.push({ provider: o2, prefix: i2, name: s3 });
            }
            return false;
          }), r2.pending.length !== s2 && (n2 || ge([e3], t3.id), t3.callback(r2.loaded.slice(0), r2.missing.slice(0), r2.pending.slice(0), t3.abort));
        });
      }));
    })(e2);
  }));
}
function Oe(e2, t2, n2) {
  function o2() {
    const n3 = e2.pendingIcons;
    t2.forEach((t3) => {
      n3 && n3.delete(t3), e2.icons[t3] || e2.missing.add(t3);
    });
  }
  if (n2 && "object" == typeof n2) try {
    if (!G(e2, n2).length) return void o2();
  } catch (i2) {
  }
  o2(), _e(e2);
}
function Se(e2, t2) {
  e2 instanceof Promise ? e2.then((e3) => {
    t2(e3);
  }).catch(() => {
    t2(null);
  }) : t2(e2);
}
function Ie(e2, t2) {
  e2.iconsToLoad ? e2.iconsToLoad = e2.iconsToLoad.concat(t2).sort() : e2.iconsToLoad = t2, e2.iconsQueueFlag || (e2.iconsQueueFlag = true, setTimeout(() => {
    e2.iconsQueueFlag = false;
    const { provider: t3, prefix: n2 } = e2, o2 = e2.iconsToLoad;
    if (delete e2.iconsToLoad, !o2 || !o2.length) return;
    const i2 = e2.loadIcon;
    if (e2.loadIcons && (o2.length > 1 || !i2)) return void Se(e2.loadIcons(o2, n2, t3), (t4) => {
      Oe(e2, o2, t4);
    });
    if (i2) return void o2.forEach((o3) => {
      Se(i2(o3, n2, t3), (t4) => {
        Oe(e2, [o3], t4 ? { prefix: n2, icons: { [o3]: t4 } } : null);
      });
    });
    const { valid: r2, invalid: s2 } = (function(e3) {
      const t4 = [], n3 = [];
      return e3.forEach((e4) => {
        (e4.match(T) ? t4 : n3).push(e4);
      }), { valid: t4, invalid: n3 };
    })(o2);
    if (s2.length && Oe(e2, s2, null), !r2.length) return;
    const c2 = n2.match(T) ? se(t3) : null;
    if (!c2) return void Oe(e2, r2, null);
    c2.prepare(t3, n2, r2).forEach((n3) => {
      ke(t3, n3, (t4) => {
        Oe(e2, n3.icons, t4);
      });
    });
  }));
}
const Fe = (e2, t2) => {
  const n2 = (function(e3) {
    const t3 = { loaded: [], missing: [], pending: [] }, n3 = /* @__PURE__ */ Object.create(null);
    e3.sort((e4, t4) => e4.provider !== t4.provider ? e4.provider.localeCompare(t4.provider) : e4.prefix !== t4.prefix ? e4.prefix.localeCompare(t4.prefix) : e4.name.localeCompare(t4.name));
    let o3 = { provider: "", prefix: "", name: "" };
    return e3.forEach((e4) => {
      if (o3.name === e4.name && o3.prefix === e4.prefix && o3.provider === e4.provider) return;
      o3 = e4;
      const i3 = e4.provider, r3 = e4.prefix, s3 = e4.name, c2 = n3[i3] || (n3[i3] = /* @__PURE__ */ Object.create(null)), a2 = c2[r3] || (c2[r3] = Q(i3, r3));
      let l2;
      l2 = s3 in a2.icons ? t3.loaded : "" === r3 || a2.missing.has(s3) ? t3.missing : t3.pending;
      const u2 = { provider: i3, prefix: r3, name: s3 };
      l2.push(u2);
    }), t3;
  })((function(e3, t3 = true, n3 = false) {
    const o3 = [];
    return e3.forEach((e4) => {
      const i3 = "string" == typeof e4 ? A(e4, t3, n3) : e4;
      i3 && o3.push(i3);
    }), o3;
  })(e2, true, K()));
  if (!n2.pending.length) {
    let e3 = true;
    return t2 && setTimeout(() => {
      e3 && t2(n2.loaded, n2.missing, n2.pending, je);
    }), () => {
      e3 = false;
    };
  }
  const o2 = /* @__PURE__ */ Object.create(null), i2 = [];
  let r2, s2;
  return n2.pending.forEach((e3) => {
    const { provider: t3, prefix: n3 } = e3;
    if (n3 === s2 && t3 === r2) return;
    r2 = t3, s2 = n3, i2.push(Q(t3, n3));
    const c2 = o2[t3] || (o2[t3] = /* @__PURE__ */ Object.create(null));
    c2[n3] || (c2[n3] = []);
  }), n2.pending.forEach((e3) => {
    const { provider: t3, prefix: n3, name: i3 } = e3, r3 = Q(t3, n3), s3 = r3.pendingIcons || (r3.pendingIcons = /* @__PURE__ */ new Set());
    s3.has(i3) || (s3.add(i3), o2[t3][n3].push(i3));
  }), i2.forEach((e3) => {
    const t3 = o2[e3.provider][e3.prefix];
    t3.length && Ie(e3, t3);
  }), t2 ? (function(e3, t3, n3) {
    const o3 = me++, i3 = ge.bind(null, n3, o3);
    if (!t3.pending.length) return i3;
    const r3 = { id: o3, icons: t3, callback: e3, abort: i3 };
    return n3.forEach((e4) => {
      (e4.loaderCallbacks || (e4.loaderCallbacks = [])).push(r3);
    }), i3;
  })(t2, n2, i2) : je;
};
const Ee = /[\s,]+/;
function ze(e2, t2) {
  t2.split(Ee).forEach((t3) => {
    switch (t3.trim()) {
      case "horizontal":
        e2.hFlip = true;
        break;
      case "vertical":
        e2.vFlip = true;
    }
  });
}
function Ce(e2, t2 = 0) {
  const n2 = e2.replace(/^-?[0-9.]*/, "");
  function o2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if ("" === n2) {
    const t3 = parseInt(e2);
    return isNaN(t3) ? 0 : o2(t3);
  }
  if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case "%":
        t3 = 25;
        break;
      case "deg":
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? o2(i2) : 0);
    }
  }
  return t2;
}
const Le = { ...Y, inline: false }, Te = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": true, role: "img" }, Ae = { display: "inline-block" }, Me = { backgroundColor: "currentColor" }, $e = { backgroundColor: "transparent" }, Re = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" }, De = { webkitMask: Me, mask: Me, background: $e };
for (const Ge in De) {
  const e2 = De[Ge];
  for (const t2 in Re) e2[Ge + t2] = Re[t2];
}
const Ne = {};
function Ue(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? "px" : "");
}
["horizontal", "vertical"].forEach((e2) => {
  const t2 = e2.slice(0, 1) + "Flip";
  Ne[e2 + "-flip"] = t2, Ne[e2.slice(0, 1) + "-flip"] = t2, Ne[e2 + "Flip"] = t2;
});
const Pe = (t2, n2) => {
  const o2 = (function(e2, t3) {
    const n3 = { ...e2 };
    for (const o3 in t3) {
      const e3 = t3[o3], i3 = typeof e3;
      o3 in X ? (null === e3 || e3 && ("string" === i3 || "number" === i3)) && (n3[o3] = e3) : i3 === typeof n3[o3] && (n3[o3] = "rotate" === o3 ? e3 % 4 : e3);
    }
    return n3;
  })(Le, n2), i2 = { ...Te }, r2 = n2.mode || "svg", s2 = {}, c2 = n2.style, a2 = "object" != typeof c2 || c2 instanceof Array ? {} : c2;
  for (let e2 in n2) {
    const t3 = n2[e2];
    if (void 0 !== t3) switch (e2) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        o2[e2] = true === t3 || "true" === t3 || 1 === t3;
        break;
      case "flip":
        "string" == typeof t3 && ze(o2, t3);
        break;
      case "color":
        s2.color = t3;
        break;
      case "rotate":
        "string" == typeof t3 ? o2[e2] = Ce(t3) : "number" == typeof t3 && (o2[e2] = t3);
        break;
      case "ariaHidden":
      case "aria-hidden":
        true !== t3 && "true" !== t3 && delete i2["aria-hidden"];
        break;
      default: {
        const n3 = Ne[e2];
        n3 ? true !== t3 && "true" !== t3 && 1 !== t3 || (o2[n3] = true) : void 0 === Le[e2] && (i2[e2] = t3);
      }
    }
  }
  const l2 = (function(e2, t3) {
    const n3 = { ...D, ...e2 }, o3 = { ...Y, ...t3 }, i3 = { left: n3.left, top: n3.top, width: n3.width, height: n3.height };
    let r3 = n3.body;
    [n3, o3].forEach((e3) => {
      const t4 = [], n4 = e3.hFlip, o4 = e3.vFlip;
      let s4, c4 = e3.rotate;
      switch (n4 ? o4 ? c4 += 2 : (t4.push("translate(" + (i3.width + i3.left).toString() + " " + (0 - i3.top).toString() + ")"), t4.push("scale(-1 1)"), i3.top = i3.left = 0) : o4 && (t4.push("translate(" + (0 - i3.left).toString() + " " + (i3.height + i3.top).toString() + ")"), t4.push("scale(1 -1)"), i3.top = i3.left = 0), c4 < 0 && (c4 -= 4 * Math.floor(c4 / 4)), c4 %= 4, c4) {
        case 1:
          s4 = i3.height / 2 + i3.top, t4.unshift("rotate(90 " + s4.toString() + " " + s4.toString() + ")");
          break;
        case 2:
          t4.unshift("rotate(180 " + (i3.width / 2 + i3.left).toString() + " " + (i3.height / 2 + i3.top).toString() + ")");
          break;
        case 3:
          s4 = i3.width / 2 + i3.left, t4.unshift("rotate(-90 " + s4.toString() + " " + s4.toString() + ")");
      }
      c4 % 2 == 1 && (i3.left !== i3.top && (s4 = i3.left, i3.left = i3.top, i3.top = s4), i3.width !== i3.height && (s4 = i3.width, i3.width = i3.height, i3.height = s4)), t4.length && (r3 = (function(e4, t5, n5) {
        const o5 = (function(e5, t6 = "defs") {
          let n6 = "";
          const o6 = e5.indexOf("<" + t6);
          for (; o6 >= 0; ) {
            const i5 = e5.indexOf(">", o6), r5 = e5.indexOf("</" + t6);
            if (-1 === i5 || -1 === r5) break;
            const s5 = e5.indexOf(">", r5);
            if (-1 === s5) break;
            n6 += e5.slice(i5 + 1, r5).trim(), e5 = e5.slice(0, o6).trim() + e5.slice(s5 + 1);
          }
          return { defs: n6, content: e5 };
        })(e4);
        return i4 = o5.defs, r4 = t5 + o5.content + n5, i4 ? "<defs>" + i4 + "</defs>" + r4 : r4;
        var i4, r4;
      })(r3, '<g transform="' + t4.join(" ") + '">', "</g>"));
    });
    const s3 = o3.width, c3 = o3.height, a3 = i3.width, l3 = i3.height;
    let u3, f3;
    null === s3 ? (f3 = null === c3 ? "1em" : "auto" === c3 ? l3 : c3, u3 = te(f3, a3 / l3)) : (u3 = "auto" === s3 ? a3 : s3, f3 = null === c3 ? te(u3, l3 / a3) : "auto" === c3 ? l3 : c3);
    const p3 = {}, d3 = (e3, t4) => {
      /* @__PURE__ */ ((e4) => "unset" === e4 || "undefined" === e4 || "none" === e4)(t4) || (p3[e3] = t4.toString());
    };
    d3("width", u3), d3("height", f3);
    const h3 = [i3.left, i3.top, a3, l3];
    return p3.viewBox = h3.join(" "), { attributes: p3, viewBox: h3, body: r3 };
  })(t2, o2), u2 = l2.attributes;
  if (o2.inline && (s2.verticalAlign = "-0.125em"), "svg" === r2) {
    i2.style = { ...s2, ...a2 }, Object.assign(i2, u2);
    let t3 = 0, o3 = n2.id;
    return "string" == typeof o3 && (o3 = o3.replace(/-/g, "_")), i2.innerHTML = (function(e2, t4 = oe) {
      const n3 = [];
      let o4;
      for (; o4 = ne.exec(e2); ) n3.push(o4[1]);
      if (!n3.length) return e2;
      const i3 = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
      return n3.forEach((n4) => {
        const o5 = "function" == typeof t4 ? t4(n4) : t4 + (ie++).toString(), r3 = n4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e2 = e2.replace(new RegExp('([#;"])(' + r3 + ')([")]|\\.[a-z])', "g"), "$1" + o5 + i3 + "$3");
      }), e2 = e2.replace(new RegExp(i3, "g"), "");
    })(l2.body, o3 ? () => o3 + "ID" + t3++ : "iconifyVue"), $e$1.h("svg", i2);
  }
  const { body: f2, width: p2, height: d2 } = t2, h2 = "mask" === r2 || "bg" !== r2 && -1 !== f2.indexOf("currentColor"), g2 = (function(e2, t3) {
    let n3 = -1 === e2.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const o3 in t3) n3 += " " + o3 + '="' + t3[o3] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n3 + ">" + e2 + "</svg>";
  })(f2, { ...u2, width: p2 + "", height: d2 + "" });
  var m2;
  return i2.style = { ...s2, "--svg": (m2 = g2, 'url("' + (function(e2) {
    return "data:image/svg+xml," + (function(e3) {
      return e3.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
    })(e2);
  })(m2) + '")'), width: Ue(u2.width), height: Ue(u2.height), ...Ae, ...h2 ? Me : $e, ...a2 }, $e$1.h("span", i2);
};
var qe;
K(true), qe = he, re[""] = qe;
const Be = { ...D, body: "" };
$e$1.defineComponent({ inheritAttrs: false, data: () => ({ _name: "", _loadingIcon: null, iconMounted: false, counter: 0 }), mounted() {
  this.iconMounted = true;
}, unmounted() {
  this.abortLoading();
}, methods: { abortLoading() {
  this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
}, getIcon(e2, t2, n2) {
  if ("object" == typeof e2 && null !== e2 && "string" == typeof e2.body) return this._name = "", this.abortLoading(), { data: e2 };
  let o2;
  if ("string" != typeof e2 || null === (o2 = A(e2, false, true))) return this.abortLoading(), null;
  let i2 = W(o2);
  if (!i2) return this._loadingIcon && this._loadingIcon.name === e2 || (this.abortLoading(), this._name = "", null !== i2 && (this._loadingIcon = { name: e2, abort: Fe([o2], () => {
    this.counter++;
  }) })), null;
  if (this.abortLoading(), this._name !== e2 && (this._name = e2, t2 && t2(e2)), n2) {
    i2 = Object.assign({}, i2);
    const e3 = n2(i2.body, o2.name, o2.prefix, o2.provider);
    "string" == typeof e3 && (i2.body = e3);
  }
  const r2 = ["iconify"];
  return "" !== o2.prefix && r2.push("iconify--" + o2.prefix), "" !== o2.provider && r2.push("iconify--" + o2.provider), { data: i2, classes: r2 };
} }, render() {
  this.counter;
  const e2 = this.$attrs, t2 = this.iconMounted || e2.ssr ? this.getIcon(e2.icon, e2.onLoad, e2.customise) : null;
  if (!t2) return Pe(Be, e2);
  let n2 = e2;
  return t2.classes && (n2 = { ...e2, class: ("string" == typeof e2.class ? e2.class + " " : "") + t2.classes.join(" ") }), Pe({ ...D, ...t2.data }, n2);
} });
const He = $e$1.defineComponent({ __name: "Icon", __ssrInlineRender: true, props: { name: { type: String, required: true }, size: { type: String, default: "" } }, async setup(s2) {
  let c2, a2;
  const l2 = ot(), u2 = s(), f2 = s2;
  $e$1.watch(() => {
    var _a;
    return (_a = u2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions;
  }, () => {
    var _a, _b, _c, _d, _e2, _f;
    if ((_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url) {
      try {
        new URL(u2.nuxtIcon.iconifyApiOptions.url);
      } catch (e2) {
        return;
      }
      ((_d = (_c = u2.nuxtIcon) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) ? fe("custom", { resources: [(_e2 = u2.nuxtIcon) == null ? void 0 : _e2.iconifyApiOptions.url], index: 0 }) : fe("", { resources: [(_f = u2.nuxtIcon) == null ? void 0 : _f.iconifyApiOptions.url] });
    }
  }, { immediate: true });
  const p2 = kn("icons", () => ({})), d2 = $e$1.ref(false), h2 = $e$1.computed(() => {
    var _a, _b;
    return ((_b = (_a = u2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[f2.name]) ? u2.nuxtIcon.aliases[f2.name] : f2.name;
  }), g2 = $e$1.computed(() => c$1(h2.value)), m2 = $e$1.computed(() => [g2.value.provider, g2.value.prefix, g2.value.name].filter(Boolean).join(":")), b2 = $e$1.computed(() => {
    var _a;
    return (_a = p2.value) == null ? void 0 : _a[m2.value];
  }), v2 = $e$1.computed(() => {
    var _a;
    return (_a = l2.vueApp) == null ? void 0 : _a.component(h2.value);
  }), x2 = $e$1.computed(() => {
    var _a, _b, _c;
    if (!f2.size && "boolean" == typeof ((_a = u2.nuxtIcon) == null ? void 0 : _a.size) && !((_b = u2.nuxtIcon) == null ? void 0 : _b.size)) return;
    const e2 = f2.size || ((_c = u2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
    return String(Number(e2)) === e2 ? `${e2}px` : e2;
  }), y2 = $e$1.computed(() => {
    var _a, _b;
    return (_b = (_a = u2 == null ? void 0 : u2.nuxtIcon) == null ? void 0 : _a.class) != null ? _b : "icon";
  });
  async function w2() {
    var _a;
    v2.value || ((_a = p2.value) == null ? void 0 : _a[m2.value]) || (d2.value = true, p2.value[m2.value] = await ((e2) => new Promise((t2, n2) => {
      const o2 = "string" == typeof e2 ? A(e2, true) : e2;
      o2 ? Fe([o2 || e2], (i2) => {
        if (i2.length && o2) {
          const e3 = W(o2);
          if (e3) return void t2({ ...D, ...e3 });
        }
        n2(e2);
      }) : n2(e2);
    }))(g2.value).catch(() => {
    }), d2.value = false);
  }
  return $e$1.watch(h2, w2), !v2.value && ([c2, a2] = $e$1.withAsyncContext(() => w2()), c2 = await c2, a2()), (t2, n2, i2, r2) => {
    d2.value ? n2(`<span${Pr.ssrRenderAttrs($e$1.mergeProps({ class: y2.value, style: { width: x2.value, height: x2.value } }, r2))} data-v-3748f0f8></span>`) : b2.value ? n2(Pr.ssrRenderComponent($e$1.unref(L), $e$1.mergeProps({ icon: b2.value, class: y2.value, width: x2.value, height: x2.value }, r2), null, i2)) : v2.value ? Pr.ssrRenderVNode(n2, $e$1.createVNode($e$1.resolveDynamicComponent(v2.value), $e$1.mergeProps({ class: y2.value, width: x2.value, height: x2.value }, r2), null), i2) : (n2(`<span${Pr.ssrRenderAttrs($e$1.mergeProps({ class: y2.value, style: { fontSize: x2.value, lineHeight: x2.value, width: x2.value, height: x2.value } }, r2))} data-v-3748f0f8>`), Pr.ssrRenderSlot(t2.$slots, "default", {}, () => {
      n2(`${Pr.ssrInterpolate(s2.name)}`);
    }, n2, i2), n2("</span>"));
  };
} }), Ve = He.setup;
He.setup = (t2, n2) => {
  const o2 = $e$1.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_sass@1.98.0_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@6.0.2_/node_modules/nuxt-icon/dist/runtime/Icon.vue"), Ve ? Ve(t2, n2) : void 0;
};
const Qe = o(He, [["__scopeId", "data-v-3748f0f8"]]);

export { Qe as default };
//# sourceMappingURL=Icon-QwMdsGlg.mjs.map
