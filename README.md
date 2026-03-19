<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Journal Study

一个基于现代全栈技术构建的学习项目，用于实践和探索 Next.js 16 + Hono + Drizzle ORM + PostgreSQL 的开发模式。

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwind-css)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square)

---

## 关于本项目

这是一个技术学习与实践项目，不是一个完整的应用产品。项目的核心目的是通过动手搭建一个全栈应用骨架，深入理解以下技术的协作方式：

- 使用 Next.js App Router 组织前端页面与路由
- 使用 Hono 构建轻量级 API 服务
- 使用 Drizzle ORM 实现类型安全的数据库操作
- 使用 shadcn/ui 搭建可复用的组件体系
- 使用 Tailwind CSS 4 进行样式开发

当前项目处于起步阶段，包含基础的项目结构、数据库连接、API 端点示例和 UI 组件示例。

---

## 项目结构

```text
journal-study/
├── app/                            # 根布局与首页
│   ├── layout.tsx                  # 根布局（Geist 字体）
│   ├── page.tsx                    # 首页
│   └── globals.css                 # 全局样式（OKLch 主题色）
├── src/
│   ├── app/
│   │   └── api/[[...route]]/
│   │       └── route.ts            # Hono API 路由
│   └── db/
│       ├── index.ts                # Drizzle ORM 数据库连接
│       └── schema.ts               # 数据表定义
├── components/
│   └── ui/
│       └── button.tsx              # Button 组件（shadcn/ui）
├── lib/
│   └── utils.ts                    # 工具函数
├── drizzle.config.ts               # Drizzle ORM 配置
├── next.config.ts                  # Next.js 配置
├── components.json                 # shadcn/ui 配置
├── tsconfig.json                   # TypeScript 配置
├── postcss.config.mjs              # PostCSS 配置
└── package.json                    # 依赖与脚本
```

---

## 技术栈

### 前端

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 16.0.5 | React 全栈框架，使用 App Router |
| React | 19.2.0 | UI 库，支持并发特性 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 4 | 原子化 CSS 框架 |
| shadcn/ui | - | 基于 Radix UI 的组件库（New York 风格） |
| Lucide React | 0.555.0 | 图标库 |

### 后端

| 技术 | 版本 | 说明 |
|------|------|------|
| Hono | 4.10.7 | 轻量级 Web 框架 |
| Drizzle ORM | 0.44.7 | 类型安全的 ORM |
| PostgreSQL | 16+ | 关系型数据库 |
| postgres | 3.4.7 | PostgreSQL 驱动 |

### 开发工具

| 工具 | 说明 |
|------|------|
| ESLint 9 | 代码规范检查 |
| Drizzle Kit | 数据库迁移管理 |
| tsx | TypeScript 执行工具 |
| dotenv | 环境变量管理 |

---

## 快速开始

### 环境要求

- Node.js >= 20
- PostgreSQL >= 16

### 安装与运行

1. 克隆项目

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

在项目根目录创建 `.env.local` 文件：

```env
DATABASE_URL=postgresql://用户名:密码@localhost:5432/数据库名
```

4. 执行数据库迁移

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

---

## API 端点

项目使用 Hono 框架，通过 Next.js 的 Catch-all 路由挂载 API 服务：

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/hello` | 测试端点，返回问候消息 |
| GET | `/api/users` | 获取所有用户 |
| POST | `/api/users` | 创建用户（参数：name, email） |

---

## 数据库

### 数据模型

当前定义了 `users` 表：

| 字段 | 类型 | 约束 |
|------|------|------|
| id | serial | 主键 |
| name | text | 必填 |
| email | text | 必填，唯一 |
| createdAt | timestamp | 默认当前时间 |

### 数据库管理

```bash
npx drizzle-kit generate   # 根据 Schema 变更生成迁移
npx drizzle-kit migrate    # 应用迁移到数据库
npx drizzle-kit studio     # 启动可视化管理界面
```

Schema 定义位于 `src/db/` 目录，使用 Drizzle ORM 的 TypeScript DSL 编写，确保数据库结构与应用代码的类型一致性。

---

## 可用脚本

```bash
npm run dev       # 启动开发服务器
npm run build     # 构建生产版本
npm run start     # 启动生产服务器
npm run lint      # 运行代码检查
```

---

## 项目特点

本项目作为全栈技术实践，涵盖了以下工程要点：

- 前后端同构 -- Next.js App Router 统一前后端代码组织
- 类型贯穿 -- 从数据库 Schema 到 API 响应到前端渲染，TypeScript 类型一路贯通
- 现代 CSS -- Tailwind CSS 4 的新编译引擎带来更快的构建速度
- 轻量 API -- Hono 框架替代传统 Express，体积更小、性能更优
- ORM 新范式 -- Drizzle 相比 Prisma 提供更接近 SQL 的查询体验，同时保持类型安全

---

## 学习参考

- [Next.js 文档](https://nextjs.org/docs)
- [Hono 文档](https://hono.dev)
- [Drizzle ORM 文档](https://orm.drizzle.team)
- [shadcn/ui 文档](https://ui.shadcn.com)
- [Tailwind CSS 文档](https://tailwindcss.com)

---

## License

[MIT](LICENSE)
