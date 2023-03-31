const CoinLimit = require('../models/coinLimit.model')

class coinLimitService {

    async findAll() {
        return await CoinLimit.find()
    }

    async update(data) {
        if(data.name === 'upper limit' || data.name === 'lower limit'){
            const newDate = await CoinLimit.findOneAndUpdate({name: data.name}, {data})
            return newDate
        }
        throw ApiError.badRequest()

    }

}

module.exports = new coinLimitService()
