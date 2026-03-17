<div align="center">
  <a href="./README.md">简体中文</a> | <a href="./README_en.md">English</a>
</div>

# Journal-Study (全栈学习日志管理系统 / Full-stack Learning Journal System)

![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square&logo=drizzle)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

本项目是一个专为技术沉淀与知识管理设计的全栈应用。系统采用现代化的 Next.js 16 架构，核心侧重于结构化笔记的治理、多维标签检索以及高性能的异步数据交互，为开发者提供一个纯净、高效的数字化思维仓库。

This project is a full-stack application specifically designed for knowledge accumulation and technical management. Utilizing the modern Next.js 16 architecture, it focuses on structured note governance, multi-dimensional tag retrieval, and high-performance asynchronous data interaction, providing developers with a clean and efficient digital thought repository.

## 技术深度剖析 / Technical Deep Dive

### 1. 现代化渲染与执行环境 (Modern Rendering & Runtime)
- **Next.js 16 (App Router)**: 充分利用 React 19 的服务端组件 (RSC) 特性，将非交互逻辑移至服务端，极大地减小了客户端 Bundle 体积。 / Leveraging RSC to minimize client-side bundle size.
- **Edge-Ready API**: 后端路由基于 Hono 框架构建，支持部署在边缘运行时（Edge Runtime），确保了全球范围内的低延迟访问体验。 / Hono-based APIs for globally low-latency edge deployment.

### 2. 结构化笔记治理 (Structured Note Governance)
- **多维元数据**: 每条日志均支持关联自定义分类与无限层级的标签，底层通过 PostgreSQL 的关联查询实现毫秒级索引。 / Custom categories and multi-level tags with PostgreSQL optimized indexing.
- **全链路类型安全**: 通过 Drizzle ORM 将数据库 Schema 直接映射为前端 TypeScript 类型，消除数据流动过程中的不确定性。 / End-to-end type safety via Drizzle ORM mapping.

## 项目工程矩阵 / Project Matrix

| 维度 / Category | 技术实现 / Tech Stack | 核心逻辑 / Key Logic |
| :--- | :--- | :--- |
| **视图层** | React 19 / Tailwind 4 | 响应式看板与原子化 UI 体系。 / Responsive dashboards. |
| **路由层** | Next.js App Router | 服务端优先的页面导航策略。 / Server-first navigation. |
| **服务层** | Hono / Drizzle | 轻量化 RESTful API 与类型安全查询。 / Lightweight API. |
| **存储层** | PostgreSQL | 关系型数据建模与全文检索预留。 / Relational modeling. |

## 目录结构图 / Project Structure

```text
journal-study/
├── src/
│   ├── app/            # Next.js 16 核心路由、全局布局与 API 端点实现 / Routes & API
│   ├── components/     # UI 原子组件、编辑器模块与统计图表 / UI & Editor
│   ├── db/             # Drizzle Schema 标准定义、索引策略与连接配置 / Schema & Config
│   ├── lib/            # Markdown 渲染引擎、共享工具类与校验逻辑 / Markdown & Utils
│   └── hooks/          # 业务逻辑封装与数据拉取自定义 Hook / Custom hooks
├── public/             # 静态资产与文档 / Static assets
├── drizzle.config.ts   # 数据库迁移治理配置文件 / Migration config
└── package.json        # 项目元数据与依赖清单 / Meta & Dependencies
```

## 许可证 / License
本项目遵循 MIT License 协议。 / Licensed under the MIT License.
