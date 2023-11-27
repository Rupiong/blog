[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

<h1>
Copyman Blog
</h1>


## 简介

Copyman Blog 是优秀的响应式布局个人博客网站。使用了最新的`vue3`,`nuxt3.0`,`TypeScript`,`pinia`,`tailwindcss`,`vueuse`,`vue-i18n`等主流技术开发，响应式布局个人博客解决方案，也可用于学习参考。

## 相关链接

[vue3.0 | 主体框架](https://cn.vuejs.org/)

[vite4.0 | 打包工具](https://vitejs.cn/)

[TypeScript | 主体语言](https://www.tslang.cn/index.html)

[pinia | 全局状态管理](https://pinia.web3doc.top/)

[tailwindcss | css 原子库](https://www.tailwindcss.cn/)

[vueuse | 方法库](https://www.vueusejs.com/)

[vue-i18n | 多语言](https://vue-i18n.intlify.dev/)

## 特性

- **最新技术栈**：使用 Vue3/vite4 等前端前沿技术开发

- **TypeScript**: 应用程序级 JavaScript 的语言

- **权限** 内置完善的动态路由权限生成方案

- **组件** 二次封装了多个常用的组件

### 使用 Gitpod

在 Gitpod（适用于 GitHub 的免费在线开发环境）中打开项目，并立即开始编码.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/anncwb/vue-vben-admin)

## 文档

[文档地址](https://vvbin.cn/doc-next/)

## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境

- [Vite](https://vitejs.dev/) - 熟悉 vite 特性

- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法

- [TypeScript](https://www.typescriptlang.org/) - 熟悉`TypeScript`基本语法

- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法

- [Avala](https://alova.js.org) - 熟悉 avala 轻量级请求策略库

- [Tailwind Css](https://www.tailwindcss.cn/docs/installation) - 熟悉 tailwind css 样式库

## 安装使用

- 获取项目代码

```bash
git clone git@codeup.aliyun.com:644e87919a47238f23eb57e9/Cross-web.git
```

- 安装依赖

```bash
cd Cross-web

yarn install

```

- 运行

```bash
yarn dev
```

- 打包

```bash
yarn build
```

## 更新日志

[CHANGELOG](./CHANGELOG.zh_CN.md)

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
