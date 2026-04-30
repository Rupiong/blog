// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

/** Nitro routeRules.proxy：仅当 target 以 `/**` 结尾时才会 strip `/basic-api` 并把剩余路径拼到上游，否则不会转发 path（见 nitro 内 proxy 分支）。 */
function nitroApiProxyTarget(): string {
  const base = (process.env.GLOB_API_URL || "").replace(/\/$/, "");
  if (!base) {
    throw new Error(
      "GLOB_API_URL 未设置：请在 .env / .env.production 或构建环境中配置后端根地址（如 http://host:9000/v1）",
    );
  }
  return `${base}/**`;
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@vant/nuxt",
    "@ant-design-vue/nuxt",
    "dayjs-nuxt",
    "nuxt-viewport",
    "@nuxt/icon",
  ],
  viewport: {
    /* Viewport options */
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
    defaultBreakpoints: {
      desktop: "lg",
      mobile: "xs",
      tablet: "md",
    },
    fallbackBreakpoint: "lg",
  },
  dayjs: {
    locales: ["zh-cn"],
    plugins: ["isBetween"],
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#00DC82 ",
            secondary: "#69B9F1",
            success: "#1EB11C",
            error: "#E71609",
            warning: "#FFFF00",
          },
        },
      },
      sizes: ()=>{
        const sizes: Record<number, string> = {};
        for(let i = 16; i <= 100; i += 4){
          sizes[i] = `${i}px`;
        }
        return sizes;
      }
    },
  },
  plugins: ["@/plugins/useScroll"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/default.scss";',
        },
      },
    },
    build: {
      minify: "terser", // 指定混淆器
      outDir: "dist", // 输出目录
      assetsDir: "static", // 静态文件输出目录
      assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
      cssCodeSplit: true, // CSS代码分割
      emptyOutDir: true, // 打包时强制清空打包目录
      terserOptions: {
        // terser混淆器配置，当minify为tester时有效
        compress: {
          // 压缩
          drop_console: true, // 移除console
          drop_debugger: true, // 移除debugger
        },
        keep_classnames: false, // 保持原始css类名
        sourceMap: false,
      } as any,
    },
  },
  devServer: {
    // 服务器配置
    port: process.env.CLIENT_PORT ? parseInt(process.env.CLIENT_PORT) : 3000,
  },  
  app: {
    buildAssetsDir: "static",
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
      title: "copyman blog",
      meta: [
        {
          name: "description",
          content: "黄裕平的个人博客",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      ],
    },
    pageTransition: false, // 关闭 transition
  },
  runtimeConfig: {
    // 对客户端暴露的公共密钥
    public: {
      // 开发与生产均走同源 /basic-api，由 nitro.routeRules / devProxy 转发到 GLOB_API_URL，避免客户端导航时直连后端触发 CORS
      apiUrl: "/basic-api",
      siteTitle: process.env.NUXT_SITE_TITLE_SHORT,
    },
  },

  //跨域处理
  nitro: {
    routeRules: {
      "/basic-api/**": {
        cors: true,
        proxy: nitroApiProxyTarget(),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      },
    },
    devProxy: {
      "/basic-api": {
        target: process.env.GLOB_API_URL,
        changeOrigin: true,
        // prependPath: true,
      },
    },
  },
});
