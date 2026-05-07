import { FingerprintPlugin, useVisitorData } from "@fingerprint/vue";
import { postPublicFingerprintLog } from "@/api/fingerprintLog";

/** 与后端 `fingerprint_token` 对应；仅存已成功获取的 `visitor_id` */
const FINGERPRINT_TOKEN_STORAGE_KEY = "fingerprint_token";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apiKeyRaw = config.public.fingerprintPublicApiKey;
  const apiKey =
    typeof apiKeyRaw === "string" ? apiKeyRaw.trim() : "";

  if (!apiKey) {
    if (import.meta.dev) {
      console.warn(
        "[fingerprint] 未配置 NUXT_PUBLIC_FINGERPRINT_PUBLIC_API_KEY，已跳过指纹初始化与上报",
      );
    }
    return;
  }

  const regionRaw = config.public.fingerprintRegion;
  const pluginOpts =
    typeof regionRaw === "string" &&
    (regionRaw === "us" || regionRaw === "eu" || regionRaw === "ap")
      ? { apiKey, region: regionRaw }
      : { apiKey };

  nuxtApp.vueApp.use(FingerprintPlugin, pluginOpts);

  void nuxtApp.runWithContext(async () => {
    try {
      let token =
        localStorage.getItem(FINGERPRINT_TOKEN_STORAGE_KEY)?.trim() ?? "";

      const { getData } = useVisitorData({ immediate: false });
      console.log(getData,'getData')

      if (!token) {
        const result = await getData();
        console.log(result,'result')
        const vid = result.visitor_id?.trim();
        if (!vid) {
          if (import.meta.dev) {
            console.warn(
              "[fingerprint] 响应中无 visitor_id（例如 Zero Trust），无法写入本地与上报",
            );
          }
          return;
        }
        token = vid;
        console.log(token,'token')
        localStorage.setItem(FINGERPRINT_TOKEN_STORAGE_KEY, token);
      }

      await postPublicFingerprintLog({ fingerprint_token: token });
    } catch (e) {
      if (import.meta.dev) {
        console.warn("[fingerprint] 初始化或上报失败", e);
      }
    }
  });
});
