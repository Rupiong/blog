import { useApiFetch } from "@/utils/request";

/** POST `/public/fingerprint_logs` 请求体（与后端 JSON 字段一致） */
export interface PostPublicFingerprintLogsBody {
  fingerprint_token: string;
}

/**
 * 上报前端指纹 POST `/public/fingerprint_logs`（无需登录）
 */
export async function postPublicFingerprintLog(
  body: PostPublicFingerprintLogsBody
): Promise<void> {
  const api = useApiFetch();
  await api("/public/fingerprint_logs", { method: "POST", body });
}
