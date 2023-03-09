const ApiError = require('../errors/api.error')
const coinDirectionService = require('../services/coinDirection.service')

class coinDirectionController {

    async create(req, res, next) {
        try {
            const coinDirection = await coinDirectionService.create()
            return res.json(coinDirection)
        } catch (e) {
            next()//e
        }
    }

    async find(req, res, next) {
        try {
            const coinDirection = await coinDirectionService.find()

            return res.json(coinDirection)
        } catch (e) {
            next()//e
        }
    }

    async redact(req, res, next) {
        try {
            const {coinDirectionData} = req.body
            const coinDirection = await coinDirectionService.redact(coinDirectionData)

            return res.json(coinDirection)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new coinDirectionController()