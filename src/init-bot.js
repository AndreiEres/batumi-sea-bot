const { Telegraf } = require('telegraf')
const DataValues = require('./data-values')
const Handlers = require('./handlers')

const initBot = () => {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY)
  const values = new DataValues()
  const handlers = new Handlers(values)

  bot.start((ctx) => ctx.reply(handlers.start))
  bot.help((ctx) => ctx.reply(handlers.help))

  bot.on('message', (ctx) => ctx.reply(handlers.forecast))
  bot.on('sticker', (ctx) => ctx.reply(handlers.sticker))

  bot.launch()
}

module.exports = initBot
