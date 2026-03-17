# Journal-Study (全栈学习日志系统)

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://react.dev/)
[![Hono](https://img.shields.io/badge/Hono-4.10-orange?logo=hono)](https://hono.dev/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle)](https://orm.drizzle.team/)

Journal-Study 是一款面向学习记录的全栈管理系统。项目采用 Next.js 16 与 Hono 架构，重点实现学习进度的分类化展示与持久化管理。

## 核心功能

- 结构化记录: 支持对学习内容进行分类、添加标签，方便后期复盘。
- 异步 API: 后端逻辑由 Hono 驱动，提供了快速的消息分发能力。
- 全量类型安全: 利用 Drizzle ORM 和 TypeScript，实现从数据库到视图层的类型推导。
- 交互设计: 采用 shadcn/ui 组件库，构建简洁的记录环境。

## 技术栈

- 框架: Next.js 16 (App Router), React 19
- 后端: Hono, postgres.js
- 持久层: Drizzle ORM
- 工具: Tailwind CSS 4, Lucide React

## 项目结构

```text
.
├── src
│   ├── app             # Next.js 路由与 API
│   ├── components      # 可复用 UI 组件
│   ├── db              # 数据库 Schema 定义
│   └── lib             # 基础库与工具
├── drizzle.config.ts   # 迁移配置
└── package.json
```

## 快速启动

### 1. 配置
`npm install` 之后，在根目录配置数据库：
```env
DATABASE_URL=postgresql://user:password@localhost:5432/journal_study
```

### 2. 初始化
`npx drizzle-kit generate` 之后 `npx drizzle-kit migrate`。

### 3. 运行
`npm run dev`

## 许可证
MIT License
