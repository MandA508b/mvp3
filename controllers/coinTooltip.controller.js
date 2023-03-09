const ApiError = require('../errors/api.error')
const coinTooltipService = require('../services/coinTooltip.service')

class coinTooltipController {
    async create(req, res, next) {
        try {
            const coinTooltip = await coinTooltipService.create()
            return res.json(coinTooltip)
        } catch (e) {
            next()//e
        }
    }

    async find(req, res, next) {
        try {
            const coinTooltip = await coinTooltipService.find()

            return res.json(coinTooltip)
        } catch (e) {
            next()//e
        }
    }

    async redact(req, res, next) {
        try {
            const {coinTooltipData} = req.body

            const coinTooltip = await coinTooltipService.redact(coinTooltipData)

            return res.json(coinTooltip)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new coinTooltipController()