import { useApiFetch } from "@/utils/request";

/** GET `/public/articles` 响应中的分类 */
export interface ArticleCategory {
  icon: string;
  id: number;
  name: string;
  sort: number;
}

/** GET `/public/categories` 单条分类 */
export interface PublicCategoryRecord {
  created_at: number;
  icon: string;
  id: number;
  name: string;
  sort: number;
  updated_at: number;
}

/** GET `/public/articles` 响应中的作者 */
export interface ArticleUser {
  email: string;
  id: number;
  name: string;
}

/** 接口单条文章（列表与详情字段一致部分） */
export interface PublicArticleRecord {
  categories: ArticleCategory[];
  content: string;
  cover_url: string;
  created_at: number;
  id: number;
  status: number;
  title: string;
  updated_at: number;
  user: ArticleUser;
}

/** GET `/public/articles` 分页元信息 */
export interface PublicArticlesListMeta {
  page: number;
  pageSize: number;
  total: number;
}

/** GET `/public/articles` 原始响应体 */
export interface PublicArticlesListResponse {
  data: PublicArticleRecord[];
  meta: PublicArticlesListMeta;
}

/** 列表项：与接口字段对齐，并带列表用摘要 */
export interface ArticleListItem extends PublicArticleRecord {
  /** 由 content 截取的纯文本摘要，供首页列表展示 */
  summary?: string;
}

export interface ArticleDetail extends ArticleListItem {
  tags?: string[];
}

/**
 * GET `/public/articles` 查询参数（与 Swagger「公开分页获取已上架文章」一致）
 */
export interface PublicArticlesQuery {
  /** 当前页码（从 1 起），必填 */
  page: number;
  /** 每页条数（1～100），必填 */
  pageSize: number;
  /** 文章 ID（可选） */
  id?: number;
  /** 标题关键词（可选，模糊匹配；1～100 字符） */
  title?: string;
  /** 分类筛选：逗号分隔 ID，如 1,2,3 */
  category_ids?: string;
}

/**
 * GET `/public/articles/by_year` 查询参数（按公历年份获取该年文章列表）
 */
export interface PublicArticlesByYearQuery {
  /** 公历年份（1970～2100） */
  year: number;
  /** 分类筛选：逗号分隔 ID，如 1,2,3 */
  category_ids?: string;
}

/** GET `/public/articles/by_year` 响应中单一年份分组 */
export interface PublicArticlesByYearGroup {
  year: number;
  data: ArticleListItem[];
}

