[English](README_en.md) | 简体中文

# Journal Study


`Journal Study` 是一个轻量级的全栈练手项目，用来验证 `Next.js + Hono + Drizzle + PostgreSQL` 这一组合在单仓库中的协作方式。它适合用作最小可运行样例、个人实验仓库或后续功能扩展的起点。

## 当前包含的内容

- 首页欢迎页
- `Hono` API 路由入口
- `GET /api/hello`
- 用户接口：
  - `GET /api/users`
  - `POST /api/users`

## 技术栈

- 前端：`Next.js 16`、`React 19`、`TypeScript`
- API：`Hono`
- 数据库：`PostgreSQL`
- ORM：`Drizzle ORM` + `Drizzle Kit`

## 环境要求

- Node.js `>= 20`
- npm `>= 10`
- PostgreSQL `>= 14`

## 快速开始

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
npm install
```

创建 `.env`：

```env
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
```

初始化数据库并启动开发环境：

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
npm run dev
```

默认访问地址：`http://localhost:3000`

## API 示例

获取用户：

```bash
curl http://localhost:3000/api/users
```

新增用户：

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

## 项目结构

```text
journal-study/
├── app/
├── src/app/api/[[...route]]/
├── src/db/
├── drizzle.config.ts
├── package.json
├── README.md
└── README.en.md
```

## 适合扩展的方向

- 登录认证与会话管理
- 表单校验与统一错误处理
- Seed 数据和测试基建
- API 文档与 E2E 测试

## 许可证

本仓库采用 MIT License，详见 [LICENSE](./LICENSE)。
