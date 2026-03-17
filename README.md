<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Journal-Study (全栈学习日志管理系统)

![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square&logo=drizzle)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

本项目是一个专为知识建模与技术思考设计的全栈日志应用。系统采用 **Next.js 16 (App Router)** 配合 **Hono** 边缘 API 架构，旨在通过极简的交互界面与结构化的元数据管理，协助开发者构建具备高检索效率的个人知识库。

## 🏛️ 技术架构深度剖析

### 1. RSC 与并发渲染实践 (Modern Frontend)
- **React Server Components (RSC)**: 充分利用 Next.js 16 的 RSC 特性。Markdown 的解析与初步渲染在服务端完成，仅将轻量级的 HTML 传输至客户端，大幅减少了浏览器的 CPU 密集型任务。
- **并发模式交互**: 结合 React 19 的并发特性，确保在切换大规模日志列表时，界面的交互依然保持即时响应。

### 2. 边缘优先的 API 治理 (Edge-First API)
- **Hono @ Edge**: 后端逻辑托管在边缘运行时环境。通过 Hono 框架实现的极简控制器，确保了全球范围内的 API 响应时延处于毫秒级。
- **类型安全推导**: 通过 Drizzle ORM 构建的 Schema，实现了从 SQL 查询到前端 View Model 的全量类型共享，杜绝了字段命名的运行时错误。

### 3. 结构化知识建模 (Knowledge Modeling)
- **多维标签系统**: 每一条日志均支持关联自定义分类与扁平化标签。
- **存储层优化**: 利用 PostgreSQL 的 JSONB 字段或关联表存储元数据，并配置 Gin 索引（预留）以支持未来的全文检索扩展。

## 📂 项目结构规范

```text
journal-study/
├── src/
│   ├── app/            # Next.js 16 核心路由、全局视图模板与 API 处理逻辑
│   ├── components/
│   │   ├── editor/     # 高性能 Markdown 编辑器组件，支持实时渲染
│   │   ├── dashboard/  # 统计看板：包含日志密度热力图与分类概览
│   │   └── ui/         # 基于原子化设计的组件库实现
│   ├── db/             # Drizzle Schema 定义、连接池配置与数据迁移逻辑
│   ├── lib/            # Markdown 渲染引擎、共享工具函数与校验逻辑
│   └── hooks/          # 自定义数据拉取与 UI 状态管理 Hook
├── public/             # 静态资产与文档说明
├── drizzle.config.ts   # 数据库迁移治理配置文件
└── package.json        # 项目依赖、构建指令与元数据
```

## 🚀 开发者快速入门

### 1. 环境准备
- Node.js >= 20
- PostgreSQL >= 16

### 2. 部署流程
```bash
# 安装全量依赖
npm install

# 配置数据库连接串
# 在 .env 中填入 DATABASE_URL=postgresql://...

# 模式推送与同步
npx drizzle-kit push

# 启动开发服务器
npm run dev
```

## 许可证
本项目采用 MIT License 协议。
