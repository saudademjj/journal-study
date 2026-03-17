# Journal-Study (全栈学习日志与知识管理系统)

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://react.dev/)
[![Hono](https://img.shields.io/badge/Hono-4.10-orange?logo=hono)](https://hono.dev/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle)](https://orm.drizzle.team/)

Journal-Study 是一款专为开发者与终身学习者定制的全栈日志管理系统。项目采用现代化的 Next.js 16 与 Hono 架构，旨在通过系统化的记录方式协助用户构建结构化的知识体系与学习路径。

## 核心设计

- 结构化笔记治理: 支持精细化的分类与多维标签管理，提升长周期学习内容的检索效率。
- 轻量化高性能 API: 后端逻辑基于 Hono 框架构建，确保微秒级的路由分发与高吞吐的数据吞吐。
- 端到端类型安全: 结合 Drizzle ORM 与 PostgreSQL (via postgres.js)，实现从物理层到视图层的全量类型推导。
- 专注型交互体验: 采用原子化的组件架构设计，基于 shadcn/ui 打造无干扰、极简主义的学习记录环境。
- 现代渲染策略: 深度应用 Next.js 16 服务端组件 (RSC) 与 React 19 并发特性，最小化客户端 JavaScript 载荷。

## 技术栈

### 交互层 (Interaction)
- 框架: Next.js 16 (App Router)
- 核心渲染: React 19
- UI 体系: Radix UI + shadcn/ui
- 样式标准: Tailwind CSS 4
- 图标集: Lucide React

### 服务层 (Service)
- API 协议: Hono
- 持久层驱动: postgres.js
- 持久层框架: Drizzle ORM
- 执行环境: Node.js / Bun

## 项目结构

```text
.
├── src
│   ├── app             # 现代化的页面容器与 API 定义
│   ├── components      # 原子级 UI 组件库
│   ├── db              # Schema 标准化定义与连接池
│   └── lib             # 共享工具类与底层库
├── public              # 静态化资产目录
├── drizzle.config.ts   # 数据库迁移配置
└── package.json
```

## 快速启动

### 1. 基础配置
安装项目核心依赖：
```bash
npm install
```

### 2. 数据库配置
在根目录配置 PostgreSQL 连接串：
```env
DATABASE_URL=postgresql://user:password@localhost:5432/journal_study
```

### 3. 数据模式迁移
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 4. 启动开发环境
```bash
npm run dev
```

## 未来路线
- 集成具有实时渲染与数学公式支持的 Markdown 核心编辑器。
- 引入学习热力图与周报系统，量化呈现学习活跃度。
- 实现自动化的知识图谱关联，发现不同记录间的潜在逻辑联系。

## 许可证
本项目采用 MIT License 协议。

---
Developed by [saudademjj](https://github.com/saudademjj)
