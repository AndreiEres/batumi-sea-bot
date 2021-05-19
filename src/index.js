const loadEnv = require('./load-env')
loadEnv()

const fetchData = require('./fetch-data')
fetchData()

const dailyJob = require('./daily-job')
dailyJob(fetchData)

const initBot = require('./init-bot')
initBot()