export interface ArticleListResult {
  list: ArticleListItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

function mapPublicCategory(raw: unknown): PublicCategoryRecord {
  const o = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  return {
    created_at: Number(o.created_at) || 0,
    icon: String(o.icon ?? ""),
    id: Number(o.id) || 0,
    name: String(o.name ?? ""),
    sort: Number(o.sort) || 0,
    updated_at: Number(o.updated_at) || 0,
  };
}

/**
 * 兼容数组或 `{ data: [] }` 等包装结构。
 */
export function normalizePublicCategories(data: unknown): PublicCategoryRecord[] {
  const root = unwrapPayload(data);
  if (Array.isArray(root)) {
    return root.map(mapPublicCategory).sort((a, b) => a.sort - b.sort || a.id - b.id);
  }
  return [];
}

function asCategoryArray(raw: unknown): ArticleCategory[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((c) => {
    const o = c && typeof c === "object" ? (c as Record<string, unknown>) : {};
    return {
      icon: String(o.icon ?? ""),
      id: Number(o.id) || 0,
      name: String(o.name ?? ""),
      sort: Number(o.sort) || 0,
    };
  });
}

function asUser(raw: unknown): ArticleUser {
  const o = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  return {
    email: String(o.email ?? ""),
    id: Number(o.id) || 0,
    name: String(o.name ?? ""),
  };
}

function excerptFromContent(content: string, maxLen = 160): string {
  const t = content.replace(/\s+/g, " ").trim();
  if (!t.length) return "";
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen).trimEnd()}…`;
}

function mapArticleItem(raw: unknown): ArticleListItem {
  if (!raw || typeof raw !== "object") {
    return {
      id: 0,
      title: "",
      content: "",
      cover_url: "",
      categories: [],
      created_at: 0,
      updated_at: 0,
      status: 0,
      user: { email: "", id: 0, name: "" },
    };
  }
  const r = raw as Record<string, unknown>;
  const content = String(r.content ?? "");
  const summaryExplicit = r.summary ?? r.description ?? r.excerpt;
  const summary =
    typeof summaryExplicit === "string" && summaryExplicit.trim() !== ""
      ? summaryExplicit
      : excerptFromContent(content);

  return {
    id: Number(r.id) || 0,
    title: String(r.title ?? ""),
    content,
    cover_url: String(r.cover_url ?? ""),
    categories: asCategoryArray(r.categories),
    created_at: Number(r.created_at) || 0,
    updated_at: Number(r.updated_at) || 0,
    status: Number(r.status) || 0,
    user: asUser(r.user),
    summary: summary || undefined,
  };
}

function unwrapPayload(data: unknown): unknown {
  if (data == null || typeof data !== "object") return data;
  const o = data as Record<string, unknown>;
  if ("data" in o && o.data != null && !("id" in o)) {
    return o.data;
  }
  return data;
}

function parseListMeta(meta: unknown): Partial<PublicArticlesListMeta> {
  if (meta == null || typeof meta !== "object") return {};
  const m = meta as Record<string, unknown>;
  return {
    page: m.page != null ? Number(m.page) : undefined,
    pageSize: m.pageSize != null ? Number(m.pageSize) : undefined,
    total: m.total != null ? Number(m.total) : undefined,
  };
}

/**
 * 兼容多种常见分页 / 包装结构；优先解析 `{ data, meta }`（与公开文章列表接口一致）。
 */
export function normalizePublicArticlesList(data: unknown): ArticleListResult {
  if (data != null && typeof data === "object") {
    const root = data as Record<string, unknown>;
    if (Array.isArray(root.data) && root.meta != null) {
      const meta = parseListMeta(root.meta);
      const list = root.data.map(mapArticleItem);
      const total = meta.total ?? list.length;
      return {
        list,
        total,
        page: meta.page,
        pageSize: meta.pageSize,
      };
    }
  }

  const root = unwrapPayload(data);
  if (root == null) return { list: [], total: 0 };

  if (Array.isArray(root)) {
    return {
      list: root.map(mapArticleItem),
      total: root.length,
    };
  }

  if (typeof root === "object") {
    const o = root as Record<string, unknown>;
    const listRaw =
      o.items ??
      o.list ??
      o.records ??
      o.rows ??
      (Array.isArray(o.data) ? o.data : undefined);
    const arr = Array.isArray(listRaw) ? listRaw : [];
    const nestedMeta =
      o.meta != null && typeof o.meta === "object"
        ? parseListMeta(o.meta)
        : {};
    const total =
      nestedMeta.total ??
      (Number(o.total ?? o.totalCount ?? o.count ?? arr.length) || arr.length);
    return {
      list: arr.map(mapArticleItem),
      total,
      page: nestedMeta.page,
      pageSize: nestedMeta.pageSize,
    };
  }

  return { list: [], total: 0 };
}

const MIN_ARTICLE_YEAR = 1970;
const MAX_ARTICLE_YEAR = 2100;

function mapByYearGroup(raw: unknown): PublicArticlesByYearGroup | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const year = Number(o.year);
  if (!Number.isFinite(year) || year < MIN_ARTICLE_YEAR || year > MAX_ARTICLE_YEAR) {
    return null;
  }
  const dataRaw = o.data;
  const list = Array.isArray(dataRaw) ? dataRaw.map(mapArticleItem) : [];
  return { year, data: list };
}

/**
 * 解析 GET `/public/articles/by_year` 响应：`[{ year, data: [...] }, ...]`
 * 兼容外层 `{ data: [...] }` 包装。
 */
export function normalizePublicArticlesByYear(data: unknown): PublicArticlesByYearGroup[] {
  const unwrapped = unwrapPayload(data);
  if (!Array.isArray(unwrapped)) return [];
  const groups = unwrapped
    .map(mapByYearGroup)
    .filter((g): g is PublicArticlesByYearGroup => g != null);
  groups.sort((a, b) => b.year - a.year);
  return groups;
}

function buildPublicArticlesByYearQuery(
  params: PublicArticlesByYearQuery
): Record<string, string | number> {
  const y = Math.trunc(params.year);
  if (y < MIN_ARTICLE_YEAR || y > MAX_ARTICLE_YEAR) {
    throw new RangeError(`year must be between ${MIN_ARTICLE_YEAR} and ${MAX_ARTICLE_YEAR}`);
  }
  const q: Record<string, string | number> = { year: y };
  if (params.category_ids != null && params.category_ids !== "") {
    q.category_ids = params.category_ids;
  }
  return q;
}

/**
 * 按年份获取公开文章 GET `/public/articles/by_year`（无需登录）
 */
export async function fetchPublicArticlesByYear(
  params: PublicArticlesByYearQuery
): Promise<PublicArticlesByYearGroup[]> {
  const api = useApiFetch();
  const raw = await api<unknown>("/public/articles/by_year", {
    method: "GET",
    query: buildPublicArticlesByYearQuery(params),
  });
  return normalizePublicArticlesByYear(raw);
}

function mapArticleDetail(raw: unknown): ArticleDetail {
  const inner = unwrapPayload(raw);
  const base = mapArticleItem(inner);
  if (!inner || typeof inner !== "object") {
    return base;
  }
  const r = inner as Record<string, unknown>;
  const tagsRaw = r.tags;
  const tagNames = Array.isArray(tagsRaw)
    ? (tagsRaw as unknown[]).map((t) => String(t))
    : base.categories?.length
      ? base.categories.map((c) => c.name)
      : undefined;
  const content =
    String(r.content ?? r.body ?? r.html ?? r.markdown ?? base.content ?? "") ||
    base.content;
  return {
    ...base,
    content,
    tags: tagNames?.length ? tagNames : undefined,
  };
}

function buildPublicArticlesQuery(
  params: PublicArticlesQuery
): Record<string, string | number> {
  const q: Record<string, string | number> = {
    page: params.page,
    pageSize: params.pageSize,
  };
  if (params.id != null) q.id = params.id;
  if (params.title != null && params.title !== "") q.title = params.title;
  if (params.category_ids != null && params.category_ids !== "")
    q.category_ids = params.category_ids;
  return q;
}

/**
 * 公开分类列表 GET `/public/categories`（无需登录）
 */
export async function fetchPublicCategories(): Promise<PublicCategoryRecord[]> {
  const api = useApiFetch();
  const raw = await api<unknown>("/public/categories", {
    method: "GET",
  });
  return normalizePublicCategories(raw);
}

/**
 * 公开文章列表 GET `/public/articles`（无需登录；仅 status=1；见 Swagger「公开分页获取已上架文章（H5）」）
 */
export async function fetchPublicArticleList(
  params: PublicArticlesQuery
): Promise<ArticleListResult> {
  const api = useApiFetch();
  const raw = await api<unknown>("/public/articles", {
    method: "GET",
    query: buildPublicArticlesQuery(params),
  });
  return normalizePublicArticlesList(raw);
}

/**
 * 公开文章详情 GET `/public/article/{id}`（无需登录；仅 status=1 已上架时返回，否则 400）
 */
export async function fetchPublicArticleDetail(
  id: string | number
): Promise<ArticleDetail> {
  const api = useApiFetch();
  const raw = await api<unknown>(`/public/article/${id}`);
  return mapArticleDetail(raw);
}
