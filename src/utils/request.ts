function normalizeBaseURL(url: string | undefined): string {
  const u = (url || "/basic-api").replace(/\/$/, "");
  return u || "/basic-api";
}

/** 挂在 nuxtApp 上，避免 useState 进入 SSR payload（实例不宜序列化进 payload） */
const API_FETCH_KEY = "__apiFetchClient" as const;

type ApiFetchFn = <T>(
  request: string,
  opts?: NonNullable<Parameters<ReturnType<typeof $fetch.create>>[1]>
) => Promise<T>;

/**
 * Nuxt 内基于 `$fetch`（ofetch）的 API 客户端（每个 Nuxt 应用实例单例，SSR 每请求独立 app）。
 * 仅在 setup / 插件等 Nuxt 上下文中调用。
 */
export function useApiFetch(): ApiFetchFn {
  const nuxtApp = useNuxtApp();
  const existing = nuxtApp[API_FETCH_KEY] as ApiFetchFn | undefined;
  if (existing) return existing;

  const config = useRuntimeConfig();
  const baseURL = normalizeBaseURL(config.public.apiUrl as string | undefined);
  const inner = $fetch.create({
    baseURL,
    timeout: 30_000,
  });

  async function wrapped<T>(
    request: string,
    opts?: NonNullable<Parameters<ReturnType<typeof $fetch.create>>[1]>
  ): Promise<T> {
    try {
      return await inner<T>(request, opts);
    } catch (e: unknown) {
      if (e && typeof e === "object" && "data" in e) {
        const data = (e as { data: unknown }).data;
        if (data && typeof data === "object" && data !== null && "message" in data) {
          const m = (data as { message: unknown }).message;
          if (typeof m === "string" && m) throw new Error(m);
        }
      }
      throw e;
    }
  }

  nuxtApp[API_FETCH_KEY] = wrapped as never;
  return wrapped;
}
