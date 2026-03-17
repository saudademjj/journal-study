<div align="center">
  <p>A Full-Stack Minimal Boilerplate / 全栈最小可用样例练手项目</p>
  <p>
    <a href="#english">English</a> •
    <a href="#简体中文">简体中文</a>
  </p>
</div>

---

<h2 id="english">🇬🇧 English</h2>

# Journal Study

**Journal Study** is a minimal, yet robust full-stack boilerplate designed as a modern learning and prototyping playground. It integrates a cutting-edge web development stack featuring `Next.js`, `Hono`, `Drizzle ORM`, and `PostgreSQL`.

### 🚀 Project Overview

Currently, the repository provides a foundational skeleton to build upon:
- **Frontend Page**: `/` (A simple welcome interface)
- **API Endpoints**: Built with Hono and mounted on Next.js Route Handlers.
  - `GET /api/hello`
  - `GET /api/users` (Fetch user list)
  - `POST /api/users` (Create a new user)

### 🛠 Technology Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **API Framework**: Hono
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM + Drizzle Kit

### ⚙️ Quick Start

1. **Clone & Install**:
   ```bash
   git clone https://github.com/saudademjj/journal-study.git
   cd journal-study
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file at the root:
   ```env
   DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
   ```

3. **Database Initialization**:
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

### 💡 Future Expansion Directions

- Integrate authentication (JWT/Cookie Sessions).
- Add robust form validation (e.g., Zod) and global error handling.
- Implement database seed scripts and advanced testing (API + E2E).

---

<h2 id="简体中文">🇨🇳 简体中文</h2>

# Journal Study

**Journal Study** 是一个极简且结构清晰的全栈练手样例项目。它聚合了当今前沿的 Web 开发技术栈，包括 `Next.js`、`Hono`、`Drizzle ORM` 和 `PostgreSQL`，非常适合用于新技术调研与快速原型开发。

### 🚀 项目现状

当前仓库提供了一个基础的开发骨架，包含以下部分：
- **前端页面**：`/`（简单的欢迎落地页）
- **API 接口**：使用 Hono 构建，并挂载于 Next.js 的 Route Handler。
  - `GET /api/hello`
  - `GET /api/users`（查询用户列表）
  - `POST /api/users`（新增用户接口）

### 🛠 技术栈地图

- **前端框架**：Next.js 16 (App Router), React 19, TypeScript
- **API 框架**：Hono
- **数据库引擎**：PostgreSQL
- **持久层框架**：Drizzle ORM 配合 Drizzle Kit

### ⚙️ 快速开始

1. **克隆与依赖安装**：
   ```bash
   git clone https://github.com/saudademjj/journal-study.git
   cd journal-study
   npm install
   ```

2. **配置环境变量**：
   在项目根目录创建 `.env` 文件：
   ```env
   DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
   ```

3. **数据库模式初始化**：
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

4. **启动开发服务器**：
   ```bash
   npm run dev
   ```
   浏览器访问：`http://localhost:3000`。

### 💡 后续演进方向思考

- 增加身份认证系统（JWT 或 Cookie 方案）。
- 引入表单校验（如 Zod）及统一的错误捕获层。
- 编写 Seed 数据植入脚本，以及开展完整的 API 与端到端（E2E）测试。