import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { db } from '@/db';
import { users } from '@/db/schema';

// 这里的 'nodejs' 指示 Next.js 使用 Node 运行时 (如果你要用 Edge 也可以改)
export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
  });
});

app.get('/users', async (c) => {
  // 使用 Drizzle 查询数据库
  const allUsers = await db.select().from(users);
  return c.json(allUsers);
});

app.post('/users', async (c) => {
    const body = await c.req.json();
    // 简单的插入示例
    const newUser = await db.insert(users).values({
        name: body.name,
        email: body.email
    }).returning();

    return c.json(newUser);
})

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);