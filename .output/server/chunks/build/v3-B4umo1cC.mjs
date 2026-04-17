import { q as ot, v as $e } from './server.mjs';
import { h as headSymbol, u as useHead } from '../routes/renderer.mjs';

function s(s2, u = {}) {
  const r = (function(t2) {
    var _a;
    const s3 = t2 || ot();
    return ((_a = s3 == null ? void 0 : s3.ssrContext) == null ? void 0 : _a.head) || (s3 == null ? void 0 : s3.runWithContext(() => {
      if ($e.hasInjectionContext()) return $e.inject(headSymbol);
    }));
  })(u.nuxt);
  if (r) return useHead(s2, { head: r, ...u });
}

export { s };
//# sourceMappingURL=v3-B4umo1cC.mjs.map
