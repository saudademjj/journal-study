# Journal Study

一个用于练手的全栈最小样例：`Next.js + Hono + Drizzle + PostgreSQL`。

## 项目现状

当前仓库提供了一个基础雏形：

- 首页：`/`（简单欢迎页）
- API：`/api/hello`
- 用户接口：
  - `GET /api/users` 查询用户列表
  - `POST /api/users` 新增用户

## 技术栈

- 前端：Next.js 16、React 19、TypeScript
- API：Hono（挂载在 Next Route Handler）
- 数据库：PostgreSQL
- ORM：Drizzle ORM + Drizzle Kit

## 环境要求

- Node.js `>= 20`
- npm `>= 10`
- PostgreSQL `>= 14`

## 快速开始

### 1. 克隆并安装依赖

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
npm install
```

### 2. 配置环境变量

创建 `.env`：

```env
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
```

### 3. 初始化数据库

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 4. 启动开发服务

```bash
npm run dev
```

访问：`http://localhost:3000`

## API 示例

### 获取用户

```bash
curl http://localhost:3000/api/users
```

### 新增用户

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

## 项目结构

```text
journal-study/
├── app/                         # Next App Router 页面
├── src/app/api/[[...route]]/    # Hono API 入口
├── src/db/                      # Drizzle 连接与 schema
├── drizzle.config.ts
├── package.json
└── README.md
```

## 后续可扩展方向

- 增加认证（JWT/Cookie Session）
- 增加表单校验与统一错误处理
- 增加迁移脚本与 seed 数据
- 引入测试（API + E2E）

## 许可证

当前仓库未显式提供 License 文件。
