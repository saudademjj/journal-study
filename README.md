# Journal-Study (全栈学习日志管理系统 / Journal-Study Full-stack Learning Journal System)

采用 Next.js 16 架构开发的知识沉淀与学习历程记录系统，侧重于结构化笔记的存储与可视化展示。

A knowledge accumulation and learning journey recording system developed with Next.js 16 architecture, focusing on structured note storage and visualization.

## 核心特性 / Core Features

- 结构化笔记治理: 支持精细化的分类与多维标签管理。 / Fine-grained classification and multi-dimensional tag management.
- 异步 API 驱动: 后端逻辑由 Hono 驱动，确保轻量且快速的响应。 / Backend powered by Hono for lightweight and fast responses.
- 现代渲染策略: 充分利用 Next.js 16 Server Components。 / Full utilization of Next.js 16 Server Components.

## 技术栈 / Technical Stack

- 前端 / Frontend: Next.js 16, React 19, shadcn/ui.
- 后端 / Backend: Hono (部署于 Edge 运行时 / Deployed on Edge), PostgreSQL.
- 持久层 / Persistence: Drizzle ORM.
- 样式 / Styling: Tailwind CSS 4.

## 项目结构 / Project Structure

```text
journal-study/
├── src/
│   ├── app/            # 页面容器与服务端端点 / Pages and server endpoints
│   ├── components/     # 笔记编辑器与列表看板 / Note editor and list dashboard
│   ├── db/             # Drizzle Schema 与数据访问层 / Drizzle schema and DAL
│   └── lib/            # Markdown 处理与共享逻辑 / Markdown and shared logic
└── drizzle.config.ts   # 数据库迁移治理配置 / DB migration management
```

## 快速开始 / Quick Start

```bash
npm install
# 配置环境变量 DATABASE_URL
npx drizzle-kit push
npm run dev
```

## 许可证 / License
本项目采用 [MIT License](LICENSE) 协议。 / This project is licensed under the MIT License.
