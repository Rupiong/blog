import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   apiUrl: string,

   siteTitle: string,

   vcalendar: any,
  }
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["pinia"]?: ModuleDependencyMeta<typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["vueuse"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["vant"]?: ModuleDependencyMeta<typeof import("@vant/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["ant-design-vue"]?: ModuleDependencyMeta<typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["dayjs"]?: ModuleDependencyMeta<typeof import("dayjs-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-viewport"]?: ModuleDependencyMeta<typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@samk-dev/nuxt-vcalendar"]?: ModuleDependencyMeta<typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-icon"]?: ModuleDependencyMeta<typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@vant/nuxt`
     */
    ["vant"]: typeof import("@vant/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@ant-design-vue/nuxt`
     */
    ["antd"]: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `dayjs-nuxt`
     */
    ["dayjs"]: typeof import("dayjs-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-viewport`
     */
    ["viewport"]: typeof import("nuxt-viewport").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     */
    ["vcalendar"]: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@vant/nuxt`
     */
    ["vant"]?: typeof import("@vant/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@ant-design-vue/nuxt`
     */
    ["antd"]?: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `dayjs-nuxt`
     */
    ["dayjs"]?: typeof import("dayjs-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-viewport`
     */
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     */
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vant/nuxt", Exclude<NuxtConfig["vant"], boolean>] | ["@ant-design-vue/nuxt", Exclude<NuxtConfig["antd"], boolean>] | ["dayjs-nuxt", Exclude<NuxtConfig["dayjs"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["pinia"]?: ModuleDependencyMeta<typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["vueuse"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["vant"]?: ModuleDependencyMeta<typeof import("@vant/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["ant-design-vue"]?: ModuleDependencyMeta<typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["dayjs"]?: ModuleDependencyMeta<typeof import("dayjs-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-viewport"]?: ModuleDependencyMeta<typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@samk-dev/nuxt-vcalendar"]?: ModuleDependencyMeta<typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-icon"]?: ModuleDependencyMeta<typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@vant/nuxt`
     * @see https://www.npmjs.com/package/@vant/nuxt
     */
    ["vant"]: typeof import("@vant/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@ant-design-vue/nuxt`
     * @see https://www.npmjs.com/package/@ant-design-vue/nuxt
     */
    ["antd"]: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `dayjs-nuxt`
     * @see https://www.npmjs.com/package/dayjs-nuxt
     */
    ["dayjs"]: typeof import("dayjs-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-viewport`
     * @see https://www.npmjs.com/package/nuxt-viewport
     */
    ["viewport"]: typeof import("nuxt-viewport").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     * @see https://www.npmjs.com/package/@samk-dev/nuxt-vcalendar
     */
    ["vcalendar"]: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@vant/nuxt`
     * @see https://www.npmjs.com/package/@vant/nuxt
     */
    ["vant"]?: typeof import("@vant/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@ant-design-vue/nuxt`
     * @see https://www.npmjs.com/package/@ant-design-vue/nuxt
     */
    ["antd"]?: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `dayjs-nuxt`
     * @see https://www.npmjs.com/package/dayjs-nuxt
     */
    ["dayjs"]?: typeof import("dayjs-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-viewport`
     * @see https://www.npmjs.com/package/nuxt-viewport
     */
    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@samk-dev/nuxt-vcalendar`
     * @see https://www.npmjs.com/package/@samk-dev/nuxt-vcalendar
     */
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vant/nuxt", Exclude<NuxtConfig["vant"], boolean>] | ["@ant-design-vue/nuxt", Exclude<NuxtConfig["antd"], boolean>] | ["dayjs-nuxt", Exclude<NuxtConfig["dayjs"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }