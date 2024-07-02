// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();
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
    "@samk-dev/nuxt-vcalendar",
    "nuxt-icon",
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
    },
  },
  plugins: ["@/plugins/useScroll"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";',
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
      },
    },
  },
  devServer: {
    // 服务器配置
    port: process.env.CLIENT_PORT,
  },
  app: {
    buildAssetsDir: "static",
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1,minimum-scale=1",
      title: "copyman blog",
      meta: [
        {
          name: "description",
          content: "黄裕平的个人博客",
        },
      ],
    },
    pageTransition: false, // 关闭 transition
  },
  runtimeConfig: {
    // 对客户端暴露的公共密钥
    public: {
      apiUrl: process.env.GLOB_API_URL,
    },
  },
  //跨域处理
  nitro: {
    devProxy: {
      "/basic-api": {
        target: process.env.GLOB_API_URL,
        changeOrigin: true,
        // prependPath: true,
      },
    },
  },
});
