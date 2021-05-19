const { CronJob } = require('cron')

const dailyJob = (cb) => new CronJob('1 0 * * *', cb, null, true, 'UTC')

module.exports = dailyJob
