# Copyman Blog

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

基于 Nuxt 3 构建的个人博客前端项目，聚焦内容展示体验、页面性能与可维护的工程结构。

## 在线体验与仓库地址

- 站点体验地址：[http://blog.copyman.top](http://blog.copyman.top)
- GitHub 仓库地址：[https://github.com/Rupiong/blog](https://github.com/Rupiong/blog)

## 项目简介

Copyman Blog 是一个响应式个人博客项目，采用 Vue 3 + Nuxt 3 技术栈开发。  
项目适合用于个人博客搭建，也适合前端学习者参考 Nuxt 项目结构、页面开发与工程配置实践。

## 技术栈

- [Nuxt 3](https://nuxt.com/)：应用框架（SSR/SSG/同构能力）
- [Vue 3](https://cn.vuejs.org/)：前端 UI 框架
- [TypeScript](https://www.typescriptlang.org/)：类型系统支持
- [Pinia](https://pinia.vuejs.org/)：状态管理
- [Tailwind CSS](https://tailwindcss.com/)：原子化样式方案
- [VueUse](https://vueuse.org/)：组合式工具库

## 主要特性

- 响应式布局，兼顾桌面端与移动端阅读体验
- 基于 Nuxt 的页面组织与路由能力，便于扩展博客模块
- TypeScript 支持，提升代码可读性与可维护性
- 组件化开发，便于复用与持续迭代

## 环境要求

- [Node.js](https://nodejs.org/) 18 及以上（建议使用 LTS 版本）
- [pnpm](https://pnpm.io/) 8 及以上
- [Git](https://git-scm.com/)

## 本地开发

### 1) 克隆项目

```bash
git clone https://github.com/Rupiong/blog.git
cd blog
```

### 2) 安装依赖

```bash
pnpm install
```

### 3) 启动开发环境

```bash
pnpm dev
```

默认启动后可访问本地地址（通常为 `http://localhost:3000`）。

## 构建与预览

```bash
pnpm build
pnpm preview
```

## 常用脚本

- `pnpm dev`：启动本地开发服务
- `pnpm build`：构建生产版本
- `pnpm preview`：本地预览生产构建结果

## 目录结构（示例）

```text
.
├── src/
│   ├── assets/          # 静态资源
│   ├── middleware/      # 路由中间件
│   ├── pages/           # 页面路由
│   ├── plugins/         # 插件
│   └── app.vue          # 应用入口组件
├── nuxt.config.ts       # Nuxt 配置
└── app.config.ts        # 应用配置
```

## 贡献指南

欢迎通过 Issue 或 Pull Request 参与改进：

1. Fork 本仓库并创建新分支
2. 完成开发与自测
3. 提交 PR，简要说明变更内容与原因

提交信息建议遵循 Conventional Commits，例如：

- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档变更
- `refactor`: 代码重构
- `chore`: 构建或工程调整

## License

[MIT](./LICENSE)
