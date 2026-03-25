import { l as ot } from './server.mjs';
import { t as klona, v as defuFn } from '../nitro/nitro.mjs';

const n = defuFn({ nuxt: {} });
function s() {
  const e2 = ot();
  return e2._appConfig || (e2._appConfig = klona(n)), e2._appConfig;
}
const l = ["fluent-emoji-high-contrast", "streamline-ultimate-color", "streamline-freehand-color", "streamline-kameleon-color", "streamline-stickies-color", "material-symbols-light", "streamline-plump-color", "streamline-sharp-color", "streamline-cyber-color", "streamline-flex-color", "cryptocurrency-color", "streamline-ultimate", "streamline-freehand", "material-icon-theme", "icon-park-outline", "icon-park-twotone", "fluent-emoji-flat", "emojione-monotone", "streamline-emojis", "heroicons-outline", "simple-line-icons", "material-symbols", "streamline-plump", "streamline-sharp", "streamline-cyber", "streamline-pixel", "streamline-block", "qlementine-icons", "streamline-color", "streamline-logos", "flat-color-icons", "icon-park-solid", "pepicons-pencil", "streamline-flex", "heroicons-solid", "pepicons-print", "cryptocurrency", "pixelarticons", "bitcoin-icons", "system-uicons", "sidekickicons", "devicon-plain", "entypo-social", "token-branded", "grommet-icons", "meteor-icons", "svg-spinners", "pepicons-pop", "dinkie-icons", "fluent-color", "vscode-icons", "simple-icons", "circle-flags", "medical-icon", "icomoon-free", "fluent-emoji", "majesticons", "humbleicons", "rivet-icons", "glyphs-poly", "radix-icons", "fa7-regular", "skill-icons", "emojione-v1", "academicons", "healthicons", "fa6-regular", "fluent-mdl2", "lucide-lab", "akar-icons", "lets-icons", "ant-design", "gravity-ui", "teenyicons", "streamline", "file-icons", "catppuccin", "fa7-brands", "game-icons", "foundation", "fa6-brands", "fa-regular", "mono-icons", "mdi-light", "iconamoon", "eos-icons", "gridicons", "duo-icons", "hugeicons", "lineicons", "wordpress", "zondicons", "heroicons", "fa7-solid", "icon-park", "arcticons", "meteocons", "dashicons", "fa6-solid", "fa-brands", "websymbol", "fontelico", "boxicons", "mingcute", "flowbite", "proicons", "guidance", "famicons", "roentgen", "bytesize", "marketeq", "nonicons", "brandico", "openmoji", "emojione", "flagpack", "fa-solid", "fontisto", "si-glyph", "pepicons", "line-md", "iconoir", "tdesign", "formkit", "clarity", "octicon", "pajamas", "codicon", "devicon", "twemoji", "noto-v1", "fxemoji", "raphael", "flat-ui", "topcoat", "feather", "tabler", "mynaui", "lucide", "circum", "carbon", "lsicon", "nimbus", "fluent", "glyphs", "memory", "garden", "temaki", "entypo", "icons8", "subway", "vaadin", "solar", "basil", "pixel", "typcn", "prime", "cuida", "stash", "charm", "quill", "codex", "picon", "logos", "token", "covid", "weui", "mage", "ooui", "maki", "unjs", "noto", "flag", "iwwa", "gala", "zmdi", "bpmn", "mdi", "uil", "uim", "uit", "uis", "jam", "ion", "cil", "uiw", "oui", "nrk", "cib", "bxl", "cbi", "cif", "gis", "map", "geo", "fad", "eva", "bxs", "wpf", "whh", "ic", "ri", "si", "gg", "ci", "fe", "mi", "ep", "bi", "ph", "ix", "ei", "f7", "wi", "la", "bx", "fa", "oi", "et", "el", "ls", "vs", "il", "ps"];
function c(i2 = "") {
  let o2, e2 = "";
  if ("@" === i2[0] && i2.includes(":") && (e2 = i2.split(":")[0].slice(1), i2 = i2.split(":").slice(1).join(":")), i2.startsWith("i-")) {
    i2 = i2.replace(/^i-/, "");
    for (const e3 of l) if (i2.startsWith(e3)) {
      o2 = e3, i2 = i2.slice(e3.length + 1);
      break;
    }
  } else if (i2.includes(":")) {
    const [e3, n2] = i2.split(":");
    o2 = e3, i2 = n2;
  }
  return { provider: e2, prefix: o2 || "", name: i2 || "" };
}

export { c, s };
//# sourceMappingURL=index-DLMHE0JN.mjs.map
