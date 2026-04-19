import { useApiFetch } from "@/utils/request";

/** 接口统一响应体：`data` 随接口变化 */
export interface ApiEnvelope<T = unknown> {
  code: number;
  message: string;
  data: T;
}

/** GET `/captcha` 中 `data` 字段 */
export interface CaptchaData {
  captcha_id: string;
  image_base64: string;
}

/** POST `/public/email/send_code` 中 purpose：站点留言或文章留言 */
export type EmailSendCodePurpose = "guestbook" | "comment";

/** POST `/public/email/send_code` 请求体（与后端 JSON 字段一致） */
export interface SendPublicEmailCodeBody {
  captcha: string;
  captcha_id: string;
  email: string;
  purpose: EmailSendCodePurpose;
}

/** GET `/public/site_messages` 单条 */
export interface PublicSiteMessageRecord {
  id: number;
  content: string;
  created_at: number;
  guest_name: string;
}

/** 分页 meta */
export interface PublicSiteMessagesListMeta {
  page: number;
  pageSize: number;
  total: number;
}

/** GET `/public/site_messages` 响应 */
export interface PublicSiteMessagesListResponse {
  data: PublicSiteMessageRecord[];
  meta: PublicSiteMessagesListMeta;
}

/** GET `/public/site_messages` 查询参数 */
export interface PublicSiteMessagesQuery {
  page: number;
  pageSize: number;
}

function parseSiteMessagesMeta(
  meta: unknown,
  fallback: PublicSiteMessagesQuery
): PublicSiteMessagesListMeta {
  if (meta == null || typeof meta !== "object") {
    return { total: 0, page: fallback.page, pageSize: fallback.pageSize };
  }
  const m = meta as Record<string, unknown>;
  return {
    page: m.page != null ? Number(m.page) : fallback.page,
    pageSize: m.pageSize != null ? Number(m.pageSize) : fallback.pageSize,
    total: m.total != null ? Number(m.total) : 0,
  };
}

/**
 * 兼容直连 `{ data, meta }` 与统一包装 `{ code, message, data: { data, meta } }`。
 */
function normalizePublicSiteMessagesList(
  raw: unknown,
  query: PublicSiteMessagesQuery
): PublicSiteMessagesListResponse {
  const empty: PublicSiteMessagesListResponse = {
    data: [],
    meta: parseSiteMessagesMeta(null, query),
  };
  if (raw == null || typeof raw !== "object") return empty;
  const root = raw as Record<string, unknown>;
  if (Array.isArray(root.data) && root.meta != null) {
    return {
      data: root.data as PublicSiteMessageRecord[],
      meta: parseSiteMessagesMeta(root.meta, query),
    };
  }
  const wrapped = root.data;
  if (wrapped != null && typeof wrapped === "object") {
    const w = wrapped as Record<string, unknown>;
    if (Array.isArray(w.data) && w.meta != null) {
      return {
        data: w.data as PublicSiteMessageRecord[],
        meta: parseSiteMessagesMeta(w.meta, query),
      };
    }
  }
  return empty;
}

/** POST `/public/site_messages` 请求体 */
export interface PostPublicSiteMessageBody {
  content: string;
  email: string;
  email_code: string;
  guest_name: string;
}

/** POST `/public/site_messages` 响应 */
export interface PostPublicSiteMessageResponse {
  id: number;
}

/**
 * 获取图形验证码 GET `/captcha`
 */
export async function fetchCaptcha(): Promise<ApiEnvelope<CaptchaData>> {
  const api = useApiFetch();
  return api<ApiEnvelope<CaptchaData>>("/captcha", { method: "GET" });
}

/**
 * 发送邮箱验证码 POST `/public/email/send_code`
 */
export async function sendPublicEmailCode(
  body: SendPublicEmailCodeBody
): Promise<void> {
  const api = useApiFetch();
  await api("/public/email/send_code", { method: "POST", body });
}

/**
 * 分页获取站点留言 GET `/public/site_messages`
 */
export async function fetchPublicSiteMessages(
  query: PublicSiteMessagesQuery
): Promise<PublicSiteMessagesListResponse> {
  const api = useApiFetch();
  const raw = await api<unknown>("/public/site_messages", {
    method: "GET",
    query: {
      page: query.page,
      pageSize: query.pageSize,
    },
  });
  return normalizePublicSiteMessagesList(raw, query);
}

/**
 * 按 ID 在分页列表中查找单条留言（无独立详情接口时的兜底）
 */
export async function fetchPublicSiteMessageById(
  id: number
): Promise<PublicSiteMessageRecord | null> {
  if (!Number.isFinite(id) || id <= 0) return null;
  const pageSize = 50;
  let page = 1;
  for (;;) {
    const res = await fetchPublicSiteMessages({ page, pageSize });
    const hit = res.data.find((m) => m.id === id);
    if (hit) return hit;
    const { total } = res.meta;
    if (page * pageSize >= total || res.data.length === 0) return null;
    page += 1;
  }
}

