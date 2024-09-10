const { ruNormalize } = require('./utils')

const STICKER_ANSWERS = ['❤️', '👍', '😁']

class Handlers {
  constructor(values) {
    this.values = values
  }

  get start() {
    return `Привет!\nВ следующий раз просто напишите мне любое сообщение.`
  }

  get help() {
    return 'Напишите мне любое сообщение, и я расскажу, что сегодня с морем в Батуми.'
  }

  get forecast() {
    const airTemperature = ruNormalize(this.values.airTemperature)
    const windSpeed = ruNormalize(this.values.windSpeed)
    const waterTemperature = ruNormalize(this.values.waterTemperature)
    const waveHeight = ruNormalize(this.values.waveHeight)

    return `Воздух ${airTemperature}\u00a0°C.
Ветер ${windSpeed}\u00a0м/c.

Вода ${waterTemperature}\u00a0°C.
Волна ${waveHeight}\u00a0м.`
  }

  get sticker() {
    const random = Math.round(Math.random() * STICKER_ANSWERS.lenght)

    return STICKER_ANSWERS[random]
  }
}

module.exports = Handlers
