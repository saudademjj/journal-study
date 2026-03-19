<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Journal-Study -- 全栈学习日志与笔记系统

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwind-css)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square)

一个基于 Next.js 16 和 Hono 构建的全栈学习日志系统，用于记录学习进度、整理笔记和管理学习资料。项目采用最新的 React 19 并发特性与 App Router 架构，搭配 Drizzle ORM 实现类型安全的数据库操作，是一个兼具实用性与技术前沿性的全栈练手项目。

## 核心功能

### 学习日志管理
- 创建、编辑和删除学习日志条目
- 按日期和主题分类组织笔记
- 支持富文本内容记录
- 日志时间线浏览与回顾

### 笔记整理
- 结构化的笔记分类体系
- 标签系统便于快速检索
- 学习资料的关联与引用

### 数据持久化
- PostgreSQL 关系型存储，保障数据安全
- Drizzle ORM 提供完整的迁移管理
- 种子数据支持快速初始化演示环境

## 技术架构

### 前端

- Next.js 16（App Router）：最新版本的服务端渲染与路由框架
- React 19.2：并发渲染、Server Components、最新 Hooks API
- TypeScript 5：全链路静态类型检查
- Tailwind CSS 4：下一代原子化 CSS 引擎
- shadcn/ui：基于 Radix UI 的组件库（class-variance-authority + tailwind-merge）
- Lucide React：轻量一致的图标库

### 后端 API

- Hono 4.10：超轻量 Web 框架，挂载于 Next.js Route Handlers
- Drizzle ORM 0.44：类型安全的 SQL 查询构建器与迁移工具
- PostgreSQL：通过 `postgres` 驱动直连

### 开发工具链

- ESLint：代码质量检查
- Drizzle Kit：数据库迁移生成与管理
- tsx：TypeScript 脚本直接执行
- dotenv：环境变量管理

## 目录结构

```text
journal-study/
├── src/
│   ├── app/                # Next.js App Router 入口
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页
│   │   └── globals.css     # 全局样式
│   ├── db/                 # 数据库连接与 Schema 定义
│   └── favicon.ico         # 站点图标
├── app/                    # 扩展应用目录
├── components/             # 可复用 UI 组件
│   └── ui/                 # shadcn/ui 基础组件
├── lib/                    # 工具函数与辅助模块
├── public/                 # 静态资源
├── drizzle.config.ts       # Drizzle ORM 配置
├── next.config.ts          # Next.js 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 依赖与脚本
```

## 快速开始

### 环境要求

- Node.js >= 20
- PostgreSQL >= 16

### 1. 克隆与安装

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
npm install
```

### 2. 环境配置

创建 `.env.local` 文件并配置数据库连接：

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/journal
```

### 3. 数据库初始化

```bash
# 生成迁移文件（如有 schema 变更）
npx drizzle-kit generate

# 执行迁移
npx drizzle-kit migrate
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 即可使用。

### 可用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run start    # 启动生产服务器
npm run lint     # 代码检查
```

## 数据库管理

项目使用 Drizzle Kit 管理数据库 Schema 与迁移：

```bash
# 根据 Schema 变更生成 SQL 迁移
npx drizzle-kit generate

# 应用迁移到数据库
npx drizzle-kit migrate

# 启动可视化数据库管理界面
npx drizzle-kit studio
```

Schema 定义位于 `src/db/` 目录，使用 Drizzle ORM 的 TypeScript DSL 编写，确保数据库结构与应用代码的类型一致性。

## 项目特点

本项目作为全栈技术实践，涵盖了以下工程要点：

- 前后端同构：Next.js App Router 统一前后端代码组织
- 类型贯穿：从数据库 Schema 到 API 响应到前端渲染，TypeScript 类型一路贯通
- 现代 CSS：Tailwind CSS 4 的新编译引擎带来更快的构建速度
- 轻量 API：Hono 框架替代传统 Express，体积更小、性能更优
- ORM 新范式：Drizzle 相比 Prisma 提供更接近 SQL 的查询体验，同时保持类型安全

## 许可证

MIT License
