import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vant"]?: typeof import("@vant/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["antd"]?: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["dayjs"]?: typeof import("dayjs-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vant/nuxt", Exclude<NuxtConfig["vant"], boolean>] | ["@ant-design-vue/nuxt", Exclude<NuxtConfig["antd"], boolean>] | ["dayjs-nuxt", Exclude<NuxtConfig["dayjs"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   apiUrl: string,

   vcalendar: any,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }