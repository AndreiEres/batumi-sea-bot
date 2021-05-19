const dotenv = require('dotenv')
const path = require('path')

const envPath = path.join(__dirname, '../.env')
const loadEnv = () => dotenv.config({ path: envPath })

module.exports = loadEnv
