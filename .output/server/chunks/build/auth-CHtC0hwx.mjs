import { r as executeAsync } from '../nitro/nitro.mjs';
import { r as ft, w as mt } from './server.mjs';
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

const s = ft(async (e2, s2) => {
  let d, p;
  if (!(Math.random() > 0.5)) return [d, p] = executeAsync(() => mt("/login")), d = await d, p(), d;
});

export { s as default };
//# sourceMappingURL=auth-CHtC0hwx.mjs.map
