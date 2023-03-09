const ApiError = require('../errors/api.error')
const calculatingService = require('../services/calculating.service')

class calculatingController {
    async getTop(req, res, next){
        try {
            const top = await calculatingService.getTop()

            return res.json(top)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new calculatingController()