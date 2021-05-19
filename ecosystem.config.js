module.exports = {
  apps: [
    {
      name: 'batumi-sea-bot',
      script: './src/index.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
    },
  ],
}
