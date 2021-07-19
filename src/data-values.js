const data = require('./data')
const { currentHour } = require('./utils')

const SG_SOURCE = 'sg'
const ERROR_VALUE = { value: '#$%' }

class DataValues {
  get airTemperature() {
    return this.chooseValue(this.currentData.airTemperature)
  }

  get windSpeed() {
    return this.chooseValue(this.currentData.windSpeed)
  }

  get waterTemperature() {
    return this.chooseValue(this.currentData.waterTemperature)
  }

  get waveHeight() {
    return this.chooseValue(this.currentData.waveHeight)
  }

  get currentData() {
    return data.hours[currentHour()] || {}
  }

  chooseValue(values = []) {
    const value =
      values.find((value) => value.source == SG_SOURCE) ||
      values[0] ||
      ERROR_VALUE

    return value.value
  }
}

module.exports = DataValues
