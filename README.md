<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Journal-Study (全栈学习日志管理系统)

![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square&logo=drizzle)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css)

本项目是一个专为知识沉淀与技术思考设计的全栈学习日志应用。系统采用现代化的 Next.js 16 架构，核心侧重于结构化笔记的分类治理、多维标签检索以及极简的交互体验，旨在协助开发者构建私有化的数字化思维仓库。

## 技术深度剖析

### 1. 现代化渲染策略
充分利用 **React 19** 与 **Next.js 16** 的服务端组件 (RSC) 特性。通过将非交互逻辑移至服务端执行，系统极大地减小了客户端 JavaScript 的 Bundle 体积，显著提升了内容的渲染速度。

### 2. 边缘计算导向的 API 架构
后端路由基于 **Hono** 框架构建，支持部署在边缘运行时（Edge Runtime）。相较于传统 Node.js 运行时，边缘部署确保了全球范围内极低的 API 响应时延。

### 3. 强类型的数据治理
- **Drizzle ORM**: 实现从数据库 Schema 到前端 TypeScript 类型的端到端推导，消除了数据流动过程中的类型不一致风险。
- **结构化元数据**: 每条日志支持关联无限层级的标签，底层通过 PostgreSQL 的关联查询优化实现毫秒级的数据索引与回溯。

## 项目工程矩阵

```text
journal-study/
├── src/
│   ├── app/            # Next.js 16 App Router 页面、全局布局与端点实现
│   ├── components/     # UI 原子组件、Markdown 编辑器模块与统计看板
│   ├── db/             # Drizzle Schema 标准定义、索引策略与连接配置
│   ├── lib/            # Markdown 渲染引擎、共享工具类与逻辑校验
│   └── hooks/          # 自定义数据拉取与业务逻辑封装 Hook
├── public/             # 静态化视觉资产与全局配置
├── drizzle.config.ts   # 数据库迁移治理配置文件
└── package.json        # 项目元数据与依赖契约清单
```

## 许可证
本项目采用 MIT License 协议。
