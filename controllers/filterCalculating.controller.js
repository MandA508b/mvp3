const ApiError = require('../errors/api.error')
const filterCalculatingService = require('../services/filterCalculating.service')

class filterCalculatingController {

    async create(req, res, next) {
        try {
            const filterCalculating = await filterCalculatingService.create()
            return res.json(filterCalculating)
        } catch (e) {
            next()//e
        }
    }

    async find(req, res, next) {
        try {
            const filterCalculating = await filterCalculatingService.find()

            return res.json(filterCalculating)
        } catch (e) {
            next()//e
        }
    }

    async redact(req, res, next) {
        try {
            const {filterCalculatingData} = req.body
            const filterCalculating = await filterCalculatingService.redact(filterCalculatingData)

            return res.json(filterCalculating)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new filterCalculatingController()