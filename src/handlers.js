const { ruNormalize } = require('./utils')

const STICKER_ANSWERS = ['❤️', '👍', '😁']

class Handlers {
  constructor(values) {
    this.values = values
  }

  get start() {
    return `${this.answer}\n\nВ следующий раз просто напишите мне любое сообщение.`
  }

  get help() {
    return 'Напишите мне любое сообщение, и я расскажу, что сегодня с морем в Батуми.'
  }

  get forecast() {
    const airTemperature = ruNormalize(this.values.airTemperature)
    const windSpeed = ruNormalize(this.values.windSpeed)
    const waterTemperature = ruNormalize(this.values.waterTemperature)
    const waveHeight = ruNormalize(this.values.waveHeight)

    return `Привет!
Температура воздуха ${airTemperature}\u00a0°C.
Скорость ветра ${windSpeed}\u00a0м/c.
Температура воды ${waterTemperature}\u00a0°C.
Высота волны ${waveHeight}\u00a0м.`
  }

  get sticker() {
    const random = Math.round(Math.random() * STICKER_ANSWERS.lenght)

    return STICKER_ANSWERS[random]
  }
}

module.exports = Handlers
