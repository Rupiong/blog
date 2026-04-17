import { useApiFetch } from "@/utils/request";

/** 列表项 / 详情共用 */
export interface ArticleListItem {
  id: string | number;
  title: string;
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
}

export interface ArticleDetail extends ArticleListItem {
  content?: string;
  tags?: string[];
  author?: string;
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

export interface ArticleListResult {
  list: ArticleListItem[];
  total: number;
}

function mapArticleItem(raw: unknown): ArticleListItem {
  if (!raw || typeof raw !== "object") {
    return { id: "", title: "" };
  }
  const r = raw as Record<string, unknown>;
  return {
    id: r.id as string | number,
    title: String(r.title ?? ""),
    summary: (r.summary ?? r.description ?? r.excerpt) as string | undefined,
    createdAt: (r.createdAt ?? r.created_at ?? r.createTime) as
      | string
      | undefined,
    updatedAt: (r.updatedAt ?? r.updated_at) as string | undefined,
    author: (r.author ?? r.authorName ?? r.author_name) as string | undefined,
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

/**
 * 兼容多种常见分页 / 包装结构（无法访问内网 Swagger 时按常见约定解析）。
 */
export function normalizePublicArticlesList(data: unknown): ArticleListResult {
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
    const total = Number(
      o.total ?? o.totalCount ?? o.count ?? arr.length
    ) || arr.length;
    return { list: arr.map(mapArticleItem), total };
  }

  return { list: [], total: 0 };
}

function mapArticleDetail(raw: unknown): ArticleDetail {
  const inner = unwrapPayload(raw);
  const base = mapArticleItem(inner);
  if (!inner || typeof inner !== "object") {
    return base;
  }
  const r = inner as Record<string, unknown>;
  const tags = r.tags;
  return {
    ...base,
    content: (r.content ?? r.body ?? r.html ?? r.markdown) as string | undefined,
    tags: Array.isArray(tags)
      ? (tags as unknown[]).map((t) => String(t))
      : undefined,
    author: (r.author ?? r.authorName ?? r.author_name) as string | undefined,
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