/**
 * 提交站点留言 POST `/public/site_messages`
 */
export async function postPublicSiteMessage(
  body: PostPublicSiteMessageBody
): Promise<PostPublicSiteMessageResponse> {
  const api = useApiFetch();
  return api<PostPublicSiteMessageResponse>("/public/site_messages", {
    method: "POST",
    body,
  });
}

/**
 * 分页获取文章下公开留言 GET `/public/article/{id}/comments`
 * 响应体与站点留言列表一致：`{ data: [...], meta: { page, pageSize, total } }`
 */
export async function fetchPublicArticleComments(
  articleId: string | number,
  query: PublicSiteMessagesQuery
): Promise<PublicSiteMessagesListResponse> {
  const api = useApiFetch();
  const raw = await api<unknown>(`/public/article/${articleId}/comments`, {
    method: "GET",
    query: {
      page: query.page,
      pageSize: query.pageSize,
    },
  });
  return normalizePublicSiteMessagesList(raw, query);
}

/**
 * 提交文章留言 POST `/public/article/{id}/comments`
 */
export async function postPublicArticleComment(
  articleId: string | number,
  body: PostPublicSiteMessageBody
): Promise<PostPublicSiteMessageResponse> {
  const api = useApiFetch();
  return api<PostPublicSiteMessageResponse>(`/public/article/${articleId}/comments`, {
    method: "POST",
    body,
  });
}

// --- 留言板页面表单封装（camelCase → 后端 snake_case） ---

export interface PostGuestMessageBody {
  userName: string;
  email: string;
  emailCode: string;
  content: string;
}

export type GetGuestMessageGraphicCaptchaResult =
  | { ok: true; imageUrl: string; captchaToken: string }
  | { ok: false; reason: "load_failed" };

export async function getGuestMessageGraphicCaptcha(): Promise<GetGuestMessageGraphicCaptchaResult> {
  try {
    const res = await fetchCaptcha();
    const captchaToken = String(res.data.captcha_id ?? "").trim();
    const imageUrl = String(res.data.image_base64 ?? "").trim();
    if (!captchaToken || !imageUrl) {
      return { ok: false, reason: "load_failed" };
    }
    return { ok: true, imageUrl, captchaToken };
  } catch {
    return { ok: false, reason: "load_failed" };
  }
}

export interface SendGuestMessageEmailCodeBody {
  email: string;
  captchaToken: string;
  captchaCode: string;
  /** 默认 `guestbook`（站点留言）；文章留言传 `comment` */
  purpose?: EmailSendCodePurpose;
}

export type SendGuestMessageEmailCodeResult =
  | { ok: true }
  | {
      ok: false;
      reason: "invalid_captcha" | "too_frequent";
    };

function statusFromError(e: unknown): number | undefined {
  if (!e || typeof e !== "object") return undefined;
  const o = e as Record<string, unknown>;
  const s = o.statusCode ?? o.status;
  return typeof s === "number" ? s : undefined;
}

function classifySendCodeError(e: unknown): SendGuestMessageEmailCodeResult | null {
  const status = statusFromError(e);
  if (status === 429) {
    return { ok: false, reason: "too_frequent" };
  }

  const msg =
    e instanceof Error ? e.message : typeof e === "string" ? e : "";
  const lower = msg.toLowerCase();
  if (
    lower.includes("captcha") ||
    lower.includes("图形") ||
    (lower.includes("验证") &&
      (lower.includes("错") || lower.includes("无效") || lower.includes("失败")))
  ) {
    return { ok: false, reason: "invalid_captcha" };
  }
  if (
    lower.includes("frequent") ||
    lower.includes("频繁") ||
    lower.includes("too many")
  ) {
    return { ok: false, reason: "too_frequent" };
  }
  return null;
}

export async function sendGuestMessageEmailCode(
  body: SendGuestMessageEmailCodeBody
): Promise<SendGuestMessageEmailCodeResult> {
  try {
    await sendPublicEmailCode({
      captcha: body.captchaCode,
      captcha_id: body.captchaToken,
      email: body.email,
      purpose: body.purpose ?? "guestbook",
    });
    return { ok: true };
  } catch (e: unknown) {
    const classified = classifySendCodeError(e);
    if (classified) return classified;
    throw e;
  }
}

export type PostGuestMessageResult =
  | { ok: true; id?: number }
  | { ok: false; reason: "not_implemented" };

export async function postGuestMessage(
  body: PostGuestMessageBody
): Promise<PostGuestMessageResult> {
  const res = await postPublicSiteMessage({
    content: body.content,
    email: body.email,
    email_code: body.emailCode,
    guest_name: body.userName,
  });
  return { ok: true, id: res.id };
}
