const currentHour = () => new Date().getUTCHours()
const ruNormalize = (float) => `${float}`.replace('.', ',')

module.exports = {
  currentHour,
  ruNormalize,
}
