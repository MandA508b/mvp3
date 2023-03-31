const ApiError = require('../errors/api.error')
const coinLimitService = require('../services/coinLimit.service')

class coinLimitController {

    async findAll(req, res, next) {
        try {
            const coinLimits = await coinLimitService.findAll()

            return res.json(coinLimits)
        } catch (e) {
            next()//e
        }
    }

    async update(req, res, next){
        try {
            const {limitName, data} = req.body
            if(limitName === undefined){
                return next(ApiError.badRequest())
            }
            const newData = await coinLimitService.update(limitName, data)

            return res.json(newData)
        }catch (e){
            next()//e
        }
    }

}

module.exports = new coinLimitController()