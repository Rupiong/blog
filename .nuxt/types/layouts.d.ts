import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    "custom-full": ComponentProps<typeof import("/Users/huangyuping/Desktop/个人项目/blog/src/layouts/custom-full.vue").default>,
    custom: ComponentProps<typeof import("/Users/huangyuping/Desktop/个人项目/blog/src/layouts/custom.vue").default>,
    default: ComponentProps<typeof import("/Users/huangyuping/Desktop/个人项目/blog/src/layouts/default.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}