/** PM2：先 `npm run build`，再 `pm2 start ecosystem.config.js` */
module.exports = {
  apps: [
    {
      name: "small_blog",
      cwd: __dirname,
      script: "./server/index.mjs",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: process.env.PORT || "3000",
      },
      /** 每天凌晨 2 点重启（cron：分 时 日 月 星期；遵循服务器本地时区） */
      cron_restart: "0 2 * * *",
    },
  ],
};
