const CoinLimit = require('../models/coinLimit.model')

class coinLimitService {

    async findAll() {
        return await CoinLimit.find()
    }

    async update(limitName, data) {
        if((limitName === 'upper limit' || limitName === 'lower limit') && data.name === undefined){
            const newDate = await CoinLimit.findOneAndUpdate({name: limitName}, {data})
            return newDate
        }
        throw ApiError.badRequest()

    }

}

module.exports = new coinLimitService()
