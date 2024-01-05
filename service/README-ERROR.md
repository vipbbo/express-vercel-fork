## 通过tsup.config.ts配置文件进行build 在Vercel构建部署失败最终解决方案为：
- 在本地通过命令`pnpm build` 进行构建完成后，将build上传到git上；并且配置好vercel.json文件即可：

- vercel.json文件内容：
```json
{
  "builds": [
    {
      "src": "build/app.mjs",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "build/app.mjs"
    }
  ]
}

```