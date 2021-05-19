const fetch = require('node-fetch')

const LAT = 41.64228
const LNG = 41.63392
const PARAMS = 'airTemperature,windSpeed,waterTemperature,waveHeight'
const DATA_URL = `https://api.stormglass.io/v1/weather/point?lat=${LAT}&lng=${LNG}&params=${PARAMS}`
const AUTH_HEADERS = { Authorization: process.env.STORMGLASS_API_KEY }

const fetchData = async () => {
  try {
    const res = await fetch(DATA_URL, { headers: AUTH_HEADERS })
    if (!res.ok) throw Error(res.statusText)

    global.data = (await res.json()).hours
  } catch (error) {
    console.error(error)
    global.data = []
  }
}

module.exports = fetchData
